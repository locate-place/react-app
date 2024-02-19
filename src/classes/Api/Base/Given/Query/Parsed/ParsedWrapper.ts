/* Import types. */
import {
    TypeGivenQueryParsed,
} from "../../../../../../types/Types";
import {CoordinateWrapper} from "../../Coordinate/CoordinateWrapper";
import {FeatureCodesWrapper} from "./FeatureCodes/FeatureCodesWrapper";
import {FeatureClassesWrapper} from "./FeatureClasses/FeatureClassesWrapper";

/**
 * Class ParsedWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-16)
 * @since 0.1.0 (2024-02-16) First version.
 */
class ParsedWrapper
{
    private readonly parsed: TypeGivenQueryParsed;

    /**
     * @param parsed {TypeGivenQueryParsed}
     */
    constructor(parsed: TypeGivenQueryParsed)
    {
        this.parsed = parsed;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGivenQueryParsed
    {
        return this.parsed;
    }

    /**
     * Returns the type of parsed data.
     */
    getType(): string
    {
        return this.parsed.type;
    }

    /**
     * Returns if the geoname id of parsed data exists.
     */
    hasGeonameId(): boolean
    {
        return !!this.parsed["geoname-id"];
    }

    /**
     * Returns the geoname id of parsed data.
     */
    getGeonameId(): number|null
    {
        return this.parsed["geoname-id"] ?? null;
    }

    /**
     * Returns if the search string of parsed data exists.
     */
    hasSearch(): boolean
    {
        return !!this.parsed.search;
    }

    /**
     * Returns the search string of parsed data.
     */
    getSearch(): string|null
    {
        return this.parsed.search ?? null;
    }

    /**
     * Returns if coordinate is set.
     */
    hasCoordinate(): boolean
    {
        return !!this.parsed.coordinate;
    }

    /**
     * Returns coordinate wrapper.
     */
    getCoordinate(): CoordinateWrapper|null
    {
        return this.parsed.coordinate? new CoordinateWrapper(this.parsed.coordinate) : null;
    }

    /**
     * Returns if feature codes are set.
     */
    hasFeatureCodes(): boolean
    {
        return !!this.parsed["feature-codes"];
    }

    /**
     * Returns feature codes wrapper.
     */
    getFeatureCodes(): FeatureCodesWrapper|null
    {
        return this.parsed["feature-codes"] ? new FeatureCodesWrapper(this.parsed["feature-codes"]) : null;
    }

    /**
     * Returns if feature classes are set.
     */
    hasFeatureClasses(): boolean
    {
        return !!this.parsed["feature-classes"];
    }

    /**
     * Returns feature codes wrapper.
     */
    getFeatureClasses(): FeatureClassesWrapper|null
    {
        return this.parsed["feature-classes"] ? new FeatureClassesWrapper(this.parsed["feature-classes"]) : null;
    }
}

/*
 * Export functions.
 */
export {
    ParsedWrapper
}
