/* Import types. */
import {
    TypeFeature,
    TypeFeatureClass,
    TypeFeatureCode,
} from "../../../types/Types";

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

    /**
     * FeatureWrapper constructor.
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
