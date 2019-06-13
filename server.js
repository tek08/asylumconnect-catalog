const express = require("express");
const next = require("next");

const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.post("/login", (req, res) => {
    // TODO: This is where we'll call the API to do login and return a JWT
    res.end(JSON.stringify({}));
  });

  server.use(handler).listen(port, err => {
    if (err) throw err;
    /* eslint-disable-next-line no-console */
    console.log(`> Ready on http://localhost:${port}`);
  });
});
