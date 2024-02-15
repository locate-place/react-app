/* Import types. */
import {
    TypeFeatureCode,
} from "../../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../../ApiLocationWrapper";

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

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * @param featureCode {TypeFeatureCode}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(featureCode: TypeFeatureCode, apiLocationWrapper: ApiLocationWrapper)
    {
        this.featureCode = featureCode;

        this.apiLocationWrapper = apiLocationWrapper;
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
