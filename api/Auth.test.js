import mockAxios from 'axios';
import Auth from './Auth';

it('Auth returns a jwt when posting is successful', async () => {
  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: { jwt: 'a-long-string-with-letters-and-numbers' },
    }),
  );

  const authAPI = new Auth();
  const loginResponse = await authAPI.login({
    body: { username: 'foo@bar.baz', password: 'foobarbaz' },
  });

  expect(loginResponse).toEqual({
    jwt: 'a-long-string-with-letters-and-numbers',
  });
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(mockAxios.post).toHaveBeenCalledWith(
    `${process.env.ONE_DEGREE_AUTH_URL}/api/session`,
    {
      session: {
        login_key: 'foo@bar.baz',
        password: 'foobarbaz',
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        OneDegreeSource: 'asylumconnect',
      },
    },
  );
});

it('Auth returns an error when posting fails', async () => {
  mockAxios.post.mockImplementationOnce(() =>
    Promise.reject(new Error('Bad credentials')),
  );

  const authAPI = new Auth();
  const loginResponse = await authAPI.login({
    body: { username: 'wrong@user.name', password: 'bad-password' },
  });

  expect(loginResponse).toEqual(new Error('Bad credentials'));
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(mockAxios.post).toHaveBeenCalledWith(
    `${process.env.ONE_DEGREE_AUTH_URL}/api/session`,
    {
      session: {
        login_key: 'wrong@user.name',
        password: 'bad-password',
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        OneDegreeSource: 'asylumconnect',
      },
    },
  );
});
