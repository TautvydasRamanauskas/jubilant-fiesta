import React, {Component} from 'react';
import LoadingIndicator from 'react-loading-indicator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';
import * as actions from './actions/search-actions';
import Popular from "./components/search/Popular";
import Results from "./components/results/Results";
import Button from "./components/Button";
import SearchField from "./components/search/SearchField";
import SearchIcon from 'material-ui/svg-icons/action/search';
import Bookmark from 'material-ui/svg-icons/action/bookmark';

class Search extends Component {
    render() {
        const {
            searchText,
            textValidationVisible,
            changeSearchText,
            search,
            bookmarks,
            popular,
            loading,
            user,
        } = this.props;
        return (
            <div className="page">
                <SearchField text={searchText} onChange={changeSearchText}
                             validationVisible={textValidationVisible}/>

                {
                    loading ?
                        <LoadingIndicator/> :
                        <Button text="Search" onClick={() => search(searchText, user)} primary={true}
                                icon={<SearchIcon/>}/>
                }

                <Button text="Bookmarks" onClick={() => bookmarks(user.id)} secondary={true} icon={<Bookmark/>}/>
                <Results linkEnable={true}/>
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
    popular: state.search.popular,
    loading: state.search.loading,
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);