import React, {useEffect, useMemo, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';

/* Import functions */
import loadApiData from "../../functions/LoadApiData";

/* Import classes */
import {Query} from "../../classes/Query";

/* Import types */
import {
    TypeApiProperties,
    TypeDataCalendarPage,
    TypeErrorOwn,
    TypeLoaded
} from "../../types/Types";

/* Import component parts */
import Birthdays from "../layout/Birthdays";
import Error from "../layout/Error";
import HeaderImage from "../layout/HeaderImage";
import Holidays from "../layout/Holidays";
import ImageWithLoader from "../layout/ImageWithLoader";
import Loader from "../layout/Loader";

/**
 * This is the "calendar page" component.
 */
const CalendarPage = () =>
{
    /* Get env variables */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* State variables */
    const [error, setError] = useState<TypeErrorOwn>(null);
    const [loaded, setLoaded] = useState<TypeLoaded>(false);
    const [data, setData] = useState<TypeDataCalendarPage|null>(null);
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
            setDataCalendarPage: setData,
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
            <HeaderImage pageTitle={data.page_title} title={data.title} color={data.color} />
            <div className="page container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    { loaded && data.page_title !== undefined ? <>
                        <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                            <h2>{data.page_title}</h2>
                            <div>
                                { 'colors' in data ? data.colors.map((item, index) => (
                                    <div key={'color-' + index} style={{width: 10, height: 10, backgroundColor: item, float: "left"}}></div>
                                )) : null }
                                <div style={{clear: 'both'}}></div>
                            </div>
                            <p>
                                Koordinate (Google Maps): {data.google_maps !== null ? <Link to={data.google_maps} target="_blank" rel="noreferrer">{data.coordinate_dms}</Link> : data.coordinate}<br/>
                                Koordinate (Location API): {data.coordinate_decimal !== null ? <Link to={'/location.html?q=' + data.coordinate_decimal.replace(/, /, ', ') + '&next_places=1'}>{data.coordinate_decimal}</Link> : data.coordinate_decimal}<br/>
                                Koordinate (Twelvepics API): {data.coordinate_decimal !== null ? <Link to={'https://twelvepics.com/location/' + data.coordinate_decimal.replace(/, /, '/')} target="_blank" rel="noreferrer">{data.coordinate_decimal}</Link> : data.coordinate_decimal}<br/>
                                Kalenderblatt: {data.year}/{data.month === 0 ? 'Titelblatt' : data.month}<br/>
                            </p>

                            <div className="mb-5">
                                <a
                                    href={properties.url + data.path + '?width=3072&quality=85'}
                                    className="no-decoration"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ImageWithLoader
                                        src={properties.url + data.path + '?width=1280'}
                                        srcSet={[
                                            {
                                                srcSet: properties.url + data.path + '?width=640',
                                                media: "(max-width: 600px)"
                                            },
                                            {
                                                srcSet: properties.url + data.path + '?width=1280',
                                                media: "(max-width: 1200px)"
                                            }
                                        ]}
                                        alt={data.page_title + ' (' + data.coordinate + ')'}
                                        title={data.page_title + ' (' + data.coordinate + ')'}
                                        border={true}
                                    />
                                </a>
                            </div>

                            {data.description !== undefined ? <>
                                <h3>Was siehst du?</h3>
                                <p style={{textAlign: 'justify'}}>
                                    {data.description.replace(/\n$/, '').split("\n").map(function (item, idx) {
                                        return (
                                            <span key={'description-' + idx}>
                                                {item}
                                                <br/><br/>
                                            </span>
                                        )
                                    })}
                                </p>
                            </> : null}
                            <Birthdays data={data.birthdays} />
                            <Holidays data={data.holidays} />
                            <div className="mt-5">
                                <p><a href={'calendar.html?c=' + data.identifier}>zurück zum Kalender</a></p>
                            </div>
                        </div>
                    </> : (error !== null ? <Error error={error} apiPath={apiPath} /> : <Loader />)}
                </div>
            </div>
        </>
    );
}

export default CalendarPage;
