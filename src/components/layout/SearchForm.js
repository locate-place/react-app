import React from "react";

/* Add configurations */
import {sizeIcon} from "../../config/Config.ts";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {GlobeAmericas} from "react-bootstrap-icons";

/**
 * This renders the search form.
 */
const SearchForm = ({routePath, query}) =>
{
    return (
        <>
            <h3><GlobeAmericas size={sizeIcon.H3}/> Location Suche</h3>

            <form action={routePath}>
                <div className="d-flex justify-content-center w-100 mb-4">
                    <div className="input-group w-100">
                        <input
                            name="q"
                            id="query"
                            type="text"
                            className="form-control"
                            placeholder="52°31′14.322″N, 13°24′35.2044″E"
                            aria-label="Location Suche"
                            aria-describedby="location-send"
                            defaultValue={query ? query : ''}
                        />
                        <button
                            className="btn btn-primary"
                            type="submit"
                            id="location-send"
                            data-mdb-ripple-color="dark"
                        >
                            Suche
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SearchForm;
