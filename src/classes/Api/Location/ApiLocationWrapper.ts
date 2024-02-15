/* Import types. */
import {
    TypeApiData,
    TypeDataLicence,
    TypePerformance,
    TypeLocation,
    typeLocation,
    typeLocations
} from "../../../types/Types";

/* Import classes. */
import {LocationWrapper} from "./Location/LocationWrapper";
import {LocationsWrapper} from "./Locations/LocationsWrapper";
import {GivenWrapper} from "../Base/Given/GivenWrapper";
import {ResultsWrapper} from "../Base/Results/ResultsWrapper";

/**
 * Class LocationApiWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class ApiLocationWrapper
{
    private readonly apiData: TypeApiData;

    /**
     * LocationApiWrapper constructor.
     *
     * @param apiData {TypeApiData}
     */
    constructor(apiData: TypeApiData)
    {
        this.apiData = apiData;
    }

    /**
     * Returns the type of the api data is an array.
     */
    isLocations(): boolean
    {
        return Array.isArray(this.apiData.data);
    }

    /**
     * Returns the type of the api data is not an array.
     */
    isLocation(): boolean
    {
        return !Array.isArray(this.apiData.data);
    }

    /**
     * Returns the type of the api data.
     */
    getType(): string
    {
        return this.isLocations() ? typeLocations : typeLocation;
    }

    /**
     * Returns the data license.
     */
    getDataLicence(): TypeDataLicence
    {
        return this.apiData["data-licence"];
    }

    /**
     * Returns the time taken value.
     */
    getTimeTaken(): string
    {
        return this.apiData["time-taken"];
    }

    /**
     * Returns the memory taken value.
     */
    getMemoryTaken(): string
    {
        return this.apiData["memory-taken"];
    }

    /**
     * Returns the performance date.
     */
    getPerformance(): TypePerformance
    {
        return this.apiData.performance;
    }

    /**
     * Returns if the result property exists (listed, total, current page, etc.).
     */
    hasResults(): boolean
    {
        if (!this.isLocations()) {
            return false;
        }

        return !!this.apiData.results;
    }

    /**
     * Returns the result data (listed, total, current page, etc.).
     */
    getResults(): ResultsWrapper|null
    {
        if (this.isLocations() && this.apiData.results !== undefined) {
            return new ResultsWrapper(this.apiData.results);
        }

        return null;
    }

    /**
     * Returns the data.
     */
    getData(): TypeLocation|Array<TypeLocation>
    {
        return this.apiData.data;
    }

    /**
     * Returns the current location if it is a location search. Otherwise, null.
     */
    getLocation(): LocationWrapper
    {
        if (this.isLocation() && !Array.isArray(this.apiData.data)) {
            return new LocationWrapper(this.apiData.data, this);
        }

        throw new TypeError("The api response is not a single location response.");
    }

    /**
     * Returns if the current locations if the data is a list search and contains data.
     */
    hasLocations(): boolean
    {
        return !this.isLocation() && Array.isArray(this.apiData.data);
    }

    /**
     * Returns the current locations if the data is a list search. Otherwise, null.
     */
    getLocations(): LocationsWrapper|null
    {
        if (!this.isLocation() && Array.isArray(this.apiData.data)) {
            return new LocationsWrapper(this.apiData.data, this);
        }

        return null;
    }

    /**
     * Returns the given object.
     */
    getGiven(): GivenWrapper
    {
        return new GivenWrapper(this.apiData.given);
    }

    /**
     * Returns if the request is valid.
     */
    getValid(): boolean
    {
        return this.apiData.valid;
    }

    /**
     * Returns the date of the api data.
     */
    getDate(): string
    {
        return this.apiData.date;
    }

    /**
     * Returns the version of the API.
     */
    getVersion(): string
    {
        return this.apiData.version;
    }
}

/*
 * Export functions.
 */
export {
    ApiLocationWrapper
}
