import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography';

const LoginMessage = memo(() => (
  <Typography
    variant="h2"
    align="center"
    style={{ fontSize: 28 }}
    color="secondary"
  >
    Log in to your DiningHero account:
  </Typography>
));

export default LoginMessage;
