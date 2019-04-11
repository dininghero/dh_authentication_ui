import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { postCreateAccount } from '../../actions/actions';

import SignupTree from '../../components/SignupTree';

const CreateAccount = ({
  firstName,
  lastName,
  email,
  password,
  createAccount,
}) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    createAccount({
      email: email,
      pw: password,
      firstname: firstName,
      lastname: lastName,
    });
    e.target.reset();
  }}
  >
    <SignupTree />
  </form>
);

const mapStateToProps = state => ({
  firstName: state.signupReducer.firstName,
  lastName: state.signupReducer.lastName,
  email: state.signupReducer.email,
  password: state.signupReducer.password,
});

const mapDispatchToProps = dispatch => ({
  createAccount: createAccountObj => dispatch(postCreateAccount(createAccountObj)),
});

CreateAccount.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  createAccount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
