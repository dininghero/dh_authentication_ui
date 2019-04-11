import { connect } from 'react-redux';

import EncryptionMessage from '../../components/EncryptionMessage';

const mapStateToProps = state => ({
  isSuccessful: state.signupReducer.isSuccessful,
  isFailure: state.signupReducer.isFailure,
});

export default connect(mapStateToProps)(EncryptionMessage);
