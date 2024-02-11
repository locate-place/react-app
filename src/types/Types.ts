import React from "react";

type TypeValue = {
    "value": number,
    "unit": string,
    "value-formatted": string,
}

type TypeDistance = {
    "meters": TypeValue,
    "kilometers": TypeValue,
}

type TypePosition = {
    "decimal": number,
    "dms": string,
}

type TypeDirection = {
    "degree": number,
    "cardinal-direction": string,
    "cardinal-direction-translated": string,
}

type TypeLocationCoordinate = {
    coordinate: TypeCoordinate,
}

type TypeSrcSet = {
    "srcSet": string,
    "media": string,
}

type TypeBirthday = {
    "date": string,
    "name": string,
    "name_short": string,
};

type TypeHoliday = {
    "date": string,
    "name": string,
    "name_short": string,
};

type TypeBirthdays = TypeBirthday[][];

type TypeHolidays = TypeHoliday[];

type TypeAirportCodes = {
    "iata"?: string,
    "icao"?: string,
}

type TypePlace = {
    "geoname-id": number,
    "name": string,
    "updated-at": string,
    "properties": TypeProperties,
    "feature": TypeFeature,
}

type TypeFilterConfig = {
    "c"?: string,           /* Calendar parameter */
    "m"?: string,           /* Month parameter */
    "q"?: string,           /* Query parameter */
    "p"?: string,           /* Current position parameter */
    "distance"?: string,    /* Distance parameter */
    "limit"?: string,       /* Limit parameter */
    "page"?: string,        /* Page parameter */
    "s"?: string,           /* Sort parameter */
    "country"?: string,     /* Country parameter */
    "language"?: string,    /* Language parameter */
    "next_places"?: string, /* Next places parameter */
}

type TypeQuerFeatureCode = {
    "code": string,
    "translated": string,
}

type TypeError = {
    "message": string,
}|null;

type TypeLoaded = boolean;

type TypeDataVersion = {
    "version": string,
    "date": string,
}

type TypeDataCalendarPage = {
    birthdays: TypeBirthdays,
    color: string,
    colors: string[],
    coordinate: string,
    coordinate_decimal: string,
    coordinate_dms: string,
    google_maps: string,
    holidays: TypeHolidays,
    identifier: string,
    month: number,
    page_title: string,
    description?: string,
    path: string,
    source: string,
    subtitle: string,
    target: string,
    title: string,
    year: number,
}

type TypeDataCalendar = {
    birthdays?: TypeBirthdays,
    holidays?: TypeHolidays,
    identifier: string,
    image: string,
    name?: string,
    pages?: TypeDataCalendarPage[],
    public: boolean,
    subtitle: string,
    title: string,
    url?: string
}

type TypeDataCalendars = {
    calendars: TypeDataCalendar[],
};

type TypeApiPropertiesGiven = {
    "coordinate"?: {
        "parsed": {
            "latitude": TypePosition,
            "longitude": TypePosition,
            "links": {
                [index: string]: string
            }
        },
        "location": TypeLocation,
    },
    "query"?: {
        "raw": string,
        "parsed": {
            "type": string,
            "search": string,
        },
    }
}

type TypeApiProperties = {
    "api-url": string,
    "date"?: string,
    "given"?: TypeApiPropertiesGiven,
    "memory-taken"?: string,
    "name": string|null,
    "path": string,
    "results"?: TypeResults,
    "time-taken"?: string,
    "type": string,
    "url": string|null,
    "valid": boolean,
    "version"?: string,
}

type TypeLoadApiArguments = {
    /* Required types */
    type: string,
    path: string,
    setLoaded: React.Dispatch<React.SetStateAction<TypeLoaded>>,
    setError: React.Dispatch<React.SetStateAction<TypeError>>,
    setProperties: React.Dispatch<React.SetStateAction<TypeApiProperties|null>>,

    /* Optional types */
    setDataVersion?: React.Dispatch<React.SetStateAction<TypeDataVersion|null>>,
    setDataCalendarPage?: React.Dispatch<React.SetStateAction<TypeDataCalendarPage|null>>,
    setDataCalendar?: React.Dispatch<React.SetStateAction<TypeDataCalendar|null>>,
    setDataCalendars?: React.Dispatch<React.SetStateAction<TypeDataCalendars|null>>,
    setDataLocation?: React.Dispatch<React.SetStateAction<TypeLocation|null>>,
    setDataLocations?: React.Dispatch<React.SetStateAction<TypeLocations|null>>,
    callback?: Function,
}

/* Other types.
 */
type TypeSearchTypeTranslation = {
    'search-list-general': string,
    'search-list-with-features': string,
    'search-geoname-id': string,
    'search-coordinate': string,
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
    "total": number,
    "results": number,
    "page": number,
}

type TypeProperties = {
    "elevation"?: TypeValue,
    "population"?: TypeValue,
    "airport_codes"?: TypeAirportCodes,
    "country": string,
}

type TypeFeature = {
    "code": string,
    "code-name": string,
    "class": string,
    "class-name": string,
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

type TypeNextPlaces = any;

type TypeAdministrativeLocations = {
    [index: string]: TypeLocation
}

type TypeLocation = {
    "coordinate": TypeCoordinate,
    "feature": TypeFeature,
    "geoname-id": number,
    "links": {
        "wikipedia"?: {
            "this"?: string,
            "locations"?: {
                "district-locality"?: string,
                "city-municipality"?: string,
                "state"?: string,
                "country"?: string
            },
            "next-places"?: {
                [index: string]: {
                    "link": string,
                    "number": number
                }[]
            }
        }
        "maps"?: {
            [index: string]: string
        }
    },
    "locations"?: TypeAdministrativeLocations,
    "name": string,
    "name-full"?: string,
    "next-places"?: {
        A?: TypeNextPlaces,
        H?: TypeNextPlaces,
        L?: TypeNextPlaces,
        P?: TypeNextPlaces,
        R?: TypeNextPlaces,
        S?: TypeNextPlaces,
        T?: TypeNextPlaces,
        U?: TypeNextPlaces,
        V?: TypeNextPlaces,
    }
    "next-places-config": object,
    "properties": TypeProperties,
    "timezone"?: {
        timezone: string,
        offset: string
        country: string,
        "current-time": {
            "timezone": string,
            "utc": string
        }
        coordinate: TypeCoordinate
    },
    "updated-at": string,
}

type TypeLocations = TypeLocation[];

type TypeApiData = {
    "data-licence": TypeDataLicence,
    "time-taken": string,
    "memory-taken": string,
    "performance": TypePerformance,
    "results"?: TypeResults,
    "data": TypeLocation|Array<TypeLocation>,
    "given": object,
    "valid": boolean,
    "date": string,
    "version": string,
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
    TypeDataCalendar,
    TypeDataCalendars,
    TypeApiProperties,
    TypeLoadApiArguments,
    TypeSearchTypeTranslation,
    TypeAirportCodes,

    /* Full API Types. */
    TypeDataLicence,
    TypePerformance,
    TypeResults,
    TypeProperties,
    TypeFeature,
    TypeCoordinate,
    TypeNextPlaces,
    TypeAdministrativeLocations,
    TypeLocation,
    TypeLocations,
    TypeApiData,

    typeLocations,
    typeLocation
}
