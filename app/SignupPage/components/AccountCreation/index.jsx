import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

import Center from '../../../StyledComponents/Center';

const AccountCreation = ({ loading, successResponse, errorResponse }) => {
  if (errorResponse) {
    return (
      <Center>
        <Chip
          label={errorResponse}
          icon={<ErrorIcon style={{ color: '#ffffff' }} />}
          style={{ background: '#dc3545', color: '#ffffff' }}
        />
      </Center>
    );
  }

  if (loading) {
    return (
      <Center>
        <CircularProgress />
      </Center>
    );
  }

  return (
    <React.Fragment>
      {successResponse === '' ? null : (
        <Center>
          <Chip
            label={successResponse}
            icon={<CheckCircleIcon style={{ color: '#ffffff' }} />}
            style={{ background: '#28a745', color: '#ffffff' }}
          />
        </Center>
      )}
    </React.Fragment>
  );
};

AccountCreation.propTypes = {
  loading: PropTypes.bool.isRequired,
  successResponse: PropTypes.string.isRequired,
  errorResponse: PropTypes.string,
};

AccountCreation.defaultProps = {
  errorResponse: null,
};


export default AccountCreation;
