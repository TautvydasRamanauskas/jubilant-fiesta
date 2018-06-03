import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

const initialState = {
    search: {
        text: '',
        textValidationVisible: 0,
        link: '',
        results: [],
        generatedLink: '',
        popular: [],
        loading: false,
    },
    user: {},
    admin: {
        limits: {
            google: 0,
            yandex: 0,
        },
        users: [],
        searches: [],
    },
    options: {
        neuralNetwork: false,
        searchEngine: {
            google: true,
            yandex: true,
            cache: true,
        },
        textRules: {
            parenthesis: true,
            review: true,
            numbers: true,
        },
        rating: {
            minRating: 3,
            ratingDialogOpen: false,
        },
    },
};

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default createStore(rootReducer, initialState, enhancers);
