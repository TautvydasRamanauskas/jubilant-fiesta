const changeMinimalRating = (state, {minRating}) => ({
    ...state,
    minRating,
});

const ratingDialogOpen = (state, {open}) => ({
    ...state,
    ratingDialogOpen: open,
});


export default (state = {}, action) => {
    switch (action.type) {
        case 'RATING_MINIMAL_CHANGE':
            return changeMinimalRating(state, action);
        case 'RATING_DIALOG_OPEN':
            return ratingDialogOpen(state, action);
        default:
            return state;
    }
};
