import React, {useEffect, useMemo, useState} from 'react';

/* Add functions */
import loadApiData from "../../functions/LoadApiData";

/* Add component parts */
import Header from "../layout/Header";
import Loader from "../layout/Loader";
import Error from "../layout/Error";
import LocationCard from "../layout/LocationCard";
import {useSearchParams} from "react-router-dom";
import {
    getQuery,
    getSort,
    getFilterConfig,
    redirectSortBy,
    redirectSortByWithCurrentPosition,
    getApiPath,

    getParsedQueryFeatureCodes
} from "../../functions/Query";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import { SortAlphaDown, SortNumericDown, SortDown, HouseFill, HouseSlashFill, GraphUp } from "react-bootstrap-icons";

/**
 * This is the app locations component.
 */
const Locations = () => {
    /* Debugging */
    let isParsedQueryExpanded = false;
    let isCurrentPositionExpanded = false;

    /* Routes variables */
    const routePath = '/locations.html';

    /* API types */
    const typeLocationApi = useMemo(() => {
        return process.env.REACT_APP_TYPE_LOCATION_API;
    }, []);

    /* State variables */
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [properties, setProperties] = useState([]);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    /* Get variables according to the search parameters. */
    let filterConfig = getFilterConfig(searchParams);
    let apiPathWithParameter = getApiPath(searchParams, true);
    let apiPathWithoutParameter = getApiPath(searchParams, false);
    let query = getQuery(searchParams);
    let sort = getSort(searchParams);

    /* Check if the current position has been given. */
    let hasOwnPosition = properties.given && properties.given.coordinate && properties.given.coordinate.location;
    let ownPosition = hasOwnPosition ? (properties.given.coordinate.parsed.latitude.dms + ', ' + properties.given.coordinate.parsed.longitude.dms) : null;


    let hasParsedQuery = properties.given && properties.given.query;
    let parsedQuery = hasParsedQuery ? properties.given.query : null;

    let hasParsedQuerySearch = hasParsedQuery && !!parsedQuery.parsed['search'];
    let parsedQuerySearch = hasParsedQuerySearch ? parsedQuery.parsed['search'] : null;

    let hasParsedQueryCoordinate = hasParsedQuery && !!parsedQuery.parsed['coordinate'];
    let parsedQueryCoordinate = hasParsedQueryCoordinate ? parsedQuery.parsed['coordinate'] : null;

    let hasParsedQueryFeatureCodes = hasParsedQuery && !!parsedQuery.parsed['feature-codes'];
    let parsedQueryFeatureCodes = getParsedQueryFeatureCodes(hasParsedQueryFeatureCodes ? parsedQuery.parsed['feature-codes'] : null);

    /* Build the sort click functions. */
    let sortByDistance = () => redirectSortByWithCurrentPosition(filterConfig, 'distance');
    let sortByName = () => redirectSortBy(filterConfig, 'name');
    let sortByRelevance = () => redirectSortByWithCurrentPosition(filterConfig, 'relevance');

    let searchTypeTranslations = {
        'search-list-general': 'Suche mit Suchbegriff',
        'search-list-with-features': 'Suche mit Features',
    };

    console.log(properties);

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(
            typeLocationApi,
            apiPathWithParameter,
            setLoaded,
            setError,
            setData,
            setProperties
        );
    }, [typeLocationApi, apiPathWithParameter]);

    /**
     * The render function.
     */
    return (
        <>
            <Header title='Locations' subtitle='Locations API' />
            <div className="calendars container mb-5 px-4 px-md-3">
                <div className="row g-4">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        <h3>Location Suche</h3>

                        <form action={routePath}>
                            <div className="d-flex justify-content-center w-100 mb-4">
                                <div className="input-group w-100">
                                    <input
                                        name="q"
                                        id="query"
                                        type="text"
                                        className="form-control"
                                        placeholder="52°31′14.322″N, 13°24′35.2044″E"
                                        aria-label="Location Suche"
                                        aria-describedby="location-send"
                                        defaultValue={query ? query : ''}
                                    />
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        id="location-send"
                                        data-mdb-ripple-color="dark"
                                    >
                                        Starte Suche
                                    </button>
                                </div>
                            </div>
                        </form>

                        {loaded ? <>
                            {
                                hasParsedQuery || hasOwnPosition ?
                                    <>
                                        <div className="float-end">
                                            <div className="btn-group pb-3">
                                                {
                                                    hasParsedQuery ?
                                                        <button
                                                            className="btn btn-outline-secondary"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#parsedQuery"
                                                            aria-expanded="false"
                                                            aria-controls="parsedQuery"
                                                        >
                                                            <GraphUp size={16}/> <sup><small>Zeige Such-Metriken</small></sup>
                                                        </button> :
                                                        <></>
                                                }
                                                {
                                                    hasOwnPosition ?
                                                        <button
                                                            className="btn btn-outline-secondary"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#currentPosition"
                                                            aria-expanded="false"
                                                            aria-controls="currentPosition"
                                                        >
                                                            <HouseFill size={16}/> <sup><small>Zeige akt. Position</small></sup>
                                                        </button> :
                                                        <></>
                                                }
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </> :
                                    <></>
                            }
                            {
                                hasParsedQuery ?
                                    <>
                                        <div className={'collapse multi-collapse' + (isParsedQueryExpanded ? ' show' : '')} id="parsedQuery">
                                            <h3>Such-Metriken</h3>
                                            <div className="card card-hover mb-4">
                                                <div className="card-header">
                                                    <span className="fw-bold">{searchTypeTranslations.hasOwnProperty(parsedQuery.parsed.type) ? searchTypeTranslations[parsedQuery.parsed.type] : ('Unbekannte Suche "' + parsedQuery.parsed.type + '"')}</span>
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
                                                        hasParsedQueryFeatureCodes ?
                                                        <>
                                                            <p className="mb-0">
                                                                <strong>Feature-Codes</strong>: {parsedQueryFeatureCodes}
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
                                        <div className={'collapse multi-collapse' + (isCurrentPositionExpanded ? ' show' : '')} id="currentPosition">
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

                            <p>Oder starte mit den nachfolgenden Beispielen.</p>

                            <h3>Location Beispiele</h3>

                            <div className="float-end">
                                <div className="btn-group pb-3">
                                    {/* Own position indicator */}
                                    <button
                                        className="btn btn-outline-secondary without-hover"
                                        title={hasOwnPosition ? ('Aktuelle Position "' + ownPosition + '" wird verwendet.') : 'Aktuelle Position wird nicht verwendet.'}
                                    >
                                        {
                                            hasOwnPosition ?
                                                <HouseFill size={14} /> :
                                                <HouseSlashFill size={14} />
                                        }
                                        &nbsp;<sup><small>Sortierung</small></sup>
                                    </button>
                                    <button
                                        className={'btn ' + (sort === 'name' ? 'btn-secondary' : 'btn-outline-secondary')}
                                        onClick={sortByName} title="Sortieren nach Name">
                                        <SortAlphaDown size={20}/> <sup><small>Name</small></sup>
                                    </button>
                                    <button
                                        className={'btn ' + (sort === 'distance' ? 'btn-secondary' : 'btn-outline-secondary')}
                                        onClick={sortByDistance} title="Sortieren nach Distanz">
                                        <SortNumericDown size={20}/> <sup><small>km</small></sup>
                                    </button>
                                    {
                                        query ?
                                            <button
                                                className={'btn ' + (sort === 'relevance' ? 'btn-secondary' : 'btn-outline-secondary')}
                                                onClick={sortByRelevance} title="Sortieren nach Relevanz">
                                                <SortDown size={20}/> <sup><small>Relevanz</small></sup>
                                            </button> :
                                            <></>
                                    }
                                </div>
                            </div>

                            {data.map((location, index) => (
                                <LocationCard
                                    key={'location-card-' + index}
                                    location={location}
                                    index={index}
                                    urlLocationApi={properties.url}
                                    isCurrentLocation={false}
                                />
                            ))}

                            <div>
                            <small><small>
                                    <strong>Query</strong>: {properties['time-taken']}, {properties['memory-taken']} - <strong>{properties['name']}</strong>: Version {properties['version']}
                                    <br/>
                                    <strong>API</strong>: <a href={process.env.REACT_APP_LOCATION_API_URL + apiPathWithParameter} target="_blank" rel="noreferrer">{process.env.REACT_APP_LOCATION_API_URL + apiPathWithoutParameter}</a>
                                </small></small>
                            </div>
                        </> : (error !== null ? <Error error={error} apiPath={properties['api-url']}/> : <Loader/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Locations;
