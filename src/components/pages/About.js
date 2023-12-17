import React, { useEffect, useState, useMemo } from 'react';
import Header from "../layout/Header";
import loadApiData from "../../functions/LoadApiData";

/**
 * This is the about page.
 */
const About = () => {
    const [data, setData] = useState([]);

    const calendarBuilderUrl = useMemo(() => {
        return process.env.REACT_APP_CALENDAR_BUILDER_URL;
    }, []);

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(calendarBuilderUrl + '/api/v1/version.json', setData);
    }, [calendarBuilderUrl]);

    /**
     * The render function.
     */
    return (
        <>
            <Header title='App Informationen' subtitle='Informationen über die App' />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h2>Dieser Service wird bereitgestellt von twelvepics.com</h2>
                        <ul>
                            <li><a href={'https://github.com/twelvepics-com/php-calendar-builder'} target={'_blank'} rel='noreferrer'>PHP Calendar Builder</a> v{data.version} ({data.date})</li>
                            <li>Verwendete API <a href={'https://www.calendar-builder.localhost/api/v1/version.json'} target={'_blank'} rel='noreferrer'>v.json</a></li>
                            <li>Copyright © twelvepics.com 2023</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
