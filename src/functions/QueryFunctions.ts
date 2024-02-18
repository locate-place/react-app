/* Configurations */
const reactPathLocations: string = '/locations.html';
const reactPathLocation: string = '/location.html';

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
 * Removes all non-visible characters from string.
 *
 * @param inputString
 */
const trimString = (inputString: string): string =>
{
    return inputString.replace(/^\s+|\s+$/g, '');
}



/*
 * Export functions.
 */
export {
    getPathLocationApi,
    trimString
}
