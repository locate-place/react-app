import React, {SyntheticEvent, useEffect, useRef, useState} from "react";

/* Import translation libraries. */
import {useTranslation} from "react-i18next";

/* Add configurations */
import {sizeIcon} from "../../config/Config";
import {colorCurrentPosition, colorCurrentPositionDisabled} from "../../config/Colors";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    GlobeAmericas,
    CursorFill,
    GeoAltFill,
    GeoAlt,
    ArrowBarRight,
    SignTurnRightFill,
    Fingerprint, FunnelFill, Trash3Fill, ImageAlt, Joystick, ListOl
} from "react-bootstrap-icons";

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
import {getCountryArray, translateCountryCode} from "../../translations/Country";
import {getFeatureArray, translateFeatureCode} from "../../translations/Feature";

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

interface QueryData {
    query: {
        raw: string;
        parsed: {
            type: string;
            search: string[];
            "feature-classes"?: {
                code: string;
                translated: string;
            }[];
            "feature-codes"?: {
                code: string;
                translated: string;
            }[];
        }
    };
}

interface AutoCompleteApi {
    data: AutoCompleteData;
    given: QueryData;
}

/**
 * This renders the search form.
 */
const SearchForm = ({routePathDefault, queryDefault, query}: SearchFormProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const formRef = useRef<HTMLFormElement>(null);

    /* State variables */
    const [queryString, setQueryString] = useState<string>(queryDefault ?? '');
    const [routePath, setRoutePath] = useState<string>(routePathDefault);
    const [locations, setLocations] = useState<AutoCompleteLocation[]>([]);
    const [featureClasses, setFeatureClasses] = useState<AutoCompleteFeature[]>([]);
    const [featureCodes, setFeatureCodes] = useState<AutoCompleteFeature[]>([]);
    const [additionalQuery, setAdditionalQuery] = useState<string|null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showAutocompleteBox, setShowAutocompleteBox] = useState(false);
    const [isApiLoadMode, setIsApiLoadMode] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const [isCountryChoiceVisible, setIsCountryChoiceVisible] = useState(false);
    const [isDistanceChoiceVisible, setIsDistanceChoiceVisible] = useState(false);
    const [isFeatureChoiceVisible, setIsFeatureChoiceVisible] = useState(false);
    const [isLimitChoiceVisible, setIsLimitChoiceVisible] = useState(false);

    const [country, setCountry] = useState<string|null>(null);
    const [distance, setDistance] = useState<number|null>(null);
    const [feature, setFeature] = useState<string|null>(null);
    const [limit, setLimit] = useState<number|null>(null);

    const menuRefCountry = useRef<HTMLSpanElement>(null);
    const menuRefDistance = useRef<HTMLSpanElement>(null);
    const menuRefFeature = useRef<HTMLSpanElement>(null);
    const menuRefLimit = useRef<HTMLSpanElement>(null);

    useEffect(() =>
    {
        setQueryString(queryDefault ?? queryString);
    }, [queryDefault]);

    useEffect(() =>
    {
        setQueryString(parseQueryString(queryString));

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

        if (!showAutocompleteBox) {
            setLocations([]);
            setFeatureClasses([]);
            setFeatureCodes([]);
            return;
        }

        if (!isApiLoadMode) {
            return;
        }

        const fetchData = async () =>
        {
            setIsLoading(true);
            try {
                const response = await fetch(process.env.REACT_APP_LOCATION_API_URL + '/api/v1/autocomplete.json?q='+queryString);
                const data: AutoCompleteApi = await response.json();
                setLocations(data.data.locations);
                setFeatureClasses(data.data["feature-classes"]);
                setFeatureCodes(data.data["feature-codes"]);

                const featureCodes = data.given.query.parsed["feature-codes"] ?? null;

                if (featureCodes !== null) {
                    const featureCodesString = featureCodes
                        .map((fc) => fc.code)
                        .join('|');

                    setAdditionalQuery(featureCodesString);
                } else {
                    setAdditionalQuery(null);
                }
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

        let queryReal = document.getElementById("query-real");

        if (queryReal instanceof HTMLInputElement) {
            queryReal.value = getQueryString(queryString);
        }
    }

    const handleClickOutside = (event: MouseEvent) =>
    {
        const isClickOutsideCountry = menuRefCountry.current && !menuRefCountry.current.contains(event.target as Node);
        const isClickOutsideDistance = menuRefDistance.current && !menuRefDistance.current.contains(event.target as Node);
        const isClickOutsideFeature = menuRefFeature.current && !menuRefFeature.current.contains(event.target as Node);
        const isClickOutsideLimit = menuRefLimit.current && !menuRefLimit.current.contains(event.target as Node);

        if (isClickOutsideCountry && isClickOutsideDistance && isClickOutsideFeature && isClickOutsideLimit) {
            window.setTimeout(() => {
                disableMenus();
            }, 250);
        }
    };

    /**
     * Handles the key events.
     *
     * @param e
     */
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    {
        if (e.key === 'ArrowDown') {
            if (locations.length <= 0) {
                return;
            }
            let highlightedIndexNew = highlightedIndex < locations.length - 1 ? highlightedIndex + 1 : highlightedIndex;
            setHighlightedIndex(highlightedIndexNew);
            setIsApiLoadMode(false);
            setQuery(locations[highlightedIndexNew]?.name ?? '', locations[highlightedIndexNew]?.country ?? '');
            e.preventDefault();
        } else if (e.key === 'ArrowUp') {
            if (locations.length <= 0) {
                return;
            }
            let highlightedIndexNew = highlightedIndex > 0 ? highlightedIndex - 1 : 0;
            setHighlightedIndex(highlightedIndexNew);
            setIsApiLoadMode(false);
            setQuery(locations[highlightedIndexNew]?.name ?? '', locations[highlightedIndexNew]?.country ?? '');
            e.preventDefault();
        } else if (e.key === 'Enter') {
            if (locations.length <= 0) {
                return;
            }
            setLocations([]);
            if (highlightedIndex !== -1) {
                e.preventDefault();
            }
        } else if (e.key === 'Escape') {
            if (locations.length <= 0) {
                return;
            }
            setLocations([]);
            setHighlightedIndex(-1);
            setIsApiLoadMode(false);
            setShowAutocompleteBox(false);
        } else {
            setHighlightedIndex(-1);
            setIsApiLoadMode(true);
            setShowAutocompleteBox(true);
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
        setShowAutocompleteBox(true);
        setIsApiLoadMode(true);
    };

    /**
     * Disable on focus.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event
     */
    const handleOnBlur = (event: React.SyntheticEvent<HTMLInputElement>) =>
    {
        setTimeout(() => {
            setShowAutocompleteBox(false);
            setIsApiLoadMode(false);
        }, 300);
    };

    /**
     * Sets the query to form.
     *
     * @param value
     * @param country
     */
    const setQuery = (value: string, country: string|null) =>
    {
        let queryString = (additionalQuery !== null ? (additionalQuery + ' ') : '') + value;

        if (country !== null) {
            queryString += ' country:' + country.toUpperCase();
        }

        setQueryString(queryString);
    }

    /**
     * Gets the full query string to post.
     *
     * @param queryString
     */
    const getQueryString = (queryString: string): string =>
    {
        if (limit) {
            queryString = 'limit:' + limit.toString() + ' ' + queryString;
        }

        if (feature) {
            queryString = 'feature-classes:' + feature + ' ' + queryString;
        }

        if (distance) {
            queryString = 'distance:' + (distance * 1000).toString() + ' ' + queryString;
        }

        if (country) {
            queryString = 'country:' + country.toUpperCase() + ' ' + queryString;
        }

        return queryString;
    }

    /**
     * Parses the query string.
     *
     * Example:
     *
     * - country:DE distance:50 feature-classes:S limit:10 test
     *
     * @param queryString
     */
    const parseQueryString = (queryString: string): string =>
    {
        type PatternMap = {
            [key: string]: RegExp;
        };

        /* Pattern to extract the key/value pairs from the query string. */
        const patterns: PatternMap = {
            country: /country:([A-Z]{2})\s?/,
            distance: /distance:(\d+)\s?/,
            featureClasses: /feature-classes:([A-Za-z]+)\s?/,
            limit: /limit:(\d+)\s?/
        };

        /* Extract values and remove them from the query string. */
        Object.keys(patterns).forEach(key => {
            const match = queryString.match(patterns[key]);
            if (match) {
                const value = match[1];

                queryString = queryString.replace(match[0], '');

                switch (key) {
                    case 'country':
                        setCountry(value);
                        break;

                    case 'distance':
                        setDistance(parseFloat(value) / 1000);
                        break;

                    case 'featureClasses':
                        setFeature(value);
                        break;

                    case 'limit':
                        setLimit(parseFloat(value));
                        break;
                }
            }
        });

        return queryString.trim();
    }

    /**
     * Onclick function.
     *
     * @param value
     * @param country
     */
    const onClick = (value: string, country: string|null) =>
    {
        setQuery(value, country);
        setLocations([]);

        setRoutePath(query.getFilterConfig().getLinkQuery(queryString));

        setTimeout(() => {
            formRef.current?.submit();
        }, 300);

    }

    const currentPosition = query.getFilterConfig().getCurrentPosition(true);
    const titleProperty = query.getFilterConfig().hasCurrentPosition() ? {title: t('TEXT_TITLE_CURRENT_POSITION_IS_USED')} : {};

    const enableMenuCountry = () =>
    {
        setIsCountryChoiceVisible(prevState => !prevState);
        setIsDistanceChoiceVisible(false);
        setIsFeatureChoiceVisible(false);
        setIsLimitChoiceVisible(false);
    };

    const clickCountry = (e: React.MouseEvent<HTMLLIElement>) =>
    {
        setCountry(e.currentTarget.dataset.value ?? null);
    }

    const enableMenuDistance = () =>
    {
        setIsCountryChoiceVisible(false);
        setIsDistanceChoiceVisible(prevState => !prevState);
        setIsFeatureChoiceVisible(false);
        setIsLimitChoiceVisible(false);
    }

    const clickDistance = (e: React.MouseEvent<HTMLLIElement>) =>
    {
        const value = e.currentTarget.dataset.value ?? null;

        setDistance(value === null ? null : parseFloat(value));
    }

    const enableMenuFeature = () =>
    {
        setIsCountryChoiceVisible(false);
        setIsDistanceChoiceVisible(false);
        setIsFeatureChoiceVisible(prevState => !prevState);
        setIsLimitChoiceVisible(false);
    }

    const clickFeature = (e: React.MouseEvent<HTMLLIElement>) =>
    {
        setFeature(e.currentTarget.dataset.value ?? null);
    }

    const enableMenuLimit = () =>
    {
        setIsCountryChoiceVisible(false);
        setIsDistanceChoiceVisible(false);
        setIsFeatureChoiceVisible(false);
        setIsLimitChoiceVisible(prevState => !prevState);
    }

    const clickLimit = (e: React.MouseEvent<HTMLLIElement>) =>
    {
        const value = e.currentTarget.dataset.value ?? null;

        setLimit(value === null ? null : parseFloat(value));
    }

    const disableMenus = () =>
    {
        setIsCountryChoiceVisible(false);
        setIsDistanceChoiceVisible(false);
        setIsFeatureChoiceVisible(false);
        setIsLimitChoiceVisible(false);
    }

    const countries = getCountryArray();
    const distances = [
        {'code': 0.1, name: 0.1},
        {'code': 0.5, name: 0.5},
        {'code': 1, name: 1},
        {'code': 10, name: 10},
        {'code': 20, name: 20},
        {'code': 50, name: 50},
        {'code': 100, name: 100},
        {'code': 200, name: 200},
        {'code': 500, name: 500},
        {'code': 1000, name: 1000},
    ];
    const features = getFeatureArray();
    const limits = [
        {'code': 5, name: 5},
        {'code': 10, name: 10},
        {'code': 20, name: 20},
        {'code': 50, name: 50},
    ];

    document.addEventListener('mousedown', handleClickOutside);

    return (
        <div>
            <h3 {...titleProperty}><GlobeAmericas size={sizeIcon.H3}/> {t('TEXT_HEADER_LOCATION_SEARCH')} {
                query.getFilterConfig().hasCurrentPosition() ?
                    <sup style={{color: colorCurrentPosition}} className="shadow-svg-blue">
                        <small><small><small><GeoAltFill size={sizeIcon.ButtonSmall}/></small></small></small>
                </sup> : <sup style={{color: colorCurrentPositionDisabled}} className="shadow-svg">
                    <small><small><small><GeoAlt size={sizeIcon.ButtonSmall}/></small></small></small>
                </sup>
            }</h3>

            <form
                ref={formRef}
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
                        <div
                            className="form-control shadow-none"
                        >
                            <div className="form-property form-property-country">
                                <span ref={menuRefCountry} onClick={enableMenuCountry} className="form-property-click">
                                    {
                                        country === null ?
                                            <GlobeAmericas size={sizeIcon.H3}/> :
                                            <Flag country={country.toUpperCase()} size={1}
                                                  title={translateCountryCode(country.toUpperCase())}/>
                                    }
                                </span>

                                <div
                                    className={['form-property-choice', isCountryChoiceVisible ? 'form-property-choice-visible' : 'form-property-choice-invisible'].join(' ')}>
                                    <ul className="country-list">
                                        {
                                            country !== null && <li
                                                data-value={null}
                                                key={'country-code-remove'}
                                                onClick={clickCountry}
                                                className="remover"
                                                title={translateCountryCode(country.toUpperCase())}
                                            >
                                                <div>
                                                    <Flag
                                                        country={country.toUpperCase()}
                                                        size={1}
                                                        title={translateCountryCode(country.toUpperCase())}
                                                    /> {translateCountryCode(country.toUpperCase())}
                                                </div>

                                                <Trash3Fill size={sizeIcon.H3}/>
                                            </li>
                                        }

                                        {countries.map(countryItem => (
                                            country !== countryItem.code.toUpperCase() && <li
                                                className="country-item"
                                                data-value={countryItem.code.toUpperCase()}
                                                key={'country-code-' + countryItem.code}
                                                onClick={clickCountry}
                                                title={countryItem.name}
                                            >
                                                <Flag
                                                    country={countryItem.code.toUpperCase()}
                                                    size={1}
                                                    title={countryItem.name}
                                                />&nbsp;
                                                <div className="country-item-text">
                                                    {countryItem.name}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="form-property form-property-distance">
                                <span ref={menuRefDistance} onClick={enableMenuDistance}
                                      className="form-property-click">
                                    {
                                        distance === null ? <Joystick size={sizeIcon.H3}/> :
                                            <span className="fw-bold">{distance.toString()} km</span>
                                    }
                                </span>
                                <div
                                    className={['form-property-choice', isDistanceChoiceVisible ? 'form-property-choice-visible' : 'form-property-choice-invisible'].join(' ')}>
                                    <ul>
                                        {
                                            distance !== null && <li
                                                data-value={null}
                                                key={'distance-code-remove'}
                                                onClick={clickDistance}
                                                className="remover"
                                                title={distance.toString() + ' km'}
                                            >
                                                <div>
                                                    {distance} km
                                                </div>

                                                <Trash3Fill size={sizeIcon.H3}/>
                                            </li>
                                        }

                                        {distances.map(distanceItem => (
                                            distance !== distanceItem.code && <li
                                                className="distance-item"
                                                data-value={distanceItem.code}
                                                key={'distance-code-' + distanceItem.code}
                                                onClick={clickDistance}
                                                title={distanceItem.name.toString() + ' km'}
                                            >
                                                <div className="distance-item-text">
                                                    {distanceItem.name.toString()} km
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="form-property form-property-feature">
                                <span ref={menuRefFeature} onClick={enableMenuFeature} className="form-property-click">
                                    {
                                        feature === null ? <ImageAlt/> : <span className="fw-bold">{feature}</span>
                                    }
                                </span>
                                <div
                                    className={['form-property-choice', isFeatureChoiceVisible ? 'form-property-choice-visible' : 'form-property-choice-invisible'].join(' ')}>
                                    <ul>
                                        {
                                            feature !== null && <li
                                                data-value={null} key={'feature-code-remove'}
                                                onClick={clickFeature}
                                                className="remover"
                                                title={translateFeatureCode(feature.toUpperCase())}
                                            >
                                                <div>
                                                    {feature} - {translateFeatureCode(feature.toUpperCase())}
                                                </div>

                                                <Trash3Fill size={sizeIcon.H3}/>
                                            </li>
                                        }

                                        {features.map(featureItem => (
                                            feature !== featureItem.code.toUpperCase() && <li
                                                className="feature-item"
                                                data-value={featureItem.code.toUpperCase()}
                                                key={'feature-code-' + featureItem.code}
                                                onClick={clickFeature}
                                                title={featureItem.name}
                                            >
                                                <div className="feature-item-text">
                                                    {featureItem.code} - {featureItem.name}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="form-property form-property-limit">
                                <span ref={menuRefLimit} onClick={enableMenuLimit} className="form-property-click">
                                    {
                                        limit === null ? <ListOl/> : <span className="fw-bold">{limit}</span>
                                    }
                                </span>
                                <div
                                    className={['form-property-choice', isLimitChoiceVisible ? 'form-property-choice-visible' : 'form-property-choice-invisible'].join(' ')}>
                                    <ul>
                                        {
                                            limit !== null && <li
                                                data-value={null} key={'limit-code-remove'}
                                                onClick={clickLimit}
                                                className="remover"
                                                title={limit.toString()}
                                            >
                                                <div>
                                                    Limit {limit}
                                                </div>

                                                <Trash3Fill size={sizeIcon.H3}/>
                                            </li>
                                        }

                                        {limits.map(limitItem => (
                                            limit !== limitItem.code && <li
                                                className="limit-item"
                                                data-value={limitItem.code}
                                                key={'limit-code-' + limitItem.code}
                                                onClick={clickLimit}
                                                title={limitItem.name.toString()}
                                            >
                                                <div className="limit-item-text">
                                                    Limit {limitItem.name.toString()}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <input
                                id="query"
                                type="text"
                                placeholder="52°31′14.322″N, 13°24′35.2044″E"
                                aria-label={t('TEXT_HEADER_LOCATION_SEARCH')}
                                aria-describedby="location-send"
                                autoComplete="off"
                                value={queryString ? queryString : ''}
                                onClick={disableMenus}
                                // onChange={handleQueryStringChange}
                                onInput={handleQueryStringChange}
                                onKeyDown={handleKeyDown}
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                            />
                        </div>

                        {isLoading && <div className="input-loader search-group-shadow">{t('TEXT_WORD_LOAD')} ...</div>}

                        {
                            showAutocompleteBox && locations.length > 0 &&
                            <div className="autocomplete search-group-shadow py-2 px-3">
                                <ul>
                                    {locations.map((item: AutoCompleteLocation, index: number) => (
                                        <li
                                            className="py-1 px-2"
                                            key={item.id}
                                            onClick={() => {
                                                onClick(item.name, item.country);
                                            }}
                                            style={{backgroundColor: highlightedIndex === index ? 'lightgray' : 'transparent'}}
                                        >
                                            {
                                                item.country &&
                                                <>
                                                    <Flag country={item.country} size={1.0}/>&nbsp;&nbsp;
                                                </>
                                            }{item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }

                        <input name="q" id="query-real" type="hidden" value={queryString ? queryString : ''} />
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
        </div>
    );
}

export default SearchForm;
