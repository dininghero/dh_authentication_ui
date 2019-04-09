import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const LastName = ({ addLastName, isInvalidLastName }) => (
  <TextField
    error={isInvalidLastName}
    helperText={isInvalidLastName ? 'Invalid Characters.' : null}
    fullWidth
    label="Last name"
    margin="normal"
    required
    onChange={addLastName}
    type="text"
  />
);

LastName.propTypes = {
  addLastName: PropTypes.func.isRequired,
  isInvalidLastName: PropTypes.bool.isRequired,
};

export default LastName;
