/* Import types. */
import {
    TypePosition,
} from "../../../../types/Types";

/**
 * Class PositionWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-17)
 * @since 0.1.0 (2024-02-17) First version.
 */
class PositionWrapper
{
    private readonly position: TypePosition;

    /**
     * @param position {TypePosition}
     */
    constructor(position: TypePosition)
    {
        this.position = position;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypePosition
    {
        return this.position;
    }

    /**
     * Returns the decimal of position.
     */
    getDecimal(): number
    {
        return this.position.decimal;
    }

    /**
     * Returns the "dms" of position.
     */
    getDMS(): string
    {
        return this.position.dms;
    }
}

/*
 * Export functions.
 */
export {
    PositionWrapper
}
