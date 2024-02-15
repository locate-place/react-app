/* Import types. */
import {
    TypeGivenQuery,
} from "../../../../../types/Types";

/**
 * Class QueryWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class QueryWrapper
{
    private readonly query: TypeGivenQuery;

    /**
     * @param query {TypeGivenQuery}
     */
    constructor(query: TypeGivenQuery)
    {
        this.query = query;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGivenQuery
    {
        return this.query;
    }
}

/*
 * Export functions.
 */
export {
    QueryWrapper
}
