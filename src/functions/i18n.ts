import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from '../locales/de/translation.json';
import translationEN from '../locales/en/translation.json';

/* General translation */
const resources = {
    de: {
        translation: translationDE
    },
    en: {
        translation: translationEN
    }
};

const languageDefault: string = 'de';

const languageFallback: string = 'en';

/**
 * Returns the locale according to current language.
 */
const getLocale = (): string =>
{
    switch (i18n.language) {
        case 'de':
            return 'de-DE';
        case 'en':
            return 'en-US';
        default:
            return 'de-DE';
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
