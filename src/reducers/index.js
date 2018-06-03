import {combineReducers} from 'redux';
import search from './search-reducer';
import user from './user-reducer';
import admin from './admin-reducer';
import options from './options-reducer';

export default combineReducers({
    search,
    user,
    admin,
    options,
});
