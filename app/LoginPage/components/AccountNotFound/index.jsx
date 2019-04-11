import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography';

const AccountNotFound = memo(() => (
  <Typography
    variant="caption"
    align="center"
    style={{ color: '#dc3545' }}
    color="secondary"
  >
    Account not found! Try another email.
  </Typography>
));

export default AccountNotFound;
