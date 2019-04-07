import React from 'react';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import OnChangeDisplayPassword from '../../containers/OnChangeDisplayPassword';
import CheckAgreement from '../../containers/CheckAgreement';
import DisableButton from '../../containers/DisableButton';
import OnChangeFirstName from '../../containers/OnChangeFirstName';
import OnChangeLastName from '../../containers/OnChangeLastName';
import OnChangeEmail from '../../containers/OnChangeEmail';
import DisplayAccountResponse from '../../containers/DisplayAccountResponse';

import CompanyLogo from '../CompanyLogo';
import Welcome from '../Welcome';
import EncryptionIcon from '../EncryptionIcon';

import style from './style';

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
        style={style.divider}
      />
    </Grid>

    <Grid item xs={12}>
      <EncryptionIcon />
    </Grid>

    <Grid item xs={12}>
      <DisplayAccountResponse />
    </Grid>

  </Grid>
);

export default SignupTree;
