import React from "react";

/* Add functions */
import {convertMeterToKilometer} from "../../functions/Distance.ts";
import {getDms} from "../../functions/Coordinate.ts";
import {getElevation, getPopulation} from "../../functions/Properties.ts";

type NextPlacesProps = {
    nextPlaces: any,
}

/**
 * This is the next places part.
 */
const NextPlaces = ({nextPlaces}: NextPlacesProps) =>
{
    type TypeTranslation = {
        H: string,
        L: string,
        P: string,
        R: string,
        S: string,
        T: string,
        U: string,
        V: string
    }

    let translations: TypeTranslation = {
        H: 'Flüsse, Seen',
        L: 'Parks oder Flächen',
        P: 'Städte, Stadtteile oder Ortschaften',
        R: 'Straßen, Schienenwege',
        S: 'Orte, Hotels, Gebäude oder Farmen',
        T: 'Berge, Hügel, Felsen oder Strände',
        U: 'Unterwasserwelten',
        V: 'Wälder oder Heiden'
    };

    return (
        nextPlaces.places.length > 0 ?
            <>
                <h3><strong>{
                    translations.hasOwnProperty(nextPlaces.feature['class']) ?
                        (
                            <>
                            <span>
                                {'Nächste ' + (translations[nextPlaces.feature['class'] as keyof TypeTranslation] ?? 'Unbekannt')}
                            </span> - <code>{nextPlaces.feature['class']}</code>
                            </>

                        ) :
                        'Unbekannte nächste Orte: ' + nextPlaces.feature['class']
                }</strong></h3>
                <p><small>
                    <strong>Suchparameter</strong>:&nbsp;
                    Abstand {convertMeterToKilometer(nextPlaces.config['distance-meter'])} -&nbsp;
                    Limitierung {nextPlaces.config['limit']}
                </small></p>
                <table className="table table-last-line">
                    <tbody>
                        {nextPlaces.places.map((place: any, index: string) =>
                            <tr key={'place-' + nextPlaces.feature['class-name'] + '-' + index}>
                                <td className="column-compass"></td>
                                <td className="column-name">
                                    <small>
                                        <kbd>{place.feature['code']}</kbd> <strong>{index + 1}) {place.name}</strong><br/>
                                        {place.feature['code-name']}
                                        {getElevation(place, ' - ')}
                                        {getPopulation(place, ' - ')}
                                    </small>
                                </td>

                                {
                                    place.coordinate.distance ?
                                        <>
                                            <td className="column-value">
                                                <a
                                                    className="btn btn-primary"
                                                    href={place.links.maps.google}
                                                    target={'_blank'}
                                                    rel='noreferrer'
                                                    title={
                                                        'Abstand und Richtung entsprechend ' +
                                                        (
                                                            nextPlaces.config['coordinate-type'] === 'location' ?
                                                                'dem angezeigtem Ort ' + nextPlaces.config['location']['name'] + ' ' + getDms(nextPlaces.config['coordinate']) :
                                                                'der Location vom Suchquery ' + getDms(nextPlaces.config['coordinate'])
                                                        )
                                                    }
                                                ><small>
                                                    <span className="text-nowrap">
                                                        {place.coordinate.distance.kilometers['value-formatted']}<sup>*)</sup>
                                                    </span>
                                                    <br/>
                                                    - {place.coordinate.direction['cardinal-direction']} -
                                                </small></a>
                                            </td>
                                        </> : <></>
                                }
                            </tr>
                        )}
                    </tbody>
                </table>
                <p><small>
                    <sup>*)</sup>
                    Alle Abstände und Richtungen entsprechend {
                        nextPlaces.config['coordinate-type'] === 'location' ?
                            <>
                                {'dem angezeigtem Ort'} "<strong>{nextPlaces.config['location']['name']}</strong>" ({getDms(nextPlaces.config['coordinate'])})
                            </> :
                            <>
                                {'der Location vom Suchquery'} {getDms(nextPlaces.config['coordinate'])}
                            </>
                    }.
                </small></p>
            </> :
            <></>
    )
}

export default NextPlaces;
