import {
    TypeApiData,
    TypeDataLicence,
    TypePerformance,
    typeLocation,
    typeLocations, TypeResults
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
     * Returns the type of the api data.
     */
    getType(): string
    {
        return Array.isArray(this.apiData.data) ? typeLocations : typeLocation;
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

    getResults(): TypeResults|null
    {
        if (this.isLocations() && this.apiData.results !== undefined) {
            return this.apiData.results;
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
