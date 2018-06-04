import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-actions';
import {List, ListItem, Subheader} from "material-ui";

class Limits extends Component {
    render() {
        const {googleLimit, yandexLimit} = this.props;
        return (
            <List>
                <Subheader>Limits</Subheader>
                <ListItem primaryText={`${googleLimit}/100`} secondaryText="Google limit"/>
                <ListItem primaryText={`${yandexLimit}/10`} secondaryText="Yandex limit"/>
            </List>
        );
    }

    componentDidMount() {
        const {fetchLimits} = this.props;
        fetchLimits();
    }
}

const mapStateToProps = state => ({
    googleLimit: state.admin.limits.google,
    yandexLimit: state.admin.limits.yandex,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Limits);