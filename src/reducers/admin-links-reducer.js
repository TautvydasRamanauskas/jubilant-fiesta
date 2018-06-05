const changeLinksRemove = (state, confirmDeleteLinks) => ({
    ...state,
    confirmDeleteLinks
});

const changeLinksCount = (state, {count}) => ({
    ...state,
    count,
});

export default (state = {}, action) => {
    switch (action.type) {
        case 'LINKS_REMOVE_OPEN':
            return changeLinksRemove(state, true);
        case 'LINKS_REMOVE_CLOSE':
            return changeLinksRemove(state, false);
        case 'LINKS_COUNT_FETCHED':
            return changeLinksCount(state, action);
        default:
            return state;
    }
};
