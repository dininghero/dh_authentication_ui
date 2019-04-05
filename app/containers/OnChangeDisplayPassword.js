import { connect } from 'react-redux';

import {
  toggleShowPassword,
  addPassword,
  checkValidPassword,
} from '../actions/actions';

import Password from '../components/SignupPage/Password';

const mapStateToProps = state => ({
  isPasswordShowing: state.signupReducer.isPasswordShowing,
  isInvalidPassword: state.signupReducer.isInvalidPassword,
});

const mapDispatchToProps = dispatch => ({
  toggleShowPassword: () => dispatch(toggleShowPassword()),
  addPassword: evt => dispatch(addPassword(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);


// when user add one letter toggle isInvalidPassword to true
// function that validate steps by steps password requirement
// change color to requirement to green instead of red (emoji)
