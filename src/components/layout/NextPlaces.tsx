import React, {useMemo} from "react";
import {useSearchParams} from "react-router-dom";

/* Import translation functions. */
import {useTranslation} from "react-i18next";

/* Import classes. */
import {NextPlaceWrapper} from "../../classes/Api/Location/Location/NextPlaces/NextPlaceWrapper";
import {LocationWrapper} from "../../classes/Api/Location/Location/LocationWrapper";
import {CoordinateParsedWrapper} from "../../classes/Api/Base/Given/Coordinate/Parsed/CoordinateParsedWrapper";
import {Query} from "../../classes/Query";

/* Import components. */
import LinkV2 from "./LinkV2";
import CollapsibleCard from "./CollapsibleCard";
import {colorBackgroundNextPlaces} from "../../config/Colors";
import NextPlace from "./NextPlace";
import {classUserPositionDms, updateUserPosition} from "../../functions/Position";

/* Argument properties. */
type NextPlacesProps = {
    nextPlace: NextPlaceWrapper|null,
    showUserDistance: boolean,
    currentPosition?: CoordinateParsedWrapper|null
}

/**
 * This is the next places part.
 */
const NextPlaces = ({nextPlace, showUserDistance, currentPosition = null}: NextPlacesProps) =>
{
    const hasCurrentPosition = currentPosition !== null;

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

    /* Gets the Query class to have access to the filter config. */
    let query = new Query(searchParams, env);
    let filterConfig = query.getFilterConfig();

    if (!nextPlace.hasPlaces()) {
        return <></>;
    }

    return (
        <CollapsibleCard
            title={nextPlace.getFeatureClassCode() + ') ' + nextPlace.getTitle(t)} collapsed={true}
            backgroundColor={colorBackgroundNextPlaces}
            footer={
                showUserDistance ?
                    <div className={'next-place-current'}>
                        <sup>**)</sup> {nextPlace.getConfigDistanceAndDirectionTextPositionText(t)}:&nbsp;
                        <span
                            className={classUserPositionDms}
                            data-latitude={currentPosition?.getLatitude().getDecimal() ?? null}
                            data-longitude={currentPosition?.getLongitude().getDecimal() ?? null}
                            onClick={() => { updateUserPosition(t) }}
                        >{nextPlace.getConfigDistanceAndDirectionTextPositionCoordinate(currentPosition)}</span>
                    </div> :
                    <div className={'next-place-search'}>
                        <sup>*)</sup> {nextPlace.getConfigDistanceAndDirectionText(t, true)}
                    </div>
            }
            epilogue={
                <>
                    <strong>{t('TEXT_NEXT_PLACE_SEARCH_PARAMS')}</strong>:&nbsp;
                    {t('TEXT_WORD_FEATURE_CLASS')}: <code>{nextPlace.getFeatureClassCode()}</code> -&nbsp;
                    {nextPlace.getConfigDistanceText(t)} -&nbsp;
                    {nextPlace.getConfigLimitationText(t)} -&nbsp;
                    {t('TEXT_NEXT_PLACE_SORTED_BY_DISTANCE_TEXT')} -&nbsp;
                    <LinkV2
                        to={query.getFilterConfig().getLinkNextPlacesList(nextPlace)}
                    >{t('TEXT_NEXT_PLACE_SHOW_LIST_TEXT')}</LinkV2>
                </>
            }
        >
            <div className="next-places">
                {nextPlace.getPlaces().map((place: LocationWrapper, index: number) =>
                    <NextPlace
                        key={'next-place-search-' + nextPlace.getFeatureClassCode() + '-' + index}
                        index={index}
                        place={place}
                        filterConfig={filterConfig}
                        nextPlace={nextPlace}
                        featureClassCode={nextPlace.getFeatureClassCode()}
                        showUserDistance={showUserDistance}
                        currentPosition={null}
                        lastElement={nextPlace.getPlaces().length - 1 === index}
                    />
                )}
                {hasCurrentPosition && nextPlace.getPlaces().map((place: LocationWrapper, index: number) =>
                    <NextPlace
                        key={'next-place-position-' + nextPlace.getFeatureClassCode() + '-' + index}
                        index={index}
                        place={place}
                        filterConfig={filterConfig}
                        nextPlace={nextPlace}
                        featureClassCode={nextPlace.getFeatureClassCode()}
                        showUserDistance={showUserDistance}
                        currentPosition={currentPosition}
                        lastElement={nextPlace.getPlaces().length - 1 === index}
                    />
                )}
            </div>
        </CollapsibleCard>
    )
}

export default NextPlaces;
