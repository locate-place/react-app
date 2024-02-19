import React, {useMemo} from "react";
import {useSearchParams} from "react-router-dom";

/* Import translation functions. */
import {useTranslation} from "react-i18next";

/* Import functions */
import {addSoftHyphens} from "../../functions/Text";

/* Import classes. */
import {NextPlaceWrapper} from "../../classes/Api/Location/Location/NextPlaces/NextPlaceWrapper";
import {LocationWrapper} from "../../classes/Api/Location/Location/LocationWrapper";
import {mapTypeGoogle} from "../../config/MapTypes";
import {Query} from "../../classes/Query";

/* Import components. */
import LinkV2 from "./LinkV2";
import CollapsibleCard from "./CollapsibleCard";
import {colorBackgroundNextPlaces} from "../../config/Colors";

/* Argument properties. */
type NextPlacesProps = {
    nextPlace: NextPlaceWrapper|null
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
                <CollapsibleCard title={nextPlace.getFeatureClassCode() + ') ' + nextPlace.getTitle(t)} collapsed={true}
                                 backgroundColor={colorBackgroundNextPlaces} footer={
                    <>
                        <sup>*)</sup> {nextPlace.getConfigDistanceAndDirectionText(t, true)}
                    </>
                } introduction={
                    <p className="m-3"><small>
                        <strong>{t('TEXT_NEXT_PLACE_SEARCH_PARAMS')}</strong>:&nbsp;
                        {t('TEXT_WORD_FEATURE_CLASS')}: <code>{nextPlace.getFeatureClassCode()}</code> -&nbsp;
                        {nextPlace.getConfigDistanceText(t)} -&nbsp;
                        {nextPlace.getConfigLimitationText(t)} -&nbsp;
                        {t('TEXT_NEXT_PLACE_SORTED_BY_DISTANCE_TEXT')} -&nbsp;
                        <LinkV2
                            to={query.getFilterConfig().getLinkNextPlacesList(nextPlace)}
                        >{t('TEXT_NEXT_PLACE_SHOW_LIST_TEXT')}</LinkV2>
                    </small></p>
                }>
                    <div className="next-places">
                        {nextPlace.getPlaces().map((place: LocationWrapper, index: number) =>
                            <div className="container" key={'place-' + nextPlace.getFeatureClassCode() + '-' + index}>
                                <div className="row pt-3">
                                    <div className="col col-compass p-3">
                                        <div className="compass compass-direction shadow-own">
                                            <div
                                                className="arrow arrow-direction"
                                                data-degree={place.getCoordinate().getDirectionDegree()}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col col-content p-3">
                                        <small>
                                            <kbd className="shadow-own">{place.getFeature().getCode().getCode()}</kbd>&nbsp;
                                            <br className="d-block d-sm-none"/><strong
                                            dangerouslySetInnerHTML={{__html: (index + 1) + ') ' + addSoftHyphens(place.getName())}}/><br/>
                                            {place.getFeature().getCode().getName()}
                                            {place.getProperties().getElevationText(place, t, ' - ')}
                                            {place.getProperties().getPopulationText(place, t, ' - ')}
                                        </small>
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
                                                        title={nextPlace.getConfigDistanceAndDirectionText(t)}
                                                    ><small>
                                                        <span className="text-nowrap">
                                                            {place.getCoordinate().getDistanceKilometerFormatted() ?? ''}<sup>*)</sup>
                                                        </span>
                                                        <br/>
                                                        - {place.getCoordinate().getDirectionTranslatedShort() ?? ''} -
                                                    </small></LinkV2>
                                                </div>
                                            </> : <></>
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </CollapsibleCard>
            </> :
            <></>
    )
}

export default NextPlaces;
