import React, {useEffect, useMemo, useState} from 'react';
import { useSearchParams } from 'react-router-dom';

/* Add functions */
import loadApiData from "../../functions/LoadApiData";

/* Add component parts */
import HeaderCalendar from "../layout/HeaderCalendar";
import Birthdays from "../layout/Birthdays";
import Holidays from "../layout/Holidays";
import Loader from "../layout/Loader";

/**
 * This is the calendar page.
 */
const Calendar = () => {
    const [error, setError] = useState([]);
    const [loaded, setLoaded] = useState([]);
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();

    /**
     * Memorized variables.
     */
    const calendar = useMemo(() => {
        return searchParams.get('c');
    }, [searchParams]);
    const calendarBuilderUrl = useMemo(() => {
        return process.env.REACT_APP_CALENDAR_BUILDER_URL;
    }, []);

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(calendarBuilderUrl + '/v/' + calendar + '.json', setLoaded, setError, setData);
    }, [calendarBuilderUrl, calendar]);

    /**
     * The render function.
     */
    return (
        <>
            <HeaderCalendar data={data} />
            <div className="calendar container mb-5">
                <div className="row g-3">
                    {loaded ? <>
                        <div className="col-12">
                            <h2>{data.title}</h2>
                            <p>{data.subtitle}</p>
                        </div>
                        { 'pages' in data ? data.pages.map((item, index) => (
                            <div className="col-12 col-lg-6 col-xl-4 d-flex align-items-stretch" key={'image-' + index}>
                                <div className="card">
                                    <img className="card-img-top ratio ratio-4x3" src={calendarBuilderUrl + item.path + '?width=500'} alt={item.page_title + ' (' + item.coordinate + ')'} title={item.page_title + ' (' + item.coordinate + ')'} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.page_title}</h5>
                                        <p className="card-text">{item.year}/{item.month === 0 ? 'Titelblatt' : item.month}</p>
                                    </div>
                                    <div className="card-footer">
                                        <a href={'page.html?c=' + data.identifier + '&m=' + index} className="btn btn-primary">Öffne {item.year}/{item.month === 0 ? 'Titelblatt' : item.month}</a>
                                    </div>
                                </div>
                            </div>
                        )) : null}
                        <div className="col-12">
                            <Birthdays data={data} />
                            <Holidays data={data} />
                        </div>
                    </> : <Loader />}
                </div>
            </div>
        </>
    );
}

export default Calendar;
