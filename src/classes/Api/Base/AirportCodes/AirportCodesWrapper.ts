/* Import types. */
import {
    TypeAirportCodes,
} from "../../../../types/Types";

/**
 * Class AirportCodesWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-17)
 * @since 0.1.0 (2024-02-17) First version.
 */
class AirportCodesWrapper
{
    private readonly airportCodes: TypeAirportCodes;

    /**
     * @param airportCodes {TypeAirportCodes}
     */
    constructor(airportCodes: TypeAirportCodes)
    {
        this.airportCodes = airportCodes;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeAirportCodes
    {
        return this.airportCodes;
    }

    /**
     * Returns if the iata code exists.
     */
    hasIata(): boolean
    {
        return !!this.airportCodes.iata;
    }

    /**
     * Returns the iata code.
     */
    getIata(): string|null
    {
        return this.airportCodes.iata ?? null;
    }

    /**
     * Returns if the icao code of the location exists.
     */
    hasIcao(): boolean
    {
        return !!this.airportCodes.icao;
    }

    /**
     * Returns the icao code.
     */
    getIcao(): string|null
    {
        return this.airportCodes.icao ?? null;
    }
}

/*
 * Export functions.
 */
export {
    AirportCodesWrapper
}
