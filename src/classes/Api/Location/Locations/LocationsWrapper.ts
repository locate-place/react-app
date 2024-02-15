/* Import types. */
import {
    TypeLocation,
} from "../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../ApiLocationWrapper";

/**
 * Class LocationsWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class LocationsWrapper
{
    private readonly locations: Array<TypeLocation>;

    private readonly locationApiWrapper: ApiLocationWrapper;

    /**
     * LocationApiWrapper constructor.
     *
     * @param locations {Array<TypeLocation>}
     * @param locationApiWrapper {ApiLocationWrapper}
     */
    constructor(locations: Array<TypeLocation>, locationApiWrapper: ApiLocationWrapper)
    {
        this.locations = locations;
        this.locationApiWrapper = locationApiWrapper;
    }

    /**
     * Returns the locations of the api.
     */
    get(): Array<TypeLocation>
    {
        return this.locations;
    }
}

/*
 * Export functions.
 */
export {
    LocationsWrapper
}
