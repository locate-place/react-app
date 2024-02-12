/* Import types. */
import {
    TypeFeatureCode,
} from "../../../../types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../../../LocationApiWrapper";

/**
 * Class FeatureCodeWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-12)
 * @since 0.1.0 (2024-02-12) First version.
 */
class FeatureCodeWrapper
{
    private readonly featureCode: TypeFeatureCode;

    private readonly locationApiWrapper: LocationApiWrapper;

    /**
     * FeatureCodeWrapper constructor.
     *
     * @param featureCode {TypeFeatureCode}
     * @param locationApiWrapper {LocationApiWrapper}
     */
    constructor(featureCode: TypeFeatureCode, locationApiWrapper: LocationApiWrapper)
    {
        this.featureCode = featureCode;

        this.locationApiWrapper = locationApiWrapper;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeFeatureCode
    {
        return this.featureCode;
    }

    /**
     * Returns the code of the feature code.
     */
    getCode(): string
    {
        return this.featureCode.code;
    }

    /**
     * Returns the name of the feature code.
     */
    getName(): string
    {
        return this.featureCode.name;
    }
}

/*
 * Export functions.
 */
export {
    FeatureCodeWrapper
}
