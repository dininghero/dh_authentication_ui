import {
  ADD_FIRSTNAME,
  ADD_LASTNAME,
  ADD_EMAIL,
  ADD_PASSWORD,
  SHOW_PASSWORD,
  CHECK_AGREEMENT,
  CHECK_VALID_PASSWORD,
  CHECK_VALID_FIRSTNAME,
  CHECK_VALID_LASTNAME,
  CHECK_VALID_EMAIL,
} from './constants';

export function addFirstName(fn) {
  return {
    type: ADD_FIRSTNAME,
    payload: fn,
  };
}

export function addLastName(ln) {
  return {
    type: ADD_LASTNAME,
    payload: ln,
  };
}

export function addEmail(email) {
  return {
    type: ADD_EMAIL,
    payload: email,
  };
}

export function addPassword(pw) {
  return {
    type: ADD_PASSWORD,
    payload: pw,
  };
}

export function toggleShowPassword() {
  return {
    type: SHOW_PASSWORD,
  };
}

export function toggleCheckAgreement() {
  return {
    type: CHECK_AGREEMENT,
  };
}

export function checkValidPassword(isValid) {
  return {
    type: CHECK_VALID_PASSWORD,
    payload: isValid,
  };
}

export function checkValidFirstName(isValid) {
  return {
    type: CHECK_VALID_FIRSTNAME,
    payload: isValid,
  };
}

export function checkValidLastName(isValid) {
  return {
    type: CHECK_VALID_LASTNAME,
    payload: isValid,
  };
}

export function checkValidEmail(isValid) {
  return {
    type: CHECK_VALID_EMAIL,
    payload: isValid,
  };
}
