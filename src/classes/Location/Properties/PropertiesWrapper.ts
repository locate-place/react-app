/* Import types. */
import {
    TypeProperties, TypeValue,
} from "../../../types/Types";

/* Import translations. */
import {translateCountryCode} from "../../../translations/Country";

/* Import classes. */
import {LocationApiWrapper} from "../../LocationApiWrapper";

/**
 * Class PropertiesWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class PropertiesWrapper
{
    private readonly properties: TypeProperties;

    private readonly locationApiWrapper: LocationApiWrapper;

    /**
     * PropertiesWrapper constructor.
     *
     * @param properties {TypeProperties}
     * @param locationApiWrapper {LocationApiWrapper}
     */
    constructor(properties: TypeProperties, locationApiWrapper: LocationApiWrapper)
    {
        this.properties = properties;

        this.locationApiWrapper = locationApiWrapper;
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
     * Returns the translated country name from location.
     */
    getCountryCodeTranslated(): string
    {
        return translateCountryCode(this.getCountryCode());
    }

    /**
     * Returns if the country code from location exist.
     */
    hasElevation(): boolean
    {
        return !!this.properties.elevation;
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
    hasPopulation(): boolean
    {
        return !!this.properties.population;
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
