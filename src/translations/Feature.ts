import {i18n} from "../functions/I18n";

const translationsDE: Record<string, string> = {
    'A': 'Länder, Bundesländer, Regionen, etc.',
    'H': 'Flüsse, Seen, etc.',
    'L': 'Parks, Gebiete, etc.',
    'P': 'Städte, Dörfer, etc.',
    'R': 'Straßen, Schienenwege, etc.',
    'S': 'Orte, Gebäude, Betriebe, etc.',
    'T': 'Berge, Hügel, Felsen, etc.',
    'U': 'Unterwasserwelten, etc.',
    'V': 'Wälder, Heidelandschaften, etc.'
};

const translationsEN: Record<string, string> = {
    'A': 'Countries, States, Regions, etc.',
    'H': 'Streams, Lakes, etc.',
    'L': 'Parks, Areas, etc.',
    'P': 'Cities, Villages, etc.',
    'R': 'Roads, Railroads, etc.',
    'S': 'Spots, Buildings, Farms, etc.',
    'T': 'Mountains ,Hills, Rocks, etc.',
    'U': 'Undersea, etc.',
    'V': 'Forest, Heath, etc.'
};

const translationsES: Record<string, string> = {
    'A': 'Países, Estados, Regiones, etc.',
    'H': 'Arroyos, Lagos, etc.',
    'L': 'Parques, Áreas, etc.',
    'P': 'Ciudades, Pueblos, etc.',
    'R': 'Carreteras, Vías férreas, etc.',
    'S': 'Lugares, Edificios, Granjas, etc.',
    'T': 'Montañas, Colinas, Rocas, etc.',
    'U': 'Submarino, etc.',
    'V': 'Bosques, Brezales, etc.'
};

const supportedFeatures = [
    'H',
    'L',
    'P',
    'R',
    'S',
    'T',
    'U',
    'V'
];

/**
 * Translates the given feature code into a German language.
 *
 * @param featureCode
 * @param language
 */
const translateFeatureCode = (featureCode: string, language: string = i18n.language): string =>
{
    if (!['de', 'en', 'es'].includes(language)) {
        return featureCode;
    }

    let translations = null;

    switch (language) {
        case 'de':
            translations = translationsDE;
            break;
        case 'en':
            translations = translationsEN;
            break;
        case 'es':
            translations = translationsES;
            break;
        default:
            translations = translationsEN;
            break;
    }

    if (!translations) {
        return featureCode;
    }

    if (!translations.hasOwnProperty(featureCode)) {
        return featureCode;
    }

    return translations[featureCode];
}

/**
 * Returns a feature code array (for example for select tags).
 *
 * @param language
 */
const getFeatureArray = (language: string = i18n.language): { code: string, name: string }[] =>
{
    let featureArray: { code: string, name: string }[] = [];

    supportedFeatures.forEach((code: string) => {
        featureArray.push({ code: code, name: translateFeatureCode(code, language) });
    });

    return featureArray;
}

/*
 * Export functions.
 */
export {
    translateFeatureCode,
    getFeatureArray
}
