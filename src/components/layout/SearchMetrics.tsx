import React from "react";
import {useTranslation} from "react-i18next";

/* Import configurations */
import {sizeIcon} from "../../config/Config";
import {colorBackgroundSearchMetrics} from "../../config/Colors";

/* Import classes */
import {ApiResponseProperty} from "../../classes/Api/ApiResponseProperty";

/* Import component parts */
import LocationCard from "./LocationCard";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {GeoAltFill, GraphUp, HouseFill} from "react-bootstrap-icons";

type SearchMetricsProps = {
    apiResponseProperty: ApiResponseProperty
}

/**
 * This renders the search metrics part.
 */
const SearchMetrics = ({
    apiResponseProperty
}: SearchMetricsProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const properties = apiResponseProperty.get();

    /* Debugging */
    let isParsedQueryExpanded = false;
    let isCurrentPositionExpanded = false;

    return (
        <>
            {
                apiResponseProperty.hasGivenQuery() || apiResponseProperty.isOwnPosition() ?
                    <>
                        <div className="float-end pb-3">
                            <div className="btn-group shadow-own">
                                {
                                    apiResponseProperty.hasGivenQuery() ?
                                        <button
                                            className="btn btn-outline-secondary"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#parsedQuery"
                                        >
                                            <GraphUp size={sizeIcon.Button}/> <sup><small>{t('TEXT_ACTION_SHOW_SEARCH_METRICS')}</small></sup>
                                        </button> :
                                        <></>
                                }
                                {
                                    apiResponseProperty.isOwnPosition() ?
                                        <button
                                            className="btn btn-outline-secondary"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#currentPosition"
                                        >
                                            <GeoAltFill size={sizeIcon.Button}/> <sup><small>{t('TEXT_ACTION_SHOW_CURRENT_POSITION')}</small></sup>
                                        </button> :
                                        <></>
                                }
                            </div>
                        </div>
                        <div className="clearfix"></div>

                        <div id="accordion">
                            {
                                apiResponseProperty.hasGivenQuery() ?
                                    <>
                                        <div
                                            className={'collapse multi-collapse' + (isParsedQueryExpanded ? ' show' : '')}
                                            data-bs-parent="#accordion"
                                            id="parsedQuery"
                                        >
                                            <h3 className="mt-3"><GraphUp size={sizeIcon.H3}/> {t('TEXT_ACTION_SEARCH_METRICS_TITLE')}</h3>
                                            <div className="card mb-4"
                                                 style={{'backgroundColor': colorBackgroundSearchMetrics}}>
                                                <div className="card-header">
                                                        <span className="fw-bold"><GraphUp size={sizeIcon.Caption}/>&nbsp;
                                                            {t(apiResponseProperty.getGivenQueryParsedTypeTranslationKey())}
                                                        </span>
                                                </div>
                                                <div className="card-body">
                                                    {
                                                        apiResponseProperty.hasGivenQueryParsedSearch() ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>{t('TEXT_WORD_SEARCH_TERM')}</strong>: {apiResponseProperty.getGivenQueryParsedSearch()}
                                                                </p>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        apiResponseProperty.hasGivenCoordinate() ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>{t('TEXT_WORD_OWN_POSITION')}</strong>: {apiResponseProperty.getGivenCoordinateParsedLatitudeDms()}, {apiResponseProperty.getGivenCoordinateParsedLongitudeDms()}
                                                                </p>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        apiResponseProperty.hasGivenQueryParsedCoordinate() ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>{t('TEXT_WORD_SEARCH_POSITION')}</strong>: {apiResponseProperty.getGivenQueryParsedCoordinate()}
                                                                </p>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        apiResponseProperty.hasGivenQueryParsedGeonameId() ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>{t('TEXT_WORD_GEONAME_ID')}</strong>: {apiResponseProperty.getGivenQueryParsedGeonameId()}
                                                                </p>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        apiResponseProperty.hasGivenQueryParsedFeatureCodes() ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>{t('TEXT_WORD_FEATURE_CODES')}</strong>
                                                                </p>
                                                                <ul className="mb-0">
                                                                    {apiResponseProperty.getGivenQueryParsedFeatureCodesArray().map((item, index) => (
                                                                        <li key={'feature-code-' + item.code}>
                                                                            {item.code}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        apiResponseProperty.hasGivenQueryParsedFeatureClasses() ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>{t('TEXT_WORD_FEATURE_CLASSES')}</strong>
                                                                </p>
                                                                <ul className="mb-0">
                                                                    {apiResponseProperty.getGivenQueryParsedFeatureClassesArray().map((item, index) => (
                                                                        <li key={'feature-class-' + item.code}>
                                                                            {item.code}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        apiResponseProperty.hasLimit() ?
                                                            <>
                                                                <p className="mb-0"><strong>Limit: </strong> {apiResponseProperty.getLimit()}</p>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        apiResponseProperty.hasDistance() ?
                                                            <>
                                                                <p className="mb-0"><strong>Distance: </strong> {apiResponseProperty.getDistance()}</p>
                                                            </> :
                                                            <></>
                                                    }
                                                </div>
                                                <div className="card-footer">
                                                    <small><small>
                                                        <strong>{t('TEXT_WORD_QUERY')}</strong>: <span
                                                        className="fst-italic">"{apiResponseProperty.getGivenQueryRaw()}"</span>
                                                        <br/>
                                                        <strong>{t('TEXT_WORD_PERFORMANCE')}</strong>: {properties['time-taken']}, {properties['memory-taken']}
                                                        <br/>
                                                        <strong>{properties['name']}</strong>: Version {properties['version']}
                                                    </small></small>
                                                </div>
                                            </div>
                                        </div>
                                    </> :
                                    <></>
                            }
                            {
                                apiResponseProperty.isOwnPosition() ?
                                    <>
                                        <div
                                            className={'collapse multi-collapse' + (isCurrentPositionExpanded ? ' show' : '')}
                                            data-bs-parent="#accordion"
                                            id="currentPosition"
                                        >
                                            <h3 className="mt-3">{t('TEXT_HEADER_CURRENT_LOCATION')}</h3>
                                            <LocationCard
                                                locationWrapper={apiResponseProperty.getGiven()?.getCoordinate()?.getLocation() ?? null}
                                                apiResponseProperty={apiResponseProperty}
                                                showOwnPosition={true}
                                            />
                                        </div>
                                    </> :
                                    ''
                            }
                        </div>
                    </> :
                    <></>
            }
        </>
    );
}

export default SearchMetrics;
