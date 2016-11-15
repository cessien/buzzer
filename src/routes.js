// src/routes.js
import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'
import Base from './components/Base';
import IndexPage from './components/IndexPage';
import Login from './components/Login';
import Splash from './components/Splash';
import Register from './components/Register';
import Profile from './components/Profile';
import NotFoundPage from './components/NotFoundPage';
import requireAuth from './utils/authenticated';

const routes = (
  <Route path="/" component={Base} history={browserHistory}>
    <IndexRoute component={Splash} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/user/profile" component={Profile} onEnter={requireAuth} />
    <Route path="/home" component={IndexPage} onEnter={requireAuth}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
