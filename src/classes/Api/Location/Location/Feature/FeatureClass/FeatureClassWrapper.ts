/* Import types. */
import {
    TypeFeatureClass,
} from "../../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../../ApiLocationWrapper";

/**
 * Class FeatureClassWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-12)
 * @since 0.1.0 (2024-02-12) First version.
 */
class FeatureClassWrapper
{
    private readonly featureClass: TypeFeatureClass;

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * FeatureClassWrapper constructor.
     *
     * @param featureClass {TypeFeatureClass}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(featureClass: TypeFeatureClass, apiLocationWrapper: ApiLocationWrapper)
    {
        this.featureClass = featureClass;

        this.apiLocationWrapper = apiLocationWrapper;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeFeatureClass
    {
        return this.featureClass;
    }

    /**
     * Returns the code of the feature class.
     */
    getCode(): string
    {
        return this.featureClass.code;
    }

    /**
     * Returns the name of the feature class.
     */
    getName(): string
    {
        return this.featureClass.name;
    }
}

/*
 * Export functions.
 */
export {
    FeatureClassWrapper
}
