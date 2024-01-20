import React, {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from "react-router-dom";

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

/**
 * This is the app locations component.
 */
const Location = () =>
{
    /* Routes variables */
    const routePath = '/location.html';

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
    let coordinateLatitudeDecimal = hasCoordinate && data.coordinate.latitude ? data.coordinate.latitude.decimal : null;
    let coordinateLatitudeDms = hasCoordinate && data.coordinate.latitude ? data.coordinate.latitude.dms : null;
    let coordinateLongitudeDecimal = hasCoordinate && data.coordinate.longitude ? data.coordinate.longitude.decimal : null;
    let coordinateLongitudeDms = hasCoordinate && data.coordinate.longitude ? data.coordinate.longitude.dms : null;
    let distanceInKilometers = hasCoordinate && data.coordinate['distance-user'] ? data.coordinate['distance-user'].kilometers['value-formatted'] : null;
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

    console.log(data);


    let filterConfig = getFilterConfig(searchParams);
    let addCurrentPosition = (e) => {
        addCurrentPositionToQuery(filterConfig);
    }

    console.log(data);

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
            setProperties
        );
    }, [typeLocationApi, apiPathWithParameter]);

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
                            query={query}
                            routePath={routePath}
                        />

                        {loaded ? <>
                            {/* Renders the search metrics part. */}
                            <SearchMetrics properties={properties} />

                            <div>
                                <h2>
                                    <Flag country={propertyCountryCode} size="20" title={translateCountryCode(propertyCountryCode)} /> &nbsp;
                                    {data.name}
                                </h2>

                                <table className="table table-last-line">
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold">Vollständiger Name</td>
                                            <td colSpan={2}>{data['name-full']}</td>
                                        </tr>
                                        {
                                            locationDistrictLocality ? <tr>
                                                <td className="fw-bold">Stadtteil / Ortschaft</td>
                                                <td colSpan={2}>{locationDistrictLocality.name}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            locationCityMunicipality ? <tr>
                                                <td className="fw-bold">Stadt / Gemeinde</td>
                                                <td colSpan={2}>{locationCityMunicipality.name}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            locationState ? <tr>
                                                <td className="fw-bold">Bundesland</td>
                                                <td colSpan={2}>{locationState.name}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            locationCountry ? <tr>
                                                <td className="fw-bold">Land</td>
                                                <td colSpan={2}>{locationCountry.name}</td>
                                            </tr> : <></>
                                        }
                                        <tr>
                                            <td className="fw-bold">Ländercode</td>
                                            <td colSpan={2}>{propertyCountryCode}</td>
                                        </tr>
                                        {
                                            hasPropertyElevation ? <tr>
                                                <td className="fw-bold">Höhe</td>
                                                <td colSpan={2}>{propertyElevation}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            coordinateLatitudeDecimal ? <tr>
                                                <td className="fw-bold">Latitude</td>
                                                <td>{coordinateLatitudeDms}</td>
                                                <td>{coordinateLatitudeDecimal}°</td>
                                            </tr> : <></>
                                        }
                                        {
                                            coordinateLongitudeDecimal ? <tr>
                                                <td className="fw-bold">Longitude</td>
                                                <td>{coordinateLongitudeDms}</td>
                                                <td>{coordinateLongitudeDecimal}°</td>
                                            </tr> : <></>
                                        }
                                        {
                                            distanceInKilometers ? <tr>
                                                <td className="fw-bold">Entfernung</td>
                                                <td colSpan={2} title={distanceText}>{distanceInKilometers}&nbsp;
                                                    <sup><small>({distanceText})</small></sup></td>
                                            </tr> : <tr>
                                                <td className="fw-bold">Entfernung</td>
                                                <td colSpan={2} title={distanceText}>
                                                    Aktuelle Position ist unbekannt.<br/>
                                                    <br/>
                                                    <button
                                                        className="btn btn-outline-primary"
                                                        onClick={addCurrentPosition}
                                                    >Bestimme aktuelle Position
                                                    </button>
                                                </td>
                                            </tr>
                                        }
                                        {
                                            featureClass ? <tr>
                                                <td className="fw-bold">Oberschlüssel</td>
                                                <td><code>{featureClass}</code></td>
                                                <td>{featureClassName}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            featureCode ? <tr>
                                                <td className="fw-bold">Schlüssel</td>
                                                <td><code>{featureCode}</code></td>
                                                <td>{featureCodeName}</td>
                                            </tr> : <></>
                                        }
                                        {
                                            hasTimezone ? <tr>
                                                <td className="fw-bold">Zeitzone</td>
                                                <td colSpan={2}>{timezone} <code>{timezoneOffset}</code></td>
                                            </tr> : <></>
                                        }
                                        <tr>
                                            <td className="fw-bold">Geoname ID</td>
                                            <td colSpan={2}>{data['geoname-id']}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Letztes Update</td>
                                            <td colSpan={2}>{convertToGermanFormat(data['updated-at'])}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {hasNextPlacesA ? <NextPlaces nextPlaces={nextPlacesA} /> : <></>}
                            {hasNextPlacesP ? <NextPlaces nextPlaces={nextPlacesP} /> : <></>}
                            {hasNextPlacesH ? <NextPlaces nextPlaces={nextPlacesH} /> : <></>}
                            {hasNextPlacesL ? <NextPlaces nextPlaces={nextPlacesL} /> : <></>}
                            {hasNextPlacesR ? <NextPlaces nextPlaces={nextPlacesR} /> : <></>}
                            {hasNextPlacesS ? <NextPlaces nextPlaces={nextPlacesS} /> : <></>}
                            {hasNextPlacesT ? <NextPlaces nextPlaces={nextPlacesT} /> : <></>}
                            {hasNextPlacesU ? <NextPlaces nextPlaces={nextPlacesU} /> : <></>}
                            {hasNextPlacesV ? <NextPlaces nextPlaces={nextPlacesV} /> : <></>}

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
