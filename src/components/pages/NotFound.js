import Header from "../layout/Header";

/**
 * This is the not found page.
 */
const NotFound = () => {
    return (
        <>
            <Header title='404' subtitle='Nicht gefunden' />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h2>404</h2>
                        <p>Nicht gefunden</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;
