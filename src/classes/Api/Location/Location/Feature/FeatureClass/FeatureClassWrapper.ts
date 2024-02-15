/* Import types. */
import {
    TypeFeatureClass,
} from "../../../../../../types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../../../LocationApiWrapper";

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

    private readonly locationApiWrapper: LocationApiWrapper;

    /**
     * FeatureClassWrapper constructor.
     *
     * @param featureClass {TypeFeatureClass}
     * @param locationApiWrapper {LocationApiWrapper}
     */
    constructor(featureClass: TypeFeatureClass, locationApiWrapper: LocationApiWrapper)
    {
        this.featureClass = featureClass;

        this.locationApiWrapper = locationApiWrapper;
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
