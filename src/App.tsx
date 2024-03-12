import React, {useEffect, useMemo} from 'react';
import {Route, Routes, useNavigate, useSearchParams} from 'react-router-dom';
import {useTranslation} from "react-i18next";

/* Import configurations. */
import {nameParameterLanguage} from "./config/NameParameter";

/* Import functions. */
import addOnScrollListener from "./functions/AddOnScrollListener";

/* Import redirect functions. */
import redirect from "./redirect/Redirect";

/* Add components */
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Locations from "./components/pages/Locations";
import Location from "./components/pages/Location";
import NotFound from "./components/pages/NotFound";
import Countries from "./components/pages/Countries";

/* Add component parts */
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import {LoaderProvider} from "./components/layout/LoaderContext";

/* Add styles */
import './scss/bootstrap.scss';
import './scss/app.scss';
import './scss/fonts.scss';

/* Add javascript */
import 'bootstrap';

/* Import translation libraries. */
import {i18n, languageDefault} from "./functions/I18n";


/**
 * This is the app main component.
 */
const App = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    const navigateOrig = useNavigate();

    /**
     * Memorized variables.
     */
    const navigate = useMemo(() => {
        return navigateOrig;
    }, [navigateOrig]);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();
    const language = searchParams.get(nameParameterLanguage) ?? languageDefault;

    const changeMetaAndTitle = (
        description: string,
        title: string,
        language: string
    ): void => {
        const metaDescription = document.querySelector('meta[name="description"]');

        /* Change meta description. */
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        /* Change title. */
        document.title = title;

        /* Change html.lang. */
        document.documentElement.lang = language;
    }

    /**
     * useEffect function.
     */
    useEffect(() => {
        addOnScrollListener();
        redirect(navigate);

        /* Change language to given one. */
        i18n.changeLanguage(language).then();

        changeMetaAndTitle(
            t('TEXT_WORD_DESCRIPTION'),
            t('TEXT_WORD_TITLE'),
            language
        );
    }, [navigate, language]);

    return (
        <div className="App">
            <LoaderProvider>
                <Navigation />
                <Routes>
                    <Route index element={<Home />} />

                    <Route path="/index.html" element={<Home />} />

                    <Route path="/home.html" element={<Home />} />
                    <Route path="/contact.html" element={<Contact />} />
                    <Route path="/about.html" element={<About />} />

                    <Route path="/locations.html" element={<Locations />} />
                    <Route path="/location.html" element={<Location />} />

                    <Route path="/countries.html" element={<Countries />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </LoaderProvider>
        </div>
    );
}

export default App;
