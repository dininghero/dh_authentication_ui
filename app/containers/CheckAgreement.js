import { connect } from 'react-redux';

import { toggleCheckAgreement } from '../actions/actions';

import Agreement from '../components/SignupPage/Agreement';

const mapStateToProps = state => ({
  isAgreementChecked: state.signupReducer.isAgreementChecked,
});

const mapDispatchToProps = dispatch => ({
  toggleCheckAgreement: () => dispatch(toggleCheckAgreement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Agreement);
