/* Import types. */
import {
    TypeGivenQuery,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";

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

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * @param query {TypeGivenQuery}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(query: TypeGivenQuery, apiLocationWrapper: ApiLocationWrapper)
    {
        this.query = query;
        this.apiLocationWrapper = apiLocationWrapper;
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
