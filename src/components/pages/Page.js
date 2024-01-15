import React, {useEffect, useMemo, useState} from 'react';
import { useSearchParams } from 'react-router-dom';

/* Add functions */
import loadApiData from "../../functions/LoadApiData";

/* Add component parts */
import HeaderImage from "../layout/HeaderImage";
import Birthdays from "../layout/Birthdays";
import Holidays from "../layout/Holidays";
import Loader from "../layout/Loader";
import Error from "../layout/Error";
import ImageWithLoader from "../layout/ImageWithLoader";

/**
 * This is the image page.
 */
const Page = () => {
    /* API types */
    const typeCalendarBuilder = useMemo(() => {
        return process.env.REACT_APP_TYPE_CALENDAR_BUILDER;
    }, []);

    /* State variables */
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const [properties, setProperties] = useState([]);

    /**
     * Memorized variables.
     */
    const calendar = useMemo(() => {
        return searchParams.get('c');
    }, [searchParams]);
    const month = useMemo(() => {
        return searchParams.get('m');
    }, [searchParams]);

    const apiPath = '/v/' + calendar + '/' + month + '.json';

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
                                Koordinate (Google Maps): {data.google_maps !== null ? <a href={data.google_maps} target="_blank" rel="noreferrer">{data.coordinate_dms}</a> : data.coordinate}<br/>
                                Koordinate (Twelvepics API): {data.coordinate_decimal !== null ? <a href={'https://twelvepics.com/location/' + data.coordinate_decimal.replace(/, /, '/')} target="_blank" rel="noreferrer">{data.coordinate_decimal}</a> : data.coordinate_decimal}<br/>
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
                            <Birthdays data={data}/>
                            <Holidays data={data}/>
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

export default Page;
