import React, {KeyboardEventHandler, useEffect, useState} from "react";

/* Import translation libraries. */
import {useTranslation} from "react-i18next";

/* Add configurations */
import {sizeIcon} from "../../config/Config";
import {colorCurrentPosition, colorCurrentPositionDisabled} from "../../config/Colors";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {GlobeAmericas, CursorFill, HouseFill, House} from "react-bootstrap-icons";

/* Import classes. */
import {Query} from "../../classes/Query";

/* Import components. */
import LinkV2 from "./LinkV2";
import {
    nameParameterCountry,
    nameParameterCurrentPosition,
    nameParameterLanguage,
    nameParameterNextPlaces
} from "../../config/NameParameter";
import Flag from "./Flag";

/* Search form properties. */
type SearchFormProps = {
    routePathDefault: string,
    queryDefault: string|null,
    query: Query
}

interface AutoCompleteLocation {
    id: number;
    name: string;
    country: string|null;
}

interface AutoCompleteFeature {
    id: number;
    name: string;
}

interface AutoCompleteData {
    locations: AutoCompleteLocation[];
    "feature-classes": AutoCompleteFeature[];
    "feature-codes": AutoCompleteFeature[];
}

interface AutoCompleteApi {
    data: AutoCompleteData;
}

/**
 * This renders the search form.
 */
const SearchForm = ({routePathDefault, queryDefault, query}: SearchFormProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* State variables */
    const [queryString, setQueryString] = useState<string>(queryDefault ?? '');
    const [routePath, setRoutePath] = useState<string>(routePathDefault);
    const [locations, setLocations] = useState<AutoCompleteLocation[]>([]);
    const [featureClasses, setFeatureClasses] = useState<AutoCompleteFeature[]>([]);
    const [featureCodes, setFeatureCodes] = useState<AutoCompleteFeature[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    useEffect(() =>
    {
        setQueryString(queryDefault ?? queryString);
    }, [queryDefault]);

    useEffect(() =>
    {
        setQueryString(queryString);

        if (!queryString) {
            setLocations([]);
            setFeatureClasses([]);
            setFeatureCodes([]);
            return;
        }

        if (queryString.length < 3) {
            setLocations([]);
            setFeatureClasses([]);
            setFeatureCodes([]);
            return;
        }

        if (!isFocus) {
            setLocations([]);
            setFeatureClasses([]);
            setFeatureCodes([]);
            return;
        }

        const fetchData = async () =>
        {
            setIsLoading(true);
            try {
                const response = await fetch(`https://www.location-api.localhost/api/v1/autocomplete.json?q=${queryString}`);
                const data: AutoCompleteApi = await response.json();
                setLocations(data.data.locations);
                setFeatureClasses(data.data["feature-classes"]);
                setFeatureCodes(data.data["feature-codes"]);
            } catch (error) {
                console.error('Error when retrieving the auto-complete data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        const delayDebounce = setTimeout(() => fetchData(), 500);

        return () => clearTimeout(delayDebounce);

    }, [queryString]);

    /**
     * Handles the search "form submit".
     *
     * @param e {React.SyntheticEvent<HTMLFormElement>}
     */
    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void =>
    {
        if (queryString === '') {
            console.warn('No query value given.');
            e.preventDefault();
            return;
        }

        setRoutePath(query.getFilterConfig().getLinkQuery(queryString));
    }

    /**
     * Handles the key events.
     *
     * @param e
     */
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    {
        if (e.key === 'ArrowDown') {
            setHighlightedIndex((prevIndex) => (prevIndex < locations.length - 1 ? prevIndex + 1 : prevIndex));
        } else if (e.key === 'ArrowUp') {
            setHighlightedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
            setQueryString(locations[highlightedIndex].name);
            setLocations([]);
        }
    };

    /**
     * Saves input changes.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event
     */
    const handleQueryStringChange = (event: React.SyntheticEvent<HTMLInputElement>) =>
    {
        setQueryString(event.currentTarget.value);
    };

    /**
     * Sets on focus.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event
     */
    const handleOnFocus = (event: React.SyntheticEvent<HTMLInputElement>) =>
    {
        setIsFocus(true);
    };

    /**
     * Disable on focus.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event
     */
    const handleOnBlur = (event: React.SyntheticEvent<HTMLInputElement>) =>
    {
        setTimeout(() => {
            setIsFocus(false);
        }, 300);
    };

    const onClick = (value: string) =>
    {
        setQueryString(value);
        setLocations([]);
    }

    const currentPosition = query.getFilterConfig().getCurrentPosition(true);
    const titleProperty = query.getFilterConfig().hasCurrentPosition() ? {title: t('TEXT_TITLE_CURRENT_POSITION_IS_USED')} : {};

    return (
        <>
            <h3 {...titleProperty}><GlobeAmericas size={sizeIcon.H3}/> {t('TEXT_HEADER_LOCATION_SEARCH')} {
                query.getFilterConfig().hasCurrentPosition() ? <sup style={{color: colorCurrentPosition}} className="shadow-svg-blue">
                    <small><small><small><HouseFill size={sizeIcon.ButtonSmall}/></small></small></small>
                </sup> : <sup style={{color: colorCurrentPositionDisabled}} className="shadow-svg">
                    <small><small><small><House size={sizeIcon.ButtonSmall}/></small></small></small>
                </sup>
            }</h3>

            <form
                id="searchForm"
                className="search-form"
                autoComplete="false"
                action={routePath}
                onSubmit={onSubmit}
            >
                <div
                    className="d-flex justify-content-center w-100 mb-4 search-group-shadow"
                >
                    <div
                        className="input-group responsive-group w-100"
                        style={{backgroundColor: "transparent", position: "relative"}}
                    >
                        <input
                            name="q"
                            id="query"
                            type="text"
                            style={{borderColor: '#6c757d'}}
                            className="form-control shadow-none"
                            placeholder="52°31′14.322″N, 13°24′35.2044″E"
                            aria-label={t('TEXT_HEADER_LOCATION_SEARCH')}
                            aria-describedby="location-send"
                            autoComplete="false"
                            value={queryString ? queryString : ''}
                            onChange={handleQueryStringChange}
                            onInput={handleQueryStringChange}
                            onKeyDown={handleKeyDown}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                        />

                        {isLoading && <div className="input-loader search-group-shadow">{t('TEXT_WORD_LOAD')} ...</div> }

                        {
                            isFocus && locations.length > 0 && <div className="autocomplete search-group-shadow py-2 px-3">
                                <ul>
                                    {locations.map((item: AutoCompleteLocation, index: number) => (
                                        <li
                                            className="py-1 px-2"
                                            key={item.id}
                                            onClick={() => {
                                                onClick(item.name);
                                            }}
                                            style={{backgroundColor: highlightedIndex === index ? 'lightgray' : 'transparent'}}
                                        >
                                            {
                                                item.country &&
                                                <>
                                                    <Flag country={item.country} size={1.0} />&nbsp;&nbsp;
                                                </>
                                            }{item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }

                        <input type="hidden" name={nameParameterLanguage}
                               value={query.getFilterConfig().getLanguage(true)}/>
                        <input type="hidden" name={nameParameterCountry}
                               value={query.getFilterConfig().getCountry(true)}/>
                        <input type="hidden" name={nameParameterNextPlaces} value="1"/>
                        {
                            currentPosition ?
                                <input type="hidden" name={nameParameterCurrentPosition} value={currentPosition}/> :
                                <></>
                        }

                        <div className="link-button-wrapper">
                            <LinkV2
                                to={query.getFilterConfig().getLinkLocationCurrent()}
                                useCurrentPosition={true}
                                showAdoptionText={true}
                                queryString={queryString}
                                setQuery={true}
                                title={t('TEXT_TITLE_SEARCH_BY_CURRENT_POSITION')}
                                className="btn btn-outline-primary button-own-position button-own-position-search"
                                type="button"
                                textLoader={t('TEXT_WORD_DETERMINE_CURRENT_LOCATION')}
                                textInformation={t('TEXT_WORD_DETERMINED_CURRENT_LOCATION')}
                            >
                                <CursorFill size={sizeIcon.H3}/>
                            </LinkV2>

                            <button
                                className="btn btn-primary button-search"
                                title={t('TEXT_TITLE_START_SEARCH')}
                                type="submit"
                                id="location-send"
                                data-mdb-ripple-color="dark"
                            >{t('TEXT_ACTION_SEARCH')}</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SearchForm;
