import React, {useMemo} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Query} from "../../classes/Query";
import i18n from "i18next";

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

    const language = i18n.language;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/index.html">CV</Link>
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
                                                           to="/index.html">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                           to="/locations.html">Locations</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                           to="/about.html">Über</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                           to="/contact.html">Kontakt</Link></li>
                            {
                                language === 'de' ?
                                    <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                                   to={query.getFilterConfig().getCurrentLinkWithLanguage('en')}>EN</Link>
                                    </li> :
                                    <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4"
                                                                   to={query.getFilterConfig().getCurrentLinkWithLanguage('de')}>DE</Link>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
