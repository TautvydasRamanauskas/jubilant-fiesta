import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-actions';
import Divider from 'material-ui/Divider';
import {Avatar, List, ListItem, Paper, Subheader} from "material-ui";
import SaveButton from "../options/SaveButton";

class Admin extends Component {
    render() {
        const {googleLimit, yandexLimit, users} = this.props;
        return (
            <Paper className="options" zDepth={5}>
                <List>
                    <Subheader>Limits</Subheader>
                    <ListItem primaryText={`${googleLimit}/100`} secondaryText="Google limit"/>
                    <ListItem primaryText={`${yandexLimit}/10`} secondaryText="Yandex limit"/>
                </List>
                <Divider/>
                <List>
                    <Subheader>Users</Subheader>
                    {users.map(u => <User user={u}/>)}
                </List>
                <Divider/>
                <SaveButton/>
            </Paper>
        );
    }

    componentDidMount() {
        const {fetchLimits, fetchUsers} = this.props;
        fetchLimits();
        fetchUsers();
    }
}

const User = ({user}) => (
    <ListItem
        key={user.id}
        primaryText={user.name}
        secondaryText={user.email}
        rightAvatar={<Avatar src={user.picture}/>}
    />
);

const mapStateToProps = state => ({
    googleLimit: state.admin.limits.google,
    yandexLimit: state.admin.limits.yandex,
    users: state.admin.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Admin);