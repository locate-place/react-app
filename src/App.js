import React, {useEffect, useMemo} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';

/* Add components */
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Calendars from "./components/pages/Calendars";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Calendar from "./components/pages/Calendar";
import Image from "./components/pages/Image";
import NotFound from "./components/pages/NotFound";
import redirect from "./redirect/Redirect";
import addOnScrollListener from "./functions/AddOnScrollListener";

/* Add styles */
import './scss/bootstrap.scss';
import './scss/app.scss';

/* Add javascript */
import 'bootstrap/dist/js/bootstrap.min.js'

/**
 * This is the app main component.
 */
const App = () => {
    const navigateOrig = useNavigate();

    /**
     * Memorized variables.
     */
    const navigate = useMemo(() => {
        return navigateOrig;
    }, [navigateOrig]);

    /**
     * useEffect function.
     */
    useEffect(() => {
        addOnScrollListener();
        redirect(navigate);
    }, [navigate]);

    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route index element={<Calendars />} />
                <Route path="/index.html" element={<Calendars />} />
                <Route path="/calendar.html" element={<Calendar />} />
                <Route path="/image.html" element={<Image />} />
                <Route path="/contact.html" element={<Contact />} />
                <Route path="/about.html" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
