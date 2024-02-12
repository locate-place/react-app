import React, {useMemo} from "react";
import {Link, useSearchParams} from "react-router-dom";

/* Import translation functions. */
import {useTranslation} from "react-i18next";

/* Import functions */
import {addSoftHyphens} from "../../functions/Text";

/* Import classes. */
import {NextPlaceWrapper} from "../../classes/Location/NextPlaces/NextPlaceWrapper";
import {LocationWrapper} from "../../classes/Location/LocationWrapper";
import {mapTypeGoogle} from "../../config/MapTypes";
import {Query} from "../../classes/Query";

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

    /* API types */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    if (nextPlace === null) {
        return <></>;
    }

    let query = new Query(searchParams, env);

    return (
        nextPlace.hasPlaces() ?
            <>
                <h3>
                    <strong>
                        <span>{nextPlace.getTitle(t)}</span> - <code>{nextPlace.getFeatureClassCode()}</code>
                    </strong>
                </h3>
                <p><small>
                    <strong>{t('TEXT_NEXT_PLACE_SEARCH_PARAMS')}</strong>:&nbsp;
                    {nextPlace.getConfigDistanceText(t)} -&nbsp;
                    {nextPlace.getConfigLimitationText(t)} -&nbsp;
                    {t('TEXT_NEXT_PLACE_SORTED_BY_DISTANCE_TEXT')} -&nbsp;
                    <Link to={query.getFilterConfig().getNextPlacesListLink(nextPlace)}>{t('TEXT_NEXT_PLACE_SHOW_LIST_TEXT')}</Link>
                </small></p>
                <table className="table table-last-line">
                    <tbody>
                        {nextPlace.getPlaces().map((place: LocationWrapper, index: number) =>
                            <tr key={'place-' + nextPlace.getFeatureClassCode() + '-' + index}>
                                <td className="table-compass">
                                    <div className="compass compass-direction shadow-own">
                                        <div
                                            className="arrow arrow-direction"
                                            data-degree={place.getCoordinate().getDirectionDegree()}
                                        ></div>
                                    </div>
                                </td>
                                <td className="column-name">
                                    <small>
                                        <kbd className="shadow-own">{place.getFeature().getCode().getCode()}</kbd> <br
                                        className="d-block d-sm-none"/><strong
                                        dangerouslySetInnerHTML={{__html: (index + 1) + ') ' + addSoftHyphens(place.getName())}}/><br/>
                                        {place.getFeature().getCode().getName()}
                                        {place.getProperties().getElevationText(place, t, ' - ')}
                                        {place.getProperties().getPopulationText(place, t, ' - ')}
                                    </small>
                                </td>

                                {
                                    place.getCoordinate().hasDistance() ?
                                        <>
                                            <td className="column-value">
                                                <a
                                                    className="btn btn-primary shadow-own"
                                                    href={place.getLinks().getMaps(mapTypeGoogle) ?? ''}
                                                    target={'_blank'}
                                                    rel="noreferrer"
                                                    title={nextPlace.getConfigDistanceAndDirectionText(t)}
                                                ><small>
                                                    <span className="text-nowrap">
                                                        {place.getCoordinate().getDistanceKilometerFormatted() ?? ''}<sup>*)</sup>
                                                    </span>
                                                    <br/>
                                                    - {place.getCoordinate().getDirectionTranslatedShort() ?? ''} -
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
