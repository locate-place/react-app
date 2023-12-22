/* Add component parts */
import Header from "../layout/Header";

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
                            <div className="card-body">
                                <h5 className="card-title">Kontakt</h5>
                                <p className="card-text">
                                    Bj&ouml;rn Hempel<br/>
                                    K&ouml;nigstr. 3<br/>
                                    01097 Dresden
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
