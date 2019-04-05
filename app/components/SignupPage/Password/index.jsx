import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';

const Password = ({
  isPasswordShowing,
  toggleShowPassword,
  addPassword,
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
    {isInvalidPassword ? (
      <div>
        <FormHelperText error>Must have at least 8 characters</FormHelperText>
        <FormHelperText error>Must contain at least one lowercase letter</FormHelperText>
        <FormHelperText error>Must contain at least one uppercase letter</FormHelperText>
        <FormHelperText error>Must contain at least one numeric digit</FormHelperText>
        <FormHelperText error>Must contain at least one special character</FormHelperText>
      </div>
    ) : null}
  </FormControl>
);

Password.propTypes = {
  isPasswordShowing: PropTypes.bool.isRequired,
  toggleShowPassword: PropTypes.func.isRequired,
  addPassword: PropTypes.func.isRequired,
  isInvalidPassword: PropTypes.bool.isRequired,
};

export default Password;
