import React, {useEffect, useMemo, useState} from 'react';
import { useSearchParams } from 'react-router-dom';

/* Add functions */
import loadApiData from "../../functions/LoadApiData";

/* Add component parts */
import Birthdays from "../layout/Birthdays";
import Error from "../layout/Error";
import HeaderCalendar from "../layout/HeaderCalendar";
import Holidays from "../layout/Holidays";
import ImageWithLoader from "../layout/ImageWithLoader";
import Loader from "../layout/Loader";
import {
    TypeApiProperties,
    TypeDataCalendar,
    TypeError,
    TypeLoaded
} from "../../types/Types";
import {Query} from "../../functions/Query";

/**
 * This is the calendar page.
 */
const Calendar = () => {
    /* Get env variables */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* State variables */
    const [error, setError] = useState<TypeError>(null);
    const [loaded, setLoaded] = useState<TypeLoaded>(false);
    const [data, setData] = useState<TypeDataCalendar|null>(null);
    const [properties, setProperties] = useState<TypeApiProperties|null>(null);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    /* Gets the api url */
    let query = new Query(searchParams, env);
    const apiPath = query.getApiUrl();
    const apiType = query.getApiType();

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData({
            type: apiType,
            path: apiPath,
            setLoaded: setLoaded,
            setError: setError,
            setDataCalendar: setData,
            setProperties: setProperties
        });
    }, [apiType, apiPath]);

    if (data === null || properties === null) {
        return <></>;
    }

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
                        { !!data.pages ? data.pages.map((item, index) => (
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
                            <Birthdays data={data.birthdays} />
                            <Holidays data={data.holidays} />
                        </div>
                    </> : (error !== null ? <Error error={error} apiPath={apiPath} /> : <Loader />)}
                </div>
            </div>
        </>
    );
}

export default Calendar;
