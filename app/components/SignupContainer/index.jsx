import React from 'react';

import Grid from '@material-ui/core/Grid';

import SignupForm from '../SignupForm';

// string validation
// button disable when box not clicked

const SignupContainer = () => (
  <Grid container justify="center">
    <Grid item style={{ maxWidth: 450, marginTop: 30 }}>
      <SignupForm />
    </Grid>
  </Grid>
);

export default SignupContainer;
