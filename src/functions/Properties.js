/**
 * Returns if the elevation should be shown for the given feature code.
 *
 * @param featureCode
 * @returns {boolean}
 */
const showElevation = (featureCode) =>
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
const getElevation = (place, separator) =>
{
    let featureCode = place.feature['code'];

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
 * @returns {boolean}
 */
const showPopulation = (featureClass) =>
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
const getPopulation = (place, separator) =>
{
    let showMissingPopulation = false;

    let featureClass = place.feature['class'];

    console.log(featureClass);

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
