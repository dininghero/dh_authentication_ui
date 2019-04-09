import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography';

import style from './style';

const Welcome = memo(() => (
  <Typography
    variant="h2"
    align="center"
    style={style.font}
    color="secondary"
  >
    Welcome to DiningHero!
  </Typography>
));

export default Welcome;
