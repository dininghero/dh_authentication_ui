import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Center from '../../../StyledComponents/Center';

const CreateAccount = ({
  isAgreementChecked,
  isInvalidFirstName,
  isInvalidLastName,
  isInvalidPassword,
  isInvalidEmail,
}) => (
  <Center>
    <Button
      variant="contained"
      type="submit"
      disabled={
        !isAgreementChecked
        || isInvalidFirstName
        || isInvalidLastName
        || isInvalidPassword
        || isInvalidEmail}
      size="large"
      color="primary"
    >
      CREATE MY ACCOUNT
    </Button>
  </Center>
);

CreateAccount.propTypes = {
  isAgreementChecked: PropTypes.bool.isRequired,
  isInvalidFirstName: PropTypes.bool.isRequired,
  isInvalidLastName: PropTypes.bool.isRequired,
  isInvalidPassword: PropTypes.bool.isRequired,
  isInvalidEmail: PropTypes.bool.isRequired,
};

export default CreateAccount;
