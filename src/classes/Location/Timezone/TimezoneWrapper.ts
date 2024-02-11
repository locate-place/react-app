/* Import types. */
import {
    TypeCurrentTime,
    TypeTimezone,
} from "../../../types/Types";

/* Import classes. */
import {CoordinateWrapper} from "../Coordinate/CoordinateWrapper";

/**
 * Class TimezoneWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class TimezoneWrapper
{
    private readonly timezone: TypeTimezone;

    /**
     * LocationApiWrapper constructor.
     *
     * @param timezone {TypeTimezone}
     */
    constructor(timezone: TypeTimezone)
    {
        this.timezone = timezone;
    }

    /**
     * Returns the timezone data.
     */
    get(): TypeTimezone
    {
        return this.timezone;
    }

    /**
     * Returns the name of the timezone.
     */
    getTimezone(): string
    {
        return this.timezone.timezone;
    }

    /**
     * Returns the country code of the timezone.
     */
    getCountryCode(): string
    {
        return this.timezone.country;
    }

    /**
     * Returns the offset of the timezone.
     */
    getOffset(): string
    {
        return this.timezone.offset;
    }

    /**
     * Returns the current time of the timezone.
     */
    getCurrentTime(): TypeCurrentTime
    {
        return this.timezone['current-time'];
    }

    /**
     * Returns the coordinate of the timezone.
     */
    getCoordinate(): CoordinateWrapper
    {
        return new CoordinateWrapper(this.timezone.coordinate);
    }
}

/*
 * Export functions.
 */
export {
    TimezoneWrapper
}
