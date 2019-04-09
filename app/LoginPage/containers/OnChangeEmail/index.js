import { connect } from 'react-redux';

import { addEmail, checkValidEmail } from '../../actions/actions';

import Email from '../../../ReusableComponents/Email';

const mapStateToProps = state => ({
  isInvalidEmail: state.loginReducer.isInvalidEmail,
});

const mapDispatchToProps = dispatch => ({
  addEmail: (evt) => {
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(evt.target.value)) {
      dispatch(checkValidEmail(false));
      return dispatch(addEmail(evt.target.value));
    }
    if (evt.target.value.length === 0) {
      dispatch(checkValidEmail(false));
      return dispatch(addEmail(''));
    }
    return dispatch(checkValidEmail(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);
