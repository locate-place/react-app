import React from "react";
import {useTranslation} from "react-i18next";

/* Import classes. */
import {Query} from "../../classes/Query";
import {ApiResponseProperty} from "../../classes/Api/ApiResponseProperty";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    CursorFill, GeoAlt, GeoAltFill,
    HouseFill,
    HouseSlashFill,
    SortAlphaDown,
    SortDown,
    SortNumericDown
} from "react-bootstrap-icons";

/* Import configurations. */
import {sizeIcon} from "../../config/Config";
import {
    nameSortDistance,
    nameSortDistanceUser,
    nameSortName,
    nameSortRelevance,
    nameSortRelevanceUser
} from "../../config/NameSort";

/* Imports components. */
import LinkV2 from "./LinkV2";

/* Location sort properties. */
type LocationSortProps = {
    query: Query,
    apiResponseProperty: ApiResponseProperty,
    forceRelevance?: boolean
}

/**
 * This renders the location sort part.
 */
const LocationSort = ({query, apiResponseProperty, forceRelevance = false}: LocationSortProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const filterConfig = query.getFilterConfig();

    return (
        <>
            <div className="float-end pb-3">
                <div className="btn-group shadow-own">
                    {/* Own position indicator */}
                    <button
                        className="btn btn-outline-secondary without-hover"
                        title={apiResponseProperty.isOwnPosition() ? ('Aktuelle Position "' + apiResponseProperty.getOwnPosition() + '" wird verwendet.') : 'Aktuelle Position wird nicht verwendet.'}
                    >
                        {
                            apiResponseProperty.isOwnPosition() ?
                                <GeoAlt size={sizeIcon.Button}/> :
                                <GeoAltFill size={sizeIcon.Button}/>
                        }&nbsp;
                        <sup><small>{t('TEXT_ACTION_SORTING')}</small></sup>
                    </button>
                    <LinkV2
                        to={filterConfig.getLinkLocationsSortByName()}
                        title={t('TEXT_TITLE_SORT_BY_NAME')}
                        className={'btn ' + (query.isSortedBy(nameSortName) ? 'btn-secondary' : 'btn-outline-secondary')}
                    >
                        <SortAlphaDown size={sizeIcon.Button}/> <sup><small>{t('TEXT_ACTION_NAME')}</small></sup>
                    </LinkV2>
                    {
                        query.isCoordinateSearch(false) ?
                            <LinkV2
                                to={filterConfig.getLinkLocationsSortByDistance()}
                                title={t('TEXT_TITLE_SORT_BY_DISTANCE')}
                                useCurrentPosition={true}
                                className={'btn ' + (query.isSortedBy([nameSortDistanceUser, nameSortDistance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                textLoader={t('TEXT_WORD_DETERMINE_CURRENT_LOCATION')}
                                textInformation={t('TEXT_WORD_DETERMINED_CURRENT_LOCATION')}
                            >
                                <CursorFill size={sizeIcon.ButtonSmall}/>&nbsp;
                                <SortNumericDown size={sizeIcon.Button}/>&nbsp;
                                <sup><small>{t('TEXT_ACTION_KM')}</small></sup>
                            </LinkV2> :
                            <LinkV2
                                to={filterConfig.getLinkLocationsSortByDistanceUser()}
                                useCurrentPosition={true}
                                title={t('TEXT_TITLE_SORT_BY_DISTANCE_FROM_USER')}
                                className={'btn ' + (query.isSortedBy([nameSortDistanceUser, nameSortDistance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                textLoader={t('TEXT_WORD_DETERMINE_CURRENT_LOCATION')}
                                textInformation={t('TEXT_WORD_DETERMINED_CURRENT_LOCATION')}
                            >
                                <SortNumericDown size={sizeIcon.Button}/>&nbsp;
                                <sup><small>{t('TEXT_ACTION_KM')}</small></sup>
                            </LinkV2>
                    }
                    {
                        query.getFilterConfig().hasQuery() || forceRelevance ?
                            (
                                query.isCoordinateSearch() ?
                                    <LinkV2
                                        to={filterConfig.getLinkLocationsSortByRelevance()}
                                        useCurrentPosition={true}
                                        title={t('TEXT_TITLE_SORT_BY_RELEVANCE')}
                                        className={'btn ' + (query.isSortedBy([nameSortRelevanceUser, nameSortRelevance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                        textLoader={t('TEXT_WORD_DETERMINE_CURRENT_LOCATION')}
                                        textInformation={t('TEXT_WORD_DETERMINED_CURRENT_LOCATION')}
                                    >
                                        <CursorFill size={sizeIcon.ButtonSmall}/>&nbsp;
                                        <SortDown size={sizeIcon.Button}/>
                                        <sup><small>{t('TEXT_ACTION_RELEVANCE')}</small></sup>
                                    </LinkV2> :
                                    <LinkV2
                                        to={filterConfig.getLinkLocationsSortByRelevanceUser()}
                                        useCurrentPosition={true}
                                        title={t('TEXT_TITLE_SORT_BY_RELEVANCE_OF_THE_USER')}
                                        className={'btn ' + (query.isSortedBy([nameSortRelevanceUser, nameSortRelevance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                        textLoader={t('TEXT_WORD_DETERMINE_CURRENT_LOCATION')}
                                        textInformation={t('TEXT_WORD_DETERMINED_CURRENT_LOCATION')}
                                    >
                                        <SortDown size={sizeIcon.Button}/>&nbsp;
                                        <sup><small>{t('TEXT_ACTION_RELEVANCE')}</small></sup>
                                    </LinkV2>
                            ) :
                            <></>
                    }
                </div>
            </div>

            <div className="clearfix"></div>
        </>
    );
}

export default LocationSort;
