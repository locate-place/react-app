import React from "react";

/* Import types */
import {TypeFilterConfig, TypeQuerFeatureCode} from "../types/Types";

/* Import search types */
import {searchTypeCoordinate, searchTypeListWithFeatures} from "./SearchType";

/* Configurations */
const reactPathLocations: string = '/locations.html';
const reactPathLocation: string = '/location.html';
const apiPathQuerySearch: string = '/api/v1/location.json';
const apiPathExampleSearch: string = '/api/v1/location/examples.json';
const apiPathDetail: string = '/api/v1/location/coordinate.json';

/* Parameter names */
const nameParameterQuery: 'q' = 'q';
const nameParameterCoordinates: 'c' = 'c';
const nameParameterCountry: 'country' = 'country';
const nameParameterLanguage: 'language' = 'language';
const nameParameterDistance: 'distance' = 'distance';
const nameParameterLimit: 'limit' = 'limit';
const nameParameterPage: 'page' = 'page';
const nameParameterSort: 's' = 's';
const nameParameterNextPlaces: 'next_places' = 'next_places';

/* Sort names */
const nameSortDistance: 'distance' = 'distance';
const nameSortDistanceUser: 'distance-user' = 'distance-user';
const nameSortRelevance: 'relevance' ='relevance';
const nameSortRelevanceUser: 'relevance-user' ='relevance-user';
const nameSortName: 'name' = 'name';

/**
 * Returns the coordinate string from the search parameters.
 *
 * @param {URLSearchParams} searchParams
 * @returns {string|null}
 */
const getCoordinate = (searchParams: URLSearchParams): string|null =>
{
    return searchParams.get(nameParameterCoordinates);
};

/**
 * Returns the query string from the search parameters.
 *
 * @param {URLSearchParams} searchParams
 * @returns {string|null}
 */
const getQuery = (searchParams: URLSearchParams): string|null =>
{
    return searchParams.get(nameParameterQuery);
};

/**
 * Returns the query string from the search parameters.
 *
 * @param {URLSearchParams} searchParams
 * @param {any} properties
 * @returns {string|null}
 */
const getSort = (searchParams: URLSearchParams, properties: any): string|null =>
{
    let sort = searchParams.get(nameParameterSort);

    if (sort) {
        return sort;
    }

    let query = getQuery(searchParams);

    return (query ?
        (properties !== null && getIsCoordinateSearch(properties) ? nameSortRelevance : nameSortRelevanceUser) :
        nameSortName
    );
};

/**
 * Returns the filter configuration from the search parameters.
 *
 * @param {URLSearchParams} searchParams
 * @returns {TypeFilterConfig}
 */
const getFilterConfig = (searchParams: URLSearchParams): TypeFilterConfig =>
{
    const query: string|null = searchParams.get(nameParameterQuery);
    const coordinate: string|null = searchParams.get(nameParameterCoordinates);
    const country: string|null = searchParams.get(nameParameterCountry);
    const language: string|null = searchParams.get(nameParameterLanguage);
    const distance: string|null = searchParams.get(nameParameterDistance);
    const limit: string|null = searchParams.get(nameParameterLimit);
    const page: string|null = searchParams.get(nameParameterPage);
    const sort: string|null = searchParams.get(nameParameterSort);
    const nextPlaces: string|null = searchParams.get(nameParameterNextPlaces);

    let filterConfig: TypeFilterConfig = {};

    /* Add parameter "q". */
    query && (filterConfig[nameParameterQuery] = query);

    /* Add parameter "c". */
    coordinate && (filterConfig[nameParameterCoordinates] = coordinate);

    /* Add parameter "country". */
    filterConfig[nameParameterCountry] = (country ? country : 'DE');

    /* Add parameter "language". */
    filterConfig[nameParameterLanguage] = (language? language : 'de');

    /* Add parameter "distance". */
    distance && (filterConfig[nameParameterDistance] = distance);

    /* Add parameter "limit". */
    limit && (filterConfig[nameParameterLimit] = limit);

    /* Add parameter "limit". */
    page && (filterConfig[nameParameterPage] = page);

    /* Add parameter "sort". */
    sort && (filterConfig[nameParameterSort] = sort);

    /* Add parameter "next_places". */
    nextPlaces && (filterConfig[nameParameterNextPlaces] = '1');

    return filterConfig;
};

/**
 * Converts the filter configuration into a query string.
 *
 * @param {TypeFilterConfig} filterConfig
 */
const convertFilterToQueryString = (filterConfig: TypeFilterConfig): string =>
{
    const keyValuePairs = [];

    for (let key in filterConfig) {
        let value: string | null = filterConfig[key as keyof TypeFilterConfig] ?? null;

        if (value === null) {
            continue;
        }

        keyValuePairs.push(key + '=' + encodeURIComponent(value));
    }

    return keyValuePairs.join('&');
}

/**
 * Redirects the user to the sort by page.
 *
 * @param {TypeFilterConfig} filterConfig
 * @param {string} sortName
 */
const redirectSortBy = (filterConfig: TypeFilterConfig, sortName: string): void =>
{
    /* Create a copy of the object. Do not use the reference. */
    let filter = { ...filterConfig };

    filter[nameParameterSort] = sortName;
    window.location.href = reactPathLocations + '?' + convertFilterToQueryString(filter);
}

/**
 * Redirects the user to the sort by page with current position.
 *
 * @param {TypeFilterConfig} filterConfig
 * @param {string} sortName
 */
const redirectSortByWithCurrentPosition = (filterConfig: TypeFilterConfig, sortName: string): void =>
{
    /* Create a copy of the object. Do not use the reference. */
    let filter = { ...filterConfig };

    filter[nameParameterSort] = sortName;

    if (filter.hasOwnProperty(nameParameterCoordinates)) {
        window.location.href = reactPathLocations + '?' + convertFilterToQueryString(filter);
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        filter[nameParameterCoordinates] = getPosition(position);
        window.location.href = reactPathLocations + '?' + convertFilterToQueryString(filter);
    });
}

/**
 * Search with current position.
 */
const redirectCurrentPosition = (): void =>
{
    /* Create a new filter */
    let filter: TypeFilterConfig = {};

    navigator.geolocation.getCurrentPosition((position) => {
        let coordinate: string = getPosition(position);

        filter[nameParameterQuery] = coordinate;
        filter[nameParameterCoordinates] = coordinate;
        filter[nameParameterNextPlaces] = '1';

        window.location.href = reactPathLocation + '?' + convertFilterToQueryString(filter);
    });
}

/**
 * Redirects the user to the sort by page with current position.
 *
 * @param {TypeFilterConfig} filterConfig
 */
const addCurrentPositionToQuery = (filterConfig: TypeFilterConfig): void =>
{
    /* Create a copy of the object. Do not use the reference. */
    let filter = { ...filterConfig };

    navigator.geolocation.getCurrentPosition((position) => {
        filter[nameParameterCoordinates] = getPosition(position);
        window.location.href = reactPathLocation + '?' + convertFilterToQueryString(filter);
    });
}

/**
 * Returns the API path according to the search parameters.
 *
 * @param {URLSearchParams} searchParams
 * @param {boolean} withParameter
 * @returns {string}
 */
const getApiPathList = (searchParams: URLSearchParams, withParameter: boolean): string =>
{
    let query = getQuery(searchParams);
    let isQuery = !!query;
    let apiPath = isQuery ? apiPathQuerySearch : apiPathExampleSearch;

    if (!withParameter) {
        return apiPath;
    }

    return apiPath + '?' + convertFilterToQueryString(getFilterConfig(searchParams));
}

/**
 * Returns the API path according to the search parameters.
 *
 * @param {URLSearchParams} searchParams
 * @param {boolean} withParameter
 * @returns {string}
 */
const getApiPathDetail = (searchParams: URLSearchParams, withParameter: boolean): string =>
{
    let apiPath = apiPathDetail;

    if (!withParameter) {
        return apiPath;
    }

    return apiPath + '?' + convertFilterToQueryString(getFilterConfig(searchParams));
}

/**
 * Rounds the given value to the given number of decimals.
 *
 * @param {number} value
 * @param {number} decimals
 * @returns {number}
 */
const round = (value: number, decimals: number): number =>
{
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
};

/**
 * Returns the latitude and longitude of the current position.
 *
 * @param {GeolocationPosition} position
 * @returns {string}
 */
const getPosition = (position: GeolocationPosition): string =>
{
    return round(position.coords.latitude, 6) + ',' + round(position.coords.longitude, 6);
}

/**
 * Converts the given feature list into a string.
 *
 * @param {TypeQuerFeatureCode[]} parsedQueryFeatureCodes
 * @return {string[]|null}
 */
const getParsedQueryFeatureCodes = (parsedQueryFeatureCodes: TypeQuerFeatureCode[]): string[]|null =>
{
    let hasParsedQueryFeatureCodes = !!parsedQueryFeatureCodes;

    if (!hasParsedQueryFeatureCodes) {
        return null;
    }

    let data: string[] = [];

    parsedQueryFeatureCodes.forEach((item) => {
        data.push(item.translated + ' (' + item.code + ')');
    });

    return data;
}

/**
 * Returns if the query contains a geoname id.
 *
 * Examples:
 * ---------
 * - "6543921"
 * - etc.
 *
 * @param query
 */
const hasQueryGeonameId = (query: string): boolean =>
{
    const regexp: RegExp = /^([0-9]{4,8})$/;

    let match: RegExpMatchArray|null = regexp.exec(query);

    return match !== null;
}

/**
 * Returns if the query contains a decimal coordinate.
 *
 * Examples:
 * ---------
 * - "51.061155,13.740668"
 * - "51.061155, 13.740668"
 * - "51.061155 13.740668"
 * - etc.
 *
 * @param query
 */
const hasQueryCoordinateDecimal = (query: string): boolean =>
{
    const regexp: RegExp = /^(-?[0-9]+).([0-9]+)([ ,]+)(-?[0-9]+).([0-9]+)$/;

    let match: RegExpMatchArray|null = regexp.exec(query);

    return match !== null;
}

/**
 * Returns if the query contains a dms coordinate.
 *
 * Examples:
 * ---------
 * - "52°31′14.322″N,13°24′35.2044″E"
 * - "52°31′14.322″N, 13°24′35.2044″E"
 * - "52°31′14.322″N 13°24′35.2044″E"
 * - etc.
 *
 * @param query
 */
const hasQueryCoordinateDms = (query: string): boolean =>
{
    const regexpCoordinate: string = '([0-9]+)°([0-9]+)′([0-9]+)(.([0-9]+))?″';

    const regexp: RegExp = new RegExp(
        '^' + regexpCoordinate + '[NS]([ ,]+)' + regexpCoordinate + '[WE]$',
        'i'
    );

    let match: RegExpMatchArray|null = regexp.exec(query);

    return match !== null;
}

/**
 * Checks for given location or geoname id within the search query and returns the
 * location or locations path.
 *
 * Location examples:
 * ------------------
 * - "6543921"
 * - "51.061155,13.740668"
 * - "51.061155, 13.740668"
 * - "52°31′14.322″N,13°24′35.2044″E"
 * - "52°31′14.322″N, 13°24′35.2044″E"
 * - etc.
 *
 * All others will be a locations search.
 *
 * @param {string} query
 * @return {string}
 */
const getPathLocationApi = (query: string): string =>
{
    query = trimString(query);

    /* A "location" string was found. */
    if (hasQueryGeonameId(query)) {
        return reactPathLocation;
    }

    /* A "decimal coordinate" string was found. */
    if (hasQueryCoordinateDecimal(query)) {
        return reactPathLocation;
    }

    /* A "dms coordinate" string was found. */
    if (hasQueryCoordinateDms(query)) {
        return reactPathLocation;
    }

    return reactPathLocations;
}

/**
 * Returns if this search is a coordinate search.
 *
 * @param properties
 */
const getIsCoordinateSearch = (properties: any): boolean =>
{
    let hasQuery = properties.given && properties.given.query;
    return  hasQuery && [searchTypeListWithFeatures, searchTypeCoordinate].includes(properties.given.query.parsed.type);
}

/**
 * Removes all non-visible characters from string.
 *
 * @param inputString
 */
const trimString = (inputString: string): string =>
{
    return inputString.replace(/^\s+|\s+$/g, '');
}

const sortByDistance = (filterConfig: TypeFilterConfig) => redirectSortBy(filterConfig, nameSortDistance);
const sortByDistanceUser = (filterConfig: TypeFilterConfig) => redirectSortByWithCurrentPosition(filterConfig, nameSortDistanceUser);
const sortByName = (filterConfig: TypeFilterConfig) => redirectSortBy(filterConfig, nameSortName);
const sortByRelevance = (filterConfig: TypeFilterConfig) => redirectSortBy(filterConfig, nameSortRelevance);
const sortByRelevanceUser = (filterConfig: TypeFilterConfig) => redirectSortByWithCurrentPosition(filterConfig, nameSortRelevanceUser);



/*
 * Export functions.
 */
export {
    getCoordinate,
    getQuery,
    getSort,
    getFilterConfig,
    redirectSortBy,
    redirectSortByWithCurrentPosition,
    redirectCurrentPosition,
    addCurrentPositionToQuery,
    getApiPathList,
    getApiPathDetail,
    getParsedQueryFeatureCodes,

    sortByDistance,
    sortByDistanceUser,
    sortByName,
    sortByRelevance,
    sortByRelevanceUser,

    getPathLocationApi,
    trimString,
    getIsCoordinateSearch
}
