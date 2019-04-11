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
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from '../actions/constants';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isInvalidPassword: false,
  isInvalidFirstName: false,
  isInvalidLastName: false,
  isInvalidEmail: false,
  isPasswordShowing: false,
  isAgreementChecked: false,
  isFailure: false,
  isSuccessful: false,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case ADD_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case ADD_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ADD_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SHOW_PASSWORD:
      return {
        ...state,
        isPasswordShowing: !state.isPasswordShowing,
      };
    case CHECK_AGREEMENT:
      return {
        ...state,
        isAgreementChecked: !state.isAgreementChecked,
      };
    case CHECK_VALID_PASSWORD:
      return {
        ...state,
        isInvalidPassword: action.payload,
      };
    case CHECK_VALID_FIRSTNAME:
      return {
        ...state,
        isInvalidFirstName: action.payload,
      };
    case CHECK_VALID_LASTNAME:
      return {
        ...state,
        isInvalidLastName: action.payload,
      };
    case CHECK_VALID_EMAIL:
      return {
        ...state,
        isInvalidEmail: action.payload,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isSuccessful: action.payload,
        isFailure: false,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        isFailure: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
