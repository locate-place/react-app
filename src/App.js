import React, {useEffect, useMemo} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Calendar from "./components/pages/Calendar";
import Image from "./components/pages/Image";
import NotFound from "./components/pages/NotFound";
import redirect from "./redirect/Redirect";
import addOnScrollListener from "./functions/AddOnScrollListener";
import './App.css';

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
                <Route index element={<Home />} />
                <Route path="/index.html" element={<Home />} />
                <Route path="/contact.html" element={<Contact />} />
                <Route path="/about.html" element={<About />} />
                <Route path="/calendar.html" element={<Calendar />} />
                <Route path="/image.html" element={<Image />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
