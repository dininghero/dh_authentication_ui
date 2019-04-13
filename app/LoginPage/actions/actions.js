import {
  ADD_EMAIL,
  ADD_PASSWORD,
  SHOW_PASSWORD,
  CHECK_VALID_EMAIL,
  FETCH_POST_AUTHORISED,
  FETCH_POST_UNAUTHORISED,
  FETCH_POST_EMAIL_EXIST,
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

export function isAuthorised(authorisation) {
  return {
    type: FETCH_POST_AUTHORISED,
    payload: authorisation,
  };
}

export function isUnauthorised(authorisation) {
  return {
    type: FETCH_POST_UNAUTHORISED,
    payload: authorisation,
  };
}

export function checkAccountExist(emailExist) {
  return {
    type: FETCH_POST_EMAIL_EXIST,
    payload: emailExist,
  };
}


export function postCreateAccount(dataObj) {
  return (dispatch) => {
    return fetch('http://localhost:3000/ral', {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    })
      .then((res) => {
        // console.log(document.cookie);
        if (res.status === 200) {
          dispatch(isAuthorised(true));
        }
        if (res.status === 401) {
          dispatch(isUnauthorised(true));
        }
        if (res.status === 404) {
          dispatch(checkAccountExist(true));
        }
      })
      .catch(err => console.log(err));
  };
}
