import { connect } from 'react-redux';

import {
  toggleShowPassword,
  addPassword,
} from '../../actions/actions';

import LoginPassword from '../../components/LoginPassword';

const mapStateToProps = state => ({
  isPasswordShowing: state.loginReducer.isPasswordShowing,
});

const mapDispatchToProps = dispatch => ({
  toggleShowPassword: () => dispatch(toggleShowPassword()),
  addPassword: evt => dispatch(addPassword(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPassword);
