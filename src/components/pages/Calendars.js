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
    /* API types */
    const typeCalendarBuilder = useMemo(() => {
        return process.env.REACT_APP_TYPE_CALENDAR_BUILDER;
    }, []);

    /* State variables */
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [properties, setProperties] = useState([]);

    const apiPath = '/v.json';

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(
            typeCalendarBuilder,
            apiPath,
            setLoaded,
            setError,
            setData,
            setProperties
        );
    }, [typeCalendarBuilder, apiPath]);

    /**
     * The render function.
     */
    return (
        <>
            <Header title='Übersicht' subtitle='Übersicht über alle Kalender' />
            <div className="calendars container mb-5 px-4 px-md-3">
                <div className="row g-4">
                    {loaded && data.calendars.length > 0 ? data.calendars.map((item, index) => (
                        <div className="col-12 col-lg-6 col-xl-4 d-flex align-items-stretch" key={'calendar-' + index}>
                            <div className="card card-hover">
                                <a
                                    href={'calendar.html?c=' + item.identifier}
                                    className="no-decoration stretched-link"
                                >
                                    <ImageWithLoader
                                        src={properties.url + item.image + '?width=500'}
                                        srcSet={[
                                            { srcSet: properties.url + item.image + '?width=500', media: "(max-width: 600px)" },
                                            { srcSet: properties.url + item.image + '?width=500', media: "(max-width: 1200px)" }
                                        ]}
                                        alt={item.title}
                                        title={item.title}
                                        border={false}
                                    />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{item.title}</h5>
                                </div>
                                <div className="card-footer">
                                    <p className="card-text one-line">{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    )) : (error !== null ? <Error error={error} apiPath={properties['api-url']} /> : <Loader />)}
                </div>
            </div>
        </>
    );
}

export default Calendars;
