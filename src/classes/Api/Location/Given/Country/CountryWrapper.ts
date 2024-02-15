/* Import types. */
import {
    TypeGivenCountry,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";

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

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * @param country {TypeGivenCountry}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(country: TypeGivenCountry, apiLocationWrapper: ApiLocationWrapper)
    {
        this.country = country;
        this.apiLocationWrapper = apiLocationWrapper;
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
