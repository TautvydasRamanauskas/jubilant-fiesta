import SearchService from '../services/search-service';

export const changeSearchText = newText => ({
    type: 'SEARCH_TEXT_CHANGE',
    newText,
});

export const changeLink = newLink => ({
    type: 'LINK_CHANGE',
    newLink,
});

export const changeBookmark = (entry) => dispatch => {
    const {bookmark} = entry;
    const promise = bookmark ? SearchService.removeBookmark(entry) : SearchService.addBookmark(entry);
    promise.then(response => {
        if (response.ok) {
            dispatch({
                type: 'BOOKMARK_CHANGE',
                entry,
                bookmark,
            });
        }
    })
};

export const search = keyword => dispatch => {
    if (!keyword) return;
    SearchService.search(keyword)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return new Promise(() => []);
        })
        .then(json => {
            dispatch({
                type: 'RESULTS',
                results: json,
            });
        })
};

export const bookmarks = () => dispatch => {
    SearchService.retrieveBookmarks()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return new Promise(() => []);
        })
        .then(json => {
            dispatch({
                type: 'RESULTS',
                results: json,
            });
        })
};

export const generateLink = results => dispatch => {
    SearchService.generatedLink(results)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(json => {
            if (json) {
                dispatch({
                    type: 'LINK_GENERATE',
                    generatedLink: json,
                });
            }
        })
};

export const links = link => dispatch => {
    SearchService.link(link)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return new Promise(() => []);
        })
        .then(json => {
            dispatch({
                type: 'RESULTS',
                results: json,
            });
        })
};
