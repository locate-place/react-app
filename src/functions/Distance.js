/**
 * Converts the given meter to the kilometer.
 *
 * @param meter
 * @returns {string}
 */
const convertMeterToKilometer = (meter) => {
    return (meter / 1000).toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + ' km';
}

/*
 * Export functions.
 */
export {
    convertMeterToKilometer
}
