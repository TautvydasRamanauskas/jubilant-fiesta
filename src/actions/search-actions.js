import SearchService from '../services/search-service';

export const changeSearchText = newText => ({
    type: 'SEARCH_TEXT_CHANGE',
    newText,
});

export const changeBookmark = (title, bookmark) => ({
    type: 'BOOKMARK_CHANGE',
    title,
    bookmark,
});

export const search = keyword => dispatch => {
    SearchService.search(keyword)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return new Promise(() => []);
        })
        .then(json => {
            dispatch({
                type: 'SEARCH',
                results: json,
            });
        })
};
