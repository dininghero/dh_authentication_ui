import {
  ADD_EMAIL,
  ADD_PASSWORD,
  SHOW_PASSWORD,
  CHECK_VALID_EMAIL,
} from '../actions/constants';

const initialState = {
  email: '',
  password: '',
  isInvalidEmail: false,
  isPasswordShowing: false,
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
    default:
      return state;
  }
};

export default loginReducer;
