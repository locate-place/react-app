/* Import types. */
import {
    TypeFeature,
    TypeFeatureClass,
    TypeFeatureCode,
} from "../../../types/Types";

class FeatureWrapper
{
    private readonly feature: TypeFeature;

    /**
     * LocationApiWrapper constructor.
     *
     * @param feature {TypeFeature}
     */
    constructor(feature: TypeFeature)
    {
        this.feature = feature;
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
    getClass(): TypeFeatureClass
    {
        return {
            'code': this.feature['class'],
            'name': this.feature['class-name'],
        };
    }

    /**
     * Returns the feature code of the location.
     */
    getCode(): TypeFeatureCode
    {
        return {
            'code': this.feature['code'],
            'name': this.feature['code-name'],
        };
    }
}

/*
 * Export functions.
 */
export {
    FeatureWrapper
}
