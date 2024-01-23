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
    "degrees": number,
    "cardinal-direction": string,
    "cardinal-direction-translated": string
}

type TypeCoordinate = {
    "latitude": TypePosition,
    "longitude": TypePosition,
    "srid": number,
    "distance": TypeDistance,
    "direction": TypeDirection
    "distance-user": TypeDistance,
    "direction-user": TypeDirection
}

type TypeLocation = {
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

type TypeBirthdays = {
    "birthdays": TypeBirthday[][];
}

type TypeHolidays = {
    "holidays": TypeHoliday[];
}

type TypeAirportCodes = {
    "iata"?: string;
    "icao"?: string;
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

type TypePlace = {
    "geoname-id": number;
    "name": string;
    "updated-at": string;
    "properties": TypeProperties;
    "feature": TypeFeature;
}

type TypeFilterConfig = {
    "q"?: string;
    "c"?: string;
    "country"?: string;
    "language"?: string;
    "distance"?: string;
    "limit"?: string;
    "page"?: string;
    "s"?: string;
    "next_places"?: string;
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

type TypeResults = {
    "total": number;
    "results": number;
    "page": number;
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

/*
 * Export functions.
 */
export {
    TypeValue,
    TypeDistance,
    TypePosition,
    TypeDirection,
    TypeCoordinate,
    TypeLocation,
    TypeSrcSet,
    TypeBirthday,
    TypeBirthdays,
    TypeHoliday,
    TypeHolidays,
    TypeFeature,
    TypePlace,
    TypeFilterConfig,
    TypeQuerFeatureCode,
    TypeError,
    TypeLoaded,
    TypeDataVersion,
    TypeApiProperties,
    TypeAirportCodes
}
