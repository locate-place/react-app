import React, { useEffect, useMemo, useState } from 'react';
import Header from "../layout/Header";
import loadApiData from "../../functions/LoadApiData";

/**
 * This is the app main component.
 */
const Calendars = () => {
    const [data, setData] = useState([]);

    const calendarBuilderUrl = useMemo(() => {
        return process.env.REACT_APP_CALENDAR_BUILDER_URL;
    }, []);

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(calendarBuilderUrl + '/v.json', setData);
    }, [calendarBuilderUrl]);

    /**
     * The render function.
     */
    return (
        <>
            <Header title='Übersicht' subtitle='Übersicht über alle Kalender' />
            <div className="container calendar-overview mb-5">
                <div className="row g-3">
                    {data.length > 0 ? data.map((item, index) => (
                        <div className="col-12 col-lg-6 col-xl-4" key={'calendar-' + index}>
                            <div className="p-3 border bg-light calendar-preview">
                                <a href={'calendar.html?c=' + item.identifier}>
                                    <h2 className="calendar-title">{item.title}</h2>
                                    <p className="calendar-subtitle">{item.subtitle}</p>
                                    <img src={calendarBuilderUrl + item.image + '?width=500'} alt={item.title} title={item.title} />
                                </a>
                            </div>
                        </div>
                    )) : <div>Lade. Bitte warten...</div>}
                </div>
            </div>
        </>
    );
}

export default Calendars;
