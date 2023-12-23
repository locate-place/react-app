import React, {useEffect, useMemo, useState} from 'react';

/* Add functions */
import loadApiData from "../../functions/LoadApiData";

/* Add component parts */
import Header from "../layout/Header";
import Loader from "../layout/Loader";
import Error from "../layout/Error";
import ImageWithLoader from "../layout/ImageWithLoader";

/**
 * This is the app main component.
 */
const Calendars = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    const calendarBuilderUrl = useMemo(() => {
        return process.env.REACT_APP_CALENDAR_BUILDER_URL;
    }, []);

    const apiPath = calendarBuilderUrl + '/v.json';

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(apiPath, setLoaded, setError, setData);
    }, [apiPath]);

    /**
     * The render function.
     */
    return (
        <>
            <Header title='Übersicht' subtitle='Übersicht über alle Kalender' />
            <div className="calendars container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    {loaded && data.length > 0 ? data.map((item, index) => (
                        <div className="col-12 col-lg-6 col-xl-4 d-flex align-items-stretch" key={'calendar-' + index}>
                            <div className="card">
                                <a
                                    href={'calendar.html?c=' + item.identifier}
                                    className="no-decoration"
                                >
                                    <ImageWithLoader
                                        src={calendarBuilderUrl + item.image + '?width=500'}
                                        srcSet={[
                                            { srcSet: calendarBuilderUrl + item.image + '?width=500', media: "(max-width: 600px)" },
                                            { srcSet: calendarBuilderUrl + item.image + '?width=500', media: "(max-width: 1200px)" }
                                        ]}
                                        alt={item.title}
                                        title={item.title}
                                        border={false}
                                    />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.subtitle}</p>
                                </div>
                                <div className="card-footer">
                                    <a href={'calendar.html?c=' + item.identifier} className="btn btn-primary">Öffne {item.title}</a>
                                </div>
                            </div>
                        </div>
                    )) : (error !== null ? <Error error={error} apiPath={apiPath} /> : <Loader />)}
                </div>
            </div>
        </>
    );
}

export default Calendars;
