import React, { useEffect, useMemo, useState } from 'react';
import Header from "../layout/Header";
import loadApiData from "../../functions/LoadApiData";

/**
 * This is the app main component.
 */
const Home = () => {
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
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {data.map((item, index) => (
                            <div key={'calendar-' + index}>
                                {index !== 0 && (
                                    <hr className="my-4"/>
                                )}

                                <div className="calendar-preview">
                                    <a href={'calendar.html?c=' + item.identifier}>
                                        <img src={calendarBuilderUrl + item.title_image + '?width=500'} alt={item.title} title={item.title} />
                                        <h2 className="calendar-title">{item.title}</h2>
                                        <p className="calendar-subtitle">{item.subtitle}</p>
                                    </a>
                                </div>
                            </div>
                        ))}
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
