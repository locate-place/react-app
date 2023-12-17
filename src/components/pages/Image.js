import React, {useEffect, useMemo, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderImage from "../layout/HeaderImage";
import loadApiData from "../../functions/LoadApiData";

/**
 * This is the image page.
 */
const Image = () => {
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

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(calendarBuilderUrl + '/v/' + calendar + '/' + month + '.json', setData);
    }, [calendarBuilderUrl, calendar, month]);

    if (data.page_title === undefined) {
        return (<></>);
    }

    /**
     * The render function.
     */
    return (
        <>
            <HeaderImage data={data} />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h2>{data.page_title}</h2>
                        <p>
                            <a href={calendarBuilderUrl + data.path + '?width=1280'}>
                                <img src={calendarBuilderUrl + data.path + '?width=500'}
                                     alt={data.page_title + ' (' + data.coordinate + ')'}
                                     title={data.page_title + ' (' + data.coordinate + ')'}/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Image;
