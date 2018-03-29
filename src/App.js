import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/search-actions';

class App extends Component {
    render() {
        const {searchText, changeSearchText, search, results} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className="App-intro">
                    <SearchField text={searchText} onChange={changeSearchText}/>
                    <SearchButton onClick={() => search(searchText)}/>
                    <Results results={results}/>
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

const Results = ({results}) => (
    <table className="search-results">
        {results.map(r => <Result result={r}/>)}
    </table>
);

const Result = ({result}) => (
    <tr>
        <td>
            {result.result}
        </td>
        <td>
            Count: {result.count}
        </td>
    </tr>
);


const mapStateToProps = state => ({
    searchText: state.search.text,
    results: state.search.results,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);