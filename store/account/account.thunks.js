import axios from 'axios';
import { accountActions } from '.';

const login = (username, password) => async (dispatch) => {
  dispatch(accountActions.loginAttempt());

  axios
    .post('/login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.jwt) {
        dispatch(accountActions.loginSuccess(response.data.jwt));
        document.cookie = `jwt=${response.data.jwt}`;
      } else {
        dispatch(accountActions.loginFailure(response.data.message));
      }
    })
    .catch((error) => {
      dispatch(accountActions.loginFailure(error.data.message));
    });
};

export default {
  login,
};
