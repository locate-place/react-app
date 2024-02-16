/* Import types. */
import {
    TypeFeature,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";
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

    private readonly apiLocationWrapper: ApiLocationWrapper|null;

    /**
     * @param feature {TypeFeature}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(feature: TypeFeature, apiLocationWrapper: ApiLocationWrapper|null)
    {
        this.feature = feature;

        this.apiLocationWrapper = apiLocationWrapper;
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
        }, this.apiLocationWrapper);
    }

    /**
     * Returns the feature code of the location.
     */
    getCode(): FeatureCodeWrapper
    {
        return new FeatureCodeWrapper({
            'code': this.feature['code'],
            'name': this.feature['code-name'],
        }, this.apiLocationWrapper);
    }
}

/*
 * Export functions.
 */
export {
    FeatureWrapper
}
