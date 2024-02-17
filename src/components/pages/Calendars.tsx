import React, {useEffect, useMemo, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";

/* Import types. */
import {TypeApiProperties, TypeDataCalendars, TypeErrorOwn, TypeLoaded} from "../../types/Types";

/* Import functions. */
import loadApiData from "../../functions/LoadApiData";

/* Import classes. */
import {Query} from "../../classes/Query";

/* Import component parts. */
import Error from "../layout/Error";
import Header from "../layout/Header";
import ImageWithLoader from "../layout/ImageWithLoader";
import Loader from "../layout/Loader";

/**
 * This is the "calendars" component.
 */
const Calendars = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* API types */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* State variables */
    const [error, setError] = useState<TypeErrorOwn>(null);
    const [loaded, setLoaded] = useState<TypeLoaded>(false);
    const [data, setData] = useState<TypeDataCalendars|null>(null);
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
            setDataCalendars: setData,
            setProperties: setProperties,
            setLoaded: setLoaded,
            setError: setError,
        });
    }, [apiType, apiPath]);

    /* Skip empty data */
    if (data === null || properties === null) {
        return <></>;
    }

    /**
     * The render function.
     */
    return (
        <>
            <Header title={t('TEXT_CALENDARS_TITLE')} subtitle={t('TEXT_CALENDARS_SUBTITLE')} />
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
