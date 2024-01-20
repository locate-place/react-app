import React from "react";

/**
 * This is the loader part.
 */
const Loader = () => {
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-text text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                        </div> &nbsp; Lade. Bitte warten.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;
