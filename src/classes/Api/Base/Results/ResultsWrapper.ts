/* Import types. */
import {
    TypeResults,
} from "../../../../types/Types";

/**
 * Class ResultsWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class ResultsWrapper
{
    private readonly results: TypeResults;

    /**
     * @param results {TypeResults}
     */
    constructor(results: TypeResults)
    {
        this.results = results;
    }

    /**
     * Returns the locations of the api.
     */
    get(): TypeResults
    {
        return this.results;
    }

    /**
     * Returns the total number of results.
     */
    getTotal(): number
    {
        return this.results.total;
    }

    /**
     * Returns the shown number of results.
     */
    getResults(): number
    {
        return this.results.results;
    }

    /**
     * Returns the page of the results.
     */
    getPage(): number
    {
        return this.results.page;
    }
}

/*
 * Export functions.
 */
export {
    ResultsWrapper
}
