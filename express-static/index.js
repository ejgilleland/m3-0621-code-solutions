const express = require('express');
const path = require('path');

const app = express();
const publicDir = path.join(__dirname, 'public');
const publicFile = express.static(publicDir);

app.use(publicFile);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
