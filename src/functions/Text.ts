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
    text = text.replaceAll('?', '?&#8203;');
    text = text.replaceAll('=', '=&#8203;');
    text = text.replaceAll('.', '.&#8203;');
    text = text.replace(/([a-z])([A-Z])/g, '$1&#8203;$2');

    return text;
}

/*
 * Export functions.
 */
export {
    addSoftHyphens
}
