import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography';

import style from './style';

const LoginMessage = memo(() => (
  <Typography
    variant="h3"
    align="center"
    style={style.font}
    color="secondary"
  >
    Log in to your DiningHero account:
  </Typography>
));

export default LoginMessage;
