import { connect } from 'react-redux';

import CreateAccount from '../components/CreateAccount';

const mapStateToProps = state => ({
  isAgreementChecked: state.signupReducer.isAgreementChecked,
  isInvalidFirstName: state.signupReducer.isInvalidFirstName,
  isInvalidLastName: state.signupReducer.isInvalidLastName,
  isInvalidPassword: state.signupReducer.isInvalidPassword,
  isInvalidEmail: state.signupReducer.isInvalidEmail,
});

export default connect(mapStateToProps, null)(CreateAccount);
