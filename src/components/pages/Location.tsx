import React, {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

/* Add configurations */
import {routePathLocation} from "../../config/Route";

/* Import types. */
import {TypeApiData, TypeApiProperties, TypeErrorOwn, TypeLoaded} from "../../types/Types";

/* Import classes */
import {Query} from "../../classes/Query";
import {ApiLocationWrapper} from "../../classes/Api/Location/ApiLocationWrapper";
import {ApiResponseProperty} from "../../classes/Api/ApiResponseProperty";

/* Add functions */
import initializeCompass from "../../functions/Compass";
import loadApiData from "../../functions/LoadApiData";

/* Add component parts */
import Error from "../layout/Error";
import Flag from "../layout/Flag";
import HeaderSmall from "../layout/HeaderSmall";
import Loader from "../layout/Loader";
import LocationDetail from "../layout/Location/LocationDetail";
import LocationPosition from "../layout/Location/LocationPosition";
import NextPlaces from "../layout/NextPlaces";
import SearchForm from "../layout/SearchForm";
import SearchMetrics from "../layout/SearchMetrics";
import SearchPerformance from "../layout/SearchPerformance";
import LocationInformation from "../layout/Location/LocationInformation";
import LocationMapsLinks from "../layout/Location/LocationMapsLinks";
import LocationPropertyAirport from "../layout/Location/Property/LocationPropertyAirport";

/**
 * This is the app locations component.
 */
const Location = () =>
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

    /* Gets the api url */
    let query = new Query(searchParams, env);
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

    if (api && properties) {
        /* Get location wrapper. */
        apiLocationWrapper = new ApiLocationWrapper(api);

        /* Add apiResponseProperty to query class, to get more information. */
        apiResponseProperty = new ApiResponseProperty(properties);
        query.setApiResponseProperty(apiResponseProperty);
    }

    let location = apiLocationWrapper ? apiLocationWrapper.getLocation() : null;

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
                            queryDefault={query.getFilterConfig().getQuery()}
                            routePathDefault={routePathLocation}
                            query={query}
                        />

                        {loaded && apiLocationWrapper && apiResponseProperty && location ? <>
                            {/* Renders the search metrics part. */}
                            <SearchMetrics apiResponseProperty={apiResponseProperty} />

                            {/* Renders the location parts */}
                            <div>
                                {/* Compass. */}
                                <div className="compass" id="compass">
                                    <div className="arrow"></div>
                                    <div className="disc" id="compassDisc"></div>
                                </div>


                                {/* Caption. */}
                                <h2 className="mt-3">
                                    <Flag country={location.getCountry()?.getProperties().getCountryCode() ?? 'DE'} size={1}
                                          title={location.getCountry()?.getProperties().getCountryCodeTranslated()}/> &nbsp;
                                    {location.getName()}
                                </h2>

                                {/* Location information. */}
                                <LocationDetail location={location} />

                                <h3>{t('TEXT_WORD_INFORMATION')}</h3>

                                {/* Single location information. */}
                                <LocationPosition location={location} query={query} number={1} />
                                <LocationInformation location={location} number={2} />
                                <LocationMapsLinks location={location} number={3} />

                                {/* Properties */}
                                { location.getProperties().hasAirport() ? <LocationPropertyAirport location={location} number={4} /> : <></> }
                            </div>

                            {/* Renders the next places parts */}
                            {
                                location.hasNextPlaces() ? <>
                                    <h3>{t('TEXT_HEADER_NEXT_PLACES')}</h3>

                                    {location.getNextPlacesFeatureClasses(true).map((featureClass) =>
                                        location ?
                                            <NextPlaces
                                                key={'feature-code-' + featureClass}
                                                nextPlace={location.getNextPlace(featureClass)}
                                            /> :
                                            <></>
                                    )}
                                </> : <></>
                            }

                            {/* Renders the search performance part. */}
                            <SearchPerformance
                                type={'location'}
                                properties={properties}
                                apiPathWithoutParameter={apiPath}
                                apiPathWithParameter={apiPathWithFilter}
                            />
                        </> : (error !== null ? <Error error={error} apiPath={properties?.["api-url"] ?? ''} /> :
                            <Loader/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Location;
