import React, {useMemo} from "react";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {CodeSlash} from "react-bootstrap-icons";

/* Import configurations. */
import {sizeIcon} from "../../config/Config";
import {Link, useSearchParams} from "react-router-dom";
import {Query} from "../../classes/Query";
import {useTranslation} from "react-i18next";

/**
 * This is the footer part.
 */
const Footer = () =>
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
    return (
        <>
            {/* Footer */}
            <footer className="footer border-top">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="small text-center text-muted fst-italic">
                                <CodeSlash size={sizeIcon.Caption} /> Copyright &copy; loc8.place 2024 |&nbsp;
                                <Link to={filterConfig.getLinkTo('/imprint.html')}>{t('TEXT_WORD_IMPRINT')}</Link> |&nbsp;
                                <Link to={filterConfig.getLinkTo('/data-privacy.html')}>{t('TEXT_WORD_DATA_PRIVACY')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
