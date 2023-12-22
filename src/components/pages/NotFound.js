/* Add component parts */
import Header from "../layout/Header";

/**
 * This is the not found page.
 */
const NotFound = () => {
    return (
        <>
            <Header title='404' subtitle='Nicht gefunden' />
            <div className="container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">404</h5>
                                <p className="card-text">Nicht gefunden</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;
