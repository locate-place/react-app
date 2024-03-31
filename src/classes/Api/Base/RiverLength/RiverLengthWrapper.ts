/* Import types. */
import {TypeValue,} from "../../../../types/Types";

/**
 * Class RiverLengthWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-03-31)
 * @since 0.1.0 (2024-03-31) First version.
 */
class RiverLengthWrapper
{
    private readonly riverLength: TypeValue;

    /**
     * @param riverLength {TypeValue}
     */
    constructor(riverLength: TypeValue)
    {
        this.riverLength = riverLength;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeValue
    {
        return this.riverLength;
    }

    /**
     * Returns the formatted river length.
     */
    getFormatted(): string
    {
        return this.riverLength["value-formatted"];
    }
}

/*
 * Export functions.
 */
export {
    RiverLengthWrapper
}
