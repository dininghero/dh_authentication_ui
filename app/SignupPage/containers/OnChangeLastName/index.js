import { connect } from 'react-redux';

import { addLastName, checkValidLastName } from '../../actions/actions';

import LastName from '../../components/LastName';

const mapStateToProps = state => ({
  isInvalidLastName: state.signupReducer.isInvalidLastName,
});

const mapDispatchToProps = dispatch => ({
  addLastName: (evt) => {
    if (/^[a-zA-Z]+$/.test(evt.target.value)) {
      dispatch(checkValidLastName(false));
      return dispatch(addLastName(evt.target.value));
    }
    if (evt.target.value.length === 0) {
      dispatch(checkValidLastName(false));
      return dispatch(addLastName(''));
    }
    return dispatch(checkValidLastName(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LastName);
