import { connect } from 'react-redux';

import { addEmail } from '../actions/actions';

import Email from '../components/Email';

const mapDispatchToProps = dispatch => ({
  addEmail: evt => dispatch(addEmail(evt.target.value)),
});

export default connect(null, mapDispatchToProps)(Email);
