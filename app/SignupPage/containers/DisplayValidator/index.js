import { connect } from 'react-redux';

import Validator from '../../components/Validator';

const mapStateToProps = state => ({
  isInvalidPassword: state.signupReducer.isInvalidPassword,
  password: state.signupReducer.password,
});

export default connect(mapStateToProps)(Validator);
