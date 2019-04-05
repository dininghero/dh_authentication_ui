import React from 'react';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import OnChangeDisplayPassword from '../../../containers/OnChangeDisplayPassword';
import CheckAgreement from '../../../containers/CheckAgreement';
import DisableButton from '../../../containers/DisableButton';
import OnChangeFirstName from '../../../containers/OnChangeFirstName';
import OnChangeLastName from '../../../containers/OnChangeLastName';
import OnChangeEmail from '../../../containers/OnChangeEmail';

import CompanyLogo from '../CompanyLogo';
import Welcome from '../Welcome';
import Encryption from '../Encryption';

const SignupTree = () => (
  <Grid container spacing={24}>

    <Grid item xs={12}>
      <CompanyLogo />
    </Grid>

    <Grid item xs={12}>
      <Welcome />
    </Grid>

    <Grid item xs={6}>
      <OnChangeFirstName />
    </Grid>

    <Grid item xs={6}>
      <OnChangeLastName />
    </Grid>

    <Grid item xs={12}>
      <OnChangeEmail />
    </Grid>

    <Grid item xs={12}>
      <OnChangeDisplayPassword />
    </Grid>

    <Grid item xs={12}>
      <CheckAgreement />
    </Grid>

    <Grid item xs={12}>
      <DisableButton />
    </Grid>

    <Grid item xs={12}>
      <Divider
        variant="middle"
        style={{
          marginTop: 15,
          marginBottom: -10,
        }}
      />
    </Grid>

    <Grid item xs={12}>
      <Encryption />
    </Grid>

  </Grid>
);

export default SignupTree;
