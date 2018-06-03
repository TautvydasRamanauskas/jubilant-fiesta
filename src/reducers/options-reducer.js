import rating from './rating-reducer'
import searchEngine from './search-engine-reducer'
import textRules from './text-rules-reducer'

const changeNeuralNetworkState = (state, {state: neuralNetwork}) => ({
    ...state,
    neuralNetwork,
});

const resetOptions = (state, {
    options: {
        useNeuralNetwork, useGoogle, useYandex, useCache, useTextRuleReview,
        useTextRuleNumber, useTextRuleParenthesis, minRating
    }
}) => ({
    ...state,
    neuralNetwork: useNeuralNetwork,
    searchEngine: {
        google: useGoogle,
        yandex: useYandex,
        cache: useCache,
    },
    textRules: {
        parenthesis: useTextRuleParenthesis,
        review: useTextRuleReview,
        numbers: useTextRuleNumber,
    },
    rating: {
        minRating: minRating,
        ratingDialogOpen: false,
    },
});

export default (state = {}, action) => {
    switch (action.type) {
        case "NEURAL_NETWORK_CHANGE":
            return changeNeuralNetworkState(state, action);
        case "OPTIONS_RESET":
            return resetOptions(state, action);
        default:
            return {
                ...state,
                searchEngine: searchEngine(state.searchEngine, action),
                textRules: textRules(state.textRules, action),
                rating: rating(state.rating, action),
            };
    }
};
