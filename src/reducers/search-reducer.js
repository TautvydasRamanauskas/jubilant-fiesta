export default (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_TEXT_CHANGE':
            return {
                ...state,
                text: action.newText,
            };
        case 'SEARCH':
            console.log(action.keyword);
            return {
                ...state,
                results: action.results,
            };
        default:
            return state;
    }
};
