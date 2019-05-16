import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-users-actions';
import {List, Subheader} from "material-ui";
import User from "./User";

class Users extends Component {
    render() {
        const {users, user} = this.props;
        const {changeLevel} = this.props;
        return (
            <List>
                <Subheader>Users</Subheader>
                {users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                        changeLevel={changeLevel}
                        currentUser={u.id === user.id}
                    />
                )}
            </List>
        );
    }

    componentDidMount() {
        const {fetchUsers} = this.props;
        fetchUsers();
    }
}

const mapStateToProps = state => ({
    users: state.admin.users,
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
