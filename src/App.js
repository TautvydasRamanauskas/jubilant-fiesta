import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions/search-actions';

class App extends Component {
    render() {
        const {
            searchText,
            results,
            generatedLink,
            link,
            changeSearchText,
            changeBookmark,
            search,
            bookmarks,
            links,
            changeLink,
            generateLink,
            addVote,
            removeVote,
        } = this.props;

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
                    {results.length > 0 && <Results
                        results={results}
                        onBookmarkClick={changeBookmark}
                        addVote={addVote}
                        removeVote={removeVote}
                        onGenerateLink={() => generateLink(results)}
                        generatedLink={generatedLink}
                    />}
                    <Link
                        text={link}
                        onClick={() => links(link)}
                        onChange={changeLink}
                    />
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
            type="text"
            value={text || ''}
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

const Results = ({results, onBookmarkClick, addVote, removeVote, onGenerateLink, generatedLink}) => (
    <div className="search-results">
        <table>
            <tbody>
            {results.map(r =>
                <Result
                    key={r.id}
                    result={r}
                    onBookmarkClick={onBookmarkClick}
                    addVote={addVote}
                    removeVote={removeVote}
                />
            )}
            </tbody>
        </table>
        {
            generatedLink ?
                <input type="text" disabled="true" size="38" value={generatedLink}/> :
                <button onClick={e => onGenerateLink()}>Generate Link</button>
        }
    </div>
);

const Result = ({result, onBookmarkClick, addVote, removeVote}) => {
    const {result: title, count, voteValue, bookmark, personalVote} = result;
    const rating = count + voteValue;
    const userVotes = voteValue ? `(${voteValue > 0 ? '+' : ''}${voteValue})` : '';
    return (
        <tr>
            <td>
                {title}
            </td>
            <td>
                Count: {rating} {userVotes}
            </td>
            <td onClick={e => onBookmarkClick(result)}>
                {bookmark ? '★' : '☆'}
            </td>
            <Vote title={title} personalVote={personalVote} addVote={addVote} removeVote={removeVote}/>
        </tr>
    )
};

const Vote = ({title, personalVote, addVote, removeVote}) => {
    switch (personalVote) {
        case 1:
            return (
                <td onClick={e => removeVote({title, value: 1})}>⬆</td>
            );
        case -1:
            return (
                <td onClick={e => removeVote({title, value: -1})}>⬇</td>
            );
        default:
            return ([
                <td key="up-vote" onClick={e => addVote({title, value: 1})}>⇧</td>,
                <td key="down-vote" onClick={e => addVote({title, value: -1})}>⇩</td>
            ]);
    }
};

const Link = ({text, onClick, onChange}) => (
    <div>
        <input
            className="link-field"
            type="text"
            placeholder="Copy your link here"
            value={text || ''}
            onChange={e => onChange(e.target.value)}
        />
        <button onClick={e => onClick()}>Display</button>
    </div>
);

const mapStateToProps = state => ({
    searchText: state.search.text,
    results: state.search.results,
    link: state.search.link,
    generatedLink: state.search.generatedLink,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);