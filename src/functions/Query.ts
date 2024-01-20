/*
 * Configurations
 */
import {TypeFilterConfig, TypeQuerFeatureCode} from "../types/Types.ts";

const reactPathLocations = '/locations.html';
const reactPathLocation = '/location.html';
const apiPathQuerySearch = '/api/v1/location.json';
const apiPathExampleSearch = '/api/v1/location/examples.json';
const apiPathDetail = '/api/v1/location/coordinate.json';

const nameParameterQuery: 'q' = 'q';
const nameParameterCoordinates: 'c' = 'c';
const nameParameterCountry: 'country' = 'country';
const nameParameterLanguage: 'language' = 'language';
const nameParameterDistance: 'distance' = 'distance';
const nameParameterLimit: 'limit' = 'limit';
const nameParameterSort: 's' = 's';
const nameParameterNextPlaces: 'next_places' = 'next_places';

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
    return searchParams.get('q');
};

/**
 * Returns the query string from the search parameters.
 *
 * @param {URLSearchParams} searchParams
 * @returns {string|null}
 */
const getSort = (searchParams: URLSearchParams): string|null =>
{
    let sort = searchParams.get('s');

    if (sort) {
        return sort;
    }

    let query = getQuery(searchParams);

    return (query ? 'relevance' : 'name');
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

    filter['s'] = sortName;
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

    filter['s'] = sortName;

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
    console.log(parsedQueryFeatureCodes);
    
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

const sortByDistance = (filterConfig: TypeFilterConfig) => redirectSortBy(filterConfig, 'distance');
const sortByDistanceUser = (filterConfig: TypeFilterConfig) => redirectSortByWithCurrentPosition(filterConfig, 'distance-user');
const sortByName = (filterConfig: TypeFilterConfig) => redirectSortBy(filterConfig, 'name');
const sortByRelevance = (filterConfig: TypeFilterConfig) => redirectSortBy(filterConfig, 'relevance');
const sortByRelevanceUser = (filterConfig: TypeFilterConfig) => redirectSortByWithCurrentPosition(filterConfig, 'relevance-user');



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
    addCurrentPositionToQuery,
    getApiPathList,
    getApiPathDetail,
    getParsedQueryFeatureCodes,

    sortByDistance,
    sortByDistanceUser,
    sortByName,
    sortByRelevance,
    sortByRelevanceUser
}
