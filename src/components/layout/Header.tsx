import React from "react";

type HeaderProps = {
    title: string,
    subtitle: string,
}

/**
 * This is the header part.
 */
const Header = ({title, subtitle}: HeaderProps) =>
{
    return (
        <header className="header header-main" style={{
            backgroundImage: `url('assets/img/head.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <p className="subheading">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
