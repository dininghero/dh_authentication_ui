import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import SignupForm from '../SignupPage/SignupForm';
import Login from '../LoginPage/Login';

const Router = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignupForm} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Router;
