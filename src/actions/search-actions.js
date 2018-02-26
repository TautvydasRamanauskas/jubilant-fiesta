export const changeSearchText = newText => ({
    type: 'SEARCH_TEXT_CHANGE',
    newText,
});

export const search = keyword => ({
    type: 'SEARCH',
    keyword,
});