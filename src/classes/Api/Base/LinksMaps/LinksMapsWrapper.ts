/* Import types. */
import {
    TypeLinksMaps,
} from "../../../../types/Types";

/**
 * Class LinksWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-17)
 * @since 0.1.0 (2024-02-17) First version.
 */
class LinksMapsWrapper
{
    private readonly links: TypeLinksMaps;

    /**
     * @param links {TypeLinksMaps}
     */
    constructor(links: TypeLinksMaps)
    {
        this.links = links;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeLinksMaps
    {
        return this.links;
    }

    /**
     * Returns the google link of the location.
     */
    getGoogle(): string
    {
        return this.links.google;
    }

    /**
     * Returns the open street map link of the location.
     */
    getOpenStreetMap(): string
    {
        return this.links.openstreetmap;
    }
}

/*
 * Export functions.
 */
export {
    LinksMapsWrapper
}
