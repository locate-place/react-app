/* Import types. */
import {
    TypeCurrentTime,
    TypeTimezone,
} from "../../../../../types/Types";

/* Import classes. */
import {CoordinateWrapper} from "../Coordinate/CoordinateWrapper";
import {ApiLocationWrapper} from "../../ApiLocationWrapper";

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

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * @param timezone {TypeTimezone}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(timezone: TypeTimezone, apiLocationWrapper: ApiLocationWrapper)
    {
        this.timezone = timezone;

        this.apiLocationWrapper = apiLocationWrapper;
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
        return new CoordinateWrapper(this.timezone.coordinate, this.apiLocationWrapper);
    }
}

/*
 * Export functions.
 */
export {
    TimezoneWrapper
}
