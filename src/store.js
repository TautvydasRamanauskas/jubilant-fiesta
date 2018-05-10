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
    }
};

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default createStore(rootReducer, initialState, enhancers);
