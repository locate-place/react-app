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
    TypeApiProperties,
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
