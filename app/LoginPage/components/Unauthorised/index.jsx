import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography';

const Unauthorised = memo(() => (
  <Typography
    variant="caption"
    align="center"
    style={{ color: '#dc3545' }}
    color="secondary"
  >
    Wrong Password!
  </Typography>
));

export default Unauthorised;
