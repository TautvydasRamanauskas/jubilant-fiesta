import rating from './rating-reducer'
import matcher from './matcher-reducer'

const changeNeuralNetworkState = (state, {state: neuralNetwork}) => ({
    ...state,
    neuralNetwork,
});

const resetOptions = (state, {
    options: {
        useNeuralNetwork, matcher, minRating
    }
}) => ({
    ...state,
    neuralNetwork: useNeuralNetwork,
    matcher,
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
                matcher: matcher(state.matcher, action),
                rating: rating(state.rating, action),
            };
    }
};
