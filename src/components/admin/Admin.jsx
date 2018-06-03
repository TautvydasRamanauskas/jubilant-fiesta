import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-actions';
import Divider from 'material-ui/Divider';
import {List, ListItem, Paper, Subheader} from "material-ui";
import SaveButton from "../options/SaveButton";

class Admin extends Component {
    render() {
        const {googleLimit, yandexLimit} = this.props;
        return (
            <Paper className="options" zDepth={5}>
                <List>
                    <Subheader>Limits</Subheader>
                    <ListItem primaryText={`${googleLimit}/100`} secondaryText="Google limit"/>
                    <ListItem primaryText={`${yandexLimit}/10`} secondaryText="Yandex limit"/>
                </List>
                <Divider/>
                <SaveButton/>
            </Paper>
        );
    }

    componentDidMount() {
        const {fetchLimits} = this.props;
        fetchLimits();
    }
}

const mapStateToProps = state => ({
    user: state.user,
    googleLimit: state.admin.limits.google,
    yandexLimit: state.admin.limits.yandex,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Admin);