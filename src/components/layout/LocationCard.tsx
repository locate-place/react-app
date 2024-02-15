import React, {useMemo} from "react";
import {Link, useSearchParams} from "react-router-dom";

/* Import translation libraries. */
import {useTranslation} from "react-i18next";

/* Add some additional components */
import Flag from 'react-flagkit';

/* Add font awesome icons */
import {faMapLocation, faMaximize} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/* Import functions */
import {convertToGermanFormat} from "../../functions/Date";
import {getAirportCodeIata, getElevation, getPopulation} from "../../functions/Properties";

/* Add translations */
import {translateCountryCode} from "../../translations/Country";

/* Add component parts */
import CoordinateDistanceDirection from "./CoordinateDistanceDirection";

/* Import classes. */
import {Query} from "../../classes/Query";

type LocationCardProps = {
    location: any,
    properties: any,
    showOwnPosition: boolean,
    index?: number,
    useAlwaysName?: boolean
}

/**
 * This is the example part.
 *
 * - ownPosition - Use own position instead of the one from the given location.
 */
const LocationCard = ({location, properties, showOwnPosition, index, useAlwaysName = false}: LocationCardProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* true - use geoname id as query; false - use coordinate as query */
    let useGeonameIdAsQuery = true;

    let nextPlaces = location['next-places-config'].config;

    /* Use own position or from the given location. */
    let ownPositionCard = showOwnPosition? properties.given.coordinate.parsed : null;
    let latitudeDms = showOwnPosition ? ownPositionCard.latitude.dms : location.coordinate.latitude.dms;
    let longitudeDms = showOwnPosition ? ownPositionCard.longitude.dms : location.coordinate.longitude.dms;
    let latitudeDecimal = showOwnPosition ? ownPositionCard.latitude.decimal : location.coordinate.latitude.decimal;
    let longitudeDecimal = showOwnPosition ? ownPositionCard.longitude.decimal : location.coordinate.longitude.decimal;
    let linkGoogleMaps = showOwnPosition ? ownPositionCard.links.google : location.links.maps.google;
    let linkOpenStreetMaps = showOwnPosition ? ownPositionCard.links.openstreetmap : location.links.maps.openstreetmap;

    let airportCodeIata = getAirportCodeIata(location);

    /* API types */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    let query = new Query(searchParams, env);

    let filterConfig = query.getFilterConfig();

    let queryString = useGeonameIdAsQuery ?
        location['geoname-id'] :
        location.coordinate.latitude.decimal + ',%20' + location.coordinate.longitude.decimal;

    let name = useAlwaysName ? location.name : (location['name-full'] || location.name);

    return (
        <>
            <div className={'card card-hover w-100 mb-4'}
                 style={showOwnPosition ? {'backgroundColor': 'rgb(235, 233, 228)'} : {'backgroundColor': 'rgb(228, 235, 233)'}}>
                <div className="card-header">
                    <Flag country={location.properties.country} size={20}
                          title={translateCountryCode(location.properties.country)}/> &nbsp;
                    {
                        showOwnPosition ?
                            <span><span className="fw-bold">{name}</span></span> :
                            <span><span className="fw-bold">{name}</span>{index !== undefined ? <sup>&nbsp;(#{index + 1})</sup> : null}</span>
                    }
                    {
                        airportCodeIata !== null ?
                            <><span> - </span><code title="IATA-Code">{airportCodeIata}</code></> :
                            <></>
                    }
                </div>
                <div className="card-body">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mb-3">
                                <h4>{t('TEXT_HEADER_INFORMATION')}</h4>
                                <p className="m-0">
                                    <Link
                                        to={filterConfig.getLinkLocationQuery(queryString)}
                                    ><span><FontAwesomeIcon
                                        icon={faMaximize}
                                        style={{'color': 'rgb(114, 135, 42)'}}
                                    /> {name}</span></Link>
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-3">
                                <h4>{t('TEXT_HEADER_NEXT_PLACES')}</h4>
                                <p className="m-0">
                                    {Object.keys(nextPlaces).map((key, index) => {
                                        return (
                                            <span key={'next-place-' + key}>
                                                {index !== 0 ? ', ' : ''}
                                                <Link
                                                    key={'next-place-' + key}
                                                    to={filterConfig.getLinkNextPlaces(
                                                        nextPlaces[key]['feature_codes'].join('|') + ' ' + location.coordinate.latitude.decimal + ', ' + location.coordinate.longitude.decimal,
                                                        nextPlaces[key]['distance'],
                                                        nextPlaces[key]['limit']
                                                    )}
                                                >{t('TEXT_LOCATION_CARD_' + key.toUpperCase())}</Link>
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <h4>{t('TEXT_HEADER_MAPS')}</h4>
                                <p className="m-0">
                                    <Link
                                        to={linkGoogleMaps}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="text-nowrap">
                                            <FontAwesomeIcon icon={faMapLocation} style={{'color': 'rgb(23, 34, 52)'}}/> Google Maps
                                        </span>
                                    </Link>,
                                    <Link
                                        to={linkOpenStreetMaps}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="text-nowrap">
                                            <FontAwesomeIcon icon={faMapLocation} style={{'color': 'rgb(23, 34, 52)'}}/> OpenStreetMap
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <small><small>
                        <strong>
                            {location['name-full'] ? location['name-full'] : location.name}
                        </strong>
                        {getElevation(location, ' - ')}
                        {getPopulation(location, ' - ')}
                        {
                            airportCodeIata !== null ?
                                <><span> - </span><code title="IATA-Code">{airportCodeIata}</code></> :
                                <></>
                        }
                        <br/>
                        <span>
                            <strong>{location.feature['code-name']}</strong>: {location.feature['class-name']} - <code>{location.feature.class + '::' + location.feature.code}</code>
                        </span>

                        <br/>
                        <span>
                            <strong>Letztes Update</strong>: {convertToGermanFormat(location['updated-at'])}
                        </span>
                    </small></small>
                </div>
                <div className="card-footer"><small><small>
                    {
                        showOwnPosition ?
                            <>
                                <strong>Position</strong>: <span
                                title={latitudeDecimal}>{latitudeDms}</span>, <span
                                title={longitudeDecimal}>{longitudeDms}</span>
                            </> :
                            <CoordinateDistanceDirection location={location}/>
                    }
                </small></small></div>
            </div>
        </>
    )
}

export default LocationCard;
