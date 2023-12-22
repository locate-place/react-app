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

/**
 * This is the image page.
 */
const Page = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();

    /**
     * Memorized variables.
     */
    const calendar = useMemo(() => {
        return searchParams.get('c');
    }, [searchParams]);
    const month = useMemo(() => {
        return searchParams.get('m');
    }, [searchParams]);
    const calendarBuilderUrl = useMemo(() => {
        return process.env.REACT_APP_CALENDAR_BUILDER_URL;
    }, []);

    const apiPath = calendarBuilderUrl + '/v/' + calendar + '/' + month + '.json';

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(apiPath, setLoaded, setError, setData);
    }, [apiPath]);

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
                                Koordinate: {data.google_maps !== null ? <a href={data.google_maps} target="_blank" rel="noreferrer">{data.coordinate_dms}</a> : data.coordinate}<br/>
                                Kalenderblatt: {data.year}/{data.month === 0 ? 'Titelblatt' : data.month}<br/>
                            </p>
                            <p>
                                <a href={calendarBuilderUrl + data.path + '?width=3072&quality=85'} target="_blank" rel="noreferrer">
                                    <img className="img-thumbnail"
                                         src={calendarBuilderUrl + data.path + '?width=1280'}
                                         alt={data.page_title + ' (' + data.coordinate + ')'}
                                         title={data.page_title + ' (' + data.coordinate + ')'}
                                         style={{
                                             aspectRatio: '4/3',
                                             backgroundColor: '#f9f9f9'
                                         }}
                                    />
                                </a>
                            </p>
                            <Birthdays data={data} />
                            <Holidays data={data} />
                            <p><a href={'calendar.html?c=' + data.identifier}>zurück zum Kalender</a> </p>
                        </div>
                    </> : (error !== null ? <Error error={error} apiPath={apiPath} /> : <Loader />)}
                </div>
            </div>
        </>
    );
}

export default Page;
