/* Import types. */
import {
    TypeAdministrativeLocations,
    TypeCoordinate, TypeDirection, TypeDistance,
    TypeLocation,
    TypeValue,
} from "../types/Types";

/* Import config. */
import {
    administrativeLocationCityMunicipality,
    administrativeLocationCountry,
    administrativeLocationDistrictLocality,
    administrativeLocationState
} from "../config/AdministrativeLocations";

class LocationWrapper
{
    private readonly location: TypeLocation;

    /**
     * LocationApiWrapper constructor.
     *
     * @param location {TypeLocation}
     */
    constructor(location: TypeLocation)
    {
        this.location = location;
    }

    /**
     * Returns the name of the location.
     */
    getName(): string
    {
        return this.location.name;
    }

    /**
     * Returns the administrative locations.
     */
    getAdministrativeLocations(): TypeAdministrativeLocations|null
    {
        if (!this.location.locations) {
            return null;
        }

        return this.location.locations;
    }

    /**
     * Returns the administrative locations.
     *
     * @param key {string}
     * @return {TypeLocation|null}
     */
    getAdministrativeLocation(key: string): TypeLocation|null
    {
        const administrativeLocations = this.getAdministrativeLocations();

        if (administrativeLocations === null) {
            return null;
        }

        if (!administrativeLocations[key]) {
            return null;
        }

        return administrativeLocations[key];
    }

    /**
     * Returns the district/locality from administrative locations.
     */
    getDistrictLocality(): string|null
    {
        return this.getAdministrativeLocation(administrativeLocationDistrictLocality)?.name ?? null;
    }

    /**
     * Returns the city/municipality from administrative locations.
     */
    getCityMunicipality(): string|null
    {
        return this.getAdministrativeLocation(administrativeLocationCityMunicipality)?.name ?? null;
    }

    /**
     * Returns the state from administrative locations.
     */
    getState(): string|null
    {
        return this.getAdministrativeLocation(administrativeLocationState)?.name ?? null;
    }

    /**
     * Returns the state from administrative locations.
     */
    getCountry(): string|null
    {
        return this.getAdministrativeLocation(administrativeLocationCountry)?.name ?? null;
    }

    /**
     * Return the country code from location.
     */
    getCountryCode(): string
    {
        return this.location.properties.country;
    }

    /**
     * Return the country code from location.
     */
    getElevation(): TypeValue|null
    {
        return this.location.properties.elevation ?? null;
    }

    /**
     * Returns the coordinate of the location.
     */
    getCoordinate(): TypeCoordinate
    {
        return this.location.coordinate;
    }

    /**
     * Returns the dms string of the location.
     */
    getDMS(separator: string = ', '): string
    {
        const coordinate = this.getCoordinate();
        return coordinate.latitude.dms + separator + coordinate.longitude.dms;
    }

    /**
     * Returns the decimal value of the location.
     */
    getDecimal(separator: string = ', '): string
    {
        const coordinate = this.getCoordinate();
        return coordinate.latitude.decimal + separator + coordinate.longitude.decimal;
    }

    /**
     * Returns the distance of the location.
     */
    getDistance(): TypeDistance|null
    {
        if (!this.location.coordinate.distance) {
            return null;
        }

        return this.location.coordinate.distance;
    }

    /**
     * Returns the distance of the location to user.
     */
    getDistanceUser(): TypeDistance|null
    {
        if (!this.location.coordinate['distance-user']) {
            return null;
        }

        return this.location.coordinate['distance-user'];
    }

    /**
     * Returns the direction of the location.
     */
    getDirection(): TypeDirection|null
    {
        if (!this.location.coordinate.direction) {
            return null;
        }

        return this.location.coordinate.direction;
    }

    /**
     * Returns the cardinal direction of the location.
     */
    getDirectionString(): string|null
    {
        const direction = this.getDirection();

        if (direction === null) {
            return null;
        }

        return direction["cardinal-direction-translated"];
    }

    /**
     * Returns the direction of the location to user.
     */
    getDirectionUser(): TypeDirection|null
    {
        if (!this.location.coordinate['direction-user']) {
            return null;
        }

        return this.location.coordinate['direction-user'];
    }

    /**
     * Returns the cardinal direction of the location to user.
     */
    getDirectionUserString(): string|null
    {
        const direction = this.getDirectionUser();

        if (direction === null) {
            return null;
        }

        return direction["cardinal-direction-translated"];
    }
}

/*
 * Export functions.
 */
export {
    LocationWrapper
}
