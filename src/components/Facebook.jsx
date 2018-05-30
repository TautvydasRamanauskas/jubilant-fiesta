import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/user-actions';

const Facebook = ({user, login}) => {
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
    return null;
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);