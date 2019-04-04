import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';


import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Lock from '@material-ui/icons/Lock';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import dhLogo from '../../images/dh_logo.png';

// change color
// make components
// string validation
// button disable when box not clicked


class Signup extends Component {
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
      <Grid
        container
        justify="center"
      >
        <Grid item style={{ maxWidth: 450, marginTop: 30 }}>

          <Grid container spacing={24}>

            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <img src={dhLogo} alt="" width="200" />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h2" align="center" style={{ fontSize: 36 }}>
                Welcome to DiningHero!
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First name"
                margin="normal"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last name"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Password</InputLabel>
                <Input
                  type={this.state.showPassword ? 'text' : 'password'}
                  endAdornment={(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={() => this.handleClickShowPassword()}
                      >
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
            </Grid>

            <Grid item xs={12}>
              {/* <FormControlLabel
                control={(
                  <Checkbox />
                )}
                label={'By clicking "Create My Account", you accept our Term of Service and Privacy Policy.'}
              /> */}
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="baseline"
                spacing={40}
              >
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <Checkbox />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="caption" align="center">
                    {'By clicking "Create My Account", you accept our Term of Service and Privacy Policy.'}
                  </Typography>
                </Grid>
                <Grid item xs={1} />
              </Grid>

            </Grid>

            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button variant="contained" disabled={false} size="large" color="primary">
                CREATE MY ACCOUNT
              </Button>
            </Grid>

          </Grid>

          <br />

          <Divider variant="middle" />

          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <IconButton disabled>
              <Lock />
            </IconButton>
            <Typography variant="caption" gutterBottom>
              256-bit Encryption
            </Typography>
          </Grid>



        </Grid>
      </Grid>

    );
  }
}

export default Signup;
