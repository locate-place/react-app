/* Import types. */
import {TypeApiProperties} from "../../types/Types";

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
    getProperties = (): TypeApiProperties =>
    {
        return this.properties;
    }

    /**
     * Returns if own position is available from api query.
     */
    isOwnPosition = (): boolean =>
    {
        return !!this.properties.given && !!this.properties.given.coordinate;
    }

    /**
     * Returns the own position from api response as string.
     *
     */
    getOwnPosition = (): string|null =>
    {
        return !!this.properties.given && !!this.properties.given.coordinate ?
            (this.properties.given.coordinate.parsed.latitude.dms + ', ' + this.properties.given.coordinate.parsed.longitude.dms) :
            null
        ;
    }

    /**
     * Returns if the api response contains any result.
     */
    hasResults = (): boolean =>
    {
        return this.getNumberResults() > 0;
    }

    /**
     * Returns the result of the api response.
     */
    getNumberResults = (): number =>
    {
        return (!!this.properties.results && this.properties.results.results) ? this.properties.results.results : 0;
    }

    /**
     * Returns the total number of results from api response.
     */
    getNumberTotal = (): number =>
    {
        return (!!this.properties.results && this.properties.results.total) ? this.properties.results.total : 0;
    }

    /**
     * Returns the current page of the api response.
     */
    getNumberPage = (): number =>
    {
        return !!this.properties.results ? this.properties.results.page : 1;
    }
}

/*
 * Export functions.
 */
export {
    ApiResponseProperty
}
