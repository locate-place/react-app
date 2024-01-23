/**
 * Removes all non-visible characters from string.
 *
 * @param inputString
 */
const trimString = (inputString: string): string =>
{
    return inputString.replace(/^\s+|\s+$/g, '');
}

/**
 * Adds soft hyphens to the given string according to some rules.
 *
 * @param text
 */
const addSoftHyphens = (text: string): string =>
{
    text = text.replaceAll('/', '/&#8203;');
    text = text.replaceAll('-', '-&#8203;');

    return text;
}

/*
 * Export functions.
 */
export {
    trimString,
    addSoftHyphens
}
