import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import SignupContainer from '../SignupContainer';
import Login from '../Login';

const Router = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignupContainer} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Router;
