import {
    TypeApiData,
    TypeDataLicence,
    TypePerformance,
    typeLocation,
    typeLocations, TypeResults, TypeLocation
} from "../types/Types";

class LocationApiWrapper
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
     * Returns the result data.
     */
    getResults(): TypeResults|null
    {
        if (this.isLocations() && this.apiData.results !== undefined) {
            return this.apiData.results;
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
    getLocation(): TypeLocation|null
    {
        if (this.isLocation() && !Array.isArray(this.apiData.data)) {
            return this.apiData.data;
        }

        return null;
    }

    /**
     * Returns the current locations if the data is a list search. Otherwise, null.
     */
    getLocations(): Array<TypeLocation>|null
    {
        if (this.isLocation() && Array.isArray(this.apiData.data)) {
            return this.apiData.data;
        }

        return null;
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
    LocationApiWrapper
}