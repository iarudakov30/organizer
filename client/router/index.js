import React from 'react';

import { Route } from 'react-router'
import { Switch } from 'react-router-dom';

import App from '../containers/App';

import Auth from '../containers/Auth';
import Login from '../containers/Login';
import Logout from '../containers/Logout';
import Registry from '../containers/Registry';
import Todos from '../containers/Todos';
import Main from '../containers/Main';
import Notes from '../containers/Notes';

import NotFound from '../components/NotFound';

import { ConnectedRouter } from 'react-router-redux'
import history from '../services/history'

export default (
    <App>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/registration' component={Registry} />
                <Auth>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/notes' component={Notes} />
                        <Route exact path='/tasklist' component={Todos} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Auth>
            </Switch>
        </ConnectedRouter >
    </App>
);