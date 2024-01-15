import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

/**
 * This is the footer part.
 */
const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="footer border-top">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="small text-center text-muted fst-italic">
                                <FontAwesomeIcon icon={faCode} /> Copyright &copy; twelvepics.com 2024
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
