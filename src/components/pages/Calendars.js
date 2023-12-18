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
            <Header title='Kalenderübersicht' subtitle='Übersicht über alle Kalender' />
            <div className="container mb-5 calendar-overview">
                <div className="row">
                    <div className="col-10 offset-1 p-0">
                        <div className="row">
                            {data.map((item, index) => (
                                <div className="col col-12 col-md-6" key={'calendar-' + index}>
                                    <div className="calendar-preview">
                                        <a href={'calendar.html?c=' + item.identifier}>
                                            <h2 className="calendar-title">{item.title}</h2>
                                            <p className="calendar-subtitle">{item.subtitle}</p>
                                            <img src={calendarBuilderUrl + item.image + '?width=500'} alt={item.title} title={item.title} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="offset-1"></div>
                </div>
            </div>
        </>
    );
}

export default Calendars;
