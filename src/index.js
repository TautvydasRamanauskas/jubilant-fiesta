import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import AuthRoute from './components/AuthRoute';
import Login from './components/Login';

const noHeaderLinks = [
    '/login',
];

// const HeaderWrapper = ({location}) => {
//     return noHeaderLinks.includes(location.pathname) ? null : <PageHeader/>;
// };

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                {/*<Route component={HeaderWrapper}/>*/}
                <Switch>
                    <AuthRoute path="/" exact component={App}/>
                    <Route path="/login" component={Login}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
