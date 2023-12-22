import React from "react";

/**
 * This is the error part.
 */
const Error = ({error, apiPath}) => {
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-text text-center text-danger">
                        Fehler beim Versuch, den Api-Endpunkt abzurufen.<br/>
                        API: {apiPath}<br/>
                        Fehler: {error.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;
