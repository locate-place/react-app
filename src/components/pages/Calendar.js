import React, {useEffect, useMemo, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderCalendar from "../layout/HeaderCalendar";
import loadApiData from "../../functions/LoadApiData";
import Birthdays from "../layout/Birthdays";
import Holidays from "../layout/Holidays";

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
            <div className="container calendar-viewer mb-5">
                <div className="row g-3">
                    <div className="col-12">
                        <h2>{data.title}</h2>
                        <p>{data.subtitle}</p>
                    </div>
                    { 'pages' in data ? data.pages.map((item, index) => (
                        <div className="col-12 col-lg-6 col-xl-4" key={'image-' + index}>
                            <div className="p-3 border bg-light image-preview">
                                <h2>{item.page_title}</h2>
                                <p>{item.year}/{item.month}</p>
                                <p>
                                    <a href={'image.html?c=' + data.identifier + '&m=' + index}>
                                        <img src={calendarBuilderUrl + item.path + '?width=500'} alt={item.page_title + ' (' + item.coordinate + ')'} title={item.page_title + ' (' + item.coordinate + ')'} />
                                    </a>
                                </p>
                            </div>
                        </div>
                    )) : <div>Lade. Bitte warten...</div>}
                    <div className="col-12">
                        <Birthdays data={data} />
                        <Holidays data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calendar;
