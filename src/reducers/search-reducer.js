export default (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_TEXT_CHANGE':
            return {
                ...state,
                text: action.newText,
            };
        case 'BOOKMARK_CHANGE':
            const {results} = state;
            const bookmarkIndex = results.findIndex(r => r.result === action.title);
            if (bookmarkIndex === -1) {
                return state;
            }
            return {
                ...state,
                results: [
                    ...results.slice(0, bookmarkIndex),
                    {
                        ...results[bookmarkIndex],
                        bookmark: action.bookmark,
                    },
                    ...results.slice(bookmarkIndex + 1),
                ],
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
