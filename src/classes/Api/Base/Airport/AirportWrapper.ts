import {TFunction} from "i18next";

/* Import types. */
import {TypeAirport,} from "../../../../types/Types";

/* Import functions. */
import {ucFirst} from "../../../../functions/Text";
import {formatNumber} from "../../../../functions/I18n";

/**
 * Class AirportWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-03-01)
 * @since 0.1.0 (2024-03-01) First version.
 */
class AirportWrapper
{
    private readonly airport: TypeAirport;

    /**
     * @param airport {TypeAirport}
     */
    constructor(airport: TypeAirport)
    {
        this.airport = airport;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeAirport
    {
        return this.airport;
    }

    /**
     * Returns if the iata code exists.
     */
    hasIata(): boolean
    {
        return !!this.airport.iata;
    }

    /**
     * Returns the iata code.
     */
    getIata(): string|null
    {
        return this.airport.iata ?? null;
    }

    /**
     * Returns if the icao code of the location exists.
     */
    hasIcao(): boolean
    {
        return !!this.airport.icao;
    }

    /**
     * Returns the icao code.
     */
    getIcao(): string|null {
        return this.airport.icao ?? null;
    }

    /**
     * Returns if the wmo code of the location exists.
     */
    hasWmo(): boolean
    {
        return !!this.airport.wmo;
    }

    /**
     * Returns the wmo code.
     */
    getWmo(): string|null
    {
        return this.airport.wmo ?? null;
    }

    /**
     * Returns if the passengers of the airport.
     */
    hasPassengers(): boolean
    {
        return !!this.airport.passengers;
    }

    /**
     * Returns the wmo code.
     */
    getPassengers(): number|null
    {
        return this.airport.passengers ? Number(this.airport.passengers) :  null;
    }

    /**
     * Returns the wmo code.
     */
    getPassengersText(t: TFunction<"translation", undefined>): string|null
    {
        const passengers = this.getPassengers();

        if (passengers === null) {
            return null;
        }

        return this.airport.passengers ? formatNumber(passengers) + t('TEXT_LOCATION_AIRPORT_PASSENGERS') : null;
    }

    /**
     * Returns if the movements of the airport.
     */
    hasMovements(): boolean
    {
        return !!this.airport.movements;
    }

    /**
     * Returns the movements.
     */
    getMovements(): number|null
    {
        return this.airport.movements ? Number(this.airport.movements) :  null;
    }

    /**
     * Returns if the movements of the airport.
     */
    hasCargo(): boolean
    {
        return !!this.airport.cargo;
    }

    /**
     * Returns the movements.
     */
    getCargo(): number|null
    {
        return this.airport.cargo ? Number(this.airport.cargo) :  null;
    }

    /**
     * Returns if the website of the airport exists.
     */
    hasWebsite(): boolean
    {
        return !!this.airport.website;
    }

    /**
     * Returns the website.
     */
    getWebsite(): string|null
    {
        return this.airport.website ?? null;
    }

    /**
     * Returns if the operator of the airport exists.
     */
    hasOperator(): boolean
    {
        return !!this.airport.operator;
    }

    /**
     * Returns the operator.
     */
    getOperator(): string|null
    {
        return this.airport.operator ?? null;
    }

    /**
     * Returns if the opened of the airport exists.
     */
    hasOpened(): boolean
    {
        return !!this.airport.opened;
    }

    /**
     * Returns the opened.
     */
    getOpened(): string|null
    {
        return this.airport.opened ?? null;
    }

    /**
     * Returns if the opened of the airport exists.
     */
    hasType(): boolean
    {
        return !!this.airport.type;
    }

    /**
     * Returns the opened.
     */
    getType(): string|null
    {
        return this.airport.type ?? null;
    }

    /**
     * Returns if the opened of the airport exists.
     */
    hasStatisticYear(): boolean
    {
        return !!this.airport["statistics-year"];
    }

    /**
     * Returns the opened.
     */
    getStatisticYear(): string|null
    {
        return this.airport["statistics-year"] ?? null;
    }

    /**
     * Returns if the runways of the airport exists.
     */
    hasRunways(): boolean
    {
        return !!this.airport.direction && !!this.airport.length && !!this.airport.surface;
    }

    /**
     * Returns the opened.
     */
    getRunways(): string[]|null
    {
        if (!this.airport.direction) {
            return null;
        }
        if (!this.airport.length) {
            return null;
        }
        if (!this.airport.surface) {
            return null;
        }

        const runwayData = {
            direction: this.airport.direction,
            length: this.airport.length,
            surface: this.airport.surface
        };

        return runwayData.direction.map((direction, index) =>
        {
            const length = runwayData.length[index];
            const surface = runwayData.surface[index];

            return direction + ' - ' + length + ' m - ' + ucFirst(surface);
        });
    }
}

/*
 * Export functions.
 */
export {
    AirportWrapper
}
