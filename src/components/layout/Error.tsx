import React from "react";

interface keyable {
    [message: string]: string
}

type ErrorProps = {
    error: keyable,
    apiPath: string,
}

/**
 * This is the error part.
 */
const Error = ({error, apiPath}: ErrorProps) => {
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-text text-center text-danger">
                        Fehler beim Versuch, den Api-Endpunkt abzurufen.<br/>
                        API: <a href={apiPath} target="_blank" rel="noreferrer">{apiPath}</a><br/>
                        Fehler: {error.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;
