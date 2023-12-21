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
            <div className="container mb-5 calendar-viewer">
                <div className="row">
                    <div className="col-10 offset-1 p-0">
                        <h2>{data.title}</h2>
                        <p>{data.subtitle}</p>
                        <div className="row">
                        { 'pages' in data ? data.pages.map((item, index) => (
                            <div className="col col-12 col-md-6" key={'image-' + index}>
                                <p>
                                    <a href={'image.html?c=' + data.identifier + '&m=' + index}>
                                        <img src={calendarBuilderUrl + item.path + '?width=500'} alt={item.page_title + ' (' + item.coordinate + ')'} title={item.page_title + ' (' + item.coordinate + ')'} />
                                    </a>
                                </p>
                            </div>
                        )) : <div>Lade. Bitte warten...</div>}
                        </div>
                        <Birthdays data={data} />
                        <Holidays data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calendar;
