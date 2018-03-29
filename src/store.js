import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

const initialState = {
    search: {
        text: "",
        results: [],
    }
};

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default createStore(rootReducer, initialState, enhancers);
