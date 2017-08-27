import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  Route,
  Router,
  Link
} from 'react-router'

import './index.css';
import App from './components/App';
import AuthComponent from './components/auth'
import SignUpComponent from './components/signupAuth'
import LoginAuth from './components/loginAuth'

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <Router history={browserHistory}>
        <Route exact path="/" component={App} />
        <Route path="/auth" component={AuthComponent} />
        <Route path="/signup" component={SignUpComponent} />
        <Route path="/login" component={LoginAuth} />
    </Router>
, document.getElementById('root'));