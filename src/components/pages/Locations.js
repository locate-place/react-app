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
    getApiPathList
} from "../../functions/Query";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {
    SortAlphaDown,
    SortNumericDown,
    SortDown,
    HouseFill,
    HouseSlashFill,
    ListTask
} from "react-bootstrap-icons";
import SearchForm from "../layout/SearchForm";
import SearchMetrics from "../layout/SearchMetrics";
import SearchPerformance from "../layout/SearchPerformance";

/**
 * This is the app locations component.
 */
const Locations = () => {
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
    let apiPathWithParameter = getApiPathList(searchParams, true);
    let apiPathWithoutParameter = getApiPathList(searchParams, false);
    let query = getQuery(searchParams);
    let isQuery = !!query;
    let sort = getSort(searchParams);

    /* Check if the current position has been given. */
    let hasOwnPosition = properties.given && properties.given.coordinate && properties.given.coordinate.location;
    let ownPosition = hasOwnPosition ? (properties.given.coordinate.parsed.latitude.dms + ', ' + properties.given.coordinate.parsed.longitude.dms) : null;

    /* Build the sort click functions. */
    let sortByDistance = () => redirectSortByWithCurrentPosition(filterConfig, 'distance');
    let sortByName = () => redirectSortBy(filterConfig, 'name');
    let sortByRelevance = () => redirectSortByWithCurrentPosition(filterConfig, 'relevance');

    let sizeIconH3 = 20;
    let sizeIconCaption = 16;
    let sizeIconButton = 16;

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
                        {/* Renders the search form. */}
                        <SearchForm
                            query={query}
                            routePath={routePath}
                            sizeIconH3={sizeIconH3}
                        />

                        {loaded ? <>
                            {/* Renders the search metrics part. */}
                            <SearchMetrics
                                properties={properties}
                                sizeIconH3={sizeIconH3}
                                sizeIconButton={sizeIconButton}
                                sizeIconCaption={sizeIconCaption}
                            />

                            {
                                isQuery ?
                                    <>
                                        <h3><ListTask size={sizeIconH3}/> Suchergebnis</h3>
                                    </> :
                                    <>
                                        <p>Oder starte mit den nachfolgenden Beispielen.</p>

                                        <h3><ListTask size={sizeIconH3}/> Location Beispiele</h3>
                                    </>
                            }

                            <div className="float-end">
                                <div className="btn-group pb-3">
                                {/* Own position indicator */}
                                    <button
                                        className="btn btn-outline-secondary without-hover"
                                        title={hasOwnPosition ? ('Aktuelle Position "' + ownPosition + '" wird verwendet.') : 'Aktuelle Position wird nicht verwendet.'}
                                    >
                                        {
                                            hasOwnPosition ?
                                                <HouseFill size={sizeIconButton} /> :
                                                <HouseSlashFill size={sizeIconButton} />
                                        }
                                        &nbsp;<sup><small>Sortierung</small></sup>
                                    </button>
                                    <button
                                        className={'btn ' + (sort === 'name' ? 'btn-secondary' : 'btn-outline-secondary')}
                                        onClick={sortByName} title="Sortieren nach Name">
                                        <SortAlphaDown size={sizeIconButton} /> <sup><small>Name</small></sup>
                                    </button>
                                    <button
                                        className={'btn ' + (sort === 'distance' ? 'btn-secondary' : 'btn-outline-secondary')}
                                        onClick={sortByDistance} title="Sortieren nach Distanz">
                                        <SortNumericDown size={sizeIconButton} /> <sup><small>km</small></sup>
                                    </button>
                                    {
                                        query ?
                                            <button
                                                className={'btn ' + (sort === 'relevance' ? 'btn-secondary' : 'btn-outline-secondary')}
                                                onClick={sortByRelevance} title="Sortieren nach Relevanz">
                                                <SortDown size={sizeIconButton} /> <sup><small>Relevanz</small></sup>
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
