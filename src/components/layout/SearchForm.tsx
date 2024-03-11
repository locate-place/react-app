import React, {useEffect, useState} from "react";

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

/* Search form properties. */
type SearchFormProps = {
    routePathDefault: string,
    queryDefault: string|null,
    query: Query
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

    useEffect(() => {
        setQueryString(queryDefault ?? '');
    }, [queryDefault]);

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
     * Saves input changes.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event
     */
    const handleQueryStringChange = (event: React.SyntheticEvent<HTMLInputElement>) =>
    {
        setQueryString(event.currentTarget.value);
    };

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
                action={routePath}
                onSubmit={onSubmit}
            >
                <div
                    className="d-flex justify-content-center w-100 mb-4 search-group-shadow"
                >
                    <div
                        className="input-group responsive-group w-100"
                        style={{backgroundColor: "transparent"}}
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
                            value={queryString ? queryString : ''}
                            onChange={handleQueryStringChange}
                        />

                        <input type="hidden" name={nameParameterLanguage} value={query.getFilterConfig().getLanguage(true)} />
                        <input type="hidden" name={nameParameterCountry} value={query.getFilterConfig().getCountry(true)} />
                        <input type="hidden" name={nameParameterNextPlaces} value="1" />
                        {
                            currentPosition ?
                                <input type="hidden" name={nameParameterCurrentPosition} value={currentPosition} /> :
                                <></>
                        }

                        <div className="link-button-wrapper">
                            <LinkV2
                                to={query.getFilterConfig().getLinkLocationCurrent()}
                                useCurrentPosition={true}
                                queryString={queryString}
                                setQuery={true}
                                title={t('TEXT_TITLE_SEARCH_BY_CURRENT_POSITION')}
                                className="btn btn-outline-primary button-own-position button-own-position-search"
                                type="button"
                                textLoader={t('TEXT_WORD_DETERMINE_CURRENT_LOCATION')}
                                textInformation={t('TEXT_WORD_DETERMINED_CURRENT_LOCATION')}
                            >
                                <CursorFill size={sizeIcon.H3} />
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
