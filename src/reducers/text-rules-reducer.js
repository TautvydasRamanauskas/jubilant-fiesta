const changeParenthesisState = (state, action) => {
    const parenthesis = action.state;
    return {
        ...state,
        parenthesis,
    }
};

const changeReviewState = (state, action) => {
    const review = action.state;
    return {
        ...state,
        review,
    }
};

const changeNumbersState = (state, action) => {
    const numbers = action.state;
    return {
        ...state,
        numbers,
    }
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'PARENTHESIS_CHANGE':
            return changeParenthesisState(state, action);
        case 'REVIEW_CHANGE':
            return changeReviewState(state, action);
        case 'NUMBERS_CHANGE':
            return changeNumbersState(state, action);
        default:
            return state;
    }
};
