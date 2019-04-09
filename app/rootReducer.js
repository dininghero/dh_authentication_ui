import { combineReducers } from 'redux';
import signupReducer from './SignupPage/reducers/signupReducer';
import loginReducer from './LoginPage/reducers/loginReducer';

export default combineReducers({
  signupReducer,
  loginReducer,
});
