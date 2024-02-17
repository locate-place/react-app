import React, {useMemo} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Query} from "../../classes/Query";
import i18n from "i18next";
import LinkV2 from "./LinkV2";
import Flag from "./Flag";

/**
 * This is the navigation part.
 */
const Navigation = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* API types */
    const env = useMemo(() => {
        return process.env;
    }, []);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

    let query = new Query(searchParams, env);

    let filterConfig = query.getFilterConfig();

    const language = i18n.language;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <LinkV2 className="navbar-brand" to={filterConfig.getLinkTo('/index.html')}>{t('TEXT_NAVIGATION_ICON')}</LinkV2>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >Menu<i className="fas fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                           to={filterConfig.getLinkTo('/index.html')}>{t('TEXT_NAVIGATION_HOME')}</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                           to={filterConfig.getLinkTo('/locations.html')}>{t('TEXT_NAVIGATION_LOCATIONS')}</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                           to={filterConfig.getLinkTo('/about.html')}>{t('TEXT_NAVIGATION_ABOUT')}</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                           to={filterConfig.getLinkTo('/contact.html')}>{t('TEXT_NAVIGATION_CONTACT')}</Link>
                            </li>
                            {
                                language !== 'en' ?
                                    <li className="nav-item"><Link
                                        className="nav-link px-lg-3 py-3 py-lg-4"
                                        to={query.getFilterConfig().getCurrentLinkWithLanguage('en')}
                                    ><Flag country="us" size={1} /> {t('TEXT_NAVIGATION_EN')}</Link></li> :
                                    <></>
                            }
                            {
                                language !== 'de' ?
                                    <li className="nav-item"><Link
                                        className="nav-link px-lg-3 py-3 py-lg-4"
                                        to={query.getFilterConfig().getCurrentLinkWithLanguage('de')}
                                    ><Flag country="de" size={1.0} /> {t('TEXT_NAVIGATION_GE')}</Link></li> :
                                    <></>
                            }
                            {/*{*/}
                            {/*    language !== 'es' ?*/}
                            {/*        <li className="nav-item"><Link*/}
                            {/*            className="nav-link px-lg-3 py-3 py-lg-4"*/}
                            {/*            to={query.getFilterConfig().getCurrentLinkWithLanguage('es')}*/}
                            {/*        ><Flag country="es" size={1.0} /> {t('TEXT_NAVIGATION_ES')}</Link></li> :*/}
                            {/*        <></>*/}
                            {/*}*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
