/* Import types. */
import {
    TypeLocation,
} from "../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../ApiLocationWrapper";
import {LocationWrapper} from "../Location/LocationWrapper";

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

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * @param locations {Array<TypeLocation>}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(locations: Array<TypeLocation>, apiLocationWrapper: ApiLocationWrapper)
    {
        this.locations = locations;
        this.apiLocationWrapper = apiLocationWrapper;
    }

    /**
     * Returns the locations of the api.
     */
    get(): Array<TypeLocation>
    {
        return this.locations;
    }

    /**
     * Returns an array of LocationWrapper objects.
     */
    getLocationWrapperArray(): Array<LocationWrapper>
    {
        return this.locations.map(location => new LocationWrapper(location, this.apiLocationWrapper));
    }
}

/*
 * Export functions.
 */
export {
    LocationsWrapper
}
