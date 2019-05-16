const changeMatcher = (state, {matcher}) => (
    matcher
);

export default (state = {}, action) => {
    if (action.type === 'MATCHER_CHANGE') {
        return changeMatcher(state, action);
    } else {
        return state;
    }
};
