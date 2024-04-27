import React from "react";
import {useTranslation} from "react-i18next";

/* Add component parts. */
import CollapsibleCard from "../CollapsibleCard";
import {
    classPositionToggler,
    classUserDegree,
    classUserDistance,
    updateUserPosition, updateUserPositionRegularly
} from "../../../functions/Position";
import {ArrowClockwise} from "react-bootstrap-icons";
/* Argument properties. */


/* Argument properties. */
type LocationCompassProps = {
    degree?: number|null,
    latitude?: number|null,
    longitude?: number|null,
    distance?: string|null
}

/**
 * This is the LocationCompass part.
 */
const LocationCompass = ({degree = null, latitude = null, longitude = null, distance = null}: LocationCompassProps) =>
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
            </>
        </CollapsibleCard>
    );
}

export default LocationCompass;
