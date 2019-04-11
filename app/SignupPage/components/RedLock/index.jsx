import React, { memo } from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Lock from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';

const RedLock = memo(() => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="center"
  >
    <Grid item>
      <IconButton disabled>
        <Lock style={{ color: '#dc3545' }} />
      </IconButton>
    </Grid>
    <Grid item>
      <Typography variant="caption" style={{ color: '#dc3545' }}>
        Email already exist!
      </Typography>
    </Grid>
  </Grid>
));

export default RedLock;
