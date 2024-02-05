import {TypeApiData, TypeDataLicence} from "../types/Types";

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
     * Returns the data license.
     */
    getDataLicence(): TypeDataLicence
    {
        return this.apiData["data-licence"];
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
