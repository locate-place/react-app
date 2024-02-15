import {TFunction} from "i18next";

/* Import types. */
import {
    TypeNextPlacesFeatureClass,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";
import {getLocale} from "../../../../../functions/i18n";
import {LocationWrapper} from "../LocationWrapper";

/**
 * Class NextPlaceWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-12)
 * @since 0.1.0 (2024-02-12) First version.
 */
class NextPlaceWrapper
{
    private readonly nextPlace: TypeNextPlacesFeatureClass;

    private readonly locationApiWrapper: ApiLocationWrapper;

    /**
     * NextPlaceWrapper constructor.
     *
     * @param nextPlace {TypeNextPlacesFeatureClass}
     * @param locationApiWrapper {ApiLocationWrapper}
     */
    constructor(nextPlace: TypeNextPlacesFeatureClass, locationApiWrapper: ApiLocationWrapper)
    {
        this.nextPlace = nextPlace;

        this.locationApiWrapper = locationApiWrapper;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeNextPlacesFeatureClass
    {
        return this.nextPlace;
    }

    /**
     * Returns feature class code.
     */
    getFeatureClassCode(): string
    {
        return this.nextPlace.feature.class;
    }

    /**
     * Returns feature class name.
     */
    getFeatureClassName(): string
    {
        return this.nextPlace.feature["class-name"];
    }

    /**
     * Returns if places are available.
     */
    hasPlaces(): boolean
    {
        return this.nextPlace.places.length > 0;
    }

    /**
     * Returns the places for this next place area.
     */
    getPlaces(): LocationWrapper[]
    {
        let places: LocationWrapper[] = [];

        this.nextPlace.places.forEach((location): void => {
            places.push(new LocationWrapper(location, this.locationApiWrapper));
        });

        return places;
    }

    /**
     * Returns next place title.
     *
     * @param t
     */
    getTitle(t: TFunction<"translation", undefined>): string
    {
        const name = this.getFeatureClassName();

        return t('TEXT_NEXT_PLACE_TITLE', {name});
    }

    /**
     * Returns the config coordinate decimal string.
     *
     * @param separator
     */
    getConfigCoordinateDecimal(separator: string = ', '): string
    {
        return this.nextPlace.config.coordinate.latitude.decimal + separator + this.nextPlace.config.coordinate.longitude.decimal;
    }

    /**
     * Returns the config coordinate dms string.
     *
     * @param separator
     */
    getConfigCoordinateDms(separator: string = ', '): string
    {
        return this.nextPlace.config.coordinate.latitude.dms + separator + this.nextPlace.config.coordinate.longitude.dms;
    }

    /**
     * Returns the next place config coordinate type.
     */
    getConfigCoordinateType(): string
    {
        return this.nextPlace.config['coordinate-type'];
    }

    /**
     * Returns config distance meter.
     */
    getConfigDistanceMeter(): number
    {
        return this.nextPlace.config["distance-meter"];
    }

    /**
     * Returns config distance text.
     *
     * @param t
     */
    getConfigDistanceText(t: TFunction<"translation", undefined>): string
    {
        const distanceMeter = this.getConfigDistanceMeter();

        const locale = getLocale();

        const distance = (distanceMeter / 1000).toLocaleString(locale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return t('TEXT_NEXT_PLACE_DISTANCE_TEXT', {distance});
    }

    /**
     * Returns the config limitation value.
     */
    getConfigLimitation(): number
    {
        return this.nextPlace.config.limit;
    }

    /**
     * Returns the config limitation text.
     *
     * @param t
     */
    getConfigLimitationText(t: TFunction<"translation", undefined>): string
    {
        const limitation = this.getConfigLimitation();

        return t('TEXT_NEXT_PLACE_LIMITATION_TEXT', {limitation});
    }

    /**
     * Returns the config distance and direction text.
     *
     * @param t
     * @param showForAll
     */
    getConfigDistanceAndDirectionText(t: TFunction<"translation", undefined>, showForAll: boolean = false): string
    {
        const coordinate: string = this.getConfigCoordinateDms();

        const i18nLocation = showForAll ? 'TEXT_NEXT_PLACE_DISTANCE_HINT_LOCATION_TEXT_ALL' : 'TEXT_NEXT_PLACE_DISTANCE_HINT_LOCATION_TEXT';
        const i18nQuery = showForAll ? 'TEXT_NEXT_PLACE_DISTANCE_HINT_QUERY_TEXT_ALL' : 'TEXT_NEXT_PLACE_DISTANCE_HINT_QUERY_TEXT';

        switch (this.nextPlace.config["coordinate-type"]) {
            case 'location':
                const location = this.nextPlace.config.location.name;
                return t(i18nLocation, {location, coordinate});

            default:
                return t(i18nQuery, {coordinate});
        }
    }
}

/*
 * Export functions.
 */
export {
    NextPlaceWrapper
}
