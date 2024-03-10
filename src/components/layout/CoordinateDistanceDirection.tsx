import React from "react";
import {useTranslation} from "react-i18next";

/* Add configurations */
import {sizeIcon} from "../../config/Config";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    Compass, CursorFill,
    Geo
} from "react-bootstrap-icons";

/* Import types */
import {TypeLocationCoordinate} from "../../types/Types";
import LinkV2 from "./LinkV2";
import {Query} from "../../classes/Query";

type CoordinateDistanceDirectionProps = {
    location: TypeLocationCoordinate,
    query?: Query|null,
}

/**
 * This is the coordinate, distance and direction part.
 */
const CoordinateDistanceDirection = ({location, query}: CoordinateDistanceDirectionProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

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
                    query && !hasDistanceUser ? <>
                        <div className="own-position-request float-end" style={{marginLeft: '0.5rem'}}>
                            <LinkV2
                                to={query.getFilterConfig().getLinkCurrent()}
                                useCurrentPosition={true}
                                className="btn btn-outline-primary shadow-own mt-2 mb-2 button-own-position button-minimized"
                                title={t('TEXT_LOCATION_DETERMINE_CURRENT_POSITION')}
                            >
                                <CursorFill size={sizeIcon.H3}/>
                            </LinkV2>&nbsp;
                        </div>
                    </> : null
                }

                {
                    hasDirection || hasDirectionUser ?
                        <>
                            {
                                hasDirectionUser ?
                                    <div className="compass-area float-end" style={{marginLeft: '0.5rem'}}>
                                        <div className="compass compass-direction shadow-own">
                                            <div className="arrow arrow-direction"
                                                 data-degree={degreeUser}
                                            ></div>
                                        </div>
                                    </div> :
                                    <div className="compass-area float-end" style={{marginLeft: '0.5rem'}}>
                                        <div className="compass compass-direction shadow-own">
                                            <div className="arrow arrow-direction"
                                                 data-degree={degree}
                                            ></div>
                                        </div>
                                    </div>
                            }
                        </> :
                        null
                }

                <strong>{t('TEXT_WORD_POSITION')}</strong>:&nbsp;
                <span style={{lineHeight: '10px'}}><Geo size={sizeIcon.TextSmall}/></span>&nbsp;
                <span title={latitudeDecimal}>{latitudeDms}</span>,&nbsp;
                <span title={longitudeDecimal}>{longitudeDms}</span>
                {
                    hasDistance || hasDirection ?
                        <>
                            <br/>
                            <span title={t('TEXT_COORDINATE_DISTANCE_DIRECTION_SEARCH_DISTANCE_DIRECTION')}>
                                <strong>{t('TEXT_WORD_DISTANCE')}</strong>:&nbsp;
                                <sup><Compass size={sizeIcon.TextSmall}/></sup>&nbsp;
                            </span>
                            {
                                hasDistance ?
                                    <span title={t('TEXT_COORDINATE_DISTANCE_DIRECTION_SEARCH_DISTANCE')}>{distance}</span> :
                                    <></>
                            }
                            {
                                hasDirection ?
                                    <span title={t('TEXT_COORDINATE_DISTANCE_DIRECTION_SEARCH_DIRECTION')}> - {direction}</span> :
                                    <></>
                            }
                        </> :
                        <></>
                }
                {
                    hasDistanceUser || hasDirectionUser ?
                        <>
                            <br/>
                            <span title={t('TEXT_COORDINATE_DISTANCE_DIRECTION_OWN_DISTANCE_DIRECTION')}>
                                <strong>{t('TEXT_WORD_DISTANCE_OWN_POSITION')}</strong>:&nbsp;
                                <Compass size={sizeIcon.TextSmall}/>&nbsp;
                            </span>
                            {
                                hasDistanceUser ?
                                    <span title={t('TEXT_COORDINATE_DISTANCE_DIRECTION_OWN_DISTANCE')}>{distanceUser}</span> :
                                    <></>
                            }
                            {
                                hasDirectionUser ?
                                    <span title={t('TEXT_COORDINATE_DISTANCE_DIRECTION_OWN_DIRECTION')}> - {directionUser}</span> :
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
