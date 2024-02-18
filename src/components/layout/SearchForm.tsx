import React, {useEffect, useState} from "react";

/* Import translation libraries. */
import {useTranslation} from "react-i18next";

/* Add configurations */
import {sizeIcon} from "../../config/Config";

/* Bootstrap icons; see https://icons.getbootstrap.com/?q=sort#usage */
import {GlobeAmericas, CursorFill, HouseFill} from "react-bootstrap-icons";

/* Import classes. */
import {Query} from "../../classes/Query";
import LinkV2 from "./LinkV2";

/* Search form properties. */
type SearchFormProps = {
    routePathDefault: string,
    queryDefault: string|null,
    query: Query
}

/**
 * This renders the search form.
 */
const SearchForm = ({routePathDefault, queryDefault, query}: SearchFormProps) =>
{
    /* Import translation. */
    const { t } = useTranslation();

    /* State variables */
    const [queryString, setQueryString] = useState<string>(queryDefault ?? '');
    const [routePath, setRoutePath] = useState<string>(routePathDefault);

    useEffect(() => {
        setQueryString(queryDefault ?? '');
    }, [queryDefault]);

    /**
     * Handles the search "form submit".
     *
     * @param e {React.SyntheticEvent<HTMLFormElement>}
     */
    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void =>
    {
        if (queryString === '') {
            console.warn('No query value given.');
            e.preventDefault();
            return;
        }

        setRoutePath(query.getFilterConfig().getLinkQuery(queryString));
    }

    /**
     * Saves input changes.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event
     */
    const handleQueryStringChange = (event: React.SyntheticEvent<HTMLInputElement>) =>
    {
        setQueryString(event.currentTarget.value);
    };

    return (
        <>
            <h3><GlobeAmericas size={sizeIcon.H3}/> {t('TEXT_HEADER_LOCATION_SEARCH')} {
                query.getFilterConfig().hasCurrentPosition() ? <sup>
                    <small><small><small><HouseFill size={sizeIcon.ButtonSmall} /> {t('TEXT_TITLE_CURRENT_POSITION_IS_USED')}</small></small></small>
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
                            aria-label={t('TEXT_HEADER_LOCATION_SEARCH')}
                            aria-describedby="location-send"
                            value={queryString ? queryString : ''}
                            onChange={handleQueryStringChange}
                        />
                        <LinkV2
                            to={query.getFilterConfig().getLinkLocationCurrent()}
                            useCurrentPosition={true}
                            setQuery={true}
                            title={t('TEXT_TITLE_SEARCH_BY_CURRENT_POSITION')}
                            className="btn btn-outline-primary button-own-position button-own-position-search"
                            type="button"
                        >
                            <CursorFill size={sizeIcon.H3} />
                        </LinkV2>

                        <button
                            className="btn btn-primary"
                            title={t('TEXT_TITLE_START_SEARCH')}
                            type="submit"
                            id="location-send"
                            data-mdb-ripple-color="dark"
                        >{t('TEXT_ACTION_SEARCH')}</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SearchForm;
