import React from "react";
import {useTranslation} from "react-i18next";

/* Import classes. */
import {Query} from "../../classes/Query";
import {ApiResponseProperty} from "../../classes/Api/ApiResponseProperty";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {CursorFill, HouseFill, HouseSlashFill, SortAlphaDown, SortDown, SortNumericDown} from "react-bootstrap-icons";

/* Import configurations. */
import {sizeIcon} from "../../config/Config";
import {
    nameSortDistance,
    nameSortDistanceUser,
    nameSortName,
    nameSortRelevance,
    nameSortRelevanceUser
} from "../../config/NameSort";

/* Imports functions. */
import {
    sortByDistance,
    sortByDistanceUser,
    sortByName,
    sortByRelevance,
    sortByRelevanceUser
} from "../../functions/QueryFunctions";

/* Location sort properties. */
type LocationSortProps = {
    query: Query,
    apiResponseProperty: ApiResponseProperty,
}

/**
 * This renders the location sort part.
 */
const LocationSort = ({query, apiResponseProperty}: LocationSortProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const filterConfig = query.getFilterConfig().getFilterConfig();

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
                                <HouseFill size={sizeIcon.Button}/> :
                                <HouseSlashFill size={sizeIcon.Button}/>
                        }&nbsp;
                        <sup><small>{t('TEXT_ACTION_SORTING')}</small></sup>
                    </button>
                    <button
                        className={'btn ' + (query.isSortedBy(nameSortName) ? 'btn-secondary' : 'btn-outline-secondary')}
                        onClick={() => sortByName(filterConfig)} title={t('TEXT_TITLE_SORT_BY_NAME')}>
                        <SortAlphaDown size={sizeIcon.Button}/> <sup><small>{t('TEXT_ACTION_NAME')}</small></sup>
                    </button>
                    {
                        query.isCoordinateSearch() ?
                            <button
                                className={'btn ' + (query.isSortedBy([nameSortDistanceUser, nameSortDistance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                onClick={() => sortByDistance(filterConfig)}
                                title={t('TEXT_TITLE_SORT_BY_DISTANCE')}
                            >
                                <CursorFill size={sizeIcon.ButtonSmall}/>&nbsp;
                                <SortNumericDown size={sizeIcon.Button}/>&nbsp;
                                <sup><small>{t('TEXT_ACTION_KM')}</small></sup>
                            </button> :
                            <button
                                className={'btn ' + (query.isSortedBy([nameSortDistanceUser, nameSortDistance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                onClick={() => sortByDistanceUser(filterConfig)}
                                title={t('TEXT_TITLE_SORT_BY_DISTANCE_FROM_USER')}
                            >
                                <SortNumericDown size={sizeIcon.Button}/>&nbsp;
                                <sup><small>{t('TEXT_ACTION_KM')}</small></sup>
                            </button>
                    }
                    {
                        query.getFilterConfig().hasQuery() ?
                            (
                                query.isCoordinateSearch() ?
                                    <button
                                        className={'btn ' + (query.isSortedBy([nameSortRelevanceUser, nameSortRelevance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                        onClick={() => sortByRelevance(filterConfig)}
                                        title={t('TEXT_TITLE_SORT_BY_RELEVANCE')}
                                    >
                                        <CursorFill size={sizeIcon.ButtonSmall}/>&nbsp;
                                        <SortDown size={sizeIcon.Button}/>
                                        <sup><small>{t('TEXT_ACTION_RELEVANCE')}</small></sup>
                                    </button> :
                                    <button
                                        className={'btn ' + (query.isSortedBy([nameSortRelevanceUser, nameSortRelevance]) ? 'btn-secondary' : 'btn-outline-secondary')}
                                        onClick={() => sortByRelevanceUser(filterConfig)}
                                        title={t('TEXT_TITLE_SORT_BY_RELEVANCE_OF_THE_USER')}
                                    >
                                        <SortDown size={sizeIcon.Button}/>&nbsp;
                                        <sup><small>{t('TEXT_ACTION_RELEVANCE')}</small></sup>
                                    </button>
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
