/**
 * Returns the decimal format of the given coordinate.
 *
 * @param coordinate
 * @returns {string}
 */
const getDecimal = (coordinate) => {
    return coordinate.latitude.decimal + ", " + coordinate.longitude.decimal;
}

/**
 * Returns the DMS format of the given coordinate.
 *
 * @param coordinate
 * @returns {string}
 */
const getDms = (coordinate) => {
    return coordinate.latitude.dms + ", " + coordinate.longitude.dms;
}

/*
 * Export functions.
 */
export {
    getDecimal,
    getDms
}
