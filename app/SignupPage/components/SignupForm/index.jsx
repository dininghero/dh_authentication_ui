import React from 'react';

import Grid from '@material-ui/core/Grid';

import CreateAccount from '../../containers/CreateAccount';

import style from './style';

const SignupForm = () => (
  <Grid container justify="center">
    <Grid item style={style.grid}>
      <CreateAccount />
    </Grid>
  </Grid>
);

export default SignupForm;
