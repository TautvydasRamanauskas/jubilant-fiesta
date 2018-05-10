import SearchService from '../services/search-service';
import ReportService from '../services/report-service';

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
    if (!keyword || keyword.length < 4) {
        dispatch({
            type: 'VALIDATION_CHANGE',
            newState: 1,
        });
        return;
    }
    if (keyword.includes("@") || keyword.includes("#") || keyword.includes("$") || keyword.includes("%") ||
        keyword.includes("^") || keyword.includes("&") || keyword.includes("*") || keyword.includes("+") ||
        keyword.includes("=") || keyword.includes("~") || keyword.includes("`") || keyword.includes("<") ||
        keyword.includes(">") || keyword.includes("?") || keyword.includes("!") || keyword.includes(":") ||
        keyword.includes(";") || keyword.includes("\\") || keyword.includes("|") || keyword.includes("{") ||
        keyword.includes("}") || keyword.includes("/")) {
        dispatch({
            type: 'VALIDATION_CHANGE',
            newState: 2,
        });
        return;
    }

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

export const mostPopular = () => dispatch => {
    SearchService.mostPopular()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return new Promise(() => []);
        })
        .then(json => {
            dispatch({
                type: 'MOST_POPULAR',
                popular: json,
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

export const addVote = vote => dispatch => {
    SearchService.addVote(vote)
        .then(response => {
            if (response.ok) {
                dispatch({
                    type: 'VOTE_ADD',
                    vote,
                });
            }
        })
};

export const removeVote = vote => dispatch => {
    SearchService.removeVote(vote)
        .then(response => {
            if (response.ok) {
                dispatch({
                    type: 'VOTE_REMOVE',
                    vote,
                });
            }
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

export const generateReport = results => () => {
    SearchService.generateReport(results)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(text => {
            if (text) {
                ReportService.download('export.doc', text);
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
