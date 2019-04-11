import {
  ADD_EMAIL,
  ADD_PASSWORD,
  SHOW_PASSWORD,
  CHECK_VALID_EMAIL,
  FETCH_POST_AUTHORISED,
  FETCH_POST_UNAUTHORISED,
  FETCH_POST_EMAIL_EXIST,
} from '../actions/constants';

const initialState = {
  email: '',
  password: '',
  isInvalidEmail: false,
  isPasswordShowing: false,
  isAuthorised: false,
  isUnauthorised: false,
  emailExist: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case CHECK_VALID_EMAIL:
      return {
        ...state,
        isInvalidEmail: action.payload,
      };
    case FETCH_POST_AUTHORISED:
      return {
        ...state,
        isAuthorised: action.payload,
        isUnauthorised: false,
        emailExist: false,
      };
    case FETCH_POST_UNAUTHORISED:
      return {
        ...state,
        isUnauthorised: action.payload,
        emailExist: false,
      };
    case FETCH_POST_EMAIL_EXIST:
      return {
        ...state,
        emailExist: action.payload,
        isUnauthorised: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
