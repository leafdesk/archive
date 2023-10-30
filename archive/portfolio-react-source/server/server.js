const express = require('express');
const app = express();

const path = require('path');

app.listen(8080, () => {
  console.log('listening on 8080');
});

app.get('/', (req, res) => {
  // res.sendFile(path.resolve('build/index.html'));
});
