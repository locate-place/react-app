import Header from "../layout/Header";

/**
 * This is the app home page.
 */
const Home = () => {
    return (
        <>
            <Header title='Home' subtitle='Startseite Calendar Viewer' />
            <div className="container px-4 px-lg-5 calendar-overview">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
