import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from '../Signup';
import Login from '../Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;
