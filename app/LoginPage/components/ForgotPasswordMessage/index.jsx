import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography';

const ForgotPasswordMessage = memo(() => (
  <Typography
    variant="h2"
    align="center"
    style={{ fontSize: 13 }}
    color="secondary"
  >
    Forgot your password?
  </Typography>
));

export default ForgotPasswordMessage;
