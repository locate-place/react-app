/* Import types. */
import {
    TypeGivenQueryParsedFeatureCode,
} from "../../../../../../../types/Types";

/**
 * Class FeatureCodesWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class FeatureCodesWrapper
{
    private readonly featureCodes: TypeGivenQueryParsedFeatureCode[];

    /**
     * @param featureCodes {TypeGivenQueryParsedFeatureCode[]}
     */
    constructor(featureCodes: TypeGivenQueryParsedFeatureCode[])
    {
        this.featureCodes = featureCodes;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGivenQueryParsedFeatureCode[]
    {
        return this.featureCodes;
    }
}

/*
 * Export functions.
 */
export {
    FeatureCodesWrapper
}
