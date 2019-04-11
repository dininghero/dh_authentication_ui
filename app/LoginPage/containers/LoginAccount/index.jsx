import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { postCreateAccount } from '../../actions/actions';

import LoginTree from '../../components/LoginTree';

const LoginAccount = ({
  email,
  password,
  createAccount,
}) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    createAccount({ email: email, pw: password });
  }}
  >
    <LoginTree />
  </form>
);

const mapStateToProps = state => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
});

const mapDispatchToProps = dispatch => ({
  createAccount: createAccountObj => dispatch(postCreateAccount(createAccountObj)),
});

LoginAccount.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  createAccount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginAccount);
