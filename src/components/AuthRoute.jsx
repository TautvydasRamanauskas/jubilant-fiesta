import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const AuthRoute = ({user, path, component}) => (
    user.id ?
        <Route path={path} component={component}/> :
        <Redirect to="/login"/>
);

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(AuthRoute);