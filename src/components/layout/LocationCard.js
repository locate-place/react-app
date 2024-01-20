import React from "react";

/* Add some additional components */
import Flag from 'react-flagkit';

/* Add font awesome icons */
import {faMapLocation, faMaximize, faMinimize} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {convertToGermanFormat} from "../../functions/Date";
import {translateCountryCode} from "../../functions/Country";
import CoordinateDistanceDirection from "./CoordinateDistanceDirection";

/**
 * This is the example part.
 *
 * - ownPosition - Use own position instead from the given location.
 */
const LocationCard = ({location, properties, showOwnPosition}) => {
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

    let hasOwnPosition = properties.given && properties.given.coordinate && properties.given.coordinate.location;
    let ownPosition = hasOwnPosition ? properties.given.coordinate.parsed : null;
    let ownPositionLatitudeDecimal = hasOwnPosition ? ownPosition.latitude.decimal : null;
    let ownPositionLongitudeDecimal = hasOwnPosition ? ownPosition.longitude.decimal : null;

    let translations = {
        'airports': 'Flughäfen',
        'churches': 'Kirchen',
        'cinemas': 'Kinos',
        'cities': 'Städte',
        'parks': 'Parke',
        'waters': 'Gewässer',
    }

    let routePath = '/location.html';

    let query = useGeonameIdAsQuery ?
        location['geoname-id'] :
        location.coordinate.latitude.decimal + ',%20' + location.coordinate.longitude.decimal;

    let language = 'de';
    let country = 'DE';

    let fullQuery = routePath +
        '?q=' + query +
        '&language=' + language +
        '&country=' + country +
        (hasOwnPosition ? '&c=' + ownPositionLatitudeDecimal + ',%20' + ownPositionLongitudeDecimal : '');
    ;
    let fullQueryNextPlaces = fullQuery + '&next_places=1';

    return (
        <>
            <div className={'card card-hover w-100 mb-4'} style={showOwnPosition ? {'backgroundColor': 'rgb(235, 233, 228)'} : {'backgroundColor': 'rgb(228, 235, 233)'}}>
                <div className="card-header">
                    <Flag country={location.properties.country} size="20" title={translateCountryCode(location.properties.country)} /> &nbsp;
                    {
                        showOwnPosition ?
                        <span><span className="fw-bold">Aktuelle Position</span>: {location['name-full']}</span> :
                        <span><span className="fw-bold">Treffer</span>: {location.name}</span>
                    }
                </div>
                <div className="card-body">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mb-3">
                                <h4>Informationen</h4>
                                <p className="m-0">
                                    <a
                                        href={fullQueryNextPlaces}
                                    ><nobr><FontAwesomeIcon icon={faMaximize} style={{'color': 'rgb(114, 135, 42)'}}/> Vollständig</nobr></a>, <a
                                    href={fullQuery}
                                >
                                    <nobr><FontAwesomeIcon icon={faMinimize}
                                                           style={{'color': 'rgb(114, 135, 42)'}}/> Einfach
                                    </nobr>
                                </a>
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-3">
                                <h4>Nächste Plätze</h4>
                                <p className="m-0">
                                    {Object.keys(nextPlaces).map((key, index) => {
                                        return (
                                            <span key={'next-place-' + key}>
                                                {index !== 0 ? ', ' : ''}
                                                <a
                                                    key={'next-place-' + key}
                                                    href={'/locations.html?q=' + nextPlaces[key]['feature_codes'].join('|') + '%20' + location.coordinate.latitude.decimal + ',%20' + location.coordinate.longitude.decimal + '&distance=' + nextPlaces[key]['distance'] + '&limit=' + nextPlaces[key]['limit'] + '&language=de&country=DE'}
                                                >{translations.hasOwnProperty(key) ? translations[key] : 'Unbekannt'}</a>
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <h4>Maps</h4>
                                <p className="m-0">
                                <a
                                        href={linkGoogleMaps}
                                        target="_blank"
                                        rel="noreferrer"
                                    ><nobr><FontAwesomeIcon icon={faMapLocation} style={{'color': 'rgb(23, 34, 52)'}}/> Google Maps</nobr></a>, <a
                                        href={linkOpenStreetMaps}
                                        target="_blank"
                                        rel="noreferrer"
                                    ><nobr><FontAwesomeIcon icon={faMapLocation} style={{'color': 'rgb(23, 34, 52)'}}/> OpenStreetMap</nobr></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <small><small>
                        <strong>
                            {location['name-full'] ? location['name-full'] : location.name}
                        </strong><br/>
                        <span>
                            <strong>{location.feature['code-name']}</strong>: {location.feature['class-name']} - <code>{location.feature.class + '::' + location.feature.code}</code>
                        </span>

                        <br/>
                        <span>
                            {
                                showOwnPosition ?
                                    <>
                                        <strong>Position</strong>: <span
                                        title={latitudeDecimal}>{latitudeDms}</span>, <span
                                        title={longitudeDecimal}>{longitudeDms}</span>
                                    </> :
                                    <CoordinateDistanceDirection location={location}/>
                            }
                        </span>

                        <br/>
                        <span>
                            <strong>Letztes Update</strong>: {convertToGermanFormat(location['updated-at'])}
                        </span>
                    </small></small>
                </div>
            </div>
        </>
    )
}

export default LocationCard;
