import {combineReducers} from 'redux';
import search from './search-reducer';
import user from './user-reducer';
import options from './options-reducer';

export default combineReducers({
    search,
    user,
    options,
});
