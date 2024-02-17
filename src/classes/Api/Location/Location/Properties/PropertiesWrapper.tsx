import React from 'react';
import {TFunction} from "i18next";

/* Import types. */
import {
    TypeProperties,
    TypeValue,
} from "../../../../../types/Types";

/* Import translations. */
import {translateCountryCode} from "../../../../../translations/Country";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";
import {LocationWrapper} from "../LocationWrapper";
import {AirportCodesWrapper} from "../../../Base/AirportCodes/AirportCodesWrapper";

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

    private readonly apiLocationWrapper: ApiLocationWrapper|null;

    /**
     * @param properties {TypeProperties}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(properties: TypeProperties, apiLocationWrapper: ApiLocationWrapper|null)
    {
        this.properties = properties;

        this.apiLocationWrapper = apiLocationWrapper;
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
     * Returns if the population from location exists.
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

    /**
     * Returns if the airport codes exists.
     */
    hasAirportCodes(): boolean
    {
        return !!this.properties.airport_codes;
    }

    /**
     * Returns the airport codes.
     */
    getAirportCodes(): AirportCodesWrapper|null
    {
        return this.properties.airport_codes ? new AirportCodesWrapper(this.properties.airport_codes) : null;
    }

    /**
     * Returns if the airport code should be shown for the given feature code.
     *
     * @param {string} location
     */
    showAirportCode(location: LocationWrapper): boolean
    {
        return [
            'AIRP'
        ].includes(location.getFeature().getCode().getCode());
    }

    /**
     * Returns the population for the given place.
     */
    getAirportCodeText = (location: LocationWrapper, t: TFunction<"translation", undefined>, separator: string|null = null) =>
    {
        let showMissingAirportCode: boolean = false;

        if (!this.showAirportCode(location)) {
            return null;
        }

        if (!this.hasAirportCodes() || !this.getAirportCodes()?.hasIata()) {
            return showMissingAirportCode ?
                separator + t('TEXT_NEXT_PLACE_NO_IATA_CODE_SPECIFIED') :
                null;
        }

        return <>
            {
                separator ?
                    <span>{separator}</span> :
                    <></>
            }
            {
                <code title="IATA-Code">
                    {
                        this.getAirportCodes()?.getIata() ?? <></>}
                </code>
            }
        </>;
    }
}

/*
 * Export functions.
 */
export {
    PropertiesWrapper
}
