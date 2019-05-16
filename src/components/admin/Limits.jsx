import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-limits-actions';
import {List, ListItem, Subheader} from "material-ui";

class Limits extends Component {
    render() {
        const {limits} = this.props;
        const items = Object.keys(limits).map(searchApi =>
            <ListItem
                key={searchApi}
                primaryText={limits[searchApi] || "Disabled"}
                secondaryText={`"${searchApi}" score`}
            />
        );
        return (
            <List>
                <Subheader>Load Balancer's current Search APIs scores</Subheader>
                {items}
            </List>
        );
    }

    componentDidMount() {
        const {fetchLimits} = this.props;
        fetchLimits();
    }
}

const mapStateToProps = state => ({
    limits: state.admin.limits,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Limits);