import React from 'react';

import Grid from '@material-ui/core/Grid';

import LoginAccount from '../../containers/LoginAccount';

import style from './style';

const LoginForm = () => (
  <Grid container justify="center">
    <Grid item style={style.grid}>
      <LoginAccount />
    </Grid>
  </Grid>
);

export default LoginForm;
