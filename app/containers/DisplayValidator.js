import { connect } from 'react-redux';

import Validator from '../components/SignupPage/Validator';

const mapStateToProps = state => ({
  isInvalidPassword: state.signupReducer.isInvalidPassword,
  password: state.signupReducer.password,
});

export default connect(mapStateToProps, null)(Validator);
