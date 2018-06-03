import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-actions';
import Divider from 'material-ui/Divider';
import {Avatar, List, ListItem, Paper, Subheader} from "material-ui";
import ActionGrade from 'material-ui/svg-icons/action/grade';
import SaveButton from "../options/SaveButton";

class Admin extends Component {
    render() {
        const {googleLimit, yandexLimit, users} = this.props;
        const {changeLevel} = this.props;
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
                    {users.map(u => <User user={u} changeLevel={changeLevel}/>)}
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

const User = ({user, changeLevel}) => {
    const adminIcon = user.level === 1 ? <ActionGrade/> : null;
    return (
        <ListItem
            key={user.id}
            onClick={e => changeLevel(user.id, user.level === 0 ? 1 : 0)}
            primaryText={user.name}
            secondaryText={user.email}
            insetChildren={!adminIcon}
            leftIcon={adminIcon}
            rightAvatar={<Avatar src={user.picture}/>}
        />
    );
};

const mapStateToProps = state => ({
    googleLimit: state.admin.limits.google,
    yandexLimit: state.admin.limits.yandex,
    users: state.admin.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Admin);