const compareResults = ({references: referencesOne, voteValue: voteValueOne, result: resultOne},
                        {references: referencesTwo, voteValue: voteValueTwo, result: resultTwo}) => {
    const ratingOne = referencesOne.length + voteValueOne;
    const ratingTwo = referencesTwo.length + voteValueTwo;
    if (ratingOne === ratingTwo) {
        return resultOne.localeCompare(resultTwo);
    }
    return ratingTwo - ratingOne;
};

const changeSearchText = (state, {newText: text}) => {
    return {
        ...state,
        text,
    };
};

const startSearch = (state) => {
    return {
        ...state,
        loading: true,
    }
};

const changeValidationVisibility = (state, {newState: textValidationVisible}) => {
    return {
        ...state,
        textValidationVisible,
    };
};

const changeLink = (state, {newLink: link}) => {
    return {
        ...state,
        link,
    };
};

const bookmarkChange = (state, {entry}) => {
    const {results} = state;
    const bookmarkIndex = results.findIndex(r => r === entry);
    if (bookmarkIndex === -1) {
        return state;
    }
    return {
        ...state,
        results: [
            ...results.slice(0, bookmarkIndex),
            {
                ...results[bookmarkIndex],
                bookmark: !entry.bookmark,
            },
            ...results.slice(bookmarkIndex + 1),
        ],
    };
};

const addVote = (state, {vote}) => {
    const {results} = state;
    const {result, value} = vote;
    const voteIndex = results.findIndex(r => r.id === result.id);
    if (voteIndex === -1) {
        return state;
    }
    const voteResult = results[voteIndex];
    const {voteValue} = voteResult;
    return {
        ...state,
        results: [
            ...results.slice(0, voteIndex),
            {
                ...voteResult,
                voteValue: voteValue + value,
                personalVote: value,
            },
            ...results.slice(voteIndex + 1),
        ].sort(compareResults),
    };
};

const removeVote = (state, {vote}) => {
    const {results} = state;
    const {result, value} = vote;
    const voteIndex = results.findIndex(r => r.id === result.id);
    if (voteIndex === -1) {
        return state;
    }
    const voteResult = results[voteIndex];
    const {voteValue} = voteResult;
    return {
        ...state,
        results: [
            ...results.slice(0, voteIndex),
            {
                ...voteResult,
                voteValue: voteValue - value,
                personalVote: 0,
            },
            ...results.slice(voteIndex + 1),
        ].sort(compareResults),
    };
};

const results = (state, {results, resultsFetched}) => {
    return {
        ...state,
        text: '',
        textValidationVisible: 0,
        link: '',
        generatedLink: '',
        resultsFetched,
        results: results.sort(compareResults),
        loading: false,
    };
};

const generateLink = (state, {generatedLink}) => {
    return {
        ...state,
        generatedLink,
    };
};

const mostPopular = (state, {popular}) => {
    return {
        ...state,
        popular,
    }
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_TEXT_CHANGE':
            return changeSearchText(state, action);
        case 'SEARCH_START':
            return startSearch(state);
        case 'VALIDATION_CHANGE':
            return changeValidationVisibility(state, action);
        case 'LINK_CHANGE':
            return changeLink(state, action);
        case 'BOOKMARK_CHANGE':
            return bookmarkChange(state, action);
        case 'VOTE_ADD':
            return addVote(state, action);
        case 'VOTE_REMOVE':
            return removeVote(state, action);
        case 'RESULTS':
            return results(state, action);
        case 'LINK_GENERATE':
            return generateLink(state, action);
        case 'MOST_POPULAR':
            return mostPopular(state, action);
        default:
            return state;
    }
};
