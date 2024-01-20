const searchTypeListGeneral: 'search-list-general' = 'search-list-general';

const searchTypeListWithFeatures: 'search-list-with-features' = 'search-list-with-features';

const searchTypeGeonameId: 'search-geoname-id' = 'search-geoname-id';

const searchTypeCoordinate: 'search-coordinate' = 'search-coordinate';

type TypeSearchTypeTranslations = {
    'search-list-general': string,
    'search-list-with-features': string,
    'search-geoname-id': string,
    'search-coordinate': string,
}

const searchTypeTranslations: TypeSearchTypeTranslations = {
    'search-list-general': 'Suche mit Suchbegriff',
    'search-list-with-features': 'Suche nach Koordinate und Features',
    'search-geoname-id': 'Detailsuche nach Geoname-ID',
    'search-coordinate': 'Detailsuche nach Koordinate',
};

/*
 * Export functions.
 */
export {
    searchTypeListGeneral,
    searchTypeListWithFeatures,
    searchTypeGeonameId,
    searchTypeCoordinate,
    searchTypeTranslations,
    TypeSearchTypeTranslations
}
