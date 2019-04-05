import { connect } from 'react-redux';

import {
  toggleShowPassword,
  addPassword,
  checkValidPassword,
} from '../actions/actions';

import Password from '../components/Password';

const mapStateToProps = state => ({
  isPasswordShowing: state.signupReducer.isPasswordShowing,
  isInvalidPassword: state.signupReducer.isInvalidPassword,
});

const mapDispatchToProps = dispatch => ({
  toggleShowPassword: () => dispatch(toggleShowPassword()),
  addPassword: (evt) => {
    const validation = {
      lower: false,
      upper: false,
      number: false,
      special: false,
      length: false,
    };

    if (/[a-z]/.test(evt.target.value)) {
      dispatch(addPassword(evt.target.value));
      validation.lower = true;
    }
    if (/[A-Z]/.test(evt.target.value)) {
      dispatch(addPassword(evt.target.value));
      validation.upper = true;
    }
    if (/\d/.test(evt.target.value)) {
      dispatch(addPassword(evt.target.value));
      validation.number = true;
    }
    if (/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(evt.target.value)) {
      dispatch(addPassword(evt.target.value));
      validation.special = true;
    }
    if (evt.target.value.length >= 8) {
      dispatch(addPassword(evt.target.value));
      validation.length = true;
    }

    if (validation.lower
      && validation.upper
      && validation.number
      && validation.special
      && validation.length) {
      return dispatch(checkValidPassword(false));
    }

    return dispatch(checkValidPassword(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);
