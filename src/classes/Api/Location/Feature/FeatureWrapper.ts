/* Import types. */
import {
    TypeFeature,
} from "../../../../types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../../LocationApiWrapper";
import {FeatureClassWrapper} from "./FeatureClass/FeatureClassWrapper";
import {FeatureCodeWrapper} from "./FeatureCode/FeatureCodeWrapper";

/**
 * Class FeatureWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class FeatureWrapper
{
    private readonly feature: TypeFeature;

    private readonly locationApiWrapper: LocationApiWrapper;

    /**
     * FeatureWrapper constructor.
     *
     * @param feature {TypeFeature}
     * @param locationApiWrapper {LocationApiWrapper}
     */
    constructor(feature: TypeFeature, locationApiWrapper: LocationApiWrapper)
    {
        this.feature = feature;

        this.locationApiWrapper = locationApiWrapper;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeFeature
    {
        return this.feature;
    }

    /**
     * Returns the feature class of the location.
     */
    getClass(): FeatureClassWrapper
    {
        return new FeatureClassWrapper({
            'code': this.feature['class'],
            'name': this.feature['class-name'],
        }, this.locationApiWrapper);
    }

    /**
     * Returns the feature code of the location.
     */
    getCode(): FeatureCodeWrapper
    {
        return new FeatureCodeWrapper({
            'code': this.feature['code'],
            'name': this.feature['code-name'],
        }, this.locationApiWrapper);
    }
}

/*
 * Export functions.
 */
export {
    FeatureWrapper
}
