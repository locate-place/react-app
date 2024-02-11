import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";

/* Add configurations */
import {sizeIcon} from "../../config/Config";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {GlobeAmericas, CursorFill, HouseFill} from "react-bootstrap-icons";

/* Import functions */
import {getPathLocationApi, hasOwnPosition, redirectCurrentPosition} from "../../functions/QueryFunctions";
import {useTranslation} from "react-i18next";

type SearchFormProps = {
    routePathDefault: string,
    queryDefault: string|null,
}

/**
 * This renders the search form.
 */
const SearchForm = ({routePathDefault, queryDefault}: SearchFormProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* State variables */
    const [query, setQuery] = useState<string>(queryDefault ?? '');
    const [routePath, setRoutePath] = useState<string>(routePathDefault);

    /* Memorized variables. */
    const [searchParams] = useSearchParams();

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
            <h3><GlobeAmericas size={sizeIcon.H3}/> {t('TEXT_LOCATION_SEARCH_HEADER')} {
                hasOwnPosition(searchParams) ? <sup>
                    <small><small><small><HouseFill size={sizeIcon.ButtonSmall} /> Akt. Position wird verwendet</small></small></small>
                </sup> : null
            }</h3>

            <form
                id="searchForm"
                action={routePath}
                onSubmit={onSubmit}
            >
                <div
                    className="d-flex justify-content-center w-100 mb-4 shadow-own"
                >
                    <div
                        className="input-group w-100"
                        style={{backgroundColor: "transparent"}}
                    >
                        <input
                            name="q"
                            id="query"
                            type="text"
                            style={{borderColor: '#6c757d'}}
                            className="form-control shadow-none"
                            placeholder="52°31′14.322″N, 13°24′35.2044″E"
                            aria-label="Location Suche"
                            aria-describedby="location-send"
                            defaultValue={query ? query : ''}
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-outline-primary button-own-position button-own-position-search"
                            title="Suche nach aktuellem Standort"
                            type="button"
                            onClick={redirectCurrentPosition}
                        >
                            <CursorFill size={sizeIcon.H3} />
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
