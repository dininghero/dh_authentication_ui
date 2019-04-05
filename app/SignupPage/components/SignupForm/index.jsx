import React from 'react';

import Grid from '@material-ui/core/Grid';

import SignupTree from '../SignupTree';

import style from './style';

const SignupForm = () => (
  <Grid container justify="center">
    <Grid item style={style.grid}>
      <form>
        <SignupTree />
      </form>
    </Grid>
  </Grid>
);

export default SignupForm;
