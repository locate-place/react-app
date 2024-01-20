/* Import types */
import {TypeCoordinate} from "../types/Types.ts";

/**
 * Returns the decimal format of the given coordinate.
 *
 * @param coordinate
 * @returns {string}
 */
const getDecimal = (coordinate: TypeCoordinate): string =>
{
    return coordinate.latitude.decimal + ", " + coordinate.longitude.decimal;
}

/**
 * Returns the DMS format of the given coordinate.
 *
 * @param coordinate
 * @returns {string}
 */
const getDms = (coordinate: TypeCoordinate): string =>
{
    return coordinate.latitude.dms + ", " + coordinate.longitude.dms;
}

/*
 * Export functions.
 */
export {
    getDecimal,
    getDms
}
