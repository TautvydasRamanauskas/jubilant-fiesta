import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/search-actions';

class App extends Component {
    render() {
        const {searchText, results} = this.props;
        const {changeSearchText, changeBookmark, search, bookmarks} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className="App-intro">
                    <SearchField text={searchText} onChange={changeSearchText}/>
                    <Button text="Search" onClick={() => search(searchText)}/>
                    <Button text="Bookmarks" onClick={() => bookmarks()}/>
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

const Button = ({text, onClick}) => (
    <div>
        <input
            className="action-button"
            type="button"
            value={text}
            onClick={e => onClick()}
        />
    </div>
);

const Results = ({results, onBookmarkClick}) => (
    <table className="search-results">
        <tbody>
        {results.map(r => <Result key={r.id} result={r} onBookmarkClick={onBookmarkClick}/>)}
        </tbody>
    </table>
);

const Result = ({result, onBookmarkClick}) => {
    return (
        <tr>
            <td>
                {result.result}
            </td>
            <td>
                Count: {result.count}
            </td>
            <td onClick={e => onBookmarkClick(result)}>
                {result.bookmark ? '★' : '☆'}
            </td>
        </tr>
    )
};


const mapStateToProps = state => ({
    searchText: state.search.text,
    results: state.search.results,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);