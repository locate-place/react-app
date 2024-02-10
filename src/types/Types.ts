import React from "react";

type TypeValue = {
    "value": number;
    "unit": string;
    "value-formatted": string;
}

type TypeDistance = {
    "meters": TypeValue,
    "kilometers": TypeValue
}

type TypePosition = {
    "decimal": number,
    "dms": string,
}

type TypeDirection = {
    "degree": number,
    "cardinal-direction": string,
    "cardinal-direction-translated": string
}

type TypeLocationCoordinate = {
    coordinate: TypeCoordinate
}

type TypeSrcSet = {
    "srcSet": string;
    "media": string;
}

type TypeBirthday = {
    "date": string;
    "name": string;
    "name_short": string;
};

type TypeHoliday = {
    "date": string;
    "name": string;
    "name_short": string;
};

type TypeBirthdays = TypeBirthday[][];

type TypeHolidays = TypeHoliday[];

type TypeAirportCodes = {
    "iata"?: string;
    "icao"?: string;
}

type TypePlace = {
    "geoname-id": number;
    "name": string;
    "updated-at": string;
    "properties": TypeProperties;
    "feature": TypeFeature;
}

type TypeFilterConfig = {
    "c"?: string;           /* Calendar parameter */
    "m"?: string;           /* Month parameter */
    "q"?: string;           /* Query parameter */
    "p"?: string;           /* Current position parameter */
    "country"?: string;     /* Country parameter */
    "language"?: string;    /* Language parameter */
    "distance"?: string;    /* Distance parameter */
    "limit"?: string;       /* Limit parameter */
    "page"?: string;        /* Page parameter */
    "s"?: string;           /* Sort parameter */
    "next_places"?: string; /* Next places parameter */
}

type TypeQuerFeatureCode = {
    "code": string;
    "translated": string;
}

type TypeError = {
    "message": string
}|null;

type TypeLoaded = boolean;

type TypeDataVersion = {
    "version": string;
    "date": string;
}

type TypeDataCalendarPage = {
    birthdays: TypeBirthdays;
    color: string;
    colors: string[];
    coordinate: string;
    coordinate_decimal: string;
    coordinate_dms: string;
    google_maps: string;
    holidays: TypeHolidays;
    identifier: string;
    month: number;
    page_title: string;
    description?: string;
    path: string;
    source: string;
    subtitle: string;
    target: string;
    title: string;
    year: number;
}

type TypeApiProperties = {
    "date"?: string;
    "given"?: string;
    "memory-taken"?: string;
    "time-taken"?: string;
    "valid": boolean;
    "version"?: string;
    "name": string|null;
    "url": string|null;
    "path": string;
    "type": string;
    "api-url": string;
    "results"?: TypeResults;
}

type TypeLoadApiArguments = {
    /* Required types */
    type: string;
    path: string;
    setLoaded: React.Dispatch<React.SetStateAction<TypeLoaded>>;
    setError: React.Dispatch<React.SetStateAction<TypeError>>;
    setProperties: React.Dispatch<React.SetStateAction<TypeApiProperties|null>>;

    /* Optional types */
    setDataVersion?: React.Dispatch<React.SetStateAction<TypeDataVersion|null>>;
    setDataCalendarPage?: React.Dispatch<React.SetStateAction<TypeDataCalendarPage|null>>;
    callback?: Function;
}

/* Full API Types.
 */

const typeLocation: string = 'location';

const typeLocations: string = 'locations';

type TypeDataLicence = {
    "full": string,
    "short": string,
    "url": string
}

type TypePerformance = object;

type TypeResults = {
    "total": number;
    "results": number;
    "page": number;
}

type TypeProperties = {
    "elevation"?: TypeValue;
    "population"?: TypeValue;
    "airport_codes"?: TypeAirportCodes;
    "country": string;
}

type TypeFeature = {
    "code": string;
    "code-name": string;
    "class": string;
    "class-name": string;
}

type TypeCoordinate = {
    "latitude": TypePosition,
    "longitude": TypePosition,
    "srid": number,
    "distance"?: TypeDistance,
    "direction"?: TypeDirection
    "distance-user"?: TypeDistance,
    "direction-user"?: TypeDirection
}

type TypeLocation = {
    "geoname-id": number,
    "name": string,
    "name-full"?: string,
    "updated-at": string,
    "properties": TypeProperties,
    "feature": TypeFeature,
    "coordinate": TypeCoordinate
    "timezone": object,
    "links": object,
    "next-places-config": object,
    "locations"?: object,
    "next-places"?: object
}

type TypeApiData = {
    "data-licence": TypeDataLicence,
    "time-taken": string;
    "memory-taken": string;
    "performance": TypePerformance;
    "results"?: TypeResults;
    "data": TypeLocation|Array<TypeLocation>;
    "given": object;
    "valid": boolean;
    "date": string;
    "version": string;
}

/*
 * Export functions.
 */
export {
    TypeValue,
    TypeDistance,
    TypePosition,
    TypeDirection,
    TypeLocationCoordinate,
    TypeSrcSet,
    TypeBirthday,
    TypeBirthdays,
    TypeHoliday,
    TypeHolidays,
    TypePlace,
    TypeFilterConfig,
    TypeQuerFeatureCode,
    TypeError,
    TypeLoaded,
    TypeDataVersion,
    TypeDataCalendarPage,
    TypeApiProperties,
    TypeLoadApiArguments,
    TypeAirportCodes,

    /* Full API Types. */
    TypeDataLicence,
    TypePerformance,
    TypeResults,
    TypeProperties,
    TypeFeature,
    TypeCoordinate,
    TypeLocation,
    TypeApiData,

    typeLocations,
    typeLocation
}
