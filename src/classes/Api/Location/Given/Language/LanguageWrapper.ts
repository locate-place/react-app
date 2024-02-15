/* Import types. */
import {
    TypeGivenLanguage,
} from "../../../../../types/Types";

/* Import classes. */
import {ApiLocationWrapper} from "../../ApiLocationWrapper";

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

    private readonly apiLocationWrapper: ApiLocationWrapper;

    /**
     * @param language {TypeGivenLanguage}
     * @param apiLocationWrapper {ApiLocationWrapper}
     */
    constructor(language: TypeGivenLanguage, apiLocationWrapper: ApiLocationWrapper)
    {
        this.language = language;
        this.apiLocationWrapper = apiLocationWrapper;
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
