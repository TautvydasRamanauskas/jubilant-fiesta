export default (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_TEXT_CHANGE':
            return {
                ...state,
                text: action.newText,
            };
        case 'LINK_CHANGE':
            return {
                ...state,
                link: action.newLink,
            };
        case 'BOOKMARK_CHANGE':
            const {results} = state;
            const {entry} = action;
            const bookmarkIndex = results.findIndex(r => r === entry);
            if (bookmarkIndex === -1) {
                return state;
            }
            return {
                ...state,
                text: '',
                results: [
                    ...results.slice(0, bookmarkIndex),
                    {
                        ...results[bookmarkIndex],
                        bookmark: !entry.bookmark,
                    },
                    ...results.slice(bookmarkIndex + 1),
                ],
            };
        case 'RESULTS':
            return {
                ...state,
                results: action.results,
            };
        case 'LINK_GENERATE':
            return {
                ...state,
                generatedLink: action.generatedLink,
            };
        default:
            return state;
    }
};
