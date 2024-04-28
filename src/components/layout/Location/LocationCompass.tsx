import React from "react";
import {useTranslation} from "react-i18next";

/* Import classes */
import {Query} from "../../../classes/Query";

/* Add component parts. */
import CollapsibleCard from "../CollapsibleCard";
import {
    classPositionToggler,
    classUserDegree,
    classUserDistance,
    updateUserPosition, updateUserPositionRegularly
} from "../../../functions/Position";
import {ArrowClockwise, CursorFill} from "react-bootstrap-icons";
import LinkV2 from "../LinkV2";
import {sizeIcon} from "../../../config/Config";

/* Argument properties. */
type LocationCompassProps = {
    query: Query,
    degree?: number|null,
    latitude?: number|null,
    longitude?: number|null,
    distance?: string|null
}

/**
 * This is the LocationCompass part.
 */
const LocationCompass = ({query, degree = null, latitude = null, longitude = null, distance = null}: LocationCompassProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    return (
        <CollapsibleCard title={t('TEXT_WORD_COMPASS')} collapsable={true} collapsed={true}
                         className="compass-collapsible">
            <>
                <div className="compass" id="compass">
                    <div
                        className={['arrow', classUserDegree].join(' ')}
                        id="compassArrow"
                        onClick={() => {
                            updateUserPosition(t)
                        }}
                        data-degree={degree}
                        data-latitude={latitude}
                        data-longitude={longitude}
                    ></div>
                    <div className="disc" id="compassDisc"></div>
                </div>

                {
                    distance && <div className="flex-between pb-3 pt-3 px-3">
                        <div>
                            <strong>{t('TEXT_CAPTION_DISTANCE')}</strong>: <span
                                className={classUserDistance}
                                onClick={() => {
                                    updateUserPosition(t)
                                }}
                                data-latitude={latitude}
                                data-longitude={longitude}
                            >
                                {distance}
                            </span>
                        </div>

                        <button
                            className={['btn', 'btn-outline-secondary', 'shadow-own', classPositionToggler].join(' ')}
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                updateUserPositionRegularly(t);
                            }}
                        >
                            <ArrowClockwise size={24}/>
                        </button>
                    </div>
                }
                {
                    !distance && <div className="flex-between pb-3 pt-3 px-3">
                        <div>
                            {t('TEXT_LOCATION_CURRENT_POSITION_UNKNOWN')}
                        </div>

                        <LinkV2
                            to={query.getFilterConfig().getLinkCurrent()}
                            useCurrentPosition={true}
                            className="btn btn-outline-primary shadow-own mt-2 mb-2 button-own-position button-minimized"
                            title={t('TEXT_LOCATION_DETERMINE_CURRENT_POSITION')}
                            textLoader={t('TEXT_WORD_DETERMINE_CURRENT_LOCATION')}
                            textInformation={t('TEXT_WORD_DETERMINED_CURRENT_LOCATION')}
                        >
                            <CursorFill size={sizeIcon.H3}/>
                        </LinkV2>
                    </div>
                }
            </>
        </CollapsibleCard>
    );
}

export default LocationCompass;
