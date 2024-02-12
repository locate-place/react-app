import React from "react";
import {useSearchParams} from "react-router-dom";

/* Import translation functions. */
import {useTranslation} from "react-i18next";

/* Import functions */
import {getDecimal, getDms} from "../../functions/Coordinate";
import {getElevation, getPopulation} from "../../functions/Properties";
import {addSoftHyphens} from "../../functions/Text";
import {getFilterConfig, redirectNextPlacesList, redirectNextPlacesListWithCoordinate} from "../../functions/QueryFunctions";

/* Import classes. */
import {NextPlaceWrapper} from "../../classes/Location/NextPlaces/NextPlaceWrapper";

/* Argument properties. */
type NextPlacesProps = {
    nextPlace: NextPlaceWrapper|null,
}

/**
 * This is the next places part.
 */
const NextPlaces = ({nextPlace}: NextPlacesProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    let filterConfig = getFilterConfig(searchParams);

    if (nextPlace === null) {
        return <></>;
    }

    const data = nextPlace.get();

    return (
        data.places.length > 0 ?
            <>
                <h3>
                    <strong>
                        <span>{nextPlace.getNextPlacesTitle(t)}</span> - <code>{nextPlace.getFeatureClassCode()}</code>
                    </strong>
                </h3>
                <p><small>
                    <strong>{t('TEXT_NEXT_PLACE_SEARCH_PARAMS')}</strong>:&nbsp;
                    {nextPlace.getConfigDistanceText(t)} -&nbsp;
                    {nextPlace.getConfigLimitationText(t)} -&nbsp;
                    {t('TEXT_NEXT_PLACE_SORTED_BY_DISTANCE_TEXT')} -&nbsp;
                    <button className="link-button" onClick={(e) => {

                        data.config['coordinate-type'] === 'location' ?
                            redirectNextPlacesListWithCoordinate(
                                getDecimal(data.config['coordinate']),
                                filterConfig,
                                data.feature['class'],
                                data.config['distance-meter'].toString(),
                                data.config['limit'].toString()
                            ) :
                            redirectNextPlacesList(
                                filterConfig,
                                data.feature['class'],
                                data.config['distance-meter'].toString(),
                                data.config['limit'].toString()
                            )
                        ;
                        e.preventDefault();
                    }}>{t('TEXT_NEXT_PLACE_SHOW_LIST_TEXT')}</button>
                </small></p>
                <table className="table table-last-line">
                    <tbody>
                        {data.places.map((place: any, index: number) =>
                            <tr key={'place-' + data.feature['class-name'] + '-' + index}>
                                <td className="table-compass">
                                    <div className="compass compass-direction shadow-own">
                                        <div className="arrow arrow-direction" data-degree={place.coordinate.direction['degree']}></div>
                                    </div>
                                </td>
                                <td className="column-name">
                                    <small>
                                    <kbd className="shadow-own">{place.feature['code']}</kbd> <br className="d-block d-sm-none" /><strong dangerouslySetInnerHTML={{__html: (index + 1) + ') ' + addSoftHyphens(place.name)}} /><br/>
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
                                                    className="btn btn-primary shadow-own"
                                                    href={place.links.maps.google}
                                                    target={'_blank'}
                                                    rel="noreferrer"
                                                    title={nextPlace.getConfigDistanceAndDirectionText(t)}
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
                    <sup>*)</sup> {nextPlace.getConfigDistanceAndDirectionText(t, true)}
                </small></p>
            </> :
            <></>
    )
}

export default NextPlaces;
