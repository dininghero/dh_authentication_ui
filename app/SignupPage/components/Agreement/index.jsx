import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const Agreement = ({ isAgreementChecked, toggleCheckAgreement }) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="baseline"
    spacing={40}
  >
    <Grid item xs={1}>
      <Checkbox
        color="primary"
        checked={isAgreementChecked}
        onChange={() => toggleCheckAgreement()}
      />
    </Grid>
    <Grid item xs={9}>
      <Typography variant="caption" align="center" color="textSecondary">
        {'By clicking "Create My Account", you accept our Term of Service and Privacy Policy.'}
      </Typography>
    </Grid>
  </Grid>
);

Agreement.propTypes = {
  isAgreementChecked: PropTypes.bool.isRequired,
  toggleCheckAgreement: PropTypes.func.isRequired,
};


export default Agreement;
