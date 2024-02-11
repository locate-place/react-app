/* Import types. */
import {
    TypeNextPlaces,
} from "../../../types/Types";

/**
 * Class NextPlacesWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class NextPlacesWrapper
{
    private readonly nextPlaces: TypeNextPlaces;

    /**
     * NextPlacesWrapper constructor.
     *
     * @param nextPlaces {TypeNextPlaces}
     */
    constructor(nextPlaces: TypeNextPlaces)
    {
        this.nextPlaces = nextPlaces;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeNextPlaces
    {
        return this.nextPlaces;
    }
}

/*
 * Export functions.
 */
export {
    NextPlacesWrapper
}
