/* Import types. */
import {
    TypeProperties, TypeValue,
} from "../../../types/Types";

class PropertiesWrapper
{
    private readonly properties: TypeProperties;

    /**
     * LocationApiWrapper constructor.
     *
     * @param properties {TypeProperties}
     */
    constructor(properties: TypeProperties)
    {
        this.properties = properties;
    }

    /**
     * Returns the property data.
     */
    get(): TypeProperties
    {
        return this.properties;
    }

    /**
     * Return the country code from location.
     */
    getCountryCode(): string
    {
        return this.properties.country;
    }

    /**
     * Return the country code from location.
     */
    getElevation(): TypeValue|null
    {
        return this.properties.elevation ?? null;
    }

    /**
     * Returns the population from location.
     */
    getPopulation(): TypeValue|null
    {
        return this.properties.population ?? null;
    }
}

/*
 * Export functions.
 */
export {
    PropertiesWrapper
}
