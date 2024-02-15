/* Import types. */
import {
    TypeGivenCoordinate,
} from "../../../../../types/Types";

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
}

/*
 * Export functions.
 */
export {
    CoordinateWrapper
}
