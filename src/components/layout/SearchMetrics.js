import React from "react";
import {GraphUp, HouseFill} from "react-bootstrap-icons";
import LocationCard from "./LocationCard";
import {getParsedQueryFeatureCodes} from "../../functions/Query";

/**
 * This renders the search metrics part.
 */
const SearchMetrics = ({
    properties,
    sizeIconButton,
    sizeIconH3,
    sizeIconCaption
}) =>
{
    /* Debugging */
    let isParsedQueryExpanded = false;
    let isCurrentPositionExpanded = false;

    /* Check if the current position has been given. */
    let hasOwnPosition = properties.given && properties.given.coordinate && properties.given.coordinate.location;

    let hasParsedQuery = properties.given && properties.given.query;
    let parsedQuery = hasParsedQuery ? properties.given.query : null;

    let hasParsedQuerySearch = hasParsedQuery && !!parsedQuery.parsed['search'];
    let parsedQuerySearch = hasParsedQuerySearch ? parsedQuery.parsed['search'] : null;

    let hasParsedQueryCoordinate = hasParsedQuery && !!parsedQuery.parsed['coordinate'];
    let parsedQueryCoordinate = hasParsedQueryCoordinate ? parsedQuery.parsed['coordinate'] : null;

    let hasParsedQueryGeonameId = hasParsedQuery && !!parsedQuery.parsed['geoname-id'];
    let parsedQueryGeonameId = hasParsedQueryGeonameId ? parsedQuery.parsed['geoname-id'] : null;

    let hasParsedQueryFeatureCodes = hasParsedQuery && !!parsedQuery.parsed['feature-codes'];
    let parsedQueryFeatureCodes = getParsedQueryFeatureCodes(hasParsedQueryFeatureCodes ? parsedQuery.parsed['feature-codes'] : null);

    let searchTypeTranslations = {
        'search-list-general': 'Suche mit Suchbegriff',
        'search-list-with-features': 'Suche mit Features',
        'search-geoname-id': 'Detailsuche nach Geoname-ID',
        'search-coordinate': 'Detailsuche nach Koordinate',
    };

    return (
        <>
            {
                hasParsedQuery || hasOwnPosition ?
                    <>
                        <div className="float-end">
                            <div className="btn-group pb-3">
                                {
                                    hasParsedQuery ?
                                        <button
                                            className="btn btn-outline-secondary"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#parsedQuery"
                                        >
                                            <GraphUp size={sizeIconButton}/> <sup><small>Zeige
                                            Such-Metriken</small></sup>
                                        </button> :
                                        <></>
                                }
                                {
                                    hasOwnPosition ?
                                        <button
                                            className="btn btn-outline-secondary"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#currentPosition"
                                        >
                                            <HouseFill size={sizeIconButton}/> <sup><small>Zeige akt.
                                            Position</small></sup>
                                        </button> :
                                        <></>
                                }
                            </div>
                        </div>
                        <div className="clearfix"></div>

                        <div id="accordion">
                            {
                                hasParsedQuery ?
                                    <>
                                        <div
                                            className={'collapse multi-collapse' + (isParsedQueryExpanded ? ' show' : '')}
                                            data-bs-parent="#accordion"
                                            id="parsedQuery"
                                        >
                                            <h3><GraphUp size={sizeIconH3}/> Such-Metriken</h3>
                                            <div className="card card-hover mb-4"
                                                 style={{'backgroundColor': 'rgb(233, 235, 228)'}}>
                                                <div className="card-header">
                                                        <span className="fw-bold"><GraphUp
                                                            size={sizeIconCaption}/> {searchTypeTranslations.hasOwnProperty(parsedQuery.parsed.type) ? searchTypeTranslations[parsedQuery.parsed.type] : ('Unbekannte Suche "' + parsedQuery.parsed.type + '"')}</span>
                                                </div>
                                                <div className="card-body">
                                                    {
                                                        hasParsedQuerySearch ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>Suchbegriff</strong>: {parsedQuerySearch}
                                                                </p>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        hasParsedQueryCoordinate ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>Position</strong>: {parsedQueryCoordinate.parsed.latitude.dms}, {parsedQueryCoordinate.parsed.longitude.dms}
                                                                </p>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        hasParsedQueryGeonameId ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>Geoname-ID</strong>: {parsedQueryGeonameId}
                                                                </p>
                                                            </> :
                                                            <></>
                                                    }
                                                    {
                                                        hasParsedQueryFeatureCodes ?
                                                            <>
                                                                <p className="mb-0">
                                                                    <strong>Feature-Codes</strong>
                                                                    <br />
                                                                    <ul className="mb-0">
                                                                        {parsedQueryFeatureCodes.map((item, index) => (
                                                                            <li key={'feature-code-' + item}>
                                                                                {item}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </p>
                                                            </> :
                                                            <></>
                                                    }
                                                </div>
                                                <div className="card-footer">
                                                    <small><small>
                                                        <strong>Query</strong>: <span className="fst-italic">"{parsedQuery.raw}"</span>
                                                        <br />
                                                        <strong>Performance</strong>: {properties['time-taken']}, {properties['memory-taken']} - <strong>{properties['name']}</strong>: Version {properties['version']}
                                                    </small></small>
                                                </div>
                                            </div>
                                        </div>
                                    </> :
                                    <></>
                            }
                            {
                                hasOwnPosition ?
                                    <>
                                        <div
                                            className={'collapse multi-collapse' + (isCurrentPositionExpanded ? ' show' : '')}
                                            data-bs-parent="#accordion"
                                            id="currentPosition"
                                        >
                                            <h3>Aktuelle Position</h3>
                                            <LocationCard
                                                location={properties.given.coordinate.location}
                                                index="0"
                                                urlLocationApi={properties.url}
                                                ownPosition={properties.given.coordinate.parsed}
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
