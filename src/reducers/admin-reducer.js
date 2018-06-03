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
        default:
            return state;
    }
};
