/* Import types. */
import {TypePlace} from "../types/Types";

/**
 * Returns if the elevation should be shown for the given feature class.
 *
 * @param featureCode
 */
const showElevation = (featureCode: string): boolean =>
{
    return [
        'HLL',
        'MT',
        'PK'
    ].includes(featureCode);
}

/**
 * Returns the elevation for the given place.
 *
 * @param place
 * @param separator
 * @returns {*|null}
 */
const getElevation = (place: TypePlace, separator: string): string|null =>
{
    let featureCode: string = place.feature['code'];

    if (!showElevation(featureCode)) {
        return null;
    }

    if (!place.properties.elevation) {
        return null;
    }

    return separator + place.properties.elevation['value-formatted'];
}

/**
 * Returns if the population should be shown for the given feature class.
 *
 * @param featureClass
 */
const showPopulation = (featureClass: string): boolean =>
{
    return [
        'A',
        'P'
    ].includes(featureClass);
}

/**
 * Returns the population for the given place.
 *
 * @param place
 * @param separator
 * @returns {*|null}
 */
const getPopulation = (place: TypePlace, separator: string): string|null =>
{
    let showMissingPopulation: boolean = false;

    let featureClass: string = place.feature['class'];

    if (!showPopulation(featureClass)) {
        return null;
    }

    if (!place.properties.population) {
        return showMissingPopulation ?
            separator + 'Keine Einwohner angegeben' :
            null;
    }

    return separator + place.properties.population['value-formatted'] + ' Einwohner';
}

/**
 * Returns if the airport code should be shown for the given feature code.
 *
 * @param {string} featureCode
 */
const showAirportCode = (featureCode: string): boolean =>
{
    return [
        'AIRP'
    ].includes(featureCode);
}

/**
 * Returns the population for the given place.
 *
 * @param place
 * @param separator
 * @returns {*|null}
 */
const getAirportCodeIata = (place: TypePlace, separator: string|null = null): string|null =>
{
    let showMissingAirportCode: boolean = false;

    let featureCode: string = place.feature['code'];

    if (!showAirportCode(featureCode)) {
        return null;
    }

    if (!place.properties['airport_codes']?.iata) {
        return showMissingAirportCode ?
            separator + 'Kein IATA Code angegeben' :
            null;
    }

    return (separator ? separator : '') + place.properties['airport_codes']?.iata;
}

/*
 * Export functions.
 */
export {
    showElevation,
    getElevation,
    showPopulation,
    getPopulation,
    showAirportCode,
    getAirportCodeIata
}
