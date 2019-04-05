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
} from '../actions/constants';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isInvalidPassword: false,
  isInvalidFirstName: false,
  isInvalidLastName: false,
  isPasswordShowing: false,
  isAgreementChecked: false,
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
    default:
      return state;
  }
};

export default signupReducer;
