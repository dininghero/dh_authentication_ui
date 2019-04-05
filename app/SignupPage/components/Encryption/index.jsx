import React from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Lock from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';

const Encryption = () => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="center"
  >
    <Grid item>
      <IconButton disabled>
        <Lock />
      </IconButton>
    </Grid>
    <Grid item>
      <Typography variant="caption" color="textSecondary">
        256-bit Encryption
      </Typography>
    </Grid>
  </Grid>
);

export default Encryption;
