/* Import types. */
import {
    TypeGiven, TypeGivenCoordinate, TypeGivenCountry, TypeGivenLanguage,
    TypeGivenQuery,
} from "../../../../types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../LocationApiWrapper";

/**
 * Class GivenWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class GivenWrapper
{
    private readonly given: TypeGiven;

    private readonly locationApiWrapper: LocationApiWrapper;

    /**
     * LocationApiWrapper constructor.
     *
     * @param given {TypeGiven}
     * @param locationApiWrapper {LocationApiWrapper}
     */
    constructor(given: TypeGiven, locationApiWrapper: LocationApiWrapper)
    {
        this.given = given;
        this.locationApiWrapper = locationApiWrapper;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGiven
    {
        return this.given;
    }

    /**
     * Returns if the given property query exists.
     */
    hasQuery(): boolean
    {
        return !!this.given.query;
    }

    /**
     * Returns the given property query.
     */
    getQuery(): TypeGivenQuery|null
    {
        return this.given.query ?? null;
    }

    /**
     * Returns if the next places were requested.
     */
    showNextPlaces(): boolean
    {
        return this.given["next-places"] ? this.given["next-places"] : false;
    }

    /**
     * Returns if the given property language exists.
     */
    hasLanguage(): boolean
    {
        return !!this.given.language;
    }

    /**
     * Returns the given property language.
     */
    getLanguage(): TypeGivenLanguage|null
    {
        return this.given.language ?? null;
    }

    /**
     * Returns if the given property country exists.
     */
    hasCountry(): boolean
    {
        return !!this.given.country;
    }

    /**
     * Returns the given property country.
     */
    getCountry(): TypeGivenCountry|null
    {
        return this.given.country ?? null;
    }

    /**
     * Returns if the given property coordinate exists.
     */
    hasCoordinate(): boolean
    {
        return !!this.given.coordinate;
    }

    /**
     * Returns the given property coordinate.
     */
    getCoordinate(): TypeGivenCoordinate|null
    {
        return this.given.coordinate ?? null;
    }
}

/*
 * Export functions.
 */
export {
    GivenWrapper
}
