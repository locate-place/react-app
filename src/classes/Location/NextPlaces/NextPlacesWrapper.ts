/* Import types. */
import {
    TypeNextPlaces,
    TypeNextPlacesFeatureClass,
    TypeNextPlacesFeatureClassConfig,
    TypeNextPlacesFeatureClassFeature,
} from "../../../types/Types";

/* Import classes. */
import {LocationWrapper} from "../LocationWrapper";
import {LocationApiWrapper} from "../../LocationApiWrapper";

/**
 * Class NextPlacesWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class NextPlacesWrapper
{
    private readonly nextPlaces: TypeNextPlaces;

    private readonly locationApiWrapper: LocationApiWrapper;

    /**
     * NextPlacesWrapper constructor.
     *
     * @param nextPlaces {TypeNextPlaces}
     * @param locationApiWrapper {LocationApiWrapper}
     */
    constructor(nextPlaces: TypeNextPlaces, locationApiWrapper: LocationApiWrapper)
    {
        this.nextPlaces = nextPlaces;

        this.locationApiWrapper = locationApiWrapper;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeNextPlaces
    {
        return this.nextPlaces;
    }

    /**
     * Returns all feature classes.
     */
    getFeatureClasses(): Array<keyof TypeNextPlaces>
    {
        return Object.keys(this.nextPlaces) as Array<keyof TypeNextPlaces>;
    }

    /**
     * Returns the feature class of the location by given feature class key.
     *
     * @param key
     */
    getNextPlace<K extends keyof TypeNextPlaces>(key: K): TypeNextPlacesFeatureClass|null
    {
        return this.nextPlaces[key] ?? null;
    }

    /**
     * Returns the feature class config of the location by given feature class key.
     *
     * @param key {string}
     */
    getNextPlaceConfig<K extends keyof TypeNextPlaces>(key: K): TypeNextPlacesFeatureClassConfig|null
    {
        const featureClass = this.getNextPlace(key);

        if (featureClass === null) {
            return null;
        }

        return featureClass.config;
    }

    /**
     * Returns the feature class feature of the location by given feature class key.
     *
     * @param key {string}
     */
    getNextPlaceFeature<K extends keyof TypeNextPlaces>(key: K): TypeNextPlacesFeatureClassFeature|null
    {
        const featureClass = this.getNextPlace(key);

        if (featureClass === null) {
            return null;
        }

        return featureClass.feature;
    }

    /**
     * Returns the feature class places number of the location by given feature class key.
     *
     * @param key {string}
     */
    getNextPlacePlacesNumber<K extends keyof TypeNextPlaces>(key: K): number|null
    {
        const featureClass = this.getNextPlace(key);

        if (featureClass === null) {
            return null;
        }

        return featureClass["places-number"];
    }

    /**
     * Returns the feature class places of the location by given feature class key.
     *
     * @param key {string}
     */
    getNextPlacePlaces<K extends keyof TypeNextPlaces>(key: K): LocationWrapper[]|null
    {
        const featureClass = this.getNextPlace(key);

        if (featureClass === null) {
            return null;
        }

        let locations: LocationWrapper[] = [];

        featureClass.places.forEach((location): void => {
            locations.push(new LocationWrapper(location, this.locationApiWrapper));
        });

        return locations;
    }
}

/*
 * Export functions.
 */
export {
    NextPlacesWrapper
}
