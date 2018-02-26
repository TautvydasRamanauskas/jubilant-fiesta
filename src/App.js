import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/search-actions';

class App extends Component {
    render() {
        const {searchText, changeSearchText, search} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className="App-intro">
                    <SearchField text={searchText} onChange={changeSearchText}/>
                    <SearchButton onClick={() => search(searchText)}/>
                </div>
            </div>
        );
    }
}

const SearchField = ({text, onChange}) => (
    <div>
        <input
            className="search-field"
            placeholder='Enter you search keyword'
            value={text}
            onChange={e => onChange(e.target.value)}
        />
    </div>
);

const SearchButton = ({onClick}) => (
    <div>
        <input
            className="search-button"
            type="button"
            value="Search"
            onClick={e => onClick()}
        />
    </div>
);

const mapStateToProps = state => ({searchText: state.search.text});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);