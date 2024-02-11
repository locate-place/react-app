import React, {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from "react-router-dom";

/* Import translation libraries. */
import {useTranslation} from "react-i18next";

/* Import types. */
import {
    TypeApiProperties,
    TypeError,
    TypeLoaded,
    TypeLocations
} from "../../types/Types";

/* Import configurations */
import {sizeIcon} from "../../config/Config";
import {routePathLocations} from "../../config/Route";

/* Import functions */
import loadApiData from "../../functions/LoadApiData";
import {
    getFilterConfig,
    sortByName,
    sortByRelevanceUser,
    sortByDistanceUser,
    sortByDistance,
    sortByRelevance
} from "../../functions/QueryFunctions";

/* Import classes */
import {Query} from "../../classes/Query";
import {ApiResponseProperty} from "../../classes/ApiResponseProperty";

/* Import component parts */
import Error from "../layout/Error";
import HeaderSmall from "../layout/HeaderSmall";
import Loader from "../layout/Loader";
import LocationCard from "../layout/LocationCard";
import SearchForm from "../layout/SearchForm";
import SearchMetrics from "../layout/SearchMetrics";
import SearchPerformance from "../layout/SearchPerformance";
import Pager from "../layout/Pager";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    SortAlphaDown,
    SortNumericDown,
    SortDown,
    HouseFill,
    HouseSlashFill,
    ListTask,
    CursorFill
} from "react-bootstrap-icons";
import {
    nameSortDistance,
    nameSortDistanceUser,
    nameSortName,
    nameSortRelevance,
    nameSortRelevanceUser
} from "../../config/NameSort";

/**
 * This is the app locations component.
 */
const Locations = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* API types */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* State variables */
    const [error, setError] = useState<TypeError>(null);
    const [loaded, setLoaded] = useState<TypeLoaded>(false);
    const [data, setData] = useState<TypeLocations|null>(null);
    const [properties, setProperties] = useState<TypeApiProperties|null>(null);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    /* Get variables according to the search parameters. */
    const filterConfig = getFilterConfig(searchParams);

    /* Gets the api url */
    const query = new Query(searchParams, env);
    const apiPath = query.getApiUrl();
    const apiPathWithFilter = query.getApiUrlWithFilter();
    const apiType = query.getApiType();

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData({
            type: apiType,
            path: apiPathWithFilter,
            setLoaded: setLoaded,
            setError: setError,
            setDataLocations: setData,
            setProperties: setProperties,
        });
    }, [apiType, apiPathWithFilter]);

    /* Skip empty data */
    if (data === null || properties === null) {
        return <></>;
    }

    /* Add apiResponseProperty to query class, to get more information. */
    const apiResponseProperty = new ApiResponseProperty(properties);
    query.setApiResponseProperty(apiResponseProperty);

    /**
     * The render function.
     */
    return (
        <>
            <HeaderSmall title='Locations' subtitle='Locations API' />
            <div className="calendars container mb-5 px-4 px-md-3">
                <div className="row g-4">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        {/* Renders the search form. */}
                        <SearchForm
                            queryDefault={query.getQuery()}
                            routePathDefault={routePathLocations}
                        />

                        {loaded ? <>
                            {/* Renders the search metrics part. */}
                            <SearchMetrics properties={properties}/>

                            {
                                query.isQuerySearch() ?
                                    <>
                                        <h3><ListTask size={sizeIcon.H3}/> {t('TEXT_SEARCH_RESULTS')}</h3>
                                    </> :
                                    <>
                                        <p>{t('TEXT_EXAMPLE_DESCRIPTION')}</p>
                                        <h3><ListTask size={sizeIcon.H3}/> {t('TEXT_EXAMPLE_HEADER')}</h3>
                                    </>
                            }

                            <div className="float-end pb-3">
                                <div className="btn-group shadow-own">
                                    {/* Own position indicator */}
                                    <button
                                        className="btn btn-outline-secondary without-hover"
                                        title={apiResponseProperty.isOwnPosition() ? ('Aktuelle Position "' + apiResponseProperty.getOwnPosition() + '" wird verwendet.') : 'Aktuelle Position wird nicht verwendet.'}
                                    >
                                        {
                                            apiResponseProperty.isOwnPosition() ?
                                                <HouseFill size={sizeIcon.Button}/> :
                                                <HouseSlashFill size={sizeIcon.Button}/>
                                        }&nbsp;
                                        <sup><small>{t('TEXT_ACTION_SORTING')}</small></sup>
                                    </button>
                                    <button
                                        className={'btn ' + (query.isSort(nameSortName) ? 'btn-secondary' : 'btn-outline-secondary')}
                                        onClick={() => sortByName(filterConfig)} title={t('TEXT_TITLE_SORT_BY_NAME')}>
                                        <SortAlphaDown size={sizeIcon.Button}/> <sup><small>{t('TEXT_ACTION_NAME')}</small></sup>
                                    </button>
                                    {
                                        query.isCoordinateSearch() ?
                                            <button
                                                className={'btn ' + (query.isSort([nameSortDistanceUser, nameSortDistance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                                onClick={() => sortByDistance(filterConfig)}
                                                title={t('TEXT_TITLE_SORT_BY_DISTANCE')}
                                            >
                                                <CursorFill size={sizeIcon.ButtonSmall}/>&nbsp;
                                                <SortNumericDown size={sizeIcon.Button}/>&nbsp;
                                                <sup><small>{t('TEXT_ACTION_KM')}</small></sup>
                                            </button> :
                                            <button
                                                className={'btn ' + (query.isSort([nameSortDistanceUser, nameSortDistance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                                onClick={() => sortByDistanceUser(filterConfig)}
                                                title={t('TEXT_TITLE_SORT_BY_DISTANCE_FROM_USER')}
                                            >
                                                <SortNumericDown size={sizeIcon.Button}/>&nbsp;
                                                <sup><small>{t('TEXT_ACTION_KM')}</small></sup>
                                            </button>
                                    }
                                    {
                                        query.isQuerySearch() ?
                                            (
                                                query.isCoordinateSearch() ?
                                                    <button
                                                        className={'btn ' + (query.isSort([nameSortRelevanceUser, nameSortRelevance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                                        onClick={() => sortByRelevance(filterConfig)}
                                                        title={t('TEXT_TITLE_SORT_BY_RELEVANCE')}
                                                    >
                                                        <CursorFill size={sizeIcon.ButtonSmall}/>&nbsp;
                                                        <SortDown size={sizeIcon.Button}/> <sup><small>{t('TEXT_ACTION_RELEVANCE')}</small></sup>
                                                    </button> :
                                                    <button
                                                        className={'btn ' + (query.isSort([nameSortRelevanceUser, nameSortRelevance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                                        onClick={() => sortByRelevanceUser(filterConfig)}
                                                        title={t('TEXT_TITLE_SORT_BY_RELEVANCE_OF_THE_USER')}
                                                    >
                                                        <SortDown size={sizeIcon.Button}/>&nbsp;
                                                        <sup><small>{t('TEXT_ACTION_RELEVANCE')}</small></sup>
                                                    </button>
                                            ) :
                                            <></>
                                    }
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            {/* Show the results. */}
                            <div className="mt-5"><p>{query.getQueryResultText(t)}</p></div>

                            {
                                apiResponseProperty.hasResults() ?
                                    <>
                                        {data.map((location, index) => (
                                            <LocationCard
                                                key={'location-card-' + index}
                                                location={location}
                                                properties={properties}
                                                showOwnPosition={false}
                                                index={index}
                                                useAlwaysName={!query.isQuerySearch()}
                                            />
                                        ))}

                                        {/* Renders the pager part. */}
                                        <Pager query={query} />
                                    </> :
                                    null
                            }

                            {/* Renders the search performance part. */}
                            <SearchPerformance
                                properties={properties}
                                apiPathWithoutParameter={apiPath}
                                apiPathWithParameter={apiPathWithFilter}
                            />
                        </> : (error !== null ? <Error error={error} apiPath={properties['api-url']}/> : <Loader/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Locations;
