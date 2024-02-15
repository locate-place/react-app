/* Import types. */
import {
    TypeNextPlacesConfig,
    TypeNextPlacesConfigConfig,
    TypeNextPlacesConfigConfigNextPlace,
    TypeNextPlacesConfigEndpoint,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";

/**
 * Class NextPlacesConfigWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class NextPlacesConfigWrapper
{
    private readonly nextPlacesConfig: TypeNextPlacesConfig;

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * @param nextPlacesConfig {TypeNextPlacesConfig}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(nextPlacesConfig: TypeNextPlacesConfig, apiLocationWrapper: ApiLocationWrapper)
    {
        this.nextPlacesConfig = nextPlacesConfig;

        this.apiLocationWrapper = apiLocationWrapper;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeNextPlacesConfig
    {
        return this.nextPlacesConfig;
    }

    /**
     * Returns the config of the next places config.
     */
    getConfig(): TypeNextPlacesConfigConfig
    {
        return this.nextPlacesConfig.config;
    }

    getConfigKeysNextPlaces(): string[]
    {
        return Object.keys(this.nextPlacesConfig.config);
    }

    /**
     * Returns if the config given by given next place key exist.
     *
     * @param key {string}
     */
    hasConfigByNexPlace(key: string): boolean
    {
        if (!this.nextPlacesConfig.config[key]) {
            return false;
        }

        return true;
    }

    /**
     * Returns the config by given next place key.
     *
     * @param key {string}
     */
    getConfigByNexPlace(key: string): TypeNextPlacesConfigConfigNextPlace|null
    {
        if (!this.nextPlacesConfig.config[key]) {
            return null;
        }

        return this.nextPlacesConfig.config[key];
    }

    /**
     * Returns the endpoints of the next places config.
     */
    getEndpoints(): TypeNextPlacesConfigEndpoint
    {
        return this.nextPlacesConfig.endpoints;
    }

    /**
     * Returns the endpoint by given key.
     *
     * @param key
     */
    getEndpoint<K extends keyof TypeNextPlacesConfigEndpoint>(key: K): string
    {
        return this.nextPlacesConfig.endpoints[key];
    }
}

/*
 * Export functions.
 */
export {
    NextPlacesConfigWrapper
}
