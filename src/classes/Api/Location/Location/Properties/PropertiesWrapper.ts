import {TFunction} from "i18next";

/* Import types. */
import {
    TypeProperties,
    TypeValue,
} from "../../../../../types/Types";

/* Import translations. */
import {translateCountryCode} from "../../../../../translations/Country";

/* Import classes. */
import {LocationApiWrapper} from "../../LocationApiWrapper";
import {LocationWrapper} from "../LocationWrapper";

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
     * Return the elevation from location.
     */
    getElevation(): TypeValue|null
    {
        return this.properties.elevation ?? null;
    }

    /**
     * Returns if the elevation text from location should be shown.
     */
    showElevationText(location: LocationWrapper): boolean
    {
        return [
            'HLL',
            'MT',
            'PK'
        ].includes(location.getFeature().getCode().getCode());
    }

    /**
     * Return the elevation text from location.
     */
    getElevationText(location: LocationWrapper, t: TFunction<"translation", undefined>, separator: string = ''): string|null
    {
        if (!this.showElevationText(location)) {
            return null;
        }

        if (!location.getProperties().hasElevation()) {
            return null;
        }

        return separator + location.getProperties().getElevation()?.["value-formatted"];
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

    /**
     * Returns if the population text from location should be shown.
     */
    showPopulationText(location: LocationWrapper): boolean
    {
        return [
            'A',
            'P'
        ].includes(location.getFeature().getClass().getCode());
    }

    /**
     * Returns the population text from location.
     */
    getPopulationText(location: LocationWrapper, t: TFunction<"translation", undefined>, separator: string = ''): string|null
    {
        if (!this.showPopulationText(location)) {
            return null;
        }

        if (!location.getProperties().hasPopulation()) {
            return null;
        }

        const inhabitants = location.getProperties().getPopulation()?.["value-formatted"];

        return separator + t('TEXT_NEXT_PLACE_INHABITANTS_TEXT', {inhabitants});
    }
}

/*
 * Export functions.
 */
export {
    PropertiesWrapper
}
