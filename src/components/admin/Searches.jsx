import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-searches-actions';
import {List, Subheader} from "material-ui";
import Search from "./Search";

class Searches extends Component {
    render() {
        const {searches} = this.props;
        return (
            <List>
                <Subheader>Searches</Subheader>
                {searches.map(s => <Search key={s.id} search={s}/>)}
            </List>
        );
    }

    componentDidMount() {
        const {fetchSearches} = this.props;
        fetchSearches();
    }
}

const mapStateToProps = state => ({
    searches: state.admin.searches,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
