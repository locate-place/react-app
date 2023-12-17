/**
 * This is the header calendar part.
 */
const HeaderCalendar = ({data}) => {
    let calendarBuilderUrl = process.env.REACT_APP_CALENDAR_BUILDER_URL;
    let title = data.title;
    let subtitle = data.subtitle;
    let title_image = data.title_image;

    if (title === undefined || subtitle === undefined || title_image === undefined) {
        return (<></>);
    }

    return (
        <header className="masthead" style={{
            backgroundImage: 'url(' + calendarBuilderUrl + title_image + '?width=1280&type=source)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <span className="subheading">{subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderCalendar;
