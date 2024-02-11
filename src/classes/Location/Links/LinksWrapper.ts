/* Import types. */
import {
    TypeLinks,
    TypeLinksWikipediaLocations, TypeLinksWikipediaNextPlaces,
} from "../../../types/Types";

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

    /**
     * LinksWrapper constructor.
     *
     * @param links {TypeLinks}
     */
    constructor(links: TypeLinks)
    {
        this.links = links;
    }

    /**
     * Returns the feature of the location.
     */
    get(): TypeLinks
    {
        return this.links;
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
    getWikipediaLocation(key: string): string|null
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
    getWikipediaNextLocation(key: string, index: number): string|null
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
}

/*
 * Export functions.
 */
export {
    LinksWrapper
}
