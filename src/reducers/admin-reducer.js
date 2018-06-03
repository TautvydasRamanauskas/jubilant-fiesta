const limitsFetched = (state, {limits}) => ({
    ...state,
    limits,
});

const usersFetched = (state, {users}) => ({
    ...state,
    users,
});

export default (state = {}, action) => {
    switch (action.type) {
        case 'LIMITS_FETCHED':
            return limitsFetched(state, action);
        case 'USERS_FETCHED':
            return usersFetched(state, action);
        default:
            return state;
    }
};
