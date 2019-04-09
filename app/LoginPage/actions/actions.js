import {
  ADD_EMAIL,
  ADD_PASSWORD,
  SHOW_PASSWORD,
  CHECK_VALID_EMAIL,
} from './constants';

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

export function checkValidEmail(isValid) {
  return {
    type: CHECK_VALID_EMAIL,
    payload: isValid,
  };
}

/* FETCH POST */

export function postCreateAccount(dataObj) {
  return (dispatch) => {
    return fetch('http://localhost:3000/ral', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };
}
