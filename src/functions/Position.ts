import {TFunction} from "i18next";
import {lastBearing, setDirection} from "./Compass";

const decimalNumberCoordinate = 5;

const decimalNumberDistance = 3;

const decimalNumberBearing = 2;

const classUserDistance = 'user-distance';

const classUserDegree = 'user-degree';
const classUserDirection = 'user-direction';
const classUserDirectionShort = 'user-direction-short';
const classUserPositionDecimal = 'user-position-decimal';
const classUserPositionDms = 'user-position-dms';

const classUserNoDistance = 'user-no-distance';

const classFlashBackground = 'flash-background';

const randomPositionValue = true;

interface TypeCoordinateDms {
    latitude: string,
    longitude: string
}

/**
 * Gets the current location.
 */
const getCurrentPosition = (callback: (position: GeolocationPosition) => void): void =>
{
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        callback(position);
    });
}

/**
 * Get position string from GeolocationPosition.
 *
 * @param position
 */
const getPosition = (position: GeolocationPosition): string =>
{
    return round(
            position.coords.latitude + (randomPositionValue ? (1 - Math.random() * 2) : .0), decimalNumberCoordinate
        ) +
        ', ' +
        round(
            position.coords.longitude + (randomPositionValue ? (1 - Math.random() * 2) : .0), decimalNumberCoordinate
        );
}

/**
 * Calculates the distance of two given coordinates on earth (WGS 84).
 *
 * @param latitudeFrom
 * @param longitudeFrom
 * @param latitudeTo
 * @param longitudeTo
 */
const calculateDistance = (latitudeFrom: number, longitudeFrom: number, latitudeTo: number, longitudeTo: number): number =>
{
    const toRadians = (degrees: number): number => degrees * Math.PI / 180;

    /* Earth radius in kilometers. */
    const earthRadiusKm = 6371;

    /* Difference in latitude and longitude. */
    const deltaLatitude = toRadians(latitudeTo - latitudeFrom);
    const deltaLongitude = toRadians(longitudeTo - longitudeFrom);

    /* Converting the start and end width from degrees to radians. */
    const radLatitudeFrom = toRadians(latitudeFrom);
    const radLatitudeTo = toRadians(latitudeTo);

    /* Haversine formula. */
    const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
        Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2) * Math.cos(radLatitudeFrom) * Math.cos(radLatitudeTo);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    /* Calculate the distance. */
    return round(earthRadiusKm * c, decimalNumberDistance);
}

/**
 * Updates some user position elements.
 *
 * @param latitudeFrom
 * @param longitudeFrom
 * @param className
 * @param callback
 */
const updateUserElements = (
    latitudeFrom: number,
    longitudeFrom: number,
    className: string,
    callback: (htmlElement: HTMLElement, latitudeFrom: number, longitudeFrom: number, latitudeTo: number, longitudeTo: number) => void
) =>
{
    const elements = document.querySelectorAll('.' + className);

    elements.forEach(element => {
        const htmlElement = element as HTMLElement;

        const latitudeTo: number|null = htmlElement.dataset.latitude ? parseFloat(htmlElement.dataset.latitude) : null;
        const longitudeTo: number|null = htmlElement.dataset.longitude ? parseFloat(htmlElement.dataset.longitude) : null;

        if (latitudeTo === null || longitudeTo === null) {
            return;
        }

        callback(htmlElement, latitudeFrom, longitudeFrom, latitudeTo, longitudeTo);
    });
}

/**
 * Flashes the background of given element.
 *
 * @param htmlElement
 */
const updateUserElementFlash = (htmlElement: HTMLElement) =>
{
    htmlElement.classList.add(classFlashBackground);

    window.setTimeout(() => {
        htmlElement.classList.remove(classFlashBackground);
    }, 1050);
}

/**
 * Updates user-distance class elements.
 *
 * @param latitudeFrom
 * @param longitudeFrom
 */
const updateUserDistanceElements = (
    latitudeFrom: number,
    longitudeFrom: number
) =>
{
    updateUserElements(latitudeFrom, longitudeFrom, classUserDistance, (htmlElement, latitudeFrom, longitudeFrom, latitudeTo, longitudeTo) => {
        const distanceKilometers: number = calculateDistance(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo);
        htmlElement.innerText = distanceKilometers.toString() + ' km';
        updateUserElementFlash(htmlElement);
    });
}

/**
 * Updates user-degree class elements.
 *
 * @param latitudeFrom
 * @param longitudeFrom
 */
const updateUserDegreeElements = (
    latitudeFrom: number,
    longitudeFrom: number
) =>
{
    updateUserElements(latitudeFrom, longitudeFrom, classUserDegree, (htmlElement, latitudeFrom, longitudeFrom, latitudeTo, longitudeTo) => {
        const bearing = calculateBearing(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo);

        htmlElement.dataset['degree'] = bearing.toString();
        setDirection(lastBearing);
    });
}

/**
 * Updates user-position-dms class elements.
 *
 * @param latitudeFrom
 * @param longitudeFrom
 */
const updateUserPositionDmsElements = (
    latitudeFrom: number,
    longitudeFrom: number
) =>
{
    updateUserElements(latitudeFrom, longitudeFrom, classUserPositionDms, (htmlElement, latitudeFrom, longitudeFrom, latitudeTo, longitudeTo) => {
        const coordinateDms = convertLatLonToDMS(latitudeFrom, longitudeFrom)
        htmlElement.innerText = coordinateDms.latitude + ', ' + coordinateDms.longitude;
        updateUserElementFlash(htmlElement);
    });
}

/**
 * Updates user-position-decimal class elements.
 *
 * @param latitudeFrom
 * @param longitudeFrom
 */
const updateUserPositionDecimalElements = (
    latitudeFrom: number,
    longitudeFrom: number
) =>
{
    updateUserElements(latitudeFrom, longitudeFrom, classUserPositionDecimal, (htmlElement, latitudeFrom, longitudeFrom, latitudeTo, longitudeTo) => {
        htmlElement.innerText = latitudeFrom.toString() + ', ' + longitudeFrom.toString();
        updateUserElementFlash(htmlElement);
    });
}

/**
 * Updates user-direction class elements.
 *
 * @param latitudeFrom
 * @param longitudeFrom
 * @param t
 */
const updateUserDirectionElements = (
    latitudeFrom: number,
    longitudeFrom: number,
    t:  TFunction<"translation", undefined>
) =>
{
    updateUserElements(latitudeFrom, longitudeFrom, classUserDirection, (htmlElement, latitudeFrom, longitudeFrom, latitudeTo, longitudeTo) =>
    {
        const bearing = calculateBearing(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo);
        const directionI18n = 'TEXT_WORD_DIRECTION_' + angleToCompassDirection(bearing);
        htmlElement.innerText = t(directionI18n);
        updateUserElementFlash(htmlElement);
    });
}

/**
 * Updates user-direction class elements.
 *
 * @param latitudeFrom
 * @param longitudeFrom
 */
const updateUserDirectionShortElements = (
    latitudeFrom: number,
    longitudeFrom: number
) =>
{
    updateUserElements(latitudeFrom, longitudeFrom, classUserDirectionShort, (htmlElement, latitudeFrom, longitudeFrom, latitudeTo, longitudeTo) =>
    {
        const bearing = calculateBearing(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo);
        htmlElement.innerText = angleToCompassDirection(bearing);
        updateUserElementFlash(htmlElement);
    });
}

/**
 * Tries to get the current user position and updates some user position elements.
 */
const updateUserPosition = (t:  TFunction<"translation", undefined>) =>
{
    getCurrentPosition((position: GeolocationPosition) =>
    {
        let latitudeFrom = position.coords.latitude;
        let longitudeFrom = position.coords.longitude;

        if (randomPositionValue) {
            latitudeFrom += 0.5 - Math.random();
            longitudeFrom += 0.5 - Math.random();
        }

        latitudeFrom = round(latitudeFrom, decimalNumberCoordinate);
        longitudeFrom = round(longitudeFrom, decimalNumberCoordinate);

        updateUserDistanceElements(latitudeFrom, longitudeFrom);
        updateUserDegreeElements(latitudeFrom, longitudeFrom);
        updateUserPositionDmsElements(latitudeFrom, longitudeFrom);
        updateUserDirectionElements(latitudeFrom, longitudeFrom, t);
        updateUserDirectionShortElements(latitudeFrom, longitudeFrom);
    });
}

/**
 * Function for converting a decimal number into DMS (degrees, minutes, seconds).
 *
 * @param degreesDecimal
 * @param type
 */
const decimalToDms = (degreesDecimal: number, type: 'latitude'|'longitude'): string =>
{
    /* Determining the direction based on the sign of the coordinate. */
    const direction = degreesDecimal >= 0 ? (type === 'latitude' ? 'N' : 'E') : (type === 'latitude' ? 'S' : 'W');

    /* Absolute value of the decimal degrees for the calculation. */
    const absDegrees = Math.abs(degreesDecimal);

    /* Extract degree. */
    const degrees = Math.floor(absDegrees);

    /* Extract minutes. */
    const minutesDecimal = (absDegrees - degrees) * 60;
    const minutes = Math.floor(minutesDecimal);

    /* Extract seconds. */
    const seconds = (minutesDecimal - minutes) * 60;

    /* Return of the formatted character string in DMS format */
    return `${degrees}°${minutes}′${seconds.toFixed(3)}″${direction}`;
}

/**
 * Function for converting latitudes and longitudes
 *
 * @param latitude
 * @param longitude
 */
const convertLatLonToDMS = (latitude: number, longitude: number): TypeCoordinateDms =>
{
    /* Conversion of latitude and longitude */
    const latDMS = decimalToDms(latitude, 'latitude');
    const lonDMS = decimalToDms(longitude, 'longitude');

    /* Combining and returning the width and length data in DMS */
    return {
        latitude: latDMS,
        longitude: lonDMS,
    };
}

/**
 * Function for calculating the angle between two coordinates in degrees
 *
 * @param latitudeFrom
 * @param longitudeFrom
 * @param latitudeTo
 * @param longitudeTo
 */
function calculateBearing(latitudeFrom: number, longitudeFrom: number, latitudeTo: number, longitudeTo: number): number
{
    /* Conversion from degree to radian */
    const toRadians = (degrees: number): number => degrees * Math.PI / 180;
    const toDegrees = (radians: number): number => radians * 180 / Math.PI;

    /* Conversion of input values from degrees to radians. */
    const latitudeFromRad = toRadians(latitudeFrom);
    const longitudeFromRad = toRadians(longitudeFrom);

    const latitudeToRad = toRadians(latitudeTo);
    const longitudeToRad = toRadians(longitudeTo);

    /* Calculation of the difference in longitude. */
    const deltaLongitude = longitudeToRad - longitudeFromRad;

    /* Calculation of the azimuth angle. */
    const y = Math.sin(deltaLongitude) * Math.cos(latitudeToRad);
    const x = Math.cos(latitudeFromRad) * Math.sin(latitudeToRad) - Math.sin(latitudeFromRad) * Math.cos(latitudeToRad) * Math.cos(deltaLongitude);
    const bearingRadians = Math.atan2(y, x);

    /* Conversion of the angle from radians back to degrees. */
    let bearingDegrees = toDegrees(bearingRadians);

    /* Normalization of the angle to a range from 0° to 360. */
    bearingDegrees = (bearingDegrees + 360) % 360;

    return round(bearingDegrees, decimalNumberBearing);
}

/**
 * Function for converting an angle into a compass direction
 *
 * @param angle
 */
function angleToCompassDirection(angle: number): string
{
    /* Normalization of the angle to ensure that it is between 0 and 360 degrees. */
    angle = angle % 360;

    /* Determining the direction based on the angle. */
    if (angle >= 22.5 && angle < 67.5) {
        return 'NE';
    } else if (angle >= 67.5 && angle < 112.5) {
        return 'E';
    } else if (angle >= 112.5 && angle < 157.5) {
        return 'SE';
    } else if (angle >= 157.5 && angle < 202.5) {
        return 'S';
    } else if (angle >= 202.5 && angle < 247.5) {
        return 'SW';
    } else if (angle >= 247.5 && angle < 292.5) {
        return 'W';
    } else if (angle >= 292.5 && angle < 337.5) {
        return 'NW';
    } else {
        return 'N';
    }
}



/**
 * Round function.
 *
 * @param value
 * @param decimals
 */
const round = (value: number, decimals: number): number =>
{
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}

/*
 * Export functions.
 */
export {
    decimalNumberCoordinate,
    decimalNumberDistance,
    classUserDistance,
    classUserDegree,
    classUserDirection,
    classUserDirectionShort,
    classUserPositionDecimal,
    classUserPositionDms,
    classUserNoDistance,
    classFlashBackground,
    getCurrentPosition,
    getPosition,
    calculateDistance,
    updateUserElements,
    updateUserPosition,
    updateUserPositionDecimalElements,
    updateUserPositionDmsElements,
    decimalToDms,
    convertLatLonToDMS,
    round
}
