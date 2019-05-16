import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

const initialState = {
    search: {
        text: '',
        textValidationVisible: 0,
        link: '',
        resultsFetched: false,
        results: [],
        generatedLink: '',
        popular: [],
        loading: false,
    },
    user: {},
    admin: {
        limits: {},
        users: [],
        searches: [],
        links: {
            confirmDeleteLinks: false,
            count: 0,
        },
        bookmarks: {
            confirmDeleteBookmarks: false,
            count: 0,
        },
    },
    options: {
        neuralNetwork: false,
        matcher: "CONTAINS",
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
