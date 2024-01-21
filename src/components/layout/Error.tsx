import React from "react";

/* Import types */
import {TypeError} from "../../types/Types.ts";

type ErrorProps = {
    error: TypeError,
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
                        Fehler: {error ? error.message : 'Unknown error'}<br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;
