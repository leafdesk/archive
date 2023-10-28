const fs = require('fs').promises;

fs.writeFile('./WRITEME.txt', 'WRITE TEST')
  .then(() => {
    return fs.readFile('./WRITEME.txt');
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
