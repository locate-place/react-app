/* Import types. */
import {
    TypeLinks, TypeLinksMaps,
    TypeLinksWikipediaLocations, TypeLinksWikipediaNextPlaces,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";

/**
 * Class LinksWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-11)
 * @since 0.1.0 (2024-02-11) First version.
 */
class LinksWrapper
{
    private readonly links: TypeLinks;

    private readonly apiLocationWrapper: ApiLocationWrapper|null;

    /**
     * @param links {TypeLinks}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(links: TypeLinks, apiLocationWrapper: ApiLocationWrapper|null)
    {
        this.links = links;

        this.apiLocationWrapper = apiLocationWrapper;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeLinks
    {
        return this.links;
    }

    /**
     * Returns if the wikipedia link assigned to the location exists.
     */
    hasWikipedia(): boolean
    {
        return !!this.links.wikipedia?.this;
    }

    /**
     * Returns the wikipedia link assigned to the location.
     */
    getWikipedia(): string|null
    {
        if (!this.links.wikipedia?.this) {
            return null;
        }

        return this.links.wikipedia.this;
    }

    /**
     * Returns the wikipedia location link from given key.
     *
     * @param key {string}
     */
    getWikipediaLocation<K extends keyof TypeLinksWikipediaLocations>(key: K): string|null
    {
        const locations = this.links.wikipedia?.locations ?? null;

        if (locations === null) {
            return null;
        }

        const location = locations[key as keyof TypeLinksWikipediaLocations] ?? null;

        if (location === null) {
            return null;
        }

        return location;
    }

    /**
     * Returns the wikipedia next places link from given key.
     *
     * @param key {string}
     * @param index {number}
     */
    getWikipediaNextLocation<K extends keyof TypeLinksWikipediaNextPlaces>(key: K, index: number): string|null
    {
        const nextPlaces = this.links.wikipedia?.["next-places"] ?? null;

        if (nextPlaces === null) {
            return null;
        }

        const nextPlacesLinks = nextPlaces[key as keyof TypeLinksWikipediaNextPlaces] ?? null;

        if (nextPlacesLinks === null) {
            return null;
        }

        let link = null;

        nextPlacesLinks.forEach((nextPlacesLink) => {
            if (nextPlacesLink.number === index) {
                link = nextPlacesLink.link;
            }
        });

        return link;
    }

    /**
     * Returns a maps link by the given key.
     */
    getMaps<K extends keyof TypeLinksMaps>(key: K): string|null
    {
        const maps = this.links.maps ?? null;

        if (maps === null) {
            return null;
        }

        const link = maps[key as keyof TypeLinksMaps] ?? null;

        if (link === null) {
            return null;
        }

        return link;
    }
}

/*
 * Export functions.
 */
export {
    LinksWrapper
}
