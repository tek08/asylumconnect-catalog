import express from 'express';
import next from 'next';
import 'regenerator-runtime/runtime';
import bodyParser from 'body-parser';

import routes from './routes';
import Auth from './api/Auth';

require('dotenv').config({ path: './.env' });

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  server.post('/login', async (req, res) => {
    const authAPI = new Auth();
    const response = await authAPI
      .login(req)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });

    res.end(JSON.stringify(response));
  });

  server.use(handler).listen(port, (err) => {
    if (err) throw err;
    /* eslint-disable-next-line no-console */
    console.log(`> Ready on http://localhost:${port}`);
  });
});
