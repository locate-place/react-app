import React, {useEffect, useMemo} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';

/* Add functions */
import addOnScrollListener from "./functions/AddOnScrollListener";
import redirect from "./redirect/Redirect";

/* Add components */
import About from "./components/pages/About";
import Calendars from "./components/pages/Calendars";
import Calendar from "./components/pages/Calendar";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Locations from "./components/pages/Locations";
import Location from "./components/pages/Location";
import NotFound from "./components/pages/NotFound";
import CalendarPage from "./components/pages/CalendarPage";

/* Add component parts */
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";

/* Add styles */
import './scss/bootstrap.scss';
import './scss/app.scss';
import './scss/fonts.scss';

/* Add javascript */
import 'bootstrap';

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
                <Route path="/page.html" element={<CalendarPage />} />

                <Route path="/home.html" element={<Home />} />
                <Route path="/contact.html" element={<Contact />} />
                <Route path="/about.html" element={<About />} />

                <Route path="/locations.html" element={<Locations />} />
                <Route path="/location.html" element={<Location />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
