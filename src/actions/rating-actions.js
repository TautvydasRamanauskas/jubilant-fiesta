export const changeMinimalRating = minRating => {
    return {
        type: "RATING_MINIMAL_CHANGE",
        minRating,
    }
};

export const openRatingDialog = open => {
    return {
        type: "RATING_DIALOG_OPEN",
        open,
    }
};