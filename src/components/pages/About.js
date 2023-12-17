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
            <Header title="App Informationen" subtitle="Informationen über die App" />
            <div className="container px-1 px-lg-1">
                <div className="row justify-content-center">
                    <div className="col col-10 p-0 pb-5">
                        <h2>Calendar Builder</h2>
                        <p>
                            Dieser Service wird bereitgestellt von twelvepics.com
                        </p>
                        <h3>Versionen</h3>
                        <ul>
                            <li>Build on top of <a href={'https://react.dev/blog/2022/03/29/react-v18'} target={'_blank'} rel='noreferrer'>React</a> 18.2.0</li>
                            <ul>
                                <li><a href={'https://github.com/twelvepics-com/react-calendar-viewer'} target={'_blank'} rel='noreferrer'>Calendar Viewer</a> {process.env.REACT_APP_VERSION_APP}</li>
                            </ul>
                            <li>API / Calendar Builder</li>
                            <ul>
                                <li><a href={'https://github.com/twelvepics-com/php-calendar-builder'} target={'_blank'} rel='noreferrer'>PHP Calendar Builder</a> {data.version} ({data.date})</li>
                                <li>Verwendete API: <a href={process.env.REACT_APP_CALENDAR_BUILDER_URL + '/api/v1/version.json'} target={'_blank'} rel='noreferrer'>v.json</a></li>
                            </ul>
                            <li>Copyright © <a href="https://twelvepics.com">twelvepics.com</a> 2023</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
