import React, {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from "react-router-dom";

/* Import translation libraries. */
import {useTranslation} from "react-i18next";

/* Add configurations */
import {sizeIcon} from "../../config/Config";
import {routePathLocation} from "../../config/Route";
import {colorBackgroundLocation} from "../../config/Colors";

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
import CollapsibleCard from "../layout/CollapsibleCard";

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
    }, [apiType, apiPathWithFilter]);

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

    const classNamesRow1 = ['fw-bold', 'pb-3', 'pt-3', 'px-3', 'text-responsive', 'text-30'];
    const classNamesRow2 = ['pb-3', 'pt-3', 'px-3', 'text-responsive', 'text-minimized', 'text-70'];
    const classNamesRow3 = ['pb-3', 'pt-3', 'px-3', 'text-responsive', 'text-minimized'];

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

                            <div>
                                {/* Compass. */}
                                <div className="compass" id="compass">
                                    <div className="arrow"></div>
                                    <div className="disc" id="compassDisc"></div>
                                </div>


                                {/* Caption. */}
                                <h2 className="mt-3">
                                    <Flag country={location.getProperties().getCountryCode()} size={1}
                                          title={location.getProperties().getCountryCodeTranslated()}/> &nbsp;
                                    {location.getName()}
                                </h2>

                                {/* Location information. */}
                                <CollapsibleCard title={location.getNameFull() ?? ''} collapsable={false}>
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
                                                <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DISTRICT_LOCALITY')}</td>
                                                <td className={classNamesRow2.join(' ')}
                                                    colSpan={2}>{location.getDistrictLocality()?.getName()}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            location.hasCityMunicipality() ? <tr>
                                                <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_CITY_MUNICIPALITY')}</td>
                                                <td className={classNamesRow2.join(' ')}
                                                    colSpan={2}>{location.getCityMunicipality()?.getName()}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            location.hasState() ? <tr>
                                                <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_STATE')}</td>
                                                <td className={classNamesRow2.join(' ')}
                                                    colSpan={2}>{location.getState()?.getName()}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            location.hasCountry() ? <tr>
                                                <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_COUNTRY')}</td>
                                                <td className={classNamesRow2.join(' ')}
                                                    colSpan={2}>{location.getCountry()?.getName()}, <code>{location.getProperties().getCountryCode()}</code>, <Flag
                                                    country={location.getProperties().getCountryCode()} size={1}
                                                    title={location.getProperties().getCountryCodeTranslated()}/></td>
                                            </tr> : <tr>
                                                <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_COUNTRY_CODE')}</td>
                                                <td className={classNamesRow2.join(' ')}
                                                    colSpan={2}>
                                                    <code>{location.getProperties().getCountryCode()}</code>, <Flag
                                                    country={location.getProperties().getCountryCode()} size={1}
                                                    title={location.getProperties().getCountryCodeTranslated()}/></td>
                                            </tr>
                                        }
                                        </tbody>
                                    </table>
                                </CollapsibleCard>

                                <h3>{t('TEXT_WORD_INFORMATION')}</h3>

                                {/* Position location information. */}
                                <CollapsibleCard title={'I) ' + t('TEXT_WORD_POSITION_LOCATION')} collapsed={true}
                                                 footer={
                                                     location.getCoordinate().getDistanceUserKilometerValue() >= 0 ?
                                                         <>
                                                             <sup>*)</sup>&nbsp;
                                                             {location.getCoordinate().getDistanceUserText(t)}
                                                         </> :
                                                         null
                                                 }>
                                    <table
                                        className="table table-responsive table-last-line location-detail mb-0"
                                        style={{
                                            borderCollapse: 'collapse',
                                            backgroundColor: "transparent"
                                        }}
                                    >
                                        <tbody>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DMS')}</td>
                                            <td className={classNamesRow2.join(' ')}
                                                colSpan={2}>{location.getCoordinate().getDMS()}</td>
                                        </tr>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DECIMAL')}</td>
                                            <td className={classNamesRow2.join(' ')}
                                                colSpan={2}>{location.getCoordinate().getDecimal()}</td>
                                        </tr>
                                        {
                                            location.getCoordinate().hasDistanceUser() ?
                                                <>
                                                    {
                                                        location.getCoordinate().getDistanceUserKilometerValue() > 0 ?
                                                            <>
                                                                <tr>
                                                                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DISTANCE')}</td>
                                                                    <td className={classNamesRow2.join(' ')}
                                                                        colSpan={2}
                                                                        title={location.getCoordinate().getDistanceUserText(t) ?? ''}>
                                                                        {location.getCoordinate().getDistanceUserKilometerFormatted()}<sup>*)</sup>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DIRECTION')}</td>
                                                                    <td className={classNamesRow2.join(' ')}
                                                                        title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                                                                    >
                                                                        {location.getCoordinate().getDirectionUserCode()} - {location.getCoordinate().getDirectionUserCodeTranslated(t)}<sup>*)</sup>
                                                                    </td>
                                                                    <td className={classNamesRow3.join(' ')}
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
                                                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_DISTANCE')}</td>
                                                    <td className={classNamesRow2.join(' ')}
                                                        title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                                                    >
                                                        {t('TEXT_LOCATION_CURRENT_POSITION_UNKNOWN')}
                                                    </td>
                                                    <td className={classNamesRow2.join(' ')}
                                                        title={location.getCoordinate().getDistanceUserText(t) ?? ''}
                                                        style={{textAlign: 'right'}}>
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
                                        </tbody>
                                    </table>
                                </CollapsibleCard>


                                {/* Location information. */}
                                <CollapsibleCard title={'II) ' + t('TEXT_WORD_LOCATION_INFORMATION')} collapsed={true}>
                                    <table
                                        className="table table-responsive table-last-line location-detail mb-0"
                                        style={{
                                            borderCollapse: 'collapse',
                                            backgroundColor: "transparent"
                                        }}
                                    >
                                        <tbody>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_MASTER_CODE')}</td>
                                            <td className={classNamesRow2.join(' ')} colSpan={2}>
                                                <code>{location.getFeature().getClass().getCode()}</code> - {location.getFeature().getClass().getName()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_CODE')}</td>
                                            <td className={classNamesRow2.join(' ')} colSpan={2}>
                                                <code>{location.getFeature().getCode().getCode()}</code> - {location.getFeature().getCode().getName()}
                                            </td>
                                        </tr>
                                        {
                                            location.hasTimezone() ?
                                                <tr>
                                                    <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_TIME_ZONE')}</td>
                                                    <td
                                                        className={classNamesRow2.join(' ')}
                                                        colSpan={2}
                                                        title={location.getTimezone()?.getCoordinate().getDMS() ?? ''}
                                                    >{location.getTimezone()?.getTimezone()}&nbsp;
                                                        <code>{location.getTimezone()?.getOffset()}</code></td>
                                                </tr> : <></>
                                        }
                                        {
                                            location.getProperties().hasElevation() ? <tr>
                                                <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_ELEVATION')}</td>
                                                <td className={classNamesRow2.join(' ')}
                                                    colSpan={2}>{location.getProperties().getElevation()?.["value-formatted"]}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            location.getProperties().hasPopulation() ? <tr>
                                                <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_POPULATION')}</td>
                                                <td className={classNamesRow2.join(' ')}
                                                    colSpan={2}>{location.getProperties().getPopulation()?.["value-formatted"]} {t('TEXT_WORD_INHABITANTS')}</td>
                                            </tr> : <></>
                                        }
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_GEONAME_ID')}</td>
                                            <td className={classNamesRow2.join(' ')}
                                                colSpan={2}>{location.getGeonameId()}</td>
                                        </tr>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_LAST_UPDATE')}</td>
                                            <td className={classNamesRow2.join(' ')}
                                                colSpan={2}>{convertToGermanFormat(location.getUpdateAt())}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </CollapsibleCard>


                                {/* Property / information. */}
                                <CollapsibleCard title={'III) ' + t('TEXT_WORD_LINK_ADDRESSES_MAPS')} collapsed={true}>
                                    <table
                                        className="table table-responsive table-last-line location-detail mb-0"
                                        style={{
                                            borderCollapse: 'collapse',
                                            backgroundColor: "transparent"
                                        }}
                                    >
                                        <tbody>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_GOOGLE_MAPS')}</td>
                                            <td className={classNamesRow2.join(' ')} colSpan={2}><a
                                                href={location.getLinks().getMaps('google') ?? ''} target={'_blank'}
                                                rel="noreferrer"
                                                dangerouslySetInnerHTML={{__html: addSoftHyphens(location.getLinks().getMaps('google') ?? '')}}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_OPEN_STREET_MAP')}</td>
                                            <td className={classNamesRow2.join(' ')} colSpan={2}><a
                                                href={location.getLinks().getMaps('openstreetmap') ?? ''}
                                                target={'_blank'}
                                                rel="noreferrer"
                                                dangerouslySetInnerHTML={{__html: addSoftHyphens(location.getLinks().getMaps('openstreetmap') ?? '')}}/>
                                            </td>
                                        </tr>
                                        {
                                            location.getLinks().hasWikipedia() ? <tr>
                                                <td className={classNamesRow1.join(' ')}>{t('TEXT_CAPTION_WIKIPEDIA')}</td>
                                                <td className={classNamesRow2.join(' ')} colSpan={2}><a
                                                    href={location.getLinks().getWikipedia() ?? ''}
                                                    target={'_blank'} rel="noreferrer"
                                                    dangerouslySetInnerHTML={{__html: addSoftHyphens(location.getLinks().getWikipedia() ?? '')}}/>
                                                </td>
                                            </tr> : <></>
                                        }
                                        </tbody>
                                    </table>
                                </CollapsibleCard>
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
                                properties={properties}
                                apiPathWithoutParameter={apiPath}
                                apiPathWithParameter={apiPathWithFilter}
                            />
                        </> : (error !== null ? <Error error={error} apiPath={properties?.["api-url"] ?? ''}/> :
                            <Loader/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Location;
