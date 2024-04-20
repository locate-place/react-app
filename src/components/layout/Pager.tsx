import React from "react";

/* Import classes. */
import {Query} from "../../classes/Query";
import {useTranslation} from "react-i18next";
import LinkV2 from "./LinkV2";
import {ArrowRightShort} from "react-bootstrap-icons";
import {sizeIcon} from "../../config/Config";

/* Pager properties. */
type PagerProps = {
    query: Query
}

/**
 * This renders the pager part.
 */
const Pager = ({query}: PagerProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const page = query.getApiResponseProperty().getPageCurrent();
    const results = query.getApiResponseProperty().getResultsCurrent();
    const total = query.getApiResponseProperty().getResultsTotal();

    if (page * results >= total) {
        return <></>;
    }

    return (
        <>
            <div className="mb-3 float-end">
                <LinkV2
                    to={query.getFilterConfig().getLinkNextPlacesPage(page + 1)}
                    scrollTo={0}
                    className="link-button"
                >{t('TEXT_ACTION_SHOW_NEXT_PAGE')} <ArrowRightShort size={sizeIcon.H3} /></LinkV2>
            </div>

            <div className="clearfix"></div>
        </>
    );
}

export default Pager;
