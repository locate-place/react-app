import i18n from "i18next";
import {To} from "react-router-dom";

/* Import types. */
import {TypeFilterConfig} from "../types/Types";

/* Import configurations. */
import {
    nameParameterCalendar,
    nameParameterCountry,
    nameParameterCurrentPosition,
    nameParameterDistance,
    nameParameterLanguage,
    nameParameterLimit,
    nameParameterMonth,
    nameParameterNextPlaces,
    nameParameterPage,
    nameParameterQuery,
    nameParameterSort
} from "../config/NameParameter";
import {countryDefault} from "../config/Country";
import {languageDE, languageDefault} from "../config/Language";
import {routePathLocation, routePathLocations} from "../config/Route";

/* Import classes. */
import {NextPlaceWrapper} from "./Location/NextPlaces/NextPlaceWrapper";


/**
 * Class FilterConfig
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-12)
 * @since 0.1.0 (2024-02-12) First version.
 */
class FilterConfig
{
    private filterConfig: TypeFilterConfig = {};

    /* The initialized filter configuration, to avoid parsing the query parameters if needed. */
    private readonly filterConfigInit: TypeFilterConfig = {};

    private doNotResetFilterConfig: boolean = false;

    /**
     * FilterConfig constructor.
     */
    constructor(init: TypeFilterConfig|URLSearchParams|null = null)
    {
        /* URLSearchParams instance was given. */
        if (init instanceof URLSearchParams) {
            this.setFilterConfigBySearchParams(init);

        /* TypeFilterConfig was given. */
        } else if (init !== null) {
            this.setFilterConfig(init);
        }

        this.filterConfigInit = this.filterConfig;
    }

    /**
     * Sets the filter config.
     *
     * @param filterConfig
     */
    setFilterConfig(filterConfig: TypeFilterConfig): void
    {
        this.filterConfig = filterConfig;
    }

    /**
     * Returns the filter configuration.
     */
    getFilterConfig(): TypeFilterConfig
    {
        return this.filterConfig;
    }

    /**
     * Resets the filter configuration to its initial state.
     */
    resetFilterConfig(): void
    {
        if (this.isDoNotResetFilterConfig()) {
            this.doNotResetFilterConfig = false;
            return;
        }

        this.filterConfig = this.filterConfigInit;
    }

    /**
     * Clears the filter config.
     */
    clearFilterConfig(): void
    {
        this.filterConfig = {};
    }

    setDoNotResetFilterConfig(doNotResetFilterConfig: boolean|null = null): void
    {
        if (doNotResetFilterConfig === null) {
            this.doNotResetFilterConfig = true;
            return;
        }

        this.doNotResetFilterConfig = doNotResetFilterConfig;
    }

    isDoNotResetFilterConfig(): boolean
    {
        return this.doNotResetFilterConfig;
    }

    getFullQualifiedLink(link: To): string
    {
        link = link.toString();

        if (link.startsWith('http')) {
            return link;
        }

        if (link.startsWith('/')) {
            return window.location.origin + link;
        }

        return window.location.origin + '/' + link;
    }

    getPathname(link: To): string
    {
        const url = new URL(this.getFullQualifiedLink(link));

        return url.pathname;
    }

    setFilterConfigByLink(link: To)
    {
        const url = new URL(this.getFullQualifiedLink(link));

        this.setFilterConfigBySearchParams(url.searchParams);
    }

    /**
     * Returns the filter configuration from the search parameters.
     *
     * @returns {TypeFilterConfig}
     */
    setFilterConfigBySearchParams(searchParams: URLSearchParams): void
    {
        this.filterConfig = {};

        const calendar: string|null = searchParams.get(nameParameterCalendar);
        const month: string|null = searchParams.get(nameParameterMonth);
        const query: string|null = searchParams.get(nameParameterQuery);
        const currentPosition: string|null = searchParams.get(nameParameterCurrentPosition);
        const country: string|null = searchParams.get(nameParameterCountry);
        const language: string|null = searchParams.get(nameParameterLanguage);
        const distance: string|null = searchParams.get(nameParameterDistance);
        const limit: string|null = searchParams.get(nameParameterLimit);
        const page: string|null = searchParams.get(nameParameterPage);
        const sort: string|null = searchParams.get(nameParameterSort);
        const nextPlaces: string|null = searchParams.get(nameParameterNextPlaces);

        /* Add calendar parameter. */
        calendar && this.setCalendar(calendar);

        /* Add month parameter. */
        month && this.setMonth(month);

        /* Add parameter "q". */
        query && this.setQuery(query);

        /* Add parameter "c". */
        currentPosition && this.setCurrentPosition(currentPosition);

        /* Add parameter "distance". */
        distance && this.setDistance(distance);

        /* Add parameter "limit". */
        limit && this.setLimit(limit);

        /* Add parameter "limit". */
        page && this.setPage(page);

        /* Add parameter "sort". */
        sort && this.setSort(sort);

        /* Add parameter "country". */
        this.setCountry(country ? country : countryDefault);

        /* Add parameter "language". */
        this.setLanguage(language? language : languageDefault);

        /* Add parameter "next_places". */
        nextPlaces && this.setNextPlaces(true);
    };



    /**
     * Sets the calendar filter config (c).
     *
     * @param calendar
     */
    setCalendar(calendar: string): void
    {
        this.filterConfig[nameParameterCalendar] = calendar;
    }

    /**
     * Returns if the calendar filter config was set (m).
     *
     * @return {boolean}
     */
    hasCalendar(): boolean
    {
        return !!this.filterConfig[nameParameterCalendar];
    }

    /**
     * Returns the calendar filter config (c).
     */
    getCalendar(): string|null
    {
        return this.filterConfig[nameParameterCalendar] ?? null;
    }

    /**
     * Sets the month filter config (m).
     *
     * @param month
     */
    setMonth(month: string): void
    {
        this.filterConfig[nameParameterMonth] = month;
    }

    /**
     * Returns if the month filter config was set (m).
     *
     * @return {boolean}
     */
    hasMonth(): boolean
    {
        return !!this.filterConfig[nameParameterMonth];
    }

    /**
     * Returns the month filter config (m).
     */
    getMonth(): string|null
    {
        return this.filterConfig[nameParameterMonth] ?? null;
    }

    /**
     * Sets the country filter config (q).
     *
     * @param query
     */
    setQuery(query: string): void
    {
        this.filterConfig[nameParameterQuery] = query;
    }

    /**
     * Returns if the query filter config was set (q).
     *
     * @return {boolean}
     */
    hasQuery(): boolean
    {
        return !!this.filterConfig[nameParameterQuery];
    }

    /**
     * Returns the query filter config (q).
     *
     * @return {string|null}
     */
    getQuery(): string|null
    {
        return this.filterConfig[nameParameterQuery] ?? null;
    }

    /**
     * Sets the current position filter config (p).
     *
     * @param currentPosition
     */
    setCurrentPosition(currentPosition: string): void
    {
        this.filterConfig[nameParameterCurrentPosition] = currentPosition;
    }

    /**
     * Returns if the current position filter config was set (p).
     *
     * @return {boolean}
     */
    hasCurrentPosition(): boolean
    {
        return !!this.filterConfig[nameParameterCurrentPosition];
    }

    /**
     * Returns the current position filter config (p).
     *
     * @return {string|null}
     */
    getCurrentPosition(): string|null
    {
        return this.filterConfig[nameParameterCurrentPosition] ?? null;
    }

    /**
     * Sets the distance filter config (distance).
     *
     * @param distance
     */
    setDistance(distance: string): void
    {
        this.filterConfig[nameParameterDistance] = distance;
    }

    /**
     * Returns if the distance filter config was set (distance).
     *
     * @return {boolean}
     */
    hasDistance(): boolean
    {
        return !!this.filterConfig[nameParameterDistance];
    }

    /**
     * Returns the distance filter config (distance).
     *
     * @return {string|null}
     */
    getDistance(): string|null
    {
        return this.filterConfig[nameParameterDistance] ?? null;
    }

    /**
     * Sets the limit filter config (limit).
     *
     * @param limit
     */
    setLimit(limit: string): void
    {
        this.filterConfig[nameParameterLimit] = limit;
    }

    /**
     * Returns if the limit filter config was set (limit).
     *
     * @return {boolean}
     */
    hasLimit(): boolean
    {
        return !!this.filterConfig[nameParameterLimit];
    }

    /**
     * Returns the limit filter config (limit).
     *
     * @return {string|null}
     */
    getLimit(): string|null
    {
        return this.filterConfig[nameParameterLimit] ?? null;
    }

    /**
     * Sets the page filter config (limit).
     *
     * @param page
     */
    setPage(page: string): void
    {
        this.filterConfig[nameParameterPage] = page;
    }

    /**
     * Returns if the page filter config was set (limit).
     *
     * @return {boolean}
     */
    hasPage(): boolean
    {
        return !!this.filterConfig[nameParameterPage];
    }

    /**
     * Returns the page filter config (limit).
     *
     * @return {string|null}
     */
    getPage(): string|null
    {
        return this.filterConfig[nameParameterPage] ?? null;
    }

    /**
     * Sets the page filter config (s).
     *
     * @param sort
     */
    setSort(sort: string): void
    {
        this.filterConfig[nameParameterSort] = sort;
    }

    /**
     * Returns if the page filter config was set (s).
     *
     * @return {boolean}
     */
    hasSort(): boolean
    {
        return !!this.filterConfig[nameParameterSort];
    }

    /**
     * Returns the page filter config (s).
     *
     * @return {string|null}
     */
    getSort(): string|null
    {
        return this.filterConfig[nameParameterSort] ?? null;
    }

    /**
     * Sets the country filter config (country).
     *
     * @param country
     */
    setCountry(country: string): void
    {
        this.filterConfig[nameParameterCountry] = country;
    }

    /**
     * Returns if the country filter config was set (country).
     *
     * @return {boolean}
     */
    hasCountry(): boolean
    {
        return !!this.filterConfig[nameParameterCountry];
    }

    /**
     * Returns the country filter config (country).
     *
     * @return {string}
     */
    getCountry(): string
    {
        return this.filterConfig[nameParameterCountry] ?? countryDefault;
    }

    /**
     * Sets the language filter config (language).
     *
     * @param language
     */
    setLanguage(language: string): void
    {
        this.filterConfig[nameParameterLanguage] = language;
    }

    /**
     * Returns if the language filter config was set (language).
     *
     * @return {boolean}
     */
    hasLanguage(): boolean
    {
        return !!this.filterConfig[nameParameterLanguage];
    }

    /**
     * Returns the language filter config (language).
     *
     * @return {string}
     */
    getLanguage(): string
    {
        return this.filterConfig[nameParameterLanguage] ?? languageDE;
    }

    /**
     * Sets the next places filter config (next_places).
     *
     * @param nextPlaces
     */
    setNextPlaces(nextPlaces: boolean): void
    {
        if (nextPlaces) {
            this.filterConfig[nameParameterNextPlaces] = '1';
            return;
        }

        delete this.filterConfig[nameParameterNextPlaces];
    }

    /**
     * Returns if the next places filter config was set (next_places).
     *
     * @return {boolean}
     */
    hasNextPlaces(): boolean
    {
        return !!this.filterConfig[nameParameterNextPlaces];
    }

    /**
     * Returns the next places filter config (next_places).
     *
     * @return {string}
     */
    getNextPlaces(): boolean
    {
        return this.hasNextPlaces();
    }

    /**
     * Converts the filter configuration into a query string.
     *
     * @return string
     */
    getConvertedFilterQueryString(): string
    {
        const keyValuePairs = [];

        for (let key in this.filterConfig) {
            let value: string | null = this.filterConfig[key as keyof TypeFilterConfig] ?? null;

            if (value === null) {
                continue;
            }

            if (key === 'language' && value === languageDefault) {
                continue;
            }

            if (key === 'country' && value === countryDefault) {
                continue;
            }

            keyValuePairs.push(key + '=' + encodeURIComponent(value));
        }

        return keyValuePairs.join('&');
    }



    /**
     * Returns the country by language.
     *
     * @param language
     */
    getCountryByLanguage(language: string): string
    {
        switch (language) {
            case 'de':
                return 'DE';
            case 'en':
                return 'US';
            case 'es':
                return 'ES';
            default:
                return 'DE';
        }
    }



    /**
     * Builds
     *
     * @param pathname
     * @param queryString
     */
    getLinkFull(pathname: string|null = null, queryString: string|null = null): string
    {
        pathname = pathname ?? window.location.pathname;

        const separator = pathname !== null && pathname.includes('?') ? '&' : '?';

        queryString = queryString !== null ? separator + queryString : '';

        return pathname + queryString;
    }

    /**
     * Returns Link to given pathname including language and country.
     *
     * @param pathname
     */
    getLinkTo(pathname: string): string
    {
        const language = i18n.language;
        const country = this.getCountryByLanguage(language);

        this.clearFilterConfig();
        this.setLanguage(language);
        this.setCountry(country);

        return this.getLinkFull(pathname, this.getConvertedFilterQueryString());
    }

    /**
     * Returns Link to given pathname including language and country.
     *
     * @param query
     */
    getLinkLocationQuery(query: string): string
    {
        const pathname = routePathLocation;
        const language = i18n.language;
        const country = this.getCountryByLanguage(language);

        this.resetFilterConfig();
        const ownPosition = this.getCurrentPosition();

        this.clearFilterConfig();
        this.setQuery(query);
        this.setNextPlaces(true);
        this.setLanguage(language);
        this.setCountry(country);

        if (ownPosition !== null) {
            this.setCurrentPosition(ownPosition);
        }

        return this.getLinkFull(pathname, this.getConvertedFilterQueryString());
    }

    /**
     * Returns Link to given pathname including language and country.
     *
     * @param query
     * @param distance
     * @param limit
     */
    getLinkNextPlaces(query: string, distance: number, limit: number): string
    {
        const pathname = routePathLocations;
        const language = i18n.language;
        const country = this.getCountryByLanguage(language);

        this.resetFilterConfig();
        const ownPosition = this.getCurrentPosition();

        this.clearFilterConfig();
        this.setQuery(query);
        this.setDistance(distance.toString());
        this.setLimit(limit.toString());
        this.setLanguage(language);
        this.setCountry(country);

        if (ownPosition !== null) {
            this.setCurrentPosition(ownPosition);
        }

        return this.getLinkFull(pathname, this.getConvertedFilterQueryString());
    }

    /**
     * Returns the current link including given language and country code.
     *
     * @param language
     * @param country
     * @param pathname
     */
    getCurrentLinkWithLanguage(
        language: string|null = null,
        country: string|null = null,
        pathname: string|null = null,
    ): string
    {
        language = language ?? i18n.language;
        country = country ?? this.getCountryByLanguage(language);

        this.resetFilterConfig();
        this.setLanguage(language);
        this.setCountry(country);

        return this.getLinkFull(pathname, this.getConvertedFilterQueryString());
    }

    /**
     * Returns the next places link with coordinate.
     *
     * @param nextPlace
     */
    getNextPlacesListLink(
        nextPlace: NextPlaceWrapper
    ): string
    {
        const coordinate = nextPlace.getConfigCoordinateDecimal();
        const featureClass = nextPlace.getFeatureClassCode();
        const distance = nextPlace.getConfigDistanceMeter();
        const limit = nextPlace.getConfigLimitation();

        switch (nextPlace.getConfigCoordinateType()) {
            case 'location':
                this.resetFilterConfig();
                this.setQuery(featureClass + ' ' + coordinate);
                this.setDistance(distance.toString());
                this.setLimit(limit.toString());
                this.setNextPlaces(true);
                break;

            case 'coordinate':
                this.resetFilterConfig();
                this.setQuery(featureClass + ' ' + this.getQuery());
                this.setDistance(distance.toString());
                this.setLimit(limit.toString());
                this.setNextPlaces(true);
                break;

            default:
                throw new Error('Unsupported coordinate type: ' + nextPlace.getConfigCoordinateType());
        }

        return this.getLinkFull(routePathLocations, this.getConvertedFilterQueryString());
    }
}

/*
 * Export functions.
 */
export {
    FilterConfig
}
