/* Import types. */
import {
    TypeGivenLanguage,
} from "../../../../../types/Types";

/**
 * Class LanguageWrapper
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-02-15)
 * @since 0.1.0 (2024-02-15) First version.
 */
class LanguageWrapper
{
    private readonly language: TypeGivenLanguage;

    /**
     * @param language {TypeGivenLanguage}
     */
    constructor(language: TypeGivenLanguage)
    {
        this.language = language;
    }

    /**
     * Returns the full location data of the location.
     */
    get(): TypeGivenLanguage
    {
        return this.language;
    }
}

/*
 * Export functions.
 */
export {
    LanguageWrapper
}
