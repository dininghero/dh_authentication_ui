import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import ButtonPosition from './ButtonPosition';

const LoginButton = ({ isInvalidEmail }) => (
  <ButtonPosition>
    <Button
      variant="contained"
      type="submit"
      size="large"
      color="primary"
      fullWidth
      disabled={isInvalidEmail}
    >
      Log In
    </Button>
  </ButtonPosition>
);

LoginButton.propTypes = {
  isInvalidEmail: PropTypes.bool.isRequired,
};

export default LoginButton;
