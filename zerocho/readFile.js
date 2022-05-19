// fs는 계속 promises 붙여서 사용하기
const fs = require('fs').promises;

fs.readFile('./temp.txt')

  .then(() => {
    // 바이너리
    console.log(data);
    // 사람이 읽을 수 있도록 toString()
    console.log(data.toString());
  })

  .catch((err) => {
    throw err;
  });
