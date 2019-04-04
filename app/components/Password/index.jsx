import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  handleClickShowPassword() {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  render() {
    return (
      <FormControl fullWidth>
        <InputLabel>Password</InputLabel>
        <Input
          type={this.state.showPassword ? 'text' : 'password'}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton onClick={() => this.handleClickShowPassword()}>
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )}
        />
        {/* <FormHelperText>Must have at least 8 characters</FormHelperText>
        <FormHelperText>Must contain at least one lowercase letter</FormHelperText>
        <FormHelperText>Must contain at least one uppercase letter</FormHelperText>
        <FormHelperText>Must contain at least one numeric digit</FormHelperText>
        <FormHelperText>Must contain at least one special character</FormHelperText> */}
      </FormControl>
    );
  }
}

export default Password;
