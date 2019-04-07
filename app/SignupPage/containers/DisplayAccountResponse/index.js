import { connect } from 'react-redux';

import AccountCreation from '../../components/AccountCreation';

const mapStateToProps = state => ({
  loading: state.signupReducer.loading,
  successResponse: state.signupReducer.successResponse,
  errorResponse: state.signupReducer.errorResponse,
});

export default connect(mapStateToProps)(AccountCreation);
