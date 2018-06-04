const limitsFetched = (state, {limits}) => ({
    ...state,
    limits,
});

const usersFetched = (state, {users}) => ({
    ...state,
    users,
});

const searchesFetched = (state, {searches}) => ({
    ...state,
    searches,
});

const changeLinksRemove = (state, confirmDeleteLinks) => ({
    ...state,
    links: {
        ...state.links,
        confirmDeleteLinks
    },
});

const changeLinksCount = (state, {count}) => ({
    ...state,
    links: {
        ...state.links,
        count,
    }
});

const changeBookmarksRemove = (state, confirmDeleteBookmarks) => ({
    ...state,
    bookmarks: {
        ...state.bookmarks,
        confirmDeleteBookmarks,
    }
});

const changeBookmarksCount = (state, {count}) => ({
    ...state,
    bookmarks: {
        ...state.bookmarks,
        count,
    }
});

const levelChange = (state, {userId, level}) => {
    const {users} = state;
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) return state;
    const user = users[userIndex];
    return {
        ...state,
        users: [
            ...users.slice(0, userIndex),
            {
                ...user,
                level,
            },
            ...users.slice(userIndex + 1),
        ]
    }
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'LIMITS_FETCHED':
            return limitsFetched(state, action);
        case 'USERS_FETCHED':
            return usersFetched(state, action);
        case 'SEARCHES_FETCHED':
            return searchesFetched(state, action);
        case 'LEVEL_CHANGE':
            return levelChange(state, action);
        case 'LINKS_REMOVE_OPEN':
            return changeLinksRemove(state, true);
        case 'LINKS_REMOVE_CLOSE':
            return changeLinksRemove(state, false);
        case 'LINKS_COUNT_FETCHED':
            return changeLinksCount(state, action);
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
