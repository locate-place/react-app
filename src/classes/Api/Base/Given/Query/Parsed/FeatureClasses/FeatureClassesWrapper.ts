/* Import types. */
import {
    TypeGivenQueryParsedFeatureClass,
} from "../../../../../../../types/Types";

/**
 * Class FeatureCodesWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class FeatureClassesWrapper
{
    private readonly featureClasses: TypeGivenQueryParsedFeatureClass[];

    /**
     * @param featureClasses {TypeGivenQueryParsedFeatureClass[]}
     */
    constructor(featureClasses: TypeGivenQueryParsedFeatureClass[])
    {
        this.featureClasses = featureClasses;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGivenQueryParsedFeatureClass[]
    {
        return this.featureClasses;
    }
}

/*
 * Export functions.
 */
export {
    FeatureClassesWrapper
}
