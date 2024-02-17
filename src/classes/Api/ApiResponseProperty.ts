/* Import types. */
import {TypeApiProperties, TypeGivenQueryParsedFeatureCode} from "../../types/Types";

/* Import classes. */
import {ResultsWrapper} from "./Base/Results/ResultsWrapper";
import {GivenWrapper} from "./Base/Given/GivenWrapper";
import {QueryWrapper} from "./Base/Given/Query/QueryWrapper";
import {CoordinateWrapper} from "./Base/Given/Coordinate/CoordinateWrapper";
import {FeatureCodesWrapper} from "./Base/Given/Query/Parsed/FeatureCodes/FeatureCodesWrapper";

/**
 * Class ApiResponseProperty
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class ApiResponseProperty
{
    private readonly properties: TypeApiProperties;

    /**
     * ApiResponseProperty constructor.
     *
     * @param properties {TypeApiProperties}
     */
    constructor(properties: TypeApiProperties)
    {
        this.properties = properties;
    }

    /**
     * Returns the given properties.
     */
    get(): TypeApiProperties
    {
        return this.properties;
    }

    getApiUrl(): string
    {
        return this.properties["api-url"];
    }

    getDate(): string|null
    {
        return this.properties.date || null;
    }

    getMemoryTaken(): string|null
    {
        return this.properties["memory-taken"] ?? null;
    }

    getName(): string|null
    {
        return this.properties.name ?? null;
    }

    getPath(): string
    {
        return this.properties.path;
    }

    getTimeTaken(): string|null
    {
        return this.properties["time-taken"] ?? null;
    }

    getType(): string
    {
        return this.properties.type;
    }

    getValid(): boolean
    {
        return this.properties.valid;
    }

    getVersion(): string|null
    {
        return this.properties.version ?? null;
    }



    /**
     * Returns if the given property exists.
     */
    hasGiven(): boolean
    {
        return !!this.properties.given;
    }

    /**
     * Returns the given property.
     */
    getGiven(): GivenWrapper|null
    {
        return this.properties.given ? new GivenWrapper(this.properties.given) : null;
    }

    /**
     * Returns if the given query exists.
     */
    hasGivenQuery(): boolean
    {
        return this.getGiven()?.hasQuery() ?? false;
    }

    /**
     * Returns the given query.
     */
    getGivenQuery(): QueryWrapper|null
    {
        return this.getGiven()?.getQuery() ?? null;
    }

    /**
     * Returns the given query parsed type.
     */
    getGivenQueryParsedType(): string|null
    {
        return this.getGiven()?.getQuery()?.getParsed().getType() ?? null;
    }

    /**
     * Returns the given query parsed type (translation key).
     */
    getGivenQueryParsedTypeTranslationKey(): string
    {
        const givenQueryParsedType = this.getGivenQueryParsedType();

        if (givenQueryParsedType === null) {
            return 'TEXT_ACTION_SEARCH_METRICS_SEARCH_UNKNOWN';
        }

        return 'TEXT_ACTION_SEARCH_METRICS_' + givenQueryParsedType.replaceAll('-', '_').toUpperCase();
    }

    /**
     * Returns the given query raw string.
     */
    getGivenQueryRaw(): string|null
    {
        return this.getGiven()?.getQuery()?.getRaw() ?? null;
    }

    /**
     * Returns if the given query parsed search exists.
     */
    hasGivenQueryParsedSearch(): boolean
    {
        return this.getGiven()?.getQuery()?.getParsed().hasSearch() ?? false;
    }

    /**
     * Returns the given query parsed search string.
     */
    getGivenQueryParsedSearch(): string|null
    {
        return this.getGiven()?.getQuery()?.getParsed().getSearch() ?? null;
    }

    /**
     * Returns if the given coordinate wrapper exists.
     */
    hasGivenCoordinate(): boolean
    {
        return this.getGiven()?.hasCoordinate() ?? false;
    }

    /**
     * Returns the given coordinate wrapper.
     */
    getGivenCoordinate(): CoordinateWrapper|null
    {
        return this.getGiven()?.getCoordinate() ?? null;
    }

    /**
     * Returns the given coordinate parsed latitude dms string.
     */
    getGivenCoordinateParsedLatitudeDms(): string|null
    {
        return this.getGiven()?.getCoordinate()?.getParsed().getLatitude().getDMS() ?? null;
    }

    /**
     * Returns the given coordinate parsed longitude dms string.
     */
    getGivenCoordinateParsedLongitudeDms(): string|null
    {
        return this.getGiven()?.getCoordinate()?.getParsed().getLongitude().getDMS() ?? null;
    }

    /**
     * Returns if the given query parsed geoname id exists.
     */
    hasGivenQueryParsedGeonameId(): boolean
    {
        return this.getGiven()?.getQuery()?.getParsed().hasGeonameId() ?? false;
    }

    /**
     * Returns the given query parsed geoname id number.
     */
    getGivenQueryParsedGeonameId(): number|null
    {
        return this.getGiven()?.getQuery()?.getParsed().getGeonameId() ?? null;
    }

    /**
     * Returns if the given query parsed feature codes exist.
     */
    hasGivenQueryParsedFeatureCodes(): boolean
    {
        return this.getGiven()?.getQuery()?.getParsed().hasFeatureCodes() ?? false;
    }

    /**
     * Returns the given query parsed feature codes wrapper.
     */
    getGivenQueryParsedFeatureCodes(): FeatureCodesWrapper|null
    {
        return this.getGiven()?.getQuery()?.getParsed().getFeatureCodes() ?? null;
    }

    /**
     * Returns the given query parsed feature codes array.
     */
    getGivenQueryParsedFeatureCodesArray(): TypeGivenQueryParsedFeatureCode[]
    {
        return this.getGiven()?.getQuery()?.getParsed().getFeatureCodes()?.get() ?? [];
    }



    /**
     * Returns if the api response contains any result.
     */
    hasResults(): boolean
    {
        return !!this.properties.results;
    }

    /**
     * Returns the result wrapper.
     */
    getResults(): ResultsWrapper|null
    {
        return this.properties.results ? new ResultsWrapper(this.properties.results) : null;
    }

    /**
     * Returns the result of the api response.
     */
    getResultsResults(): number
    {
        return this.getResults()?.getResults() ?? 0;
    }

    /**
     * Returns the total number of results from api response.
     */
    getResultsTotal(): number
    {
        return this.getResults()?.getTotal() ?? 0;
    }

    /**
     * Returns the current page of the api response.
     */
    getResultsPage(): number
    {
        return this.getResults()?.getPage() ?? 0;
    }



    /**
     * Returns if own position is available from api query.
     */
    isOwnPosition(): boolean
    {
        return !!this.properties.given && !!this.properties.given.coordinate;
    }

    /**
     * Returns the own position from api response as string.
     *
     */
    getOwnPosition(): string|null
    {
        return !!this.properties.given && !!this.properties.given.coordinate ?
            (this.properties.given.coordinate.parsed.latitude.dms + ', ' + this.properties.given.coordinate.parsed.longitude.dms) :
            null
            ;
    }
}

/*
 * Export functions.
 */
export {
    ApiResponseProperty
}
