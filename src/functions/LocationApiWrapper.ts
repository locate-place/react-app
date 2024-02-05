import {TypeApiData} from "../types/Types";

class LocationApiWrapper
{
    private apiData: TypeApiData;

    constructor(apiData: TypeApiData)
    {
        this.apiData = apiData;
    }

    getType(): string
    {
        return 'location';
    }
}

/*
 * Export functions.
 */
export {
    LocationApiWrapper
}
