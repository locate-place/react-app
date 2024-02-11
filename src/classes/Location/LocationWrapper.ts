/* Import types. */
import {
    TypeAdministrativeLocations,
    TypeLocation,
} from "../../types/Types";

/* Import config. */
import {
    administrativeLocationCityMunicipality,
    administrativeLocationCountry,
    administrativeLocationDistrictLocality,
    administrativeLocationState
} from "../../config/AdministrativeLocations";

/* Import classes. */
import {FeatureWrapper} from "./Feature/FeatureWrapper";
import {CoordinateWrapper} from "./Coordinate/CoordinateWrapper";
import {PropertiesWrapper} from "./Properties/PropertiesWrapper";
import {TimezoneWrapper} from "./Timezone/TimezoneWrapper";
import {LinksWrapper} from "./Links/LinksWrapper";

/**
 * Class LocationWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
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
     * Returns the full location data of the location.
     */
    get(): TypeLocation
    {
        return this.location;
    }

    /**
     * Returns the name of the location.
     */
    getName(): string
    {
        return this.location.name;
    }

    /**
     * Returns the full name of the location.
     *
     * @return {string|null}
     */
    getNameFull(): string|null
    {
        return this.location['name-full'] ?? null;
    }

    /**
     * Returns the full name of the location.
     *
     * @return {number}
     */
    getGeonameId(): number
    {
        return this.location["geoname-id"];
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
    getAdministrativeLocation(key: string): LocationWrapper|null
    {
        const administrativeLocations = this.getAdministrativeLocations();

        if (administrativeLocations === null) {
            return null;
        }

        if (!administrativeLocations[key]) {
            return null;
        }

        return new LocationWrapper(administrativeLocations[key]);
    }

    /**
     * Returns the district/locality from administrative locations.
     */
    getDistrictLocality(): LocationWrapper|null
    {
        return this.getAdministrativeLocation(administrativeLocationDistrictLocality);
    }

    /**
     * Returns the city/municipality from administrative locations.
     */
    getCityMunicipality(): LocationWrapper|null
    {
        return this.getAdministrativeLocation(administrativeLocationCityMunicipality);
    }

    /**
     * Returns the state from administrative locations.
     */
    getState(): LocationWrapper|null
    {
        return this.getAdministrativeLocation(administrativeLocationState);
    }

    /**
     * Returns the state from administrative locations.
     */
    getCountry(): LocationWrapper|null
    {
        return this.getAdministrativeLocation(administrativeLocationCountry);
    }



    /**
     * Returns the coordinate of the location.
     */
    getCoordinate(): CoordinateWrapper
    {
        return new CoordinateWrapper(this.location.coordinate);
    }

    /**
     * Returns the feature of the location.
     */
    getFeature(): FeatureWrapper
    {
        return new FeatureWrapper(this.location.feature);
    }

    /**
     * Returns the properties of the location
     */
    getProperties(): PropertiesWrapper
    {
        return new PropertiesWrapper(this.location.properties);
    }

    /**
     * Returns the timezone of the location.
     */
    getTimezone(): TimezoneWrapper|null
    {
        if (!this.location.timezone) {
            return null;
        }

        return new TimezoneWrapper(this.location.timezone);
    }

    /**
     * Returns the links of the location.
     */
    getLinks(): LinksWrapper
    {
        return new LinksWrapper(this.location.links);
    }
}

/*
 * Export functions.
 */
export {
    LocationWrapper
}
