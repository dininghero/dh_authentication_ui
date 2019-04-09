import { connect } from 'react-redux';

import {
  toggleShowPassword,
  addPassword,
} from '../../actions/actions';

import Password from '../../components/Password';

const mapStateToProps = state => ({
  isPasswordShowing: state.loginReducer.isPasswordShowing,
});

const mapDispatchToProps = dispatch => ({
  toggleShowPassword: () => dispatch(toggleShowPassword()),
  addPassword: evt => dispatch(addPassword(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);
