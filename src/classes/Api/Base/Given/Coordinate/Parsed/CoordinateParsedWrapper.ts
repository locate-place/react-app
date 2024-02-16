/* Import types. */
import {TypeGivenCoordinateParsed, TypePosition} from "../../../../../../types/Types";

/**
 * Class CoordinateWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class CoordinateParsedWrapper
{
    private readonly parsed: TypeGivenCoordinateParsed;

    /**
     * @param parsed {TypeGivenCoordinateParsed}
     */
    constructor(parsed: TypeGivenCoordinateParsed)
    {
        this.parsed = parsed;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGivenCoordinateParsed
    {
        return this.parsed;
    }

    getLatitude(): TypePosition
    {
        return this.parsed.latitude;
    }

    getLongitude(): TypePosition
    {
        return this.parsed.longitude;
    }

    getLatitudeDecimal(): number
    {
        return this.parsed.latitude.decimal;
    }

    getLongitudeDecimal(): number
    {
        return this.parsed.longitude.decimal;
    }

    getLatitudeDms(): string
    {
        return this.parsed.latitude.dms;
    }

    getLongitudeDms(): string
    {
        return this.parsed.longitude.dms;
    }
}

/*
 * Export functions.
 */
export {
    CoordinateParsedWrapper
}
