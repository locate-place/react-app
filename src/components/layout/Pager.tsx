import React from "react";

/* Import types */
import {TypeFilterConfig} from "../../types/Types";
import {redirectNextPage} from "../../functions/Query";

type PagerProps = {
    page: number
    results: number
    total: number,
    filterConfig: TypeFilterConfig
}

/**
 * This renders the pager part.
 */
const Pager = ({
    page,
    results,
    total,
    filterConfig
}: PagerProps) =>
{
    if ((page * results) > total) {
        return <></>;
    }

    return (
        <>
            <div className="mb-3 float-end">
                <button className="link-button" onClick={(e) => {
                    redirectNextPage(
                        filterConfig,
                        page + 1
                    );
                    e.preventDefault();
                }}>Zeige nächste Seite</button>
            </div>

            <div className="clearfix"></div>
        </>
    );
}

export default Pager;
