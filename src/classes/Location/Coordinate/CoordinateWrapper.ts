/* Import types. */
import {
    TypeCoordinate,
    TypeDirection,
    TypeDistance,
    TypePosition,
} from "../../../types/Types";

class CoordinateWrapper
{
    private readonly coordinate: TypeCoordinate;

    /**
     * LocationApiWrapper constructor.
     *
     * @param coordinate {TypeCoordinate}
     */
    constructor(coordinate: TypeCoordinate)
    {
        this.coordinate = coordinate;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeCoordinate
    {
        return this.coordinate;
    }

    /**
     * Returns the latitude of the location.
     */
    getLatitude(): TypePosition
    {
        return this.coordinate.latitude;
    }

    /**
     * Returns the longitude of the location.
     */
    getLongitude(): TypePosition
    {
        return this.coordinate.longitude;
    }

    /**
     * Returns the srid of the location.
     */
    getSrid(): number
    {
        return this.coordinate.srid;
    }

    /**
     * Returns the dms string of the location.
     */
    getDMS(separator: string = ', '): string
    {
        return this.coordinate.latitude.dms + separator + this.coordinate.longitude.dms;
    }

    /**
     * Returns the decimal value of the location.
     */
    getDecimal(separator: string = ', '): string
    {
        const coordinate = this.get();
        return coordinate.latitude.decimal + separator + coordinate.longitude.decimal;
    }

    /**
     * Returns the distance of the location.
     */
    getDistance(): TypeDistance|null
    {
        if (!this.coordinate.distance) {
            return null;
        }

        return this.coordinate.distance;
    }

    /**
     * Returns the distance of the location to user.
     */
    getDistanceUser(): TypeDistance|null
    {
        if (!this.coordinate['distance-user']) {
            return null;
        }

        return this.coordinate['distance-user'];
    }

    /**
     * Returns the direction of the location.
     */
    getDirection(): TypeDirection|null
    {
        if (!this.coordinate.direction) {
            return null;
        }

        return this.coordinate.direction;
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
        if (!this.coordinate['direction-user']) {
            return null;
        }

        return this.coordinate['direction-user'];
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
    CoordinateWrapper
}
