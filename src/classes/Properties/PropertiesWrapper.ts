/* Import types. */
import {
    TypeProperties
} from "../../types/Types";

/* Import classes. */
import {LocationApiWrapper} from "../LocationApiWrapper";



/**
 * Class LocationWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class PropertiesWrapper
{
    private readonly properties: TypeProperties;

    private readonly locationApiWrapper: LocationApiWrapper;

    /**
     * LocationApiWrapper constructor.
     *
     * @param properties {TypeProperties}
     * @param locationApiWrapper {LocationApiWrapper}
     */
    constructor(properties: TypeProperties, locationApiWrapper: LocationApiWrapper)
    {
        this.properties = properties;
        this.locationApiWrapper = locationApiWrapper;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeProperties
    {
        return this.properties;
    }
}

/*
 * Export functions.
 */
export {
    PropertiesWrapper
}
