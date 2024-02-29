import React from "react";

/* Import types. */
import {TypeDataCalendarPage} from "../../types/Types";

type HeaderImageProps = {
    data: TypeDataCalendarPage|null
}

/**
 * This is the header image part.
 */
const HeaderImage = ({data}: HeaderImageProps) => {

    /* Generated variables */
    let title = '...';
    let subtitle = 'Lade. Bitte warten.';
    let color = '#f0f0f0';

    if (data !== null) {
        title = data.title;
        subtitle = data.subtitle;
        color = data.color;
    }

    return (
        <header className="header header-image" style={{
            backgroundColor: color
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

export default HeaderImage;
