import React, {useEffect, useMemo, useState} from 'react';
import { useSearchParams } from 'react-router-dom';

/* Add functions */
import loadApiData from "../../functions/LoadApiData.ts";

/* Add component parts */
import Birthdays from "../layout/Birthdays.tsx";
import Error from "../layout/Error.tsx";
import HeaderCalendar from "../layout/HeaderCalendar.tsx";
import Holidays from "../layout/Holidays.tsx";
import ImageWithLoader from "../layout/ImageWithLoader.tsx";
import Loader from "../layout/Loader";

/**
 * This is the calendar page.
 */
const Calendar = () => {
    /* API types */
    const typeCalendarBuilder = useMemo(() => {
        return process.env.REACT_APP_TYPE_CALENDAR_BUILDER;
    }, []);

    /* State variables */
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [properties, setProperties] = useState([]);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();
    const calendar = useMemo(() => {
        return searchParams.get('c');
    }, [searchParams]);

    const apiPath = '/v/' + calendar + '.json';

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
            <HeaderCalendar data={data} />
            <div className="calendar container mb-5 px-4 px-md-3">
                <div className="row g-4">
                    {loaded ? <>
                        <div className="col-12">
                            <h2>{data.title}</h2>
                            <p>{data.subtitle}</p>
                        </div>
                        { 'pages' in data ? data.pages.map((item, index) => (
                            <div className="col-12 col-lg-6 col-xl-4 d-flex align-items-stretch" key={'image-' + index}>
                                <div className="card card-hover">
                                    <a
                                        href={'page.html?c=' + data.identifier + '&m=' + index}
                                        className="no-decoration stretched-link"
                                    >
                                        <ImageWithLoader
                                            src={properties.url + item.path + '?width=500'}
                                            srcSet={[
                                                { srcSet: properties.url + item.path + '?width=500', media: "(max-width: 600px)" },
                                                { srcSet: properties.url + item.path + '?width=500', media: "(max-width: 1200px)" }
                                            ]}
                                            alt={item.page_title + ' (' + item.coordinate + ')'}
                                            title={item.page_title + ' (' + item.coordinate + ')'}
                                            border={false}
                                        />
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{item.page_title}</h5>
                                    </div>
                                    <div className="card-footer">
                                        <p className="card-text one-line">{item.year}/{item.month === 0 ? 'Titelblatt' : item.month}</p>
                                    </div>
                                </div>
                            </div>
                        )) : null}
                        <div className="col-12">
                            <Birthdays data={data} />
                            <Holidays data={data} />
                        </div>
                    </> : (error !== null ? <Error error={error} apiPath={apiPath} /> : <Loader />)}
                </div>
            </div>
        </>
    );
}

export default Calendar;
