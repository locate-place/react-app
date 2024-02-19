import React, {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

/* Import types. */
import {
    TypeApiData,
    TypeApiProperties,
    TypeErrorOwn,
    TypeLoaded
} from "../../types/Types";

/* Import configurations */
import {sizeIcon} from "../../config/Config";
import {routePathLocations} from "../../config/Route";

/* Import functions */
import loadApiData from "../../functions/LoadApiData";
import initializeCompass from "../../functions/Compass";

/* Import classes */
import {Query} from "../../classes/Query";
import {ApiResponseProperty} from "../../classes/Api/ApiResponseProperty";
import {ApiLocationWrapper} from "../../classes/Api/Location/ApiLocationWrapper";
import {LocationsWrapper} from "../../classes/Api/Location/Locations/LocationsWrapper";

/* Import component parts */
import Error from "../layout/Error";
import HeaderSmall from "../layout/HeaderSmall";
import Loader from "../layout/Loader";
import LocationCard from "../layout/LocationCard";
import SearchForm from "../layout/SearchForm";
import SearchMetrics from "../layout/SearchMetrics";
import SearchPerformance from "../layout/SearchPerformance";
import Pager from "../layout/Pager";
import LocationSort from "../layout/LocationSort";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    ListTask,
} from "react-bootstrap-icons";

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
    const [api, setApi] = useState<TypeApiData|null>(null);
    const [properties, setProperties] = useState<TypeApiProperties|null>(null);
    const [loaded, setLoaded] = useState<TypeLoaded>(false);
    const [error, setError] = useState<TypeErrorOwn>(null);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    /* Gets the api components */
    const query = new Query(searchParams, env);
    const apiPath = query.getApiUrl();
    const apiPathWithFilter = query.getApiUrlWithFilter();
    const apiType = query.getApiType();

    const queryString = query.getFilterConfig().getQuery();

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData({
            type: apiType,
            path: apiPathWithFilter,
            setDataApi: setApi,
            setProperties: setProperties,
            setLoaded: setLoaded,
            setError: setError,
            callback: () => {
                initializeCompass();
            }
        }, t);
    }, [apiType, apiPathWithFilter, t]);

    let apiLocationWrapper: ApiLocationWrapper|null = null;
    let apiResponseProperty: ApiResponseProperty|null = null;


    let page = 1;
    let results = 10;

    if (api && properties) {
        /* Get location wrapper. */
        apiLocationWrapper = new ApiLocationWrapper(api);

        /* Add apiResponseProperty to query class, to get more information. */
        apiResponseProperty = new ApiResponseProperty(properties);
        query.setApiResponseProperty(apiResponseProperty);

        page = query.getApiResponseProperty().getResultsPage();
        results = query.getApiResponseProperty().getResultsResults();
    }

    /**
     * The render function.
     */
    return (
        <>
            <HeaderSmall title={t('TEXT_LOCATIONS_TITLE')} subtitle={t('TEXT_LOCATIONS_SUBTITLE')} />
            <div className="calendars container mb-5 px-4 px-md-3">
                <div className="row g-4">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        {/* Renders the search form. */}
                        <SearchForm
                            queryDefault={queryString}
                            routePathDefault={routePathLocations}
                            query={query}
                        />

                        {loaded && apiLocationWrapper && apiResponseProperty ? <>
                            {/* Renders the search metrics part. */}
                            <SearchMetrics apiResponseProperty={apiResponseProperty} />

                            {/* Renders the caption and description. */}
                            {
                                query.getFilterConfig().hasQuery() ?
                                    <>
                                        <h3><ListTask size={sizeIcon.H3}/> {t('TEXT_SEARCH_RESULTS')}</h3>
                                    </> :
                                    <>
                                        <p>{t('TEXT_EXAMPLE_DESCRIPTION')}</p>
                                        <h3><ListTask size={sizeIcon.H3}/> {t('TEXT_EXAMPLE_HEADER')}</h3>
                                    </>
                            }

                            {/* Add location sort. */}
                            <LocationSort query={query} apiResponseProperty={apiResponseProperty} />

                            {/* Show the results. */}
                            <div className="mt-5"><p>{query.getQueryResultText(t)}</p></div>

                            {/* Renders the results. */}
                            {
                                apiResponseProperty.hasResults() ?
                                    <>
                                        {
                                            apiLocationWrapper.hasLocations() ?
                                                (apiLocationWrapper.getLocations() as LocationsWrapper).getLocationWrapperArray().map((locationWrapper, index) => (
                                                    apiResponseProperty ?
                                                        <LocationCard
                                                            key={'location-card-' + (index + 1)}
                                                            locationWrapper={locationWrapper}
                                                            apiResponseProperty={apiResponseProperty}
                                                            showOwnPosition={false}
                                                            page={index + (page - 1) * results + 1}
                                                            useAlwaysName={!query.getFilterConfig().hasQuery()}
                                                        /> :
                                                        <></>
                                                )) :
                                                <></>
                                        }

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
                        </> : (error !== null ? <Error error={error} apiPath={properties?.["api-url"] ?? ''} /> : <Loader/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Locations;
