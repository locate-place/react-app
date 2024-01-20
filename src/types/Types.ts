type TypeValue = {
    'value': number;
    'unit': string;
    'value-formatted': string;
}

type TypeDistance = {
    'meters': TypeValue,
    'kilometers': TypeValue
}

type TypePosition = {
    'decimal': number,
    'dms': string,
}

type TypeDirection = {
    'degrees': number,
    'cardinal-direction': string,
    'cardinal-direction-translated': string
}

type TypeCoordinate = {
    'latitude': TypePosition,
    'longitude': TypePosition,
    'srid': number,
    'distance': TypeDistance,
    'direction': TypeDirection
}

type TypeSrcSet = {
    'srcSet': string;
    'media': string;
}

type TypeBirthday = {
    'date': string;
    'name': string;
    'name_short': string;
};

type TypeHoliday = {
    'date': string;
    'name': string;
    'name_short': string;
};

type TypeBirthdays = {
    'birthdays': TypeBirthday[][];
}

type TypeHolidays = {
    'holidays': TypeHoliday[];
}

type TypeProperties = {
    'elevation'?: TypeValue;
    'population'?: TypeValue;
    'country': string;
}

type TypeFeature = {
    'code': string;
    'code-name': string;
    'class': string;
    'class-name': string;
}

type TypePlace = {
    'geoname-id': number;
    'name': string;
    'updated-at': string;
    'properties': TypeProperties;
    'feature': TypeFeature;
}

type TypeFilterConfig = {
    'q'?: string;
    'c'?: string;
    'country'?: string;
    'language'?: string;
    'distance'?: string;
    'limit'?: string;
    's'?: string;
    'next_places'?: string;
}

type TypeQuerFeatureCode = {
    code: string;
    translated: string;
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
    TypeSrcSet,
    TypeBirthday,
    TypeBirthdays,
    TypeHoliday,
    TypeHolidays,
    TypeFeature,
    TypePlace,
    TypeFilterConfig,
    TypeQuerFeatureCode
}
