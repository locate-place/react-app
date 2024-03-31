import React, {useEffect, useMemo, useState} from 'react';
import {useTranslation} from "react-i18next";

/* Add functions */
import loadApiData from "../../functions/LoadApiData";

/* Add component parts */
import Error from "../layout/Error";
import Header from "../layout/Header";
import Loader from "../layout/Loader";

/* Add font awesome icons: https://fontawesome.com/icons */
import {faDatabase, faImages} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/* Import types. */
import {TypeApiProperties, TypeDataVersion, TypeErrorOwn, TypeLoaded} from "../../types/Types";
import LinkV2 from "../layout/LinkV2";

/**
 * This is the about page.
 */
const About = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* API types */
    const typeLocationApi = useMemo(() => {
        return process.env.REACT_APP_TYPE_LOCATION_API !== undefined ?
            process.env.REACT_APP_TYPE_LOCATION_API :
            'location-api'
        ;
    }, []);

    /* Location API variables */
    const [loadedLocationApi, setLoadedLocationApi] = useState<TypeLoaded>(false);
    const [errorLocationApi, setErrorLocationApi] = useState<TypeErrorOwn>(null);
    const [dataLocationApi, setDataLocationApi] = useState<TypeDataVersion|null>(null);
    const [propertiesLocationApi, setPropertiesLocationApi] = useState<TypeApiProperties|null>(null);
    const apiPathLocationApi = '/api/v1/version.json';

    /**
     * useEffect function.
     */
    useEffect(() => {
        loadApiData({
            type: typeLocationApi,
            path: apiPathLocationApi,
            setDataVersion: setDataLocationApi,
            setProperties: setPropertiesLocationApi,
            setLoaded: setLoadedLocationApi,
            setError: setErrorLocationApi,
        }, t);
    }, [apiPathLocationApi, typeLocationApi, t]);

    /**
     * The render function.
     */
    return (
        <>
            <Header title={t('TEXT_ABOUT_HEADER_TITLE')} subtitle={t('TEXT_ABOUT_HEADER_SUBTITLE')} />
            <div className="about container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    {loadedLocationApi ? <>
                        <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                            <h2>locate.place</h2>
                            <p>
                                {t('TEXT_ABOUT_DESCRIPTION')} <LinkV2
                                    to="https://twelvepics.com"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >twelvepics.com</LinkV2>
                            </p>

                            <h3>{t('TEXT_ABOUT_TITLE')}</h3>

                            <h4>{t('TEXT_ABOUT_APP_TITLE')}</h4>
                            <p>{t('TEXT_ABOUT_APP_DESCRIPTION')}</p>

                            <div className="card w-100 shadow-own">
                                <div className="card-header fw-bold">
                                    <FontAwesomeIcon icon={faImages} style={{'color': 'rgb(255, 90, 55)'}}/>&nbsp; locate.place
                                </div>
                                <div className="card-body">
                                    <ul className="mb-0">
                                        <li>{t('TEXT_ABOUT_APP_USP_1')}</li>
                                        <li>
                                            {t('TEXT_ABOUT_APP_USP_2')} <LinkV2
                                                to={'https://react.dev/blog/2022/03/29/react-v18'}
                                                target={'_blank'}
                                                rel="noreferrer"
                                            >
                                                React
                                            </LinkV2> 18.2.0
                                        </li>
                                        <li>{t('TEXT_ABOUT_APP_USP_3')}: <LinkV2
                                            to={'https://github.com/locate-place/react-app/blob/main/CHANGELOG.md'}
                                            target={'_blank'}
                                            rel="noreferrer"
                                        >locate.place</LinkV2></li>
                                    </ul>
                                </div>
                                <div className="card-footer fst-italic">
                                    <small><small>Version {process.env.REACT_APP_VERSION_APP} - {process.env.REACT_APP_VERSION_APP_DATE}</small></small>
                                </div>
                            </div>

                            <h4 className="mt-5">{t('TEXT_ABOUT_VERSION_TITLE')}</h4>
                            <p>{t('TEXT_ABOUT_VERSION_DESCRIPTION')}</p>

                            <div className="row g-3 mb-5">
                                <div className="col-12 col-lg-12 d-flex align-items-stretch">
                                    <div className="card w-100 shadow-own">
                                        <div className="card-header fw-bold"><FontAwesomeIcon icon={faDatabase} style={{'color': 'rgb(75, 123, 107)'}} />&nbsp; PHP Location API</div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>{t('TEXT_ABOUT_VERSION_LOCATION_USP_1')}</li>
                                                <li>{t('TEXT_ABOUT_VERSION_LOCATION_USP_2')}</li>
                                                <li>
                                                    {t('TEXT_ABOUT_VERSION_LOCATION_USP_3')}: <a
                                                        href={process.env.REACT_APP_LOCATION_API_URL + '/api/v1/version.json'}
                                                        target={'_blank'}
                                                        rel="noreferrer"
                                                    >
                                                        version.json
                                                    </a> (<code>JSON</code>)
                                                </li>
                                                <li>
                                                    {t('TEXT_ABOUT_VERSION_LOCATION_USP_4')}: <a
                                                        href={process.env.REACT_APP_LOCATION_API_URL + '/api/v1/import.json'}
                                                        target={'_blank'}
                                                        rel="noreferrer"
                                                    >
                                                        import.json
                                                    </a> (<code>JSON</code>)
                                                </li>
                                                <li>
                                                    {t('TEXT_ABOUT_VERSION_LOCATION_USP_5')}: <a
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
                        errorLocationApi === null ?
                            <Loader/> :
                            <Error error={errorLocationApi} apiPath={propertiesLocationApi ? propertiesLocationApi['api-url']: 'Unknown'} />
                    )}
                </div>
            </div>
        </>
    );
}

export default About;
