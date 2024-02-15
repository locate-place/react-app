/* Import types. */
import {
    TypeGivenCountry,
} from "../../../../../types/Types";

/**
 * Class CountryWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class CountryWrapper
{
    private readonly country: TypeGivenCountry;

    /**
     * @param country {TypeGivenCountry}
     */
    constructor(country: TypeGivenCountry)
    {
        this.country = country;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGivenCountry
    {
        return this.country;
    }
}

/*
 * Export functions.
 */
export {
    CountryWrapper
}
