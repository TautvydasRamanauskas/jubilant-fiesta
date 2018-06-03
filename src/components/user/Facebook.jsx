import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/user-actions';
import * as optionsActions from '../../actions/options-actions';
import {Redirect} from "react-router-dom";

const Facebook = ({user, login, reset}) => {
    if (!user.id) {
        return (
            <div className="facebook-login">
                <FacebookLogin
                    appId="195931674369126"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={login}
                />
            </div>
        )
    }
    reset(user.options);
    return <Redirect to="/"/>
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, userActions, optionsActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);