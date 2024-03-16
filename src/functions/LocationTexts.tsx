import React from 'react';
import {TFunction} from "i18next";

/* Import classes. */
import {LocationWrapper} from "../classes/Api/Location/Location/LocationWrapper";

/**
 * JSX wrapper function for locationWrapper.getProperties().getAirportCodeText().
 *
 * @param locationWrapper
 * @param t
 * @param separator
 */
const getLocationAirportCodeJsxText = (
    locationWrapper: LocationWrapper,
    t: TFunction<"translation", undefined>,
    separator: string|null = ' - '
): JSX.Element|null =>
{
    const airportCodeText = locationWrapper.getProperties().getAirportCodeText(locationWrapper, t) ?? null;

    if (airportCodeText === null) {
        return null;
    }

    return <>
        {separator ? <span>{separator}</span> : null}
        {<code title="IATA-Code">{ airportCodeText ?? null}</code>}
    </>;
}

/**
 * JSX wrapper function for locationWrapper.getProperties().getAirport()?.getPassengers().
 *
 * @param locationWrapper
 * @param t
 * @param separator
 */
const getLocationAirportPassengerJsxText = (
    locationWrapper: LocationWrapper,
    t: TFunction<"translation", undefined>,
    separator: string|null = ' - '
): JSX.Element|null =>
{
    const airportPassengers: string|null = locationWrapper.getProperties().getAirport()?.getPassengersText(t) ?? null;

    if (airportPassengers === null) {
        return null;
    }

    return <>
        {separator ? <span>{separator}</span> : null}
        {airportPassengers}
    </>;
}

/**
 * JSX wrapper function for locationWrapper.getProperties().getElevationText().
 *
 * @param locationWrapper
 * @param t
 * @param separator
 */
const getLocationElevationJsxText = (
    locationWrapper: LocationWrapper,
    t: TFunction<"translation", undefined>,
    separator: string|null = ' - '
): JSX.Element|null =>
{
    const elevationText = locationWrapper.getProperties().getElevationText(locationWrapper, t) ?? null;

    if (elevationText === null) {
        return null;
    }

    return <>
        {separator ? <span>{separator}</span> : null}
        {elevationText}
    </>;
}

/**
 * JSX wrapper function for locationWrapper.getProperties().getElevationText().
 *
 * @param locationWrapper
 * @param t
 * @param separator
 */
const getLocationPopulationJsxText = (
    locationWrapper: LocationWrapper,
    t: TFunction<"translation", undefined>,
    separator: string|null = ' - '
): JSX.Element|null =>
{
    const populationText = locationWrapper.getProperties().getPopulationText(locationWrapper, t) ?? null;

    if (populationText === null) {
        return null;
    }

    return <>
        {separator ? <span>{separator}</span> : null}
        {populationText}
    </>;
}

/**
 * JSX function to get additional location information.
 */
const getLocationJsxText = (
    locationWrapper: LocationWrapper,
    t: TFunction<"translation", undefined>,
    separator: string = ' - '
): JSX.Element =>
{
    const jsxTextFunctions = [
        getLocationAirportCodeJsxText,
        getLocationAirportPassengerJsxText,
        getLocationElevationJsxText,
        getLocationPopulationJsxText
    ];

    let texts: JSX.Element[] = jsxTextFunctions
        .map(fn => fn(locationWrapper, t, separator))
        .filter((element: JSX.Element|null): element is JSX.Element => Boolean(element));

    if (texts.length <= 0) {
        return <></>;
    }

    return <>
        {texts.map((text, index) =>
            <React.Fragment key={'location-jsx-text-' + index}>{text}</React.Fragment>
        )}
    </>;
}

/*
 * Export functions.
 */
export {
    getLocationAirportCodeJsxText,
    getLocationElevationJsxText,
    getLocationPopulationJsxText,

    getLocationJsxText
}
