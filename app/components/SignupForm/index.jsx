import React from 'react';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import CompanyLogo from '../CompanyLogo';
import Welcome from '../Welcome';
import FirstName from '../FirstName';
import LastName from '../LastName';
import Email from '../Email';
import Password from '../Password';
import Agreement from '../Agreement';
import CreateAccount from '../CreateAccount';
import Encryption from '../Encryption';

const SignupForm = () => (
  <Grid
    container
    spacing={24}
  >

    <Grid item xs={12} style={{ textAlign: 'center' }}>
      <CompanyLogo />
    </Grid>

    <Grid item xs={12}>
      <Welcome />
    </Grid>

    <Grid item xs={6}>
      <FirstName />
    </Grid>

    <Grid item xs={6}>
      <LastName />
    </Grid>

    <Grid item xs={12}>
      <Email />
    </Grid>

    <Grid item xs={12}>
      <Password />
    </Grid>

    <Grid item xs={12}>
      <Agreement />
    </Grid>

    <Grid item xs={12} style={{ textAlign: 'center' }}>
      <CreateAccount />
    </Grid>

    <Grid item xs={12}>
      <Divider variant="middle" style={{ marginTop: 15, marginBottom: -10 }} />
    </Grid>

    <Grid item xs={12}>
      <Encryption />
    </Grid>

  </Grid>
);

export default SignupForm;
