import React, {useEffect, useMemo, useState} from 'react';
import {useSearchParams} from "react-router-dom";

/* Import configurations */
import {sizeIcon} from "../../config/Config";

/* Import functions */
import loadApiData from "../../functions/LoadApiData";
import {
    getQuery,
    getSort,
    getFilterConfig,
    getApiPathList,
    sortByName,
    sortByRelevanceUser,
    sortByDistanceUser,
    sortByDistance,
    sortByRelevance,
    getIsCoordinateSearch
} from "../../functions/QueryFunctions";

/* Import classes */
import {Query} from "../../classes/Query";

/* Import component parts */
import Error from "../layout/Error.tsx";
import HeaderSmall from "../layout/HeaderSmall.tsx";
import Loader from "../layout/Loader.tsx";
import LocationCard from "../layout/LocationCard.tsx";
import SearchForm from "../layout/SearchForm.tsx";
import SearchMetrics from "../layout/SearchMetrics.tsx";
import SearchPerformance from "../layout/SearchPerformance.tsx";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    SortAlphaDown,
    SortNumericDown,
    SortDown,
    HouseFill,
    HouseSlashFill,
    ListTask,
    CursorFill
} from "react-bootstrap-icons";
import Pager from "../layout/Pager";

/**
 * This is the app locations component.
 */
const Locations = () =>
{
    /* Routes variables */
    const routePath = '/locations.html';

    /* API types */
    const env = useMemo(() => {
        return process.env;
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
    let apiPathWithParameter = getApiPathList(searchParams, true);
    let apiPathWithoutParameter = getApiPathList(searchParams, false);
    let queryString = getQuery(searchParams);
    let sortString = getSort(searchParams, properties);
    let isQuerySearch = !!queryString;

    /* Check if the current position has been given. */
    let hasOwnPosition = properties.given && properties.given.coordinate && properties.given.coordinate.location;
    let ownPosition = hasOwnPosition ? (properties.given.coordinate.parsed.latitude.dms + ', ' + properties.given.coordinate.parsed.longitude.dms) : null;

    let isCoordinateSearch = getIsCoordinateSearch(properties, filterConfig);

    let hasResults = !!properties.results;
    let numberResults = hasResults && properties.results.results;
    let numberTotal = hasResults && properties.results.total;
    let numberPage = hasResults ? properties.results.page : 1;

    /* Gets the api url */
    let query = new Query(searchParams, env);
    const apiPath = query.getApiUrl();
    const apiPathWithFilter = query.getApiUrlWithFilter();
    const apiType = query.getApiType();

    console.log('---');
    console.log(apiPath);
    console.log(apiPathWithFilter);
    console.log(apiPathWithoutParameter);
    console.log(apiPathWithParameter);
    console.log('---');

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData({
            type: apiType,
            path: apiPathWithParameter,
            setLoaded: setLoaded,
            setError: setError,
            setDataLocations: setData,
            setProperties: setProperties,
        });
    }, [apiType, apiPathWithParameter]);

    /**
     * The render function.
     */
    return (
        <>
            <HeaderSmall title='Locations' subtitle='Locations API' />
            <div className="calendars container mb-5 px-4 px-md-3">
                <div className="row g-4">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        {/* Renders the search form. */}
                        <SearchForm
                            queryDefault={queryString}
                            routePathDefault={routePath}
                        />

                        {loaded ? <>
                            {/* Renders the search metrics part. */}
                            <SearchMetrics properties={properties} />

                            {
                                isQuerySearch ?
                                    <>
                                        <h3><ListTask size={sizeIcon.H3}/> Suchergebnisse</h3>
                                    </> :
                                    <>
                                        <p>Oder starte mit den nachfolgenden Beispielen.</p>

                                        <h3><ListTask size={sizeIcon.H3}/> Location Beispiele</h3>
                                    </>
                            }

                            <div className="float-end pb-3">
                                <div className="btn-group shadow-own">
                                {/* Own position indicator */}
                                    <button
                                        className="btn btn-outline-secondary without-hover"
                                        title={hasOwnPosition ? ('Aktuelle Position "' + ownPosition + '" wird verwendet.') : 'Aktuelle Position wird nicht verwendet.'}
                                    >
                                        {
                                            hasOwnPosition ?
                                                <HouseFill size={sizeIcon.Button} /> :
                                                <HouseSlashFill size={sizeIcon.Button} />
                                        }&nbsp;
                                        <sup><small>Sortierung</small></sup>
                                    </button>
                                    <button
                                        className={'btn ' + (sortString === 'name' ? 'btn-secondary' : 'btn-outline-secondary')}
                                        onClick={() => sortByName(filterConfig)} title="Sortieren nach Name">
                                        <SortAlphaDown size={sizeIcon.Button} /> <sup><small>Name</small></sup>
                                    </button>
                                    {
                                        isCoordinateSearch ?
                                            <button
                                                className={'btn ' + ((sortString === 'distance-user' || sortString === 'distance') ? 'btn-secondary' : 'btn-outline-secondary')}
                                                onClick={() => sortByDistance(filterConfig)}
                                                title="Sortieren nach Distanz"
                                            >
                                                <CursorFill size={sizeIcon.ButtonSmall}/>&nbsp;
                                                <SortNumericDown size={sizeIcon.Button}/>&nbsp;
                                                <sup><small>km</small></sup>
                                            </button> :
                                            <button
                                                className={'btn ' + ((sortString === 'distance-user' || sortString === 'distance') ? 'btn-secondary' : 'btn-outline-secondary')}
                                                onClick={() => sortByDistanceUser(filterConfig)}
                                                title="Sortieren nach Distanz vom User"
                                            >
                                                <SortNumericDown size={sizeIcon.Button}/>&nbsp;
                                                <sup><small>km</small></sup>
                                            </button>
                                    }
                                    {
                                        isQuerySearch ?
                                            (
                                                isCoordinateSearch ?
                                                    <button
                                                        className={'btn ' + ((sortString === 'relevance-user' || sortString === 'relevance') ? 'btn-secondary' : 'btn-outline-secondary')}
                                                        onClick={() => sortByRelevance(filterConfig)}
                                                        title="Sortieren nach Relevanz"
                                                    >
                                                        <CursorFill size={sizeIcon.ButtonSmall}/>&nbsp;
                                                        <SortDown size={sizeIcon.Button}/> <sup><small>Relevanz</small></sup>
                                                    </button> :
                                                    <button
                                                        className={'btn ' + ((sortString === 'relevance-user' || sortString === 'relevance') ? 'btn-secondary' : 'btn-outline-secondary')}
                                                        onClick={() => sortByRelevanceUser(filterConfig)}
                                                        title="Sortieren nach Relevanz vom User"
                                                    >
                                                        <SortDown size={sizeIcon.Button}/>&nbsp;
                                                        <sup><small>Relevanz</small></sup>
                                                    </button>
                                            ) :
                                            <></>
                                    }
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            {
                                hasResults ?
                                    <>
                                        <div className="mt-5">
                                            {
                                                queryString ?
                                                    <p>{numberTotal} Ergebnisse für "{queryString}" gefunden. Zeige {(numberPage - 1) * numberResults + 1} - {numberResults * numberPage}.</p> :
                                                    <p>{numberTotal} Ergebnisse gefunden. Zeige {numberResults}.</p>
                                            }
                                        </div>

                                        {data.map((location, index) => (
                                            <LocationCard
                                                key={'location-card-' + index}
                                                location={location}
                                                properties={properties}
                                                showOwnPosition={false}
                                                index={index}
                                            />
                                        ))}
                                    </>:
                                    <>
                                        <div>
                                            {
                                                queryString ?
                                                    <p>Keine Ergebnisse für "{queryString}" gefunden.</p> :
                                                    <p>Keine Ergebnisse gefunden.</p>
                                            }
                                        </div>
                                    </>
                            }

                            {/* Renders the pager part. */}
                            <Pager
                                page={numberPage}
                                results={numberResults}
                                total={numberTotal}
                                filterConfig={filterConfig}
                            />

                            {/* Renders the search performance part. */}
                            <SearchPerformance
                                properties={properties}
                                apiPathWithoutParameter={apiPathWithoutParameter}
                                apiPathWithParameter={apiPathWithParameter}
                            />
                        </> : (error !== null ? <Error error={error} apiPath={properties['api-url']}/> : <Loader/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Locations;
