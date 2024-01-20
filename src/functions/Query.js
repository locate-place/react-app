/*
 * Configurations
 */
const reactPathLocations = '/locations.html';
const reactPathLocation = '/location.html';
const apiPathQuerySearch = '/api/v1/location.json';
const apiPathExampleSearch = '/api/v1/location/examples.json';
const apiPathDetail = '/api/v1/location/coordinate.json';

const nameParameterCoordinates = 'c';

/**
 * Returns the coordinate string from the search parameters.
 *
 * @param searchParams
 * @returns {*}
 */
const getCoordinate = (searchParams) => {
    return searchParams.get(nameParameterCoordinates);
};

/**
 * Returns the query string from the search parameters.
 *
 * @param searchParams
 * @returns {*}
 */
const getQuery = (searchParams) => {
    return searchParams.get('q');
};

/**
 * Returns the query string from the search parameters.
 *
 * @param searchParams
 * @returns {*}
 */
const getSort = (searchParams) => {
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
 * @param searchParams
 * @returns {{}}
 */
const getFilterConfig = (searchParams) =>
{
    const country = searchParams.get('country');
    const coordinate = searchParams.get(nameParameterCoordinates);
    const distance = searchParams.get('distance');
    const language = searchParams.get('language');
    const limit = searchParams.get('limit');
    const query = searchParams.get('q');
    const sort = searchParams.get('s');
    const nextPlaces = searchParams.get('next_places');

    let filterConfig = {};

    filterConfig['country'] = (country ? country : 'DE');
    coordinate && (filterConfig[nameParameterCoordinates] = coordinate);
    distance && (filterConfig['distance'] = distance);
    filterConfig['language'] = (language? language : 'de');
    limit && (filterConfig['limit'] = 10);
    query && (filterConfig['q'] = query);
    sort && (filterConfig['s'] = sort);
    nextPlaces && (filterConfig['next_places'] = 1);

    return filterConfig;
};

/**
 * Converts the filter configuration into a query string.
 *
 * @param filterConfig
 * @returns {string}
 */
const convertFilterToQueryString = (filterConfig) =>
{
    const keyValuePairs = [];

    for (const key in filterConfig) {
        if (filterConfig.hasOwnProperty(key)) {
            keyValuePairs.push(`${key}=${encodeURIComponent(filterConfig[key])}`);
        }
    }

    return keyValuePairs.join('&');
}

/**
 * Redirects the user to the sort by page.
 *
 * @param filterConfig
 * @param sortName
 */
const redirectSortBy = (filterConfig, sortName) =>
{
    /* Create a copy of the object. Do not use the reference. */
    let filter = { ...filterConfig };

    filter['s'] = sortName;
    window.location.href = reactPathLocations + '?' + convertFilterToQueryString(filter);
}

/**
 * Redirects the user to the sort by page with current position.
 *
 * @param filterConfig
 * @param sortName
 */
const redirectSortByWithCurrentPosition = (filterConfig, sortName) =>
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
 * @param filterConfig
 */
const addCurrentPositionToQuery = (filterConfig) =>
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
 * @param searchParams
 * @param withParameter
 * @returns {string}
 */
const getApiPathList = (searchParams, withParameter) =>
{
    withParameter = !!withParameter

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
 * @param searchParams
 * @param withParameter
 * @returns {string}
 */
const getApiPathDetail = (searchParams, withParameter) =>
{
    withParameter = !!withParameter

    let apiPath = apiPathDetail;

    if (!withParameter) {
        return apiPath;
    }

    return apiPath + '?' + convertFilterToQueryString(getFilterConfig(searchParams));
}

/**
 * Rounds the given value to the given number of decimals.
 *
 * @param value
 * @param decimals
 * @returns {number}
 */
const round = (value, decimals) =>
{
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

/**
 * Returns the latitude and longitude of the current position.
 *
 * @param position
 * @returns {string}
 */
const getPosition = (position) =>
{
    return round(position.coords.latitude, 6) + ',' + round(position.coords.longitude, 6);
}

/**
 * Converts the given feature list into a string.
 *
 * @param parsedQueryFeatureCodes
 * @returns {string|*[]}
 */
const getParsedQueryFeatureCodes = (parsedQueryFeatureCodes) =>
{
    let hasParsedQueryFeatureCodes = !!parsedQueryFeatureCodes;

    if (!hasParsedQueryFeatureCodes) {
        return null;
    }

    let data = [];

    parsedQueryFeatureCodes.forEach((item) => {
        data.push(item.translated + ' (' + item.code + ')');
    });

    return data;
}

const sortByDistance = (filterConfig) => redirectSortBy(filterConfig, 'distance');
const sortByDistanceUser = (filterConfig) => redirectSortByWithCurrentPosition(filterConfig, 'distance-user');
const sortByName = (filterConfig) => redirectSortBy(filterConfig, 'name');
const sortByRelevance = (filterConfig) => redirectSortBy(filterConfig, 'relevance');
const sortByRelevanceUser = (filterConfig) => redirectSortByWithCurrentPosition(filterConfig, 'relevance-user');



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
