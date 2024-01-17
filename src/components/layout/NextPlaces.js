import React from "react";
import {convertMeterToKilometer} from "../../functions/Distance";

/**
 * This is the next places part.
 */
const NextPlaces = ({nextPlaces}) =>
{
    let translation = {
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
                translation.hasOwnProperty(nextPlaces.feature['class']) ?
                    (
                        <>
                            <span>
                                {'Nächste ' + translation[nextPlaces.feature['class']]}
                            </span> - <code>{nextPlaces.feature['class']}</code>
                        </>

                    ) :
                    'Unbekannte nächste Orte: ' + nextPlaces.feature['class']
            }</strong></h3>
            <p><small>
                <strong>Suchparameter</strong>: Abstand {convertMeterToKilometer(nextPlaces.config['distance-meter'])} - Limitierung {nextPlaces.config['limit']}
            </small></p>
            <table className="table table-last-line">
                <tbody>
                {nextPlaces.places.map((place, index) =>
                    <tr key={'place-' + nextPlaces.feature['class-name'] + '-' + index}>
                        <td className="column-compass"></td>
                        <td className="column-name">
                            <small>
                                <kbd>{place.feature['code']}</kbd> <strong>{index + 1}) {place.name}</strong><br/>
                                {place.feature['code-name']}
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
                                        ><small>
                                            {place.coordinate.distance.kilometers['value-formatted']}<br/>
                                            - {place.coordinate.direction['cardinal-direction']} -
                                        </small></a>
                                    </td>
                                </> : <></>
                        }
                    </tr>
                )}
                </tbody>
            </table>
        </> :
            <></>
    )
}

export default NextPlaces;
