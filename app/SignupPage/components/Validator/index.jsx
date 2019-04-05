import React from 'react';
import PropTypes from 'prop-types';

import FormHelperText from '@material-ui/core/FormHelperText';

const Validator = ({ isInvalidPassword, password }) => (
  <div>
    {isInvalidPassword ? (
      <div>
        <FormHelperText error={password.length < 8}>
          Must have at least 8 characters.
        </FormHelperText>
        <FormHelperText error={!(/[a-z]/.test(password))}>
          Must contain at least one lowercase letter.
        </FormHelperText>
        <FormHelperText error={!(/[A-Z]/.test(password))}>
          Must contain at least one uppercase letter.
        </FormHelperText>
        <FormHelperText error={!(/\d/.test(password))}>
          Must contain at least one numeric digit.
        </FormHelperText>
        <FormHelperText error={!(/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(password))}>
          Must contain at least one special character.
        </FormHelperText>
      </div>
    ) : null}
  </div>
);

Validator.propTypes = {
  isInvalidPassword: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
};

export default Validator;
