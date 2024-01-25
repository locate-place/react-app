import React, {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from "react-router-dom";

/* Add configurations */
import {sizeIcon} from "../../config/Config.ts";

/* Add functions */
import loadApiData from "../../functions/LoadApiData.ts";
import {
    getQuery,
    getApiPathDetail,
    addCurrentPositionToQuery,
    getFilterConfig,
} from "../../functions/Query.ts";
import {convertToGermanFormat} from "../../functions/Date.ts";
import {translateCountryCode} from "../../functions/Country.ts";
import initializeCompass from "../../functions/Compass.ts";

/* Add component parts */
import Error from "../layout/Error.tsx";
import HeaderSmall from "../layout/HeaderSmall.tsx";
import Loader from "../layout/Loader.tsx";
import NextPlaces from "../layout/NextPlaces.tsx";
import SearchForm from "../layout/SearchForm.tsx";
import SearchMetrics from "../layout/SearchMetrics.tsx";
import SearchPerformance from "../layout/SearchPerformance.tsx";

/* Flag icons; see https://github.com/stephenway/react-flagkit */
import Flag from "react-flagkit";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {CursorFill} from "react-bootstrap-icons";

/**
 * This is the app locations component.
 */
const Location = () =>
{
    /* Routes variables */
    const routePath = '/location.html';

    /* Direction translation */
    let directionTranslation = {
        "N": "Norden",
        "NE": "Nordosten",
        "E": "Osten",
        "SE": "Südosten",
        "S": "Süden",
        "SW": "Südwesten",
        "W": "Westen",
        "NW": "Nordwesten",
    };

    /* API types */
    const typeLocationApi = useMemo(() => {
        return process.env.REACT_APP_TYPE_LOCATION_API;
    }, []);

    /* State variables */
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [properties, setProperties] = useState([]);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    let hasOwnPosition = properties.given && properties.given.coordinate && properties.given.coordinate.location;

    /* Get variables according to the search parameters. */
    let apiPathWithParameter = getApiPathDetail(searchParams, true);
    let apiPathWithoutParameter = getApiPathDetail(searchParams, false);
    let query = getQuery(searchParams);

    /* Get generell parts */
    let hasDataProperties = !!data['properties'];
    let propertyCountryCode = hasDataProperties && data.properties.country ? data.properties.country : null;
    let hasPropertyElevation = hasDataProperties && data.properties.elevation && data.properties.elevation['value-formatted'];
    let propertyElevation = hasPropertyElevation ? data.properties.elevation['value-formatted'] : null;

    /* Get coordinate parts */
    let hasCoordinate = !!data['coordinate'];
    let hasDistance = hasCoordinate && data.coordinate['distance-user'];
    let coordinateLatitudeDecimal = hasCoordinate && data.coordinate.latitude ? data.coordinate.latitude.decimal : null;
    let coordinateLatitudeDms = hasCoordinate && data.coordinate.latitude ? data.coordinate.latitude.dms : null;
    let coordinateLongitudeDecimal = hasCoordinate && data.coordinate.longitude ? data.coordinate.longitude.decimal : null;
    let coordinateLongitudeDms = hasCoordinate && data.coordinate.longitude ? data.coordinate.longitude.dms : null;
    let distanceInKilometersFormatted = hasCoordinate && data.coordinate['distance-user'] ? data.coordinate['distance-user'].kilometers['value-formatted'] : null;
    let distanceInKilometers = hasCoordinate && data.coordinate['distance-user'] ? data.coordinate['distance-user'].kilometers['value'] : null;
    let directionTranslated = hasCoordinate && data.coordinate['direction-user'] ? data.coordinate['direction-user']['cardinal-direction'] : null;
    let directionDegree = hasCoordinate && data.coordinate['direction-user'] ? data.coordinate['direction-user']['degree'] : null;

    let distanceText = hasOwnPosition ? ('Von aktueller Position ' + properties.given.coordinate.parsed.latitude.dms + ', ' + properties.given.coordinate.parsed.longitude.dms) : '';

    /* Get feature parts */
    let hasFeature = !!data['feature'];
    let featureClass = hasFeature && data.feature['class']? data.feature['class'] : null;
    let featureClassName = hasFeature && data.feature['class-name']? data.feature['class-name'] : null;
    let featureCode = hasFeature && data.feature['code']? data.feature['code'] : null;
    let featureCodeName = hasFeature && data.feature['code-name']? data.feature['code-name'] : null;

    /* Get location parts */
    let hasLocations = !!data['locations'];
    let locationDistrictLocality = hasLocations && data.locations['district-locality'] ? data.locations['district-locality'] : null;
    let locationCityMunicipality = hasLocations && data.locations['city-municipality'] ? data.locations['city-municipality'] : null;
    let locationState = hasLocations && data.locations['state'] ? data.locations['state'] : null;
    let locationCountry = hasLocations && data.locations['country'] ? data.locations['country'] : null;

    /* Get timezone parts */
    let hasTimezone = !!data['timezone'];
    let timezone = hasTimezone ? data['timezone'].timezone : null;
    let timezoneOffset = hasTimezone ? data['timezone'].offset : null;

    /* Get next places parts */
    let hasNextPlaces = !!data['next-places'];
    let hasNextPlacesA = hasNextPlaces && data['next-places']['A'];
    let nextPlacesA = hasNextPlacesA ? data['next-places']['A'] : null;
    let hasNextPlacesH = hasNextPlaces && data['next-places']['H'];
    let nextPlacesH = hasNextPlacesH ? data['next-places']['H'] : null;
    let hasNextPlacesL = hasNextPlaces && data['next-places']['L'];
    let nextPlacesL = hasNextPlacesL ? data['next-places']['L'] : null;
    let hasNextPlacesP = hasNextPlaces && data['next-places']['P'];
    let nextPlacesP = hasNextPlacesP? data['next-places']['P'] : null;
    let hasNextPlacesR = hasNextPlaces && data['next-places']['R'];
    let nextPlacesR = hasNextPlacesR? data['next-places']['R'] : null;
    let hasNextPlacesS = hasNextPlaces && data['next-places']['S'];
    let nextPlacesS = hasNextPlacesS? data['next-places']['S'] : null;
    let hasNextPlacesT = hasNextPlaces && data['next-places']['T'];
    let nextPlacesT = hasNextPlacesT? data['next-places']['T'] : null;
    let hasNextPlacesU = hasNextPlaces && data['next-places']['U'];
    let nextPlacesU = hasNextPlacesU? data['next-places']['U'] : null;
    let hasNextPlacesV = hasNextPlaces && data['next-places']['V'];
    let nextPlacesV = hasNextPlacesV? data['next-places']['V'] : null;

    let filterConfig = getFilterConfig(searchParams);
    let addCurrentPosition = (e) => {
        addCurrentPositionToQuery(filterConfig);
    }

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(
            typeLocationApi,
            apiPathWithParameter,
            setLoaded,
            setError,
            setData,
            setProperties,
            () => {
                initializeCompass();
            }
        );
    }, [typeLocationApi, apiPathWithParameter]);

    const classNamesFirstRow = ['fw-bold', 'pb-3', 'pt-3', 'px-3', 'text-responsive'];
    const classNamesSecondRow = ['pb-3', 'pt-3', 'px-3', 'text-responsive', 'text-minimized'];

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
                            queryDefault={query}
                            routePathDefault={routePath}
                        />

                        {loaded ? <>
                            {/* Renders the search metrics part. */}
                            <SearchMetrics properties={properties} />

                            <div>
                                <div className="compass" id="compass">
                                    <div className="arrow"></div>
                                    <div className="disc" id="compassDisc"></div>
                                </div>

                                <h2 className="mt-3">
                                    <Flag country={propertyCountryCode} size="20"
                                          title={translateCountryCode(propertyCountryCode)}/> &nbsp;
                                    {data.name}
                                </h2>

                                <div className="card shadow-own mb-5"
                                     style={{'backgroundColor': 'rgb(233, 235, 228)'}}>
                                    <div className="card-header">
                                        <p className="mb-0 fw-bold">{data['name-full']}</p>
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
                                                locationDistrictLocality ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Stadtteil / Ortschaft
                                                    </td>
                                                    <td className={classNamesSecondRow.join([' '])}
                                                        colSpan={2}>{locationDistrictLocality.name}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                locationCityMunicipality ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Stadt / Gemeinde</td>
                                                    <td className={classNamesSecondRow.join([' '])}
                                                        colSpan={2}>{locationCityMunicipality.name}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                locationState ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Bundesland</td>
                                                    <td className={classNamesSecondRow.join([' '])}
                                                        colSpan={2}>{locationState.name}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                locationCountry ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Land</td>
                                                    <td className={classNamesSecondRow.join([' '])}
                                                        colSpan={2}>{locationCountry.name}</td>
                                                </tr> : <></>
                                            }
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>Ländercode</td>
                                                <td className={classNamesSecondRow.join([' '])}
                                                    colSpan={2}>{propertyCountryCode}</td>
                                            </tr>
                                            {
                                                hasPropertyElevation ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Höhe</td>
                                                    <td className={classNamesSecondRow.join([' '])}
                                                        colSpan={2}>{propertyElevation}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                coordinateLatitudeDms && coordinateLongitudeDms ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>DMS</td>
                                                    <td className={classNamesSecondRow.join([' '])}
                                                        colSpan={2}>{coordinateLatitudeDms}, {coordinateLongitudeDms}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                coordinateLatitudeDecimal && coordinateLongitudeDecimal ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Decimal</td>
                                                    <td className={classNamesSecondRow.join([' '])}
                                                        colSpan={2}>{coordinateLatitudeDecimal}, {coordinateLongitudeDecimal}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                hasDistance ?
                                                    <>
                                                        {
                                                            distanceInKilometers > 0 ?
                                                                <>
                                                                    <tr>
                                                                        <td className={classNamesFirstRow.join(' ')}>Entfernung</td>
                                                                        <td className={classNamesSecondRow.join([' '])}
                                                                            colSpan={2}
                                                                            title={distanceText}>
                                                                            {distanceInKilometersFormatted}<sup>*)</sup>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className={classNamesFirstRow.join(' ')}>Richtung</td>
                                                                        <td className={classNamesSecondRow.join([' '])}
                                                                            title={distanceText}
                                                                        >
                                                                            {directionTranslation[directionTranslated] ?? 'Unbekannt'}<sup>*)</sup>
                                                                        </td>
                                                                        <td className={classNamesSecondRow.join([' '])}
                                                                            style={{
                                                                                display: "flex",
                                                                                justifyContent: "flex-end"
                                                                            }}>
                                                                            <div
                                                                                className="compass compass-direction shadow-own">
                                                                                <div className="arrow arrow-direction"
                                                                                     data-degree={directionDegree}></div>
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
                                                        <td className={classNamesFirstRow.join(' ')}>Entfernung</td>
                                                        <td className={classNamesSecondRow.join([' '])}
                                                            title={distanceText}>
                                                            Standort des Nutzers ist unbekannt.
                                                        </td>
                                                        <td className={classNamesSecondRow.join([' '])}
                                                            title={distanceText} style={{textAlign: 'right'}}>
                                                            <button
                                                                className="btn btn-outline-primary shadow-own mt-2 mb-2 button-own-position button-minimized"
                                                                onClick={addCurrentPosition}
                                                                title="Bestimme aktuelle Position"
                                                            >
                                                                <CursorFill size={sizeIcon.H3}/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                            }
                                            {
                                                featureClass ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Oberschlüssel</td>
                                                    <td className={classNamesSecondRow.join([' '])} colSpan={2}>
                                                        <code>{featureClass}</code> - {featureClassName}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                featureCode ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Schlüssel</td>
                                                    <td className={classNamesSecondRow.join([' '])} colSpan={2}>
                                                        <code>{featureCode}</code> - {featureCodeName}</td>
                                                </tr> : <></>
                                            }
                                            {
                                                hasTimezone ? <tr>
                                                    <td className={classNamesFirstRow.join(' ')}>Zeitzone</td>
                                                    <td className={classNamesSecondRow.join([' '])}
                                                        colSpan={2}>{timezone} <code>{timezoneOffset}</code></td>
                                                </tr> : <></>
                                            }
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>Geoname ID</td>
                                                <td className={classNamesSecondRow.join([' '])}
                                                    colSpan={2}>{data['geoname-id']}</td>
                                            </tr>
                                            <tr>
                                                <td className={classNamesFirstRow.join(' ')}>Letztes Update</td>
                                                <td className={classNamesSecondRow.join([' '])}
                                                    colSpan={2}>{convertToGermanFormat(data['updated-at'])}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer">
                                        <small><small>
                                            {
                                                distanceInKilometers > 0 ?
                                                    <>
                                                        <sup>*)</sup>&nbsp;
                                                        {distanceText}
                                                    </> :
                                                    null
                                            }
                                        </small></small>
                                    </div>
                                </div>
                            </div>

                            {hasNextPlacesA ? <NextPlaces nextPlaces={nextPlacesA}/> : <></>}
                            {hasNextPlacesP ? <NextPlaces nextPlaces={nextPlacesP}/> : <></>}
                            {hasNextPlacesH ? <NextPlaces nextPlaces={nextPlacesH}/> : <></>}
                            {hasNextPlacesL ? <NextPlaces nextPlaces={nextPlacesL}/> : <></>}
                            {hasNextPlacesR ? <NextPlaces nextPlaces={nextPlacesR}/> : <></>}
                            {hasNextPlacesS ? <NextPlaces nextPlaces={nextPlacesS}/> : <></>}
                            {hasNextPlacesT ? <NextPlaces nextPlaces={nextPlacesT}/> : <></>}
                            {hasNextPlacesU ? <NextPlaces nextPlaces={nextPlacesU}/> : <></>}
                            {hasNextPlacesV ? <NextPlaces nextPlaces={nextPlacesV}/> : <></>}

                            {/* Renders the search performance part. */}
                            <SearchPerformance
                                properties={properties}
                                apiPathWithoutParameter={apiPathWithoutParameter}
                                apiPathWithParameter={apiPathWithParameter}
                            />
                        </> : (error !== null ? <Error error={error} apiPath={properties['api-url']}/> : <Loader/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Location;
