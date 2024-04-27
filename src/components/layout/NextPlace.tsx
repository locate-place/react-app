import React from "react";

/* Import translation functions. */
import {useTranslation} from "react-i18next";

/* Import functions */
import {addSoftHyphens} from "../../functions/Text";
import {getLocationJsxText} from "../../functions/LocationTexts";

/* Import configuration. */
import {mapTypeGoogle} from "../../config/MapTypes";

/* Import classes. */
import {CoordinateParsedWrapper} from "../../classes/Api/Base/Given/Coordinate/Parsed/CoordinateParsedWrapper";
import {LocationWrapper} from "../../classes/Api/Location/Location/LocationWrapper";
import {FilterConfig} from "../../classes/FilterConfig";
import {NextPlaceWrapper} from "../../classes/Api/Location/Location/NextPlaces/NextPlaceWrapper";

/* Import components. */
import LinkV2 from "./LinkV2";
import Flag from "./Flag";
import {
    classUserDegree,
    classUserDirectionShort,
    classUserDistance,
    classUserNoDistance, updateUserPosition
} from "../../functions/Position";

/* Argument properties. */
type NextPlaceProps = {
    index: number,
    featureClassCode: string,
    place: LocationWrapper
    filterConfig: FilterConfig,
    nextPlace: NextPlaceWrapper,
    showUserDistance: boolean,
    currentPosition: CoordinateParsedWrapper|null,
    lastElement: boolean
}

/**
 * This is the next places part.
 */
const NextPlace = ({index, featureClassCode, place, filterConfig, nextPlace, showUserDistance, currentPosition, lastElement}: NextPlaceProps) =>
{
    const hasCurrentPosition = currentPosition !== null;

    const visible = (hasCurrentPosition && showUserDistance) || (!hasCurrentPosition && !showUserDistance);

    /* Import translation. */
    const { t } = useTranslation();

    return (
        <>
            <div className={'container ' + (lastElement ? 'container-last ' : '') + (hasCurrentPosition ? 'next-place-current' : 'next-place-search')} style={visible ? {'display': 'block'} : {'display': 'none'}} key={'place-' + featureClassCode + '-' + index}>
                <div className="row pt-3">
                    <div className="col col-compass p-3">
                        <div className="compass compass-direction shadow-own" title={t('TEXT_COORDINATE_DISTANCE_DIRECTION_SEARCH_DIRECTION')}>
                            <div
                                className={'arrow arrow-direction' + (hasCurrentPosition ? ' ' + classUserDegree : '')}
                                data-degree={(hasCurrentPosition ? place.getCoordinate().getDirectionUserDegree() : place.getCoordinate().getDirectionDegree())}
                                data-latitude={place.getCoordinate().getLatitudeDecimal()}
                                data-longitude={place.getCoordinate().getLongitudeDecimal()}
                                onClick={() => { hasCurrentPosition && updateUserPosition(t) }}
                            ></div>
                        </div>
                    </div>
                    <div className="col col-content p-3">
                        <LinkV2
                            to={filterConfig.getLinkLocationQuery(place.getGeonameId().toString())}
                            scrollTo={0}
                        >
                            <Flag
                                country={place.getProperties().getCountryCode()}
                                size={0.8}
                            /> &nbsp;
                            <span className="fw-bold" dangerouslySetInnerHTML={{__html: addSoftHyphens(place.getName())}}/>
                            <span className="fw-bold"><sup>&nbsp;(#{index + 1})</sup></span>
                        </LinkV2><br/>
                        {place.getFeature().getCode().getName()}
                        {getLocationJsxText(place, t)}
                        &nbsp;- <code>{place.getFeature().getCode().getCode()}</code>
                    </div>

                    {
                        place.getCoordinate().hasDistance() ?
                            <>
                                <div className="col p-3 col-coordinate text-end">
                                    <LinkV2
                                        className="btn btn-primary shadow-own"
                                        to={place.getLinks().getMaps(mapTypeGoogle) ?? ''}
                                        target={'_blank'}
                                        rel="noreferrer"
                                        title={hasCurrentPosition ? nextPlace.getConfigDistanceAndDirectionTextPosition(t, currentPosition) : nextPlace.getConfigDistanceAndDirectionText(t)}
                                    ><small>
                                        <span className="text-nowrap">
                                            {
                                                hasCurrentPosition && <>
                                                    <span
                                                        className={[classUserDistance, classUserNoDistance].join(' ')}
                                                        data-latitude={place.getCoordinate().getLatitudeDecimal()}
                                                        data-longitude={place.getCoordinate().getLongitudeDecimal()}
                                                    >{place.getCoordinate().getDistanceUserKilometerFormatted()}</span>
                                                    <sup>**)</sup>
                                                </>
                                            }
                                            {
                                                !hasCurrentPosition && <>
                                                    <span>{place.getCoordinate().getDistanceKilometerFormatted()}</span>
                                                    <sup>*)</sup>
                                                </>
                                            }
                                        </span>
                                        <br/>
                                        {
                                            hasCurrentPosition && <>
                                                - <span
                                                      className={[classUserDirectionShort, classUserNoDistance].join(' ')}
                                                      data-latitude={place.getCoordinate().getLatitudeDecimal()}
                                                      data-longitude={place.getCoordinate().getLongitudeDecimal()}
                                                  >
                                                    { place.getCoordinate().getDirectionUserTranslatedShort() ?? '' }
                                                </span> -
                                            </>
                                        }
                                        {
                                            !hasCurrentPosition && <>
                                                - <span>
                                                    { place.getCoordinate().getDirectionTranslatedShort() ?? '' }
                                                </span> -
                                            </>
                                        }
                                    </small></LinkV2>
                                </div>
                            </> : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default NextPlace;
