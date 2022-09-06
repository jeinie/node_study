const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니다.')
    .then(() => {
        console.log(fs.readFile('./writeme.txt')); // pending (대기 상태)
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });