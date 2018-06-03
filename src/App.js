import React, {Component} from 'react';
import LoadingIndicator from 'react-loading-indicator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';
import * as actions from './actions/search-actions';
import Link from "./components/Link";
import Popular from "./components/Popular";
import Results from "./components/Results";
import Button from "./components/Button";
import SearchField from "./components/SearchField";
import SearchIcon from 'material-ui/svg-icons/action/search';
import Bookmark from 'material-ui/svg-icons/action/bookmark';

class Search extends Component {
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
            user,
        } = this.props;
        return (
            <div className="app">
                <SearchField text={searchText} onChange={changeSearchText}
                             validationVisible={textValidationVisible}/>

                {
                    loading ?
                        <LoadingIndicator/> :
                        <Button text="Search" onClick={() => search(searchText, user)} primary={true}
                                icon={<SearchIcon/>}/>
                }

                <Button text="Bookmarks" onClick={() => bookmarks(user.id)} secondary={true} icon={<Bookmark/>}/>
                {results.length > 0 && <Results
                    results={results}
                    onBookmarkClick={r => changeBookmark(r, user)}
                    addVote={v => addVote({...v, user})}
                    removeVote={v => removeVote({...v, user})}
                    onGenerateReport={() => generateReport(results)}
                    onGenerateLink={() => generateLink(results)}
                    generatedLink={generatedLink}
                />}
                <Link
                    text={link}
                    onClick={() => links(link, user)}
                    onChange={changeLink}
                />
                <Popular items={popular} onClick={k => search(k, user)}/>
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
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);