const changeBookmarksRemove = (state, confirmDeleteBookmarks) => ({
    ...state,
    confirmDeleteBookmarks,
});

const changeBookmarksCount = (state, {count}) => ({
    ...state,
    count,
});

export default (state = {}, action) => {
    switch (action.type) {
        case 'BOOKMARKS_REMOVE_OPEN':
            return changeBookmarksRemove(state, true);
        case 'BOOKMARKS_REMOVE_CLOSE':
            return changeBookmarksRemove(state, false);
        case 'BOOKMARKS_COUNT_FETCHED':
            return changeBookmarksCount(state, action);
        default:
            return state;
    }
};
