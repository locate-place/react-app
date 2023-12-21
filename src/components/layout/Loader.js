import React from "react";

/**
 * This is the loader part.
 */
const Loader = ({data}) => {
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">Lade. Bitte warten...</p>
                </div>
            </div>
        </div>
    )
}

export default Loader;
