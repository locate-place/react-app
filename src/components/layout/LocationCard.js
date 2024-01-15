import React from "react";

/* Add some additional components */
import Flag from 'react-flagkit';

/* Add font awesome icons */
import {faMapLocation, faMaximize, faMinimize} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * This is the example part.
 */
const LocationCard = ({location, index, urlLocationApi, ownPosition}) => {

    let nextPlaces = location['next-places-config'].config;
    let endpoints = location['next-places-config'].endpoints;

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

    /**
     * This function is used to convert the date and time into a German format.
     *
     * @param dateTimeString
     * @returns {`${string}${number}.${string}${number}.${number} ${string}${number}:${string}${number}`}
     */
    let convertToGermanFormat = (dateTimeString) => {
        /* Convert date and time into a Date object */
        const dateTime = new Date(dateTimeString);

        // Extract day, month, and year
        const day = dateTime.getDate();
        const month = dateTime.getMonth() + 1; // Months are 0-based
        const year = dateTime.getFullYear();

        // Extract hour and minute
        const hour = dateTime.getHours();
        const minute = dateTime.getMinutes();

        // Create the German format: DD.MM.YYYY HH:MM:SS Timezone
        return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year} ${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`;
    }

    return (
        <>
            <div className={'card card-hover w-100 mb-4'} style={hasOwnPosition ? {'backgroundColor': 'rgb(235, 233, 228)'} : {}}>
                <div className="card-header">
                    <Flag country={location.properties.country} size="20" title={location.properties.country} /> &nbsp;
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
                                        href={urlLocationApi + endpoints.coordinate + '?q=' + location.coordinate.latitude.decimal + ',%20' + location.coordinate.longitude.decimal + '&language=en&country=US'}
                                        target="_blank"
                                        rel="noreferrer"
                                    ><nobr><FontAwesomeIcon icon={faMinimize} style={{'color': 'rgb(114, 135, 42)'}}/> Basic</nobr></a>, <a
                                        href={urlLocationApi + endpoints.coordinate + '?q=' + location.coordinate.latitude.decimal + ',%20' + location.coordinate.longitude.decimal + '&language=en&country=US&next_places'}
                                        target="_blank"
                                        rel="noreferrer"
                                    ><nobr><FontAwesomeIcon icon={faMaximize} style={{'color': 'rgb(114, 135, 42)'}}/> Vollständig</nobr></a>
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
