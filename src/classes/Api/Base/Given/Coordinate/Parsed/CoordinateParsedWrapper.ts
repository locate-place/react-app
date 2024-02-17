/* Import types. */
import {
    TypeGivenCoordinateParsed
} from "../../../../../../types/Types";

/* Import classes. */
import {PositionWrapper} from "../../../Position/PositionWrapper";
import {LinksMapsWrapper} from "../../../LinksMaps/LinksMapsWrapper";

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

    /**
     * Returns the latitude PositionWrapper of the location.
     */
    getLatitude(): PositionWrapper
    {
        return new PositionWrapper(this.parsed.latitude);
    }

    /**
     * Returns the longitude PositionWrapper of the location.
     */
    getLongitude(): PositionWrapper
    {
        return new PositionWrapper(this.parsed.longitude);
    }

    /**
     * Returns the links LinksMapsWrapper of the location.
     */
    getLinks(): LinksMapsWrapper
    {
        return new LinksMapsWrapper(this.parsed.links);
    }

    /**
     * Returns if the srid property exists.
     */
    hasSrid(): boolean
    {
        return !!this.parsed.srid;
    }

    /**
     * Returns the srid of the location.
     */
    getSrid(): number|null
    {
        return this.parsed.srid ?? null;
    }
}

/*
 * Export functions.
 */
export {
    CoordinateParsedWrapper
}
