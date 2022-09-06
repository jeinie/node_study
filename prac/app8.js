const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data); // 바이너리 데이터
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });

fs.writeFile('./writeme.txt', '글이 입력됩니다')
    .then(() => {
        console.log(fs.readFile('./writeme.txt'));
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    })