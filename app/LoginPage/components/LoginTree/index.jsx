import React from 'react';

import Grid from '@material-ui/core/Grid';

import OnChangeDisplayPassword from '../../containers/OnChangeDisplayPassword';
import OnChangeEmail from '../../containers/OnChangeEmail';
import OnLoginEvent from '../../containers/OnLoginEvent';
import DisableLoginButton from '../../containers/DisableLoginButton';

import CompanyLogo from '../../../ReusableComponents/CompanyLogo';
import LoginMessage from '../LoginMessage';
import NewUserMessage from '../NewUserMessage';
import ForgotPasswordMessage from '../ForgotPasswordMessage';

const LoginTree = () => (
  <Grid container spacing={24}>

    <Grid item xs={12}>
      <CompanyLogo />
    </Grid>

    <Grid item xs={12}>
      <LoginMessage />
    </Grid>

    <Grid item xs={12}>
      <OnChangeEmail />
    </Grid>

    <Grid item xs={12}>
      <OnChangeDisplayPassword />
    </Grid>

    <Grid item xs={12}>
      <OnLoginEvent />
    </Grid>

    <Grid item xs={12}>
      <DisableLoginButton />
    </Grid>

    <Grid item xs={12}>
      <ForgotPasswordMessage />
    </Grid>

    <Grid item xs={12}>
      <NewUserMessage />
    </Grid>

  </Grid>
);

export default LoginTree;
