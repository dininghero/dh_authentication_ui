import React from 'react';
import PropTypes from 'prop-types';

import Unauthorised from '../Unauthorised';
import AccountNotFound from '../AccountNotFound';

const LoginEventMessage = ({ isAuthorised, isUnauthorised, emailExist }) => {
  if (emailExist) {
    return (
      <AccountNotFound />
    );
  }

  if (isUnauthorised) {
    return (
      <Unauthorised />
    );
  }

  return (
    <div>
      {isAuthorised ? 'Login Success!' : null}
    </div>
  );
};

LoginEventMessage.propTypes = {
  isAuthorised: PropTypes.bool.isRequired,
  isUnauthorised: PropTypes.bool.isRequired,
  emailExist: PropTypes.bool.isRequired,
};

export default LoginEventMessage;
