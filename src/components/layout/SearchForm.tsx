import React, {useState} from "react";

/* Add configurations */
import {sizeIcon} from "../../config/Config.ts";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {GlobeAmericas, Bullseye} from "react-bootstrap-icons";
import {getPathLocationApi, redirectCurrentPosition} from "../../functions/Query.ts";

type SearchFormProps = {
    routePathDefault: string,
    queryDefault: string,
}

/**
 * This renders the search form.
 */
const SearchForm = ({routePathDefault, queryDefault}: SearchFormProps) =>
{
    const [query, setQuery] = useState<string>(queryDefault);
    const [routePath, setRoutePath] = useState<string>(routePathDefault);

    /**
     * Handles the search form submit.
     *
     * @param e
     */
    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void =>
    {
        if (query === '') {
            console.warn('No query value given.');
            e.preventDefault();
            return;
        }

        setRoutePath(getPathLocationApi(query));
    }

    /**
     * Saves input changes.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} e
     */
    const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
    {
        setQuery(e.currentTarget.value);
    };

    return (
        <>
            <h3><GlobeAmericas size={sizeIcon.H3}/> Location Suche</h3>

            <form id="searchForm" action={routePath} onSubmit={onSubmit}>
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
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-outline-primary"
                            title="Suche nach aktuellem Standort"
                            type="button"
                            onClick={redirectCurrentPosition}
                        >
                            <Bullseye size={sizeIcon.H3} />
                        </button>

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
