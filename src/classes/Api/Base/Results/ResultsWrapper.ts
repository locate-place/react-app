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
    getResultsTotal(): number
    {
        return this.results["results-total"];
    }

    /**
     * Returns the shown number of results.
     */
    getResultsCurrent(): number
    {
        return this.results["results-current"];
    }

    /**
     * Returns the page of the results.
     */
    getPageCurrent(): number
    {
        return this.results["page-current"];
    }

    /**
     * Returns the size of the page.
     */
    getPageSize(): number
    {
        return this.results["page-size"];
    }
}

/*
 * Export functions.
 */
export {
    ResultsWrapper
}
