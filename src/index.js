import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/search/App';
import AuthRoute from './components/AuthRoute';
import Login from './components/user/Login';
import Toolbar from "./components/Toolbar";
import Options from "./components/options/Options";
import Link from "./components/link/Link";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Admin from "./components/admin/Admin";

const noHeaderLinks = [
    '/login',
];

const HeaderWrapper = ({location}) => {
    return noHeaderLinks.includes(location.pathname) ? null : <Toolbar/>;
};

registerServiceWorker();
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router>
                <div>
                    <Route component={HeaderWrapper}/>
                    <Switch>
                        <AuthRoute path="/" exact component={App}/>
                        <Route path="/login" component={Login}/>
                        <AuthRoute path="/bookmarks" exact component={Bookmarks}/>
                        <AuthRoute path="/link" exact component={Link}/>
                        <AuthRoute path="/admin" exact component={Admin}/>
                        <AuthRoute path="/options" exact component={Options}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
