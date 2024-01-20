import React from "react";

type SearchPerformanceProps = {
    properties: any
    apiPathWithParameter: string
    apiPathWithoutParameter: string
}

/**
 * This renders the search performance part.
 */
const SearchPerformance = ({
    properties,
    apiPathWithParameter,
    apiPathWithoutParameter
}: SearchPerformanceProps) =>
{
    return (
        <>
            <div>
                <small><small>
                    <strong>Query</strong>: {properties['time-taken']}, {properties['memory-taken']} - <strong>{properties['name']}</strong>:
                    Version {properties['version']}
                    <br/>
                    <strong>API</strong>: <a href={process.env.REACT_APP_LOCATION_API_URL + apiPathWithParameter}
                                             target="_blank"
                                             rel="noreferrer">{process.env.REACT_APP_LOCATION_API_URL + apiPathWithoutParameter}</a>
                </small></small>
            </div>
        </>
    );
}

export default SearchPerformance;
