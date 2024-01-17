import React from "react";

/* Add some additional components */
import Flag from 'react-flagkit';

/* Add font awesome icons */
import {faMapLocation, faMaximize, faMinimize} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {convertToGermanFormat} from "../../functions/Date";
import {translateCountryCode} from "../../functions/Country";

/**
 * This is the example part.
 */
const LocationCard = ({location, index, urlLocationApi, ownPosition}) => {

    /* true - use geoname id as query; false - use coordinate as query */
    let useGeonameIdAsQuery = true;

    let nextPlaces = location['next-places-config'].config;

    let hasOwnPosition = !!ownPosition;

    let latitudeDms = hasOwnPosition ? ownPosition.latitude.dms : location.coordinate.latitude.dms;
    let longitudeDms = hasOwnPosition ? ownPosition.longitude.dms : location.coordinate.longitude.dms;

    let linkGoogleMaps = location.links.maps.google;
    let linkOpenStreetMaps = location.links.maps.openstreetmap;

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

    let fullQuery = routePath + '?q=' + query + '&language=' + language + '&country=' + country;
    let fullQueryNextPlaces = fullQuery + '&next_places=1';

    return (
        <>
            <div className={'card card-hover w-100 mb-4'} style={hasOwnPosition ? {'backgroundColor': 'rgb(235, 233, 228)'} : {'backgroundColor': 'rgb(228, 235, 233)'}}>
                <div className="card-header">
                    <Flag country={location.properties.country} size="20" title={translateCountryCode(location.properties.country)} /> &nbsp;
                    {
                        hasOwnPosition ?
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
                            <strong>Position</strong>: {latitudeDms}, {longitudeDms}
                            {
                                !hasOwnPosition && location.coordinate.distance ?
                                    <span> - {location.coordinate.distance.kilometers['value-formatted']}</span> :
                                    <></>
                            }
                            {
                                !hasOwnPosition && location.coordinate.direction ?
                                    <span> - {location.coordinate.direction['cardinal-direction']}</span> :
                                    <></>
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
