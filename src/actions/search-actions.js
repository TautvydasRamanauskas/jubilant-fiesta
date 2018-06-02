import SearchService from '../services/search-service';
import ReportService from '../services/report-service';
import BookmarkService from '../services/bookmark-service';
import VoteService from '../services/vote-service';

export const changeSearchText = newText => ({
    type: 'SEARCH_TEXT_CHANGE',
    newText,
});

export const changeLink = newLink => ({
    type: 'LINK_CHANGE',
    newLink,
});

export const changeBookmark = (entry, user) => dispatch => {
    const {bookmark} = entry;
    const promise = bookmark ? BookmarkService.removeBookmark(entry, user) : BookmarkService.addBookmark(entry, user);
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

export const search = (keyword, user) => dispatch => {
    if (!keyword || keyword.length < 2) {
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

    dispatch({
        type: 'SEARCH_START',
    });

    SearchService.search(keyword, user)
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

export const bookmarks = (userId) => dispatch => {
    BookmarkService.retrieveBookmarks(userId)
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
    VoteService.addVote(vote)
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
    VoteService.removeVote(vote)
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
                    generatedLink: json.link,
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

export const links = (link, user) => dispatch => {
    SearchService.link(link, user)
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
