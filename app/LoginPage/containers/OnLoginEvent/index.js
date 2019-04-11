import { connect } from 'react-redux';

import LoginEventMessage from '../../components/LoginEventMessage';

const mapStateToProps = state => ({
  isAuthorised: state.loginReducer.isAuthorised,
  isUnauthorised: state.loginReducer.isUnauthorised,
  emailExist: state.loginReducer.emailExist,
});

export default connect(mapStateToProps)(LoginEventMessage);
