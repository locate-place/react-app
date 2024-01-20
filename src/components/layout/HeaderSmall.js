/**
 * This is the header part.
 */
const HeaderSmall = ({title, subtitle}) =>
{
    return (
        <header className="header header-main" style={{
            backgroundImage: `url('assets/img/head.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '60px',
            paddingTop: '5rem',
            paddingBottom: '8rem'
        }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1 style={{fontSize: '2rem'}}>{title}</h1>
                            <p style={{fontSize: '1.2rem'}} className="subheading">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderSmall;
