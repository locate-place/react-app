import React from "react";

/* Add configurations */
import {sizeIcon} from "../../config/Config";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    Compass,
    Geo
} from "react-bootstrap-icons";

/* Import types */
import {TypeLocationCoordinate} from "../../types/Types";

type CoordinateDistanceDirectionProps = {
    location: TypeLocationCoordinate,
}

/**
 * This is the coordinate, distance and direction part.
 */
const CoordinateDistanceDirection = ({location}: CoordinateDistanceDirectionProps) => {
    const hasCoordinate: boolean = !!location.coordinate;
    const latitudeDms: string = hasCoordinate ? location.coordinate.latitude.dms : '';
    const longitudeDms: string = hasCoordinate ? location.coordinate.longitude.dms : '';
    const latitudeDecimal: string = hasCoordinate ? location.coordinate.latitude.decimal.toString() : '';
    const longitudeDecimal: string = hasCoordinate ? location.coordinate.longitude.decimal.toString() : '';

    const nameDistance: 'distance' = 'distance';
    const nameDirection: 'direction' = 'direction';
    const hasDistance: boolean = !!location.coordinate[nameDistance];
    const distance: string = !!location.coordinate[nameDistance] ? location.coordinate[nameDistance].kilometers['value-formatted'] : '';
    const hasDirection: boolean = !!location.coordinate[nameDirection];
    const direction: string = !!location.coordinate[nameDirection]? location.coordinate[nameDirection]['cardinal-direction'] : '';
    const degree: number|null = !!location.coordinate[nameDirection] ? location.coordinate[nameDirection]['degree'] : null;

    const nameDistanceUser: 'distance-user' = 'distance-user';
    const nameDirectionUser: 'direction-user' = 'direction-user';
    const hasDistanceUser: boolean = !!location.coordinate[nameDistanceUser];
    const distanceUser: string = !!location.coordinate[nameDistanceUser] ? location.coordinate[nameDistanceUser].kilometers['value-formatted'] : '';
    const hasDirectionUser: boolean = !!location.coordinate[nameDirectionUser];
    const directionUser: string = !!location.coordinate[nameDirectionUser] ? location.coordinate[nameDirectionUser]['cardinal-direction'] : '';
    const degreeUser: number|null = !!location.coordinate[nameDirectionUser] ? location.coordinate[nameDirectionUser]['degree'] : null;

    return (
        hasCoordinate ?
            <>
                {
                    hasDirection || hasDirectionUser ?
                        <>
                            {
                                hasDirectionUser ?
                                    <>
                                        <div className="compass-area float-end" style={{marginLeft: '1rem'}}>
                                            <div className="compass compass-direction shadow-own">
                                                <div className="arrow arrow-direction"
                                                     data-degree={degreeUser}
                                                ></div>
                                            </div>
                                        </div>
                                    </> :
                                    <>
                                        <div className="compass-area">
                                            <div className="compass compass-direction shadow-own">
                                                <div className="arrow arrow-direction"
                                                     data-degree={degree}
                                                ></div>
                                            </div>
                                        </div>
                                    </>
                            }
                        </> :
                        <></>
                }

                <strong>Position</strong>:&nbsp;
                <span style={{lineHeight: '10px'}}><Geo size={sizeIcon.TextSmall}/></span>&nbsp;
                <span title={latitudeDecimal}>{latitudeDms}</span>,&nbsp;
                <span title={longitudeDecimal}>{longitudeDms}</span>
                {
                    hasDistance || hasDirection ?
                        <>
                            <br/>
                            <span title="Abstand und Richtung zur gesuchten Position">
                                <strong>Abstand</strong>:&nbsp;
                                <sup><Compass size={sizeIcon.TextSmall}/></sup>&nbsp;
                            </span>
                            {
                                hasDistance ?
                                    <span title="Abstand zur gesuchten Position">{distance}</span> :
                                    <></>
                            }
                            {
                                hasDirection ?
                                    <span title="Richtung zur gesuchten Position"> - {direction}</span> :
                                    <></>
                            }
                        </> :
                        <></>
                }
                {
                    hasDistanceUser || hasDirectionUser ?
                        <>
                            <br/>
                            <span title="Abstand und Richtung zur eigenen Position">
                                <strong>Abstand eigene Postion</strong>:&nbsp;
                                <Compass size={sizeIcon.TextSmall}/>&nbsp;
                            </span>
                            {
                                hasDistanceUser ?
                                    <span title="Abstand zur eigenen Position">{distanceUser}</span> :
                                    <></>
                            }
                            {
                                hasDirectionUser ?
                                    <span title="Richtung zur eigenen Position"> - {directionUser}</span> :
                                    <></>
                            }
                        </> :
                        <></>
                }
            </> :
            <></>
    )
}

export default CoordinateDistanceDirection;
