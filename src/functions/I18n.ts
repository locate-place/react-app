import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from '../locales/de/translation.json';
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';

/* Import configurations. */
import {languageDE, languageDefault, languageEN, languageES, languageFallback} from "../config/Language";
import {countryDE, countryES, countryUS} from "../config/Country";

/* General translation */
const resources = {
    de: {
        translation: translationDE
    },
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    }
};

/**
 * Returns the locale according to current language.
 */
const getLocale = (): string =>
{
    switch (i18n.language) {
        case languageDE:
            return languageDE + '-' + countryDE;
        case languageEN:
            return languageEN + '-' + countryUS;
        case languageES:
            return languageES + '-' + countryES;
        default:
            return languageDE + '-' + countryDE;
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: languageDefault,
        fallbackLng: languageFallback,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })
;

/*
 * Export constants.
 */
export {
    i18n,
    getLocale,
    languageDefault,
    languageFallback
}
