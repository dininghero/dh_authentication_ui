import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import DisplayValidator from '../../../containers/DisplayValidator';

const Password = ({
  toggleShowPassword,
  addPassword,
  isPasswordShowing,
  isInvalidPassword,
}) => (
  <FormControl fullWidth required>
    <InputLabel>Password</InputLabel>
    <Input
      error={isInvalidPassword}
      onChange={addPassword}
      type={isPasswordShowing ? 'text' : 'password'}
      endAdornment={(
        <InputAdornment position="end">
          <IconButton onClick={() => toggleShowPassword()}>
            {isPasswordShowing ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      )}
    />
    <DisplayValidator />
  </FormControl>
);

Password.propTypes = {
  isPasswordShowing: PropTypes.bool.isRequired,
  toggleShowPassword: PropTypes.func.isRequired,
  addPassword: PropTypes.func.isRequired,
  isInvalidPassword: PropTypes.bool.isRequired,
};

export default Password;
