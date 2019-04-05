import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const CreateAccount = ({ isButtonDisable }) => (
  <div style={{ textAlign: 'center' }}>
    <Button variant="contained" type="submit" disabled={!isButtonDisable} size="large" color="primary">
      CREATE MY ACCOUNT
    </Button>
  </div>
);

CreateAccount.propTypes = {
  isButtonDisable: PropTypes.bool.isRequired,
};

export default CreateAccount;
