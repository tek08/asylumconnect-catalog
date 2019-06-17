import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE } from './account.actions';

const INITIAL_STATE = {
  loginAttempting: false,
  jwt: '',
  loginErrorMessage: '',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        loginAttempting: true,
        jwt: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginAttempting: false,
        jwt: action.jwt,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginAttempting: false,
        jwt: '',
        loginErrorMessage: action.error,
      };
    default:
      return state;
  }
};

export default login;
