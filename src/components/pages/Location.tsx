import React, {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from "react-router-dom";

/* Import translation libraries. */
import {useTranslation} from "react-i18next";

/* Add configurations */
import {sizeIcon} from "../../config/Config";
import {routePathLocation} from "../../config/Route";

/* Import types. */
import {TypeApiData, TypeApiProperties, TypeErrorOwn, TypeLoaded} from "../../types/Types";

/* Import classes */
import {Query} from "../../classes/Query";
import {ApiLocationWrapper} from "../../classes/Api/Location/ApiLocationWrapper";

/* Add functions */
import loadApiData from "../../functions/LoadApiData";
import {convertToGermanFormat} from "../../functions/Date";
import {addSoftHyphens} from "../../functions/Text";

/* Add component parts */
import Error from "../layout/Error";
import HeaderSmall from "../layout/HeaderSmall";
import Loader from "../layout/Loader";
import NextPlaces from "../layout/NextPlaces";
import SearchForm from "../layout/SearchForm";
import SearchMetrics from "../layout/SearchMetrics";
import SearchPerformance from "../layout/SearchPerformance";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {CursorFill} from "react-bootstrap-icons";
import {ApiResponseProperty} from "../../classes/Api/ApiResponseProperty";
import Flag from "../layout/Flag";
import LinkV2 from "../layout/LinkV2";
import initializeCompass from "../../functions/Compass";

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
        });
    }, [apiType, apiPathWithFilter]);

    /* Skip empty data */
    if (properties === null || api === null) {
        return <></>;
    }

    /* Get location wrapper. */
    let apiLocationWrapper = new ApiLocationWrapper(api);
    let location = apiLocationWrapper.getLocation();

    /* Add apiResponseProperty to query class, to get more information. */
    const apiResponseProperty = new ApiResponseProperty(properties);
    query.setApiResponseProperty(apiResponseProperty);

    const classNamesFirstRow = ['fw-bold', 'pb-3', 'pt-3', 'px-3', 'text-responsive'];
    const classNamesSecondRow = ['pb-3', 'pt-3', 'px-3', 'text-responsive', 'text-minimized'];

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

                        {loaded ? <>
                            {/* Renders the search metrics part. */}
                            <SearchMetrics apiResponseProperty={apiResponseProperty} />

                            <div>
                                <div className="compass" id="compass">
                                    <div className="arrow"></div>
                                    <div className="disc" id="compassDisc"></div>
                                </div>

                                <h2 className="mt-3">
                                    <Flag country={location.getProperties().getCountryCode()} size={1}
                                          title={location.getProperties().getCountryCodeTranslated()}/> &nbsp;
                                    {location.getName()}
                                </h2>

                                <div className="card shadow-own mb-5"
                                     style={{'backgroundColor': 'rgb(233, 235, 228)'}}>
                                    <div className="card-header">
                                        <p className="mb-0 fw-bold">{location.getNameFull()}</p>
                                    </div>
                                    <div className="card-body p-0">
                                        <table
                                            className="table table-responsive table-last-line location-detail mb-0"
                                            style={{
                                                borderCollapse: 'collapse',
                                                backgroundColor: "transparent"
                                            }}
                                        >
                                            <tbody>
                                            {
                                                location.hasDistrictLocality() ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_DISTRICT_LOCALITY')}</td>
                                                    <td className={classNamesSecondRow.join(' ')}
                                                        colSpan={2}>{location.getDistrictLocality()?.getName()}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                location.hasCityMunicipality() ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_CITY_MUNICIPALITY')}</td>
                                                    <td className={classNamesSecondRow.join(' ')}
                                                        colSpan={2}>{location.getCityMunicipality()?.getName()}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                location.hasState() ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_STATE')}</td>
                                                    <td className={classNamesSecondRow.join(' ')}
                                                        colSpan={2}>{location.getState()?.getName()}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                location.hasCountry() ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_COUNTRY')}</td>
                                                    <td className={classNamesSecondRow.join(' ')}
                                                        colSpan={2}>{location.getCountry()?.getName()}</td>
                                                </tr> : <></>
                                            }
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_COUNTRY_CODE')}</td>
                                                <td className={classNamesSecondRow.join(' ')}
                                                    colSpan={2}>{location.getProperties().getCountryCode()}</td>
                                            </tr>
                                            {
                                                location.getProperties().hasElevation() ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_ELEVATION')}</td>
                                                    <td className={classNamesSecondRow.join(' ')}
                                                        colSpan={2}>{location.getProperties().getElevation()?.["value-formatted"]}</td>
                                                </tr> : <></>
                                            }
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_DMS')}</td>
                                                <td className={classNamesSecondRow.join(' ')}
                                                    colSpan={2}>{location.getCoordinate().getDMS()}</td>
                                            </tr>
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_DECIMAL')}</td>
                                                <td className={classNamesSecondRow.join(' ')}
                                                    colSpan={2}>{location.getCoordinate().getDecimal()}</td>
                                            </tr>
                                            {
                                                location.getCoordinate().hasDistanceUser() ?
                                                    <>
                                                        {
                                                            location.getCoordinate().getDistanceUserKilometerValue() > 0 ?
                                                                <>
                                                                    <tr>
                                                                        <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_DISTANCE')}</td>
                                                                        <td className={classNamesSecondRow.join(' ')}
                                                                            colSpan={2}
                                                                            title={location.getCoordinate().getDistanceUserText(t) ?? ''}>
                                                                            {location.getCoordinate().getDistanceUserKilometerFormatted()}<sup>*)</sup>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_DIRECTION')}</td>
                                                                        <td className={classNamesSecondRow.join(' ')}
                                                                            title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                                                                        >
                                                                            {location.getCoordinate().getDirectionUserTranslated()}<sup>*)</sup>
                                                                        </td>
                                                                        <td className={classNamesSecondRow.join(' ')}
                                                                            style={{
                                                                                display: "flex",
                                                                                justifyContent: "flex-end"
                                                                            }}>
                                                                            <div
                                                                                className="compass compass-direction shadow-own">
                                                                                <div className="arrow arrow-direction"
                                                                                     data-degree={location.getCoordinate().getDirectionUserDegree()}></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </> :
                                                                <>
                                                                </>
                                                        }
                                                    </>
                                                    :
                                                    <tr>
                                                        <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_DISTANCE')}</td>
                                                        <td className={classNamesSecondRow.join(' ')}
                                                            title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                                                        >
                                                            {t('TEXT_LOCATION_CURRENT_POSITION_UNKNOWN')}
                                                        </td>
                                                        <td className={classNamesSecondRow.join(' ')}
                                                            title={location.getCoordinate().getDistanceUserText(t) ?? ''} style={{textAlign: 'right'}}>
                                                            <LinkV2
                                                                to={query.getFilterConfig().getLinkCurrent()}
                                                                useCurrentPosition={true}
                                                                className="btn btn-outline-primary shadow-own mt-2 mb-2 button-own-position button-minimized"
                                                                title={t('TEXT_LOCATION_DETERMINE_CURRENT_POSITION')}
                                                            >
                                                                <CursorFill size={sizeIcon.H3}/>
                                                            </LinkV2>
                                                        </td>
                                                    </tr>
                                            }
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_MASTER_CODE')}</td>
                                                <td className={classNamesSecondRow.join(' ')} colSpan={2}>
                                                    <code>{location.getFeature().getClass().getCode()}</code> - {location.getFeature().getClass().getName()}</td>
                                            </tr>
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_CODE')}</td>
                                                <td className={classNamesSecondRow.join(' ')} colSpan={2}>
                                                    <code>{location.getFeature().getCode().getCode()}</code> - {location.getFeature().getCode().getName()}</td>
                                            </tr>
                                            {
                                                location.hasTimezone() ?
                                                <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_TIME_ZONE')}</td>
                                                    <td
                                                        className={classNamesSecondRow.join(' ')}
                                                        colSpan={2}
                                                        title={location.getTimezone()?.getCoordinate().getDMS() ?? ''}
                                                    >{location.getTimezone()?.getTimezone()} <code>{location.getTimezone()?.getOffset()}</code></td>
                                                </tr> : <></>
                                            }
                                            {
                                                location.getLinks().hasWikipedia() ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_TIME_WIKIPEDIA')}</td>
                                                    <td className={classNamesSecondRow.join(' ')} colSpan={2}><a href={location.getLinks().getWikipedia() ?? ''} target={'_blank'} rel="noreferrer" dangerouslySetInnerHTML={{__html: addSoftHyphens(location.getLinks().getWikipedia() ?? '')}} /></td>
                                                </tr> : <></>
                                            }
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_TIME_GEONAME_ID')}</td>
                                                <td className={classNamesSecondRow.join(' ')}
                                                    colSpan={2}>{location.getGeonameId()}</td>
                                            </tr>
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>{t('TEXT_CAPTION_TIME_LAST_UPDATE')}</td>
                                                <td className={classNamesSecondRow.join(' ')}
                                                    colSpan={2}>{convertToGermanFormat(location.getUpdateAt())}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer">
                                        <small><small>
                                            {
                                                location.getCoordinate().getDistanceUserKilometerValue() >= 0 ?
                                                    <>
                                                        <sup>*)</sup>&nbsp;
                                                        {location.getCoordinate().getDistanceUserText(t)}
                                                    </> :
                                                    null
                                            }
                                        </small></small>
                                    </div>
                                </div>
                            </div>

                            {/* Renders the next places parts */}
                            {
                                location.hasNextPlaces() ? <>
                                    {location.getNextPlacesFeatureClasses(true).map((featureClass) =>
                                        <NextPlaces key={'feature-code-' + featureClass} nextPlace={location.getNextPlace(featureClass)} />
                                    )}
                                </> : <></>
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

export default Location;
