import React, {Component} from 'react';
import LoadingIndicator from 'react-loading-indicator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';
import * as actions from './actions/search-actions';
import Facebook from "./components/Facebook";
import Link from "./components/Link";
import Popular from "./components/Popular";
import Results from "./components/Results";
import Button from "./components/Button";
import SearchField from "./components/SearchField";

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
            loading,
        } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className="App-intro">
                    <SearchField text={searchText} onChange={changeSearchText}
                                 validationVisible={textValidationVisible}/>

                    {
                        loading ?
                            <LoadingIndicator/> :
                            <Button text="Search" onClick={() => search(searchText)}/>
                    }

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
                    <Facebook/>
                    <Popular items={popular} onClick={search}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.mostPopular();
    }
}

const mapStateToProps = state => ({
    searchText: state.search.text,
    textValidationVisible: state.search.textValidationVisible,
    results: state.search.results,
    link: state.search.link,
    generatedLink: state.search.generatedLink,
    popular: state.search.popular,
    loading: state.search.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);