import { connect } from 'react-redux';

import CreateAccountButton from '../../components/CreateAccountButton';

const mapStateToProps = state => ({
  isAgreementChecked: state.signupReducer.isAgreementChecked,
  isInvalidFirstName: state.signupReducer.isInvalidFirstName,
  isInvalidLastName: state.signupReducer.isInvalidLastName,
  isInvalidPassword: state.signupReducer.isInvalidPassword,
  isInvalidEmail: state.signupReducer.isInvalidEmail,
});

export default connect(mapStateToProps)(CreateAccountButton);
