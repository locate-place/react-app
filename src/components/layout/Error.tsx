import React from "react";
import {useTranslation} from "react-i18next";

/* Import types */
import {TypeErrorOwn} from "../../types/Types";

type ErrorProps = {
    error: TypeErrorOwn,
    apiPath: string,
}

/**
 * This is the error part.
 */
const Error = ({error, apiPath}: ErrorProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    return (
        <div className="col-12">
            <div className="card" style={{'backgroundColor': 'rgb(235, 213, 218)'}}>
                <div className="card-header"><strong>{t('TEXT_WORD_API_ERROR')}</strong></div>
                <div className="card-body">
                    <div className="card-text text-danger">
                        <p>
                            {t('TEXT_ERROR_API')}
                        </p>
                        <p className="mb-0">
                            <strong>{t('TEXT_WORD_ERROR')}</strong>: <i>"{error ? error.message : t('TEXT_WORD_UNKNOWN_ERROR')}"</i><br/>
                        </p>
                    </div>
                </div>
                <div className="card-footer">
                    <small><small>
                        <strong>{t('TEXT_WORD_API')}</strong>: <a href={apiPath} target="_blank" rel="noreferrer">{apiPath}</a>
                    </small></small>
                </div>
            </div>
        </div>
    )
}

export default Error;
