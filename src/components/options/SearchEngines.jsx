import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/search-engines-actions';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import OptionsItem from "./OptionsItem";

const SearchEngines = ({
                           googleState, changeGoogle,
                           yandexState, changeYandex,
                           cacheState, changeCache
                       }) => (
    <List>
        <Subheader>Search Engines</Subheader>
        <OptionsItem text="Google" toggled={googleState} onToggle={changeGoogle}/>
        <OptionsItem text="Yandex" toggled={yandexState} onToggle={changeYandex}/>
        <OptionsItem text="Cache" toggled={cacheState} onToggle={changeCache}/>
    </List>
);

const mapStateToProps = state => ({
    googleState: state.options.searchEngine.google,
    yandexState: state.options.searchEngine.yandex,
    cacheState: state.options.searchEngine.cache,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchEngines);