import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/* General translation */
const resources = {
    de: {
        translation: {
            "TEXT_NO_RESULT": "Keine Ergebnisse gefunden.",
            "TEXT_NO_RESULT_QUERY": "Keine Ergebnisse für \"%query%\" gefunden.",
            "TEXT_RESULT": "%numberTotal% Ergebnisse gefunden. Zeige %numberResults%.",
            "TEXT_RESULT_QUERY": "%numberTotal% Ergebnisse für \"%query%\" gefunden. Zeige %numberFirstItem% - %numberLastItem%.",
            "TEXT_SEARCH_RESULTS": "Suchergebnisse",
        }
    },
    en: {
        translation: {
            "TEXT_NO_RESULT": "Keine Ergebnisse gefunden.",
            "TEXT_NO_RESULT_QUERY": "Keine Ergebnisse für \"%query%\" gefunden.",
            "TEXT_RESULT": "%numberTotal% Ergebnisse gefunden. Zeige %numberResults%.",
            "TEXT_RESULT_QUERY": "%numberTotal% Ergebnisse für \"%query%\" gefunden. Zeige %numberFirstItem% - %numberLastItem%.",
            "TEXT_SEARCH_RESULTS": "Suchergebnisse",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "de",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })
;

/*
 * Export constants.
 */
export {
    i18n
}
