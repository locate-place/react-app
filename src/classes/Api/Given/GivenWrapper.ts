/* Import types. */
import {
    TypeGiven,
} from "../../../types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../LocationApiWrapper";

/**
 * Class GivenWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class GivenWrapper
{
    private readonly given: TypeGiven;

    private readonly locationApiWrapper: LocationApiWrapper;

    /**
     * LocationApiWrapper constructor.
     *
     * @param given {TypeGiven}
     * @param locationApiWrapper {LocationApiWrapper}
     */
    constructor(given: TypeGiven, locationApiWrapper: LocationApiWrapper)
    {
        this.given = given;
        this.locationApiWrapper = locationApiWrapper;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGiven
    {
        return this.given;
    }
}

/*
 * Export functions.
 */
export {
    GivenWrapper
}
