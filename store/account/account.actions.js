export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginAttempt = () => ({
  type: LOGIN_ATTEMPT,
});

export const loginSuccess = (jwt) => ({
  type: LOGIN_SUCCESS,
  jwt,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export default {
  loginAttempt,
  loginSuccess,
  loginFailure,
};
