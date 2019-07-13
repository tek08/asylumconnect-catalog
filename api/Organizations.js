import axios from 'axios';

const Organizations = () => ({
  search: async ({ page = 1, perPage = 10, queryText }) => {
    return axios
      .get(`${process.env.ONE_DEGREE_API_URL}/v1/organizations.json`, {
        params: {
          api_key: process.env.ONE_DEGREE_API_KEY,
          locale: 'en',
          page,
          per_page: perPage,
          'query[text]': queryText,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  },
});

export default Organizations;
