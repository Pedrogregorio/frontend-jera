const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path')
const app = express();

const staticFileMiddleware = express.static(path.join(__dirname, 'dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});