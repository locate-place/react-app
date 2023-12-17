import Header from "../layout/Header";

/**
 * This is the contact page.
 */
const Contact = () => {
    return (
        <>
            <Header title='Kontakt' subtitle='Kontaktseite' />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h2>Kontakt</h2>
                        <p>
                            Bj&ouml;rn Hempel<br/>
                            K&ouml;nigstr. 3<br/>
                            01097 Dresden
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
