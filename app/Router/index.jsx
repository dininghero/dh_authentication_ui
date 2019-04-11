import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import SignupForm from '../SignupPage/components/SignupForm';
import LoginForm from '../LoginPage/components/LoginForm';

const Router = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        {/* <Route path="/lostpassword" component={} /> */}
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default Router;
