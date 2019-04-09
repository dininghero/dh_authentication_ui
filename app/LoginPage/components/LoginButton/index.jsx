import React, { memo } from 'react';

import Button from '@material-ui/core/Button';

import ButtonPosition from './ButtonPosition';

const CreateAccountButton = memo(() => (
  <ButtonPosition>
    <Button
      variant="contained"
      type="submit"
      size="large"
      color="primary"
      fullWidth
    >
      Log In
    </Button>
  </ButtonPosition>
));

export default CreateAccountButton;
