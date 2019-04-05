import { connect } from 'react-redux';

import { addFirstName, checkValidFirstName } from '../actions/actions';

import FirstName from '../components/FirstName';

const mapStateToProps = state => ({
  isInvalidFirstName: state.signupReducer.isInvalidFirstName,
});

const mapDispatchToProps = dispatch => ({
  addFirstName: (evt) => {
    if (/^[a-zA-Z]+$/.test(evt.target.value)) {
      dispatch(checkValidFirstName(false));
      return dispatch(addFirstName(evt.target.value));
    }
    return dispatch(checkValidFirstName(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstName);
