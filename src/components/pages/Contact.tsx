import React from "react";
import {useTranslation} from "react-i18next";

/* Add component parts */
import Header from "../layout/Header";

/* Flag icons; see https://github.com/stephenway/react-flagkit */
import Flag from "react-flagkit";
import LinkV2 from "../layout/LinkV2";

/**
 * This is the contact page.
 */
const Contact = () =>
{
    /* Import translation. */
    const { t } = useTranslation();

    return (
        <>
            <Header title='Kontakt' subtitle='Kontaktseite' />
            <div className="container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        <div className="card shadow-own">
                            <div className="card-header">
                                <Flag country="DE" size={20}/> <span className="fw-bold">{t('TEXT_CONTACT_TITLE')}</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Björn Hempel<br/>
                                    Königstr. 3<br/>
                                    01097 Dresden
                                </p>
                            </div>
                            <div className="card-footer">
                                <small><small>
                                    <strong>Innere Neustadt, Dresden, Sachsen, Deutschland</strong> -&nbsp;
                                    <span><LinkV2 to={'/location.html?q=51°3′39.2616″N,%2013°44′26.5956″E&next_places=1'}>51°3′39.2616″N, 13°44′26.5956″E</LinkV2></span><br/>
                                    <span><strong>Letztes Update: </strong>: 14.01.2024 16:30</span>
                                </small></small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
