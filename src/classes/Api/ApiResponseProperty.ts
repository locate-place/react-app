/* Import types. */
import {TypeApiProperties} from "../../types/Types";

/* Import classes. */
import {ResultsWrapper} from "./Base/Results/ResultsWrapper";
import {GivenWrapper} from "./Base/Given/GivenWrapper";

/**
 * Class ApiResponseProperty
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class ApiResponseProperty
{
    private readonly properties: TypeApiProperties;

    /**
     * ApiResponseProperty constructor.
     *
     * @param properties {TypeApiProperties}
     */
    constructor(properties: TypeApiProperties)
    {
        this.properties = properties;
    }

    /**
     * Returns the given properties.
     */
    getProperties(): TypeApiProperties
    {
        return this.properties;
    }

    /**
     * Returns if own position is available from api query.
     */
    isOwnPosition(): boolean
    {
        return !!this.properties.given && !!this.properties.given.coordinate;
    }

    /**
     * Returns the own position from api response as string.
     *
     */
    getOwnPosition(): string|null
    {
        return !!this.properties.given && !!this.properties.given.coordinate ?
            (this.properties.given.coordinate.parsed.latitude.dms + ', ' + this.properties.given.coordinate.parsed.longitude.dms) :
            null
        ;
    }

    /**
     * Returns if the api response contains any result.
     */
    hasResults(): boolean
    {
        return !!this.properties.results;
    }

    /**
     * Returns the result wrapper.
     */
    getResults(): ResultsWrapper|null
    {
        return this.properties.results ? new ResultsWrapper(this.properties.results) : null;
    }

    /**
     * Returns if the given property exists.
     */
    hasGiven(): boolean
    {
        return !!this.properties.given;
    }

    /**
     * Returns the given property.
     */
    getGiven(): GivenWrapper|null
    {
        return this.properties.given ? new GivenWrapper(this.properties.given) : null;
    }

    /**
     * Returns the result of the api response.
     */
    getResultsResults(): number
    {
        return this.getResults()?.getResults() ?? 0;
    }

    /**
     * Returns the total number of results from api response.
     */
    getResultsTotal(): number
    {
        return this.getResults()?.getTotal() ?? 0;
    }

    /**
     * Returns the current page of the api response.
     */
    getResultsPage(): number
    {
        return this.getResults()?.getPage() ?? 0;
    }
}

/*
 * Export functions.
 */
export {
    ApiResponseProperty
}
