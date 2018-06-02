import rating from './rating-reducer'
import searchEngine from './search-engine-reducer'
import textRules from './text-rules-reducer'

const changeNeuralNetworkState = (state, {state: neuralNetwork}) => ({
    ...state,
    neuralNetwork,
});

export default (state = {}, action) => {
    switch (action.type) {
        case "NEURAL_NETWORK_CHANGE":
            return changeNeuralNetworkState(state, action);
        default:
            return {
                ...state,
                searchEngine: searchEngine(state.searchEngine, action),
                textRules: textRules(state.textRules, action),
                rating: rating(state.rating, action),
            };
    }
};
