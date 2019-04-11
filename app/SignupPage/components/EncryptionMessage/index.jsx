import React from 'react';
import PropTypes from 'prop-types';

import EncryptionLock from '../EncryptionLock';
import GreenLock from '../GreenLock';
import RedLock from '../RedLock';

const EncryptionMessage = ({ isSuccessful, isFailure }) => {
  if (isFailure) {
    return (
      <RedLock />
    );
  }

  if (isSuccessful) {
    return (
      <GreenLock />
    );
  }

  return (
    <EncryptionLock />
  );
};

EncryptionMessage.propTypes = {
  isFailure: PropTypes.bool.isRequired,
  isSuccessful: PropTypes.bool.isRequired,
};

export default EncryptionMessage;
