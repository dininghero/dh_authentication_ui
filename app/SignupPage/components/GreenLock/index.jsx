import React, { memo } from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LockOpen from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';

const GreenLock = memo(() => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="center"
  >
    <Grid item>
      <IconButton disabled>
        <LockOpen style={{ color: '#28a745' }} />
      </IconButton>
    </Grid>
    <Grid item>
      <Typography variant="caption" style={{ color: '#28a745' }}>
        Account created!
      </Typography>
    </Grid>
  </Grid>
));

export default GreenLock;
