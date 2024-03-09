import React from "react";
import {useTranslation} from "react-i18next";

/* Add component parts. */
import CollapsibleCard from "../CollapsibleCard";

/**
 * This is the LocationCompass part.
 */
const LocationCompass = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    return (
        <CollapsibleCard title={t('TEXT_WORD_COMPASS')} collapsable={true} collapsed={true}>
            <div className="compass" id="compass">
                <div className="arrow"></div>
                <div className="disc" id="compassDisc"></div>
            </div>
        </CollapsibleCard>
    );
}

export default LocationCompass;
