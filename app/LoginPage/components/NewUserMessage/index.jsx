import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

const NewUserMessage = memo(() => (
  <Typography
    variant="h2"
    align="center"
    style={{ fontSize: 15 }}
    color="secondary"
  >
    {'New User? '}
    <span><Link to="/signup">Sign Up</Link></span>
  </Typography>
));

export default NewUserMessage;
