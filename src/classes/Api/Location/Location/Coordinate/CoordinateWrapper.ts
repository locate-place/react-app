import {TFunction} from "i18next";

/* Import types. */
import {
    TypeCoordinate,
    TypeDirection,
    TypeDistance,
    TypePosition,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";

/**
 * Class CoordinateWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class CoordinateWrapper
{
    private readonly coordinate: TypeCoordinate;

    private readonly apiLocationWrapper: ApiLocationWrapper|null;

    /**
     * @param coordinate {TypeCoordinate}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(coordinate: TypeCoordinate, apiLocationWrapper: ApiLocationWrapper|null = null)
    {
        this.coordinate = coordinate;

        this.apiLocationWrapper = apiLocationWrapper;
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
     * Returns if the distance of the location exists.
     */
    hasDistance(): boolean
    {
        return !!this.coordinate.distance;
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
     * Returns the distance of the location in kilometers (-1 if not exists).
     */
    getDistanceKilometerValue(): number
    {
        if (!this.coordinate.distance) {
            return -1;
        }

        return this.coordinate.distance.kilometers.value;
    }

    /**
     * Returns the distance of the location in kilometers (-1 if not exists).
     */
    getDistanceKilometerFormatted(): string|null
    {
        if (!this.coordinate.distance) {
            return null;
        }

        return this.coordinate.distance.kilometers["value-formatted"];
    }

    /**
     * Returns if the distance of the location to user exists.
     */
    hasDistanceUser(): boolean
    {
        return !!this.coordinate['distance-user'];
    }

    /**
     * Returns the distance of the location to the user.
     */
    getDistanceUser(): TypeDistance|null
    {
        if (!this.coordinate['distance-user']) {
            return null;
        }

        return this.coordinate['distance-user'];
    }

    /**
     * Returns the distance of the location to the user in kilometers (-1 if not exists).
     */
    getDistanceUserKilometerValue(): number
    {
        if (!this.coordinate['distance-user']) {
            return -1;
        }

        return this.coordinate['distance-user'].kilometers.value;
    }

    /**
     * Returns the distance of the location to the user in kilometers (-1 if not exists).
     */
    getDistanceUserKilometerFormatted(): string|null
    {
        if (!this.coordinate['distance-user']) {
            return null;
        }

        return this.coordinate['distance-user'].kilometers["value-formatted"];
    }

    /**
     * Returns the distance text.
     */
    getDistanceUserText(t:  TFunction<"translation", undefined>): string|null
    {
        if (this.apiLocationWrapper === null) {
            throw new Error("ApiLocationWrapper not set.");
        }

        const coordinate = this.apiLocationWrapper.getGiven().get().coordinate ?? null;

        if (coordinate === null) {
            return null;
        }

        const latitudeDms = coordinate.parsed.latitude.dms;
        const longitudeDms = coordinate.parsed.longitude.dms;

        return t('TEXT_CURRENT_POSITION_FROM_POSITION', {latitudeDms, longitudeDms});
    }

    /**
     * Returns if the direction of the location exists.
     */
    hasDirection(): boolean
    {
        return !!this.coordinate.direction;
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
    getDirectionTranslated(): string|null
    {
        const direction = this.getDirection();

        if (direction === null) {
            return null;
        }

        return direction["cardinal-direction-translated"];
    }

    /**
     * Returns the cardinal direction of the location.
     */
    getDirectionTranslatedShort(): string|null
    {
        const direction = this.getDirection();

        if (direction === null) {
            return null;
        }

        return direction["cardinal-direction"];
    }

    /**
     * Returns the cardinal direction of the location.
     */
    getDirectionDegree(): number
    {
        const direction = this.getDirection();

        if (direction === null) {
            return 0; // 0° - North
        }

        return direction.degree;
    }

    /**
     * Returns if the direction of the location to user exists.
     */
    hasDirectionUser(): boolean
    {
        return !!this.coordinate['direction-user'];
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
    getDirectionUserTranslated(): string|null
    {
        const direction = this.getDirectionUser();

        if (direction === null) {
            return null;
        }

        return direction["cardinal-direction-translated"];
    }

    /**
     * Returns the cardinal direction of the location to user.
     */
    getDirectionUserDegree(): number
    {
        const direction = this.getDirectionUser();

        if (direction === null) {
            return 0; // 0° - North
        }

        return direction.degree;
    }
}

/*
 * Export functions.
 */
export {
    CoordinateWrapper
}
