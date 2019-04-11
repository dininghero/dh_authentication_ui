import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const Email = ({ addEmail, isInvalidEmail }) => (
  <TextField
    error={isInvalidEmail}
    helperText={isInvalidEmail ? 'Please enter a valid email address.' : null}
    fullWidth
    label="Email Address"
    required
    onChange={addEmail}
    type="text"
  />
);

Email.propTypes = {
  addEmail: PropTypes.func.isRequired,
  isInvalidEmail: PropTypes.bool.isRequired,
};

export default Email;
