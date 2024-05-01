let initSearchQuery = true;

const getInitSearchQuery = (): boolean =>
{
    return initSearchQuery;
}

const setInitSearchQuery = (initSearchQueryValue: boolean) =>
{
    initSearchQuery = initSearchQueryValue;
}

/*
 * Export functions.
 */
export {
    initSearchQuery,
    getInitSearchQuery,
    setInitSearchQuery
}
