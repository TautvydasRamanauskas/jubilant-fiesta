import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../App.css';
import * as actions from '../../actions/search-actions';
import Popular from "../../components/search/Popular";
import Results from "../../components/results/Results";
import SearchField from "../../components/search/SearchField";
import SearchButton from "./SearchButton";

class Search extends Component {
    render() {
        const {
            searchText,
            textValidationVisible,
            changeSearchText,
            search,
            popular,
            loading,
            user,
        } = this.props;
        return (
            <div className="page">
                <SearchField text={searchText} onChange={changeSearchText} validationVisible={textValidationVisible}/>
                <SearchButton loading={loading} search={() => search(searchText, user)}/>
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