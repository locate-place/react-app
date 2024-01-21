import React from "react";

/* Add component parts */
import Error from "../layout/Error.tsx";
import Header from "../layout/Header.tsx";
import Loader from "../layout/Loader.tsx";

/**
 * This is the app home page.
 */
const Home = () => {
    return (
        <>
            <Header title='Home' subtitle='Home Test page' />
            <div className="home container mb-5 px-4 px-md-3">
                <div className="row g-3">
                    {/* One column */}
                    <div className="col-12">
                        <div className="calendars-card p-3 border bg-light">
                            Test
                        </div>
                    </div>

                    {/* Two columns */}
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className="calendars-card p-3 border bg-light">
                            Test
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className="calendars-card p-3 border bg-light">
                            Test
                        </div>
                    </div>

                    {/* Three columns */}
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="calendars-card p-3 border bg-light">
                            Test
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="calendars-card p-3 border bg-light">
                            Test
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="calendars-card p-3 border bg-light">
                            Test
                        </div>
                    </div>

                    <Loader />
                    <Error error={{message: 'Fehlermeldung'}} apiPath="https://url" />
                </div>
            </div>
        </>
    );
}

export default Home;
