import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const Email = ({ addEmail }) => (
  <TextField
    fullWidth
    label="Email Address"
    margin="normal"
    required
    onChange={addEmail}
    type="email"
  />
);

Email.propTypes = {
  addEmail: PropTypes.func.isRequired,
};

export default Email;
