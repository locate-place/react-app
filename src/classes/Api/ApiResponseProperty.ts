/* Import types. */
import {TypeApiProperties, TypeGivenQueryParsedFeatureClass, TypeGivenQueryParsedFeatureCode} from "../../types/Types";

/* Import classes. */
import {ResultsWrapper} from "./Base/Results/ResultsWrapper";
import {GivenWrapper} from "./Base/Given/GivenWrapper";
import {QueryWrapper} from "./Base/Given/Query/QueryWrapper";
import {CoordinateWrapper} from "./Base/Given/Coordinate/CoordinateWrapper";
import {FeatureCodesWrapper} from "./Base/Given/Query/Parsed/FeatureCodes/FeatureCodesWrapper";
import {FeatureClassesWrapper} from "./Base/Given/Query/Parsed/FeatureClasses/FeatureClassesWrapper";

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
        const givenQueryParsedSearch: string[]|null = this.getGiven()?.getQuery()?.getParsed().getSearch() ?? null

        if (givenQueryParsedSearch === null) {
            return null;
        }

        return givenQueryParsedSearch.join(' ');
    }

    /**
     * Returns if the given query parsed coordinate exists.
     */
    hasGivenQueryParsedCoordinate(): boolean
    {
        return this.getGiven()?.getQuery()?.getParsed().hasCoordinate() ?? false;
    }

    /**
     * Returns the given query parsed coordinate string.
     */
    getGivenQueryParsedCoordinate(): string|null
    {
        if (!this.getGiven()?.getQuery()?.getParsed().getCoordinate()) {
            return null;
        }

        const latitude = this.getGiven()?.getQuery()?.getParsed().getCoordinate()?.getParsed().getLatitude().getDMS() ?? null;
        const longitude = this.getGiven()?.getQuery()?.getParsed().getCoordinate()?.getParsed().getLongitude().getDMS() ?? null;

        return latitude && longitude ? latitude + ', ' + longitude : null;
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
     * Returns if the given query parsed feature codes exist.
     */
    hasGivenQueryParsedFeatureClasses(): boolean
    {
        return this.getGiven()?.getQuery()?.getParsed().hasFeatureClasses() ?? false;
    }

    /**
     * Returns the given query parsed feature codes wrapper.
     */
    getGivenQueryParsedFeatureClasses(): FeatureClassesWrapper|null
    {
        return this.getGiven()?.getQuery()?.getParsed().getFeatureClasses() ?? null;
    }

    /**
     * Returns the given query parsed feature codes array.
     */
    getGivenQueryParsedFeatureClassesArray(): TypeGivenQueryParsedFeatureClass[]
    {
        return this.getGiven()?.getQuery()?.getParsed().getFeatureClasses()?.get() ?? [];
    }

    hasLimit(): boolean
    {
        return this.getGiven()?.hasLimit() ?? false;
    }

    getLimit(): number|null
    {
        return this.getGiven()?.getLimit() ?? null;
    }

    hasDistance(): boolean
    {
        return this.getGiven()?.hasDistance() ?? false;
    }

    getDistance(): number|null
    {
        return this.getGiven()?.getDistance() ?? null;
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
    getResultsCurrent(): number
    {
        return this.getResults()?.getResultsCurrent() ?? 0;
    }

    /**
     * Returns the total number of results from api response.
     */
    getResultsTotal(): number
    {
        return this.getResults()?.getResultsTotal() ?? 0;
    }

    /**
     * Returns the current page of the api response.
     */
    getPageCurrent(): number
    {
        return this.getResults()?.getPageCurrent() ?? 0;
    }

    /**
     * Returns the number of elements of a page.
     */
    getPageSize(): number
    {
        return this.getResults()?.getPageSize() ?? 0;
    }

    /**
     * Returns the number of the first element of the current page.
     */
    getNumberItemFirst(): number
    {
        return (this.getPageCurrent() - 1) * this.getPageSize() + 1;
    }

    /**
     * Returns the number of given current element of the current page.
     *
     * @param current
     */
    getNumberItemCurrent(current: number)
    {
        if (current <= 0) {
            current = 1;
        }

        return (this.getPageCurrent() - 1) * this.getPageSize() + current;
    }

    /**
     * Returns the number of the last element of the current page.
     */
    getNumberItemLast(): number
    {
        const pageSize = this.getPageSize();
        const numberLastItem = (this.getPageCurrent() - 1) * pageSize + pageSize;

        const resultsTotal = this.getResultsTotal();

        if (numberLastItem <= resultsTotal) {
            return numberLastItem;
        }

        return resultsTotal;
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
