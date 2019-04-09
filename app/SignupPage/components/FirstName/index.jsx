import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const FirstName = ({ addFirstName, isInvalidFirstName }) => (
  <TextField
    error={isInvalidFirstName}
    helperText={isInvalidFirstName ? 'Invalid Characters.' : null}
    fullWidth
    label="First name"
    margin="normal"
    required
    onChange={addFirstName}
    type="text"
  />
);

FirstName.propTypes = {
  addFirstName: PropTypes.func.isRequired,
  isInvalidFirstName: PropTypes.bool.isRequired,
};

export default FirstName;
