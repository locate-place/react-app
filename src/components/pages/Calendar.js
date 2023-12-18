import React, {useEffect, useMemo, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderCalendar from "../layout/HeaderCalendar";
import loadApiData from "../../functions/LoadApiData";

/**
 * This is the calendar page.
 */
const Calendar = () => {
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
        loadApiData(calendarBuilderUrl + '/v/' + calendar + '.json', setData);
    }, [calendarBuilderUrl, calendar]);

    /**
     * The render function.
     */
    return (
        <>
            <HeaderCalendar data={data} />
            <div className="container px-4 px-lg-2 calendar-viewer">
                <div className="row gx-4 gx-lg-2 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h2>{data.title}</h2>
                        <p>{data.subtitle}</p>
                        { 'pages' in data ? data.pages.map((item, index) => (
                            <div key={'image-' + index}>
                                <p>
                                    <a href={'image.html?c=' + data.identifier + '&m=' + index}>
                                        <img src={calendarBuilderUrl + item.path + '?width=500'} alt={item.page_title + ' (' + item.coordinate + ')'} title={item.page_title + ' (' + item.coordinate + ')'} />
                                    </a>
                                </p>
                            </div>
                        )) : null }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calendar;
