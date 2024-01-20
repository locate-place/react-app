/* Import types. */
import {TypePlace} from "../types/Types.ts";

/**
 * Returns if the elevation should be shown for the given feature code.
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
 * Returns if the population should be shown for the given feature code.
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

/*
 * Export functions.
 */
export {
    showElevation,
    getElevation,
    showPopulation,
    getPopulation
}
