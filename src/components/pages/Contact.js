/* Add component parts */
import Header from "../layout/Header";
import Flag from "react-flagkit";
import React from "react";

/**
 * This is the contact page.
 */
const Contact = () => {
    return (
        <>
            <Header title='Kontakt' subtitle='Kontaktseite' />
            <div className="container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        <div className="card">
                            <div className="card-header">
                                <Flag country="DE" size="20"/> <span className="fw-bold">Kontakt</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Bj&ouml;rn Hempel<br/>
                                    K&ouml;nigstr. 3<br/>
                                    01097 Dresden
                                </p>
                            </div>
                            <div className="card-footer">
                                <small><small>
                                    <strong>Innere Neustadt, Dresden, Sachsen, Deutschland</strong> -
                                    <span>51°3′39.2616″N, 13°44′26.5956″E</span><br/>
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
