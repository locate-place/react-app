/* Import types. */
import {
    TypeGivenCoordinate,
} from "../../../../../types/Types";
import {LocationWrapper} from "../../../Location/Location/LocationWrapper";
import {CoordinateParsedWrapper} from "./Parsed/CoordinateParsedWrapper";

/**
 * Class CoordinateWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class CoordinateWrapper
{
    private readonly coordinate: TypeGivenCoordinate;

    /**
     * @param coordinate {TypeGivenCountry}
     */
    constructor(coordinate: TypeGivenCoordinate)
    {
        this.coordinate = coordinate;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGivenCoordinate
    {
        return this.coordinate;
    }

    getRaw(): string
    {
        return this.coordinate.raw;
    }

    getLocation(): LocationWrapper|null
    {
        return this.coordinate.location ? new LocationWrapper(this.coordinate.location) : null;
    }

    getParsed(): CoordinateParsedWrapper
    {
        return new CoordinateParsedWrapper(this.coordinate.parsed);
    }
}

/*
 * Export functions.
 */
export {
    CoordinateWrapper
}
