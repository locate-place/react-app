/* Import types. */
import {
    TypeLinksWikipediaNextPlaces, TypeLocation,
    TypeNextPlaces, TypeNextPlacesFeatureClass, TypeNextPlacesFeatureClassConfig, TypeNextPlacesFeatureClassFeature,
} from "../../../types/Types";
import {LocationWrapper} from "../LocationWrapper";

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

    /**
     * NextPlacesWrapper constructor.
     *
     * @param nextPlaces {TypeNextPlaces}
     */
    constructor(nextPlaces: TypeNextPlaces)
    {
        this.nextPlaces = nextPlaces;
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
    getFeatureClasses(): string[]
    {
        return Object.keys(this.nextPlaces);
    }

    /**
     * Returns the feature class of the location by given feature class key.
     *
     * @param key
     */
    getFeatureClass<K extends keyof TypeNextPlaces>(key: K): TypeNextPlacesFeatureClass|null
    {
        return this.nextPlaces[key] ?? null;
    }

    /**
     * Returns the feature class config of the location by given feature class key.
     *
     * @param key {string}
     */
    getFeatureClassConfig<K extends keyof TypeNextPlaces>(key: K): TypeNextPlacesFeatureClassConfig|null
    {
        const featureClass = this.getFeatureClass(key);

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
    getFeatureClassFeature<K extends keyof TypeNextPlaces>(key: K): TypeNextPlacesFeatureClassFeature|null
    {
        const featureClass = this.getFeatureClass(key);

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
    getFeatureClassPlacesNumber<K extends keyof TypeNextPlaces>(key: K): number|null
    {
        const featureClass = this.getFeatureClass(key);

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
    getFeatureClassPlaces<K extends keyof TypeNextPlaces>(key: K): LocationWrapper[]|null
    {
        const featureClass = this.getFeatureClass(key);

        if (featureClass === null) {
            return null;
        }

        let locations: LocationWrapper[] = [];

        featureClass.places.forEach((location): void => {
            locations.push(new LocationWrapper(location));
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
