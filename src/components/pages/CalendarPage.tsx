import React, {useEffect, useMemo, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {useTranslation} from "react-i18next";

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
    /* Import translation. */
    const { t } = useTranslation();

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
        }, t);
    }, [apiType, apiPath, t]);

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
                                <strong>{t('TEXT_WORD_COORDINATE')}</strong> (Google Maps): {data.google_maps !== null ?
                                    <Link to={data.google_maps} target="_blank" rel="noreferrer">{data.coordinate_dms}</Link> :
                                    data.coordinate
                                }<br/>

                                <strong>{t('TEXT_WORD_COORDINATE')}</strong> (Location API): {data.coordinate_decimal !== null ?
                                    <Link to={'/location.html?q=' + data.coordinate_decimal.replace(/, /, ', ') + '&next_places=1'}>{data.coordinate_decimal}</Link> :
                                    data.coordinate_decimal
                                }<br/>

                                <strong>{t('TEXT_WORD_COORDINATE')}</strong> (Twelvepics API): {data.coordinate_decimal !== null ?
                                    <Link to={'https://twelvepics.com/location/' + data.coordinate_decimal.replace(/, /, '/')} target="_blank" rel="noreferrer">{data.coordinate_decimal}</Link> :
                                    data.coordinate_decimal
                                }<br/>

                                <strong>{t('TEXT_WORD_CALENDAR_PAGE')}</strong>: {data.year}/{data.month === 0 ? t('TEXT_WORD_TITLE_PAGE') : data.month}<br/>
                            </p>

                            <div className="mb-5">
                                <Link
                                    to={properties.url + data.path + '?width=3072&quality=85'}
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
                                </Link>
                            </div>

                            {data.description !== undefined ? <>
                                <h3>{t('TEXT_WORD_WHAT_DO_YOU_SEE')}</h3>
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
                                <p><Link
                                    className="btn btn-primary"
                                    to={query.getFilterConfig().getLinkTo('/calendar.html?c=' + data.identifier)}
                                >{t('TEXT_WORD_BACK_TO_THE_CALENDAR')}</Link></p>
                            </div>
                        </div>
                    </> : (error !== null ? <Error error={error} apiPath={apiPath} /> : <Loader />)}
                </div>
            </div>
        </>
    );
}

export default CalendarPage;
