/**
 * Adds soft hyphens to the given string according to some rules.
 *
 * @param text
 */
const addSoftHyphens = (text: string): string =>
{
    text = text.replaceAll('&', '&amp;&#8203;');
    text = text.replaceAll('/', '/&#8203;');
    text = text.replaceAll('-', '-&#8203;');
    text = text.replaceAll('_', '_&#8203;');
    text = text.replaceAll('?', '?&#8203;');
    text = text.replaceAll('=', '=&#8203;');
    text = text.replaceAll('.', '.&#8203;');
    text = text.replace(/([a-z])([A-Z])/g, '$1&#8203;$2');

    return text;
}

const ucFirst = (text: string): string =>
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/*
 * Export functions.
 */
export {
    addSoftHyphens,
    ucFirst
}
