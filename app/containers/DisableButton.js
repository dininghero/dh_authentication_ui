import { connect } from 'react-redux';

import CreateAccount from '../components/SignupPage/CreateAccount';

const mapStateToProps = state => ({
  isButtonDisable: state.signupReducer.isAgreementChecked,
});

export default connect(mapStateToProps, null)(CreateAccount);
