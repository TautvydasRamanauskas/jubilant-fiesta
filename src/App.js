import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/search-actions';

class App extends Component {
    render() {
        const {searchText, changeSearchText, search, results, changeBookmark} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className="App-intro">
                    <SearchField text={searchText} onChange={changeSearchText}/>
                    <SearchButton onClick={() => search(searchText)}/>
                    <Results results={results} onBookmarkClick={changeBookmark}/>
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

const Results = ({results, onBookmarkClick}) => (
    <table className="search-results">
        {results.map(r => <Result result={r} onBookmarkClick={onBookmarkClick}/>)}
    </table>
);

const Result = ({result: {result: title, count, bookmark}, onBookmarkClick}) => (
    <tr>
        <td>
            {title}
        </td>
        <td>
            Count: {count}
        </td>
        <td onClick={e => onBookmarkClick(title, !bookmark)}>
            {bookmark ? '★' : '☆'}
        </td>
    </tr>
);

const mapStateToProps = state => ({
    searchText: state.search.text,
    results: state.search.results,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);