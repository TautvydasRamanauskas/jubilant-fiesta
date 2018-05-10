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
            textValidationVisible,
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
            generateReport,
            popular,
        } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className="App-intro">
                    <SearchField text={searchText} onChange={changeSearchText}
                                 validationVisible={textValidationVisible}/>
                    <Button text="Search" onClick={() => search(searchText)}/>
                    <Button text="Bookmarks" onClick={() => bookmarks()}/>
                    {results.length > 0 && <Results
                        results={results}
                        onBookmarkClick={changeBookmark}
                        addVote={addVote}
                        removeVote={removeVote}
                        onGenerateReport={() => generateReport(results)}
                        onGenerateLink={() => generateLink(results)}
                        generatedLink={generatedLink}
                    />}
                    <Link
                        text={link}
                        onClick={() => links(link)}
                        onChange={changeLink}
                    />
                    <Popular items={popular} onClick={search}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.mostPopular();
    }
}

const SearchField = ({text, onChange, validationVisible}) => (
    <div className="search-field">
        {validationVisible && <p className="search-field-validation">Text has to be at least 4 symbols long</p>}
        <input
            className="search-input"
            placeholder='Enter you search keyword'
            type="text"
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

const Results = ({
                     results, onBookmarkClick, addVote,
                     removeVote, onGenerateReport,
                     onGenerateLink, generatedLink
                 }) => (
    <div className="search-results">
        <table>
            <tbody>
            {results.map((r, i) =>
                <Result
                    key={r.id}
                    number={i}
                    result={r}
                    onBookmarkClick={onBookmarkClick}
                    addVote={addVote}
                    removeVote={removeVote}
                />
            )}
            </tbody>
        </table>
        <LinkGenerate link={generatedLink} onGenerateLink={onGenerateLink}/>
        <button className="table-button" onClick={e => onGenerateReport()}>Generate Report</button>
    </div>
);

const Result = ({number, result, onBookmarkClick, addVote, removeVote}) => {
    const {result: title, count, voteValue, bookmark, personalVote} = result;
    const rating = count + voteValue;
    const userVotes = voteValue ? `(${voteValue > 0 ? '+' : ''}${voteValue})` : '';
    const referencesRows = result.references.map(r => <Reference reference={r}/>);
    return ([
        <tr className="result-row">
            <td align="center">
                {number + 1}.
            </td>
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
        </tr>,
        referencesRows,
    ])
};

const Vote = ({title, personalVote, addVote, removeVote}) => {
    switch (personalVote) {
        case 1:
            return (
                <td colSpan="2" align="center" onClick={e => removeVote({title, value: 1})}>⬆</td>
            );
        case -1:
            return (
                <td colSpan="2" align="center" onClick={e => removeVote({title, value: -1})}>⬇</td>
            );
        default:
            return ([
                <td key="up-vote" onClick={e => addVote({title, value: 1})}>⇧</td>,
                <td key="down-vote" onClick={e => addVote({title, value: -1})}>⇩</td>
            ]);
    }
};

const Reference = ({reference}) => (
    <tr className="reference">
        <td/>
        <td colSpan="5">
            <a href={reference}>{reference}</a>
        </td>
    </tr>
);

const LinkGenerate = ({link, onGenerateLink}) => (
    <div>
        {
            link ?
                <input className="table-button" type="text" disabled="true" value={link}/> :
                <button className="table-button" onClick={e => onGenerateLink()}>Generate Link</button>
        }
    </div>
);

const Link = ({text, onClick, onChange}) => (
    <div>
        <input
            className="link-field"
            type="text"
            placeholder="Copy your link here"
            value={text}
            onChange={e => onChange(e.target.value)}
        />
        <button onClick={e => onClick()}>Display</button>
    </div>
);

const Popular = ({items, onClick}) => (
    <div className="popular">
        <b>Most popular searches:</b>
        <ul>
            {items.map((i, n) => (
                <li key={n} onClick={e => onClick(i)}>
                    {i}
                </li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = state => ({
    searchText: state.search.text,
    textValidationVisible: state.search.textValidationVisible,
    results: state.search.results,
    link: state.search.link,
    generatedLink: state.search.generatedLink,
    popular: state.search.popular,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);