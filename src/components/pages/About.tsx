import React, {useEffect, useMemo, useState} from 'react';

/* Add functions */
import loadApiData from "../../functions/LoadApiData";

/* Add component parts */
import Error from "../layout/Error";
import Header from "../layout/Header";
import Loader from "../layout/Loader";

/* Add font awesome icons: https://fontawesome.com/icons */
import {faDatabase, faImages, faIndustry} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/* Import types. */
import {TypeApiProperties, TypeDataVersion, TypeError, TypeLoaded} from "../../types/Types";

/**
 * This is the about page.
 */
const About = () =>
{
    /* API types */
    const typeCalendarBuilder: string = useMemo(() => {
        return process.env.REACT_APP_TYPE_CALENDAR_BUILDER !== undefined ?
            process.env.REACT_APP_TYPE_CALENDAR_BUILDER :
            'calendar-builder'
        ;
    }, []);
    const typeLocationApi = useMemo(() => {
        return process.env.REACT_APP_TYPE_LOCATION_API !== undefined ?
            process.env.REACT_APP_TYPE_LOCATION_API :
            'location-api'
        ;
    }, []);

    /* Calendar Builder variables */
    const [loadedCalendarBuilder, setLoadedCalendarBuilder] = useState<TypeLoaded>(false);
    const [errorCalendarBuilder, setErrorCalendarBuilder] = useState<TypeError>(null);
    const [dataCalendarBuilder, setDataCalendarBuilder] = useState<TypeDataVersion|null>(null);
    const [propertiesCalendarBuilder, setPropertiesCalendarBuilder] = useState<TypeApiProperties|null>(null);
    const apiPathCalendarBuilder = '/api/v1/version.json';

    /* Location API variables */
    const [loadedLocationApi, setLoadedLocationApi] = useState<TypeLoaded>(false);
    const [errorLocationApi, setErrorLocationApi] = useState<TypeError>(null);
    const [dataLocationApi, setDataLocationApi] = useState<TypeDataVersion|null>(null);
    const [propertiesLocationApi, setPropertiesLocationApi] = useState<TypeApiProperties|null>(null);
    const apiPathLocationApi = '/api/v1/version.json';

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData(
            typeCalendarBuilder,
            apiPathCalendarBuilder,
            setLoadedCalendarBuilder,
            setErrorCalendarBuilder,
            setDataCalendarBuilder,
            null,
            setPropertiesCalendarBuilder
        );
        loadApiData(
            typeLocationApi,
            apiPathLocationApi,
            setLoadedLocationApi,
            setErrorLocationApi,
            setDataLocationApi,
            null,
            setPropertiesLocationApi
        );
    }, [apiPathCalendarBuilder, apiPathLocationApi, typeCalendarBuilder, typeLocationApi]);

    /**
     * The render function.
     */
    return (
        <>
            <Header title="App Info" subtitle="Informationen über die App" />
            <div className="about container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    {loadedCalendarBuilder && loadedLocationApi ? <>
                        <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                            <h2>React Calendar Viewer</h2>
                            <p>
                                Dieser Service wird bereitgestellt von <a href="https://twelvepics.com">twelvepics.com</a>
                            </p>

                            <h3>Versionen</h3>

                            <h4>App</h4>
                            <p>
                                Übersicht über die Versionen dieser verwendeten App.
                            </p>

                            <div className="card w-100 shadow-own">
                                <div className="card-header fw-bold">
                                    <FontAwesomeIcon icon={faImages} style={{'color': 'rgb(255, 90, 55)'}}/>&nbsp; React Calendar Viewer
                                </div>
                                <div className="card-body">
                                    <ul className="mb-0">
                                        <li>
                                            Diese App, welche gerade aufgerufen wurde
                                        </li>
                                        <li>
                                            Build on top of <a
                                                href={'https://react.dev/blog/2022/03/29/react-v18'}
                                                target={'_blank'}
                                                rel="noreferrer"
                                            >
                                                React
                                            </a> 18.2.0
                                        </li>
                                        <li>Repository: <a
                                            href={'https://github.com/twelvepics-com/react-calendar-viewer/blob/main/CHANGELOG.md'}
                                            target={'_blank'}
                                            rel="noreferrer"
                                        >React Calendar Viewer</a></li>
                                    </ul>
                                </div>
                                <div className="card-footer fst-italic">
                                    <small><small>Version {process.env.REACT_APP_VERSION_APP}</small></small>
                                </div>
                            </div>

                            <h4 className="mt-5">APIs</h4>
                            <p>
                                Übersicht aller verwendeten APIs und deren Versionen.
                            </p>

                            <div className="row g-3 mb-5">
                                <div className="col-12 col-lg-6 d-flex align-items-stretch">
                                    <div className="card w-100 shadow-own">
                                        <div className="card-header fw-bold"><FontAwesomeIcon icon={faIndustry} style={{'color': 'rgb(114, 126, 174)'}}/>&nbsp; PHP Calendar Builder</div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>
                                                    Generiert Kalenderbilder und spielt diese aus
                                                </li>
                                                <li>
                                                    Raw Bilder und Bilder mit Kalenderinformationen
                                                </li>
                                                <li>
                                                    Verwendete API: <a
                                                        href={process.env.REACT_APP_CALENDAR_BUILDER_URL + '/api/v1/version.json'}
                                                        target={'_blank'} rel="noreferrer"
                                                    >
                                                        version.json
                                                    </a> (<code>JSON</code>)
                                                </li>
                                                <li>
                                                    Repository: <a
                                                    href={'https://github.com/twelvepics-com/php-calendar-builder/blob/main/CHANGELOG.md'}
                                                    target={'_blank'} rel="noreferrer"
                                                >
                                                    PHP Calendar Builder
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {
                                            dataCalendarBuilder ?
                                                <div className="card-footer fst-italic">
                                                    <small><small>Version {dataCalendarBuilder.version} - {dataCalendarBuilder.date}</small></small>
                                                </div> :
                                                <></>
                                        }
                                    </div>
                                </div>


                                <div className="col-12 col-lg-6 d-flex align-items-stretch">
                                    <div className="card w-100 shadow-own">
                                        <div className="card-header fw-bold"><FontAwesomeIcon icon={faDatabase} style={{'color': 'rgb(75, 123, 107)'}} />&nbsp; PHP Location API</div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>
                                                    Stellt eine Lokalisierungs-API bereit (GeoInfoAPI) mit aktuell rund 6,5 Millionen Einträgen weltweit (Größe des SQL Dumps: &gt; 1,8 GB)
                                                </li>
                                                <li>
                                                    ca. 200ms Abrufzeit bei vollen Informationen (100ms bei Basisinformationen)
                                                </li>
                                                <li>
                                                    Verwendete API: <a
                                                        href={process.env.REACT_APP_LOCATION_API_URL + '/api/v1/version.json'}
                                                        target={'_blank'}
                                                        rel="noreferrer"
                                                    >
                                                        version.json
                                                    </a> (<code>JSON</code>)
                                                </li>
                                                <li>
                                                    Unterstützte Länder: <a
                                                        href={process.env.REACT_APP_LOCATION_API_URL + '/api/v1/import.json'}
                                                        target={'_blank'}
                                                        rel="noreferrer"
                                                    >
                                                        import.json
                                                    </a> (<code>JSON</code>)
                                                </li>
                                                <li>
                                                    Repository: <a
                                                    href={'https://github.com/twelvepics-com/php-location-api/blob/main/CHANGELOG.md'}
                                                    target={'_blank'}
                                                    rel="noreferrer"
                                                >
                                                    PHP Location API
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {
                                            dataLocationApi ?
                                                <div className="card-footer fst-italic">
                                                    <small><small>Version {dataLocationApi.version} - {dataLocationApi.date}</small></small>
                                                </div> :
                                                <></>
                                        }
                                    </div>
                                </div>
                            </div>

                            <p>
                                Copyright © <a href="https://twelvepics.com">twelvepics.com</a> 2024
                            </p>
                        </div>
                    </> : (
                        errorCalendarBuilder === null && errorLocationApi === null ?
                            <Loader/> : (
                                errorCalendarBuilder !== null ?
                                    <Error error={errorCalendarBuilder} apiPath={propertiesCalendarBuilder ? propertiesCalendarBuilder['api-url'] : 'Unknown'} /> :
                                    <Error error={errorLocationApi} apiPath={propertiesLocationApi ? propertiesLocationApi['api-url']: 'Unknown'} />
                            )
                    )}
                </div>
            </div>
        </>
    );
}

export default About;
