import React from "react";
import {useTranslation} from "react-i18next";

/* Import functions */
import {addSoftHyphens} from "../../functions/Text";

/* Import configurations */
import {colorBackgroundPerformance} from "../../config/Colors";
import {sizeIcon} from "../../config/Config";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {Activity} from "react-bootstrap-icons";

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
    /* Import translation. */
    const { t } = useTranslation();

    return (
        <>
            <hr/>
            <div className="card mt-4" style={{"backgroundColor": colorBackgroundPerformance}}>
                <div className="card-header">
                    <Activity size={sizeIcon.H3} /> <strong>{t('TEXT_WORD_PERFORMANCE')}</strong>
                </div>
                <div className="card-body">
                    <small><small>
                        <strong>Query</strong>: {properties['time-taken']}, {properties['memory-taken']} - <strong>{properties['name']}</strong>:
                        Version {properties['version']}
                        <br/>
                        <strong>API</strong>:&nbsp;
                        <a
                            href={process.env.REACT_APP_LOCATION_API_URL + apiPathWithParameter}
                            target="_blank"
                            rel="noreferrer"
                            dangerouslySetInnerHTML={{__html: addSoftHyphens(process.env.REACT_APP_LOCATION_API_URL + apiPathWithoutParameter)}}
                        />
                    </small></small>
                </div>
            </div>
        </>
    );
}

export default SearchPerformance;
