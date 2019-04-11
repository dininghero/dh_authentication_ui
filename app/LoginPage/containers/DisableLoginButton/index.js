import { connect } from 'react-redux';

import LoginButton from '../../components/LoginButton';

const mapStateToProps = state => ({
  isInvalidEmail: state.loginReducer.isInvalidEmail,
});

export default connect(mapStateToProps)(LoginButton);
