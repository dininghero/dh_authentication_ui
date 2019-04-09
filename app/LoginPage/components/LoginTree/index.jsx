import React from 'react';

import Grid from '@material-ui/core/Grid';

import OnChangeDisplayPassword from '../../containers/OnChangeDisplayPassword';
import OnChangeEmail from '../../containers/OnChangeEmail';

import LoginButton from '../LoginButton';
import CompanyLogo from '../../../ReusableComponents/CompanyLogo';
import LoginMessage from '../LoginMessage';

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
      <LoginButton />
    </Grid>

  </Grid>
);

export default LoginTree;
