import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography';

const Welcome = memo(() => (
  <Typography
    variant="h2"
    align="center"
    style={{ fontSize: 36 }}
    color="secondary"
  >
    Welcome to DiningHero!
  </Typography>
));

export default Welcome;
