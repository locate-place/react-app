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
    addSoftHyphens
}
