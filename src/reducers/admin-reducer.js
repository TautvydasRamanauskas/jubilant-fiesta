const limitsFetched = (state, {limits}) => ({
    ...state,
    limits,
});

export default (state = {}, action) => {
    switch (action.type) {
        case 'LIMITS_FETCHED':
            return limitsFetched(state, action);
        default:
            return state;
    }
};
