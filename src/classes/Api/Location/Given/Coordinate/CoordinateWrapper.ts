/* Import types. */
import {
    TypeGivenCoordinate,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";

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

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * @param coordinate {TypeGivenCountry}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(coordinate: TypeGivenCoordinate, apiLocationWrapper: ApiLocationWrapper)
    {
        this.coordinate = coordinate;
        this.apiLocationWrapper = apiLocationWrapper;
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
