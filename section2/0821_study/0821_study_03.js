// async (비동기 - 순서대로 X)
const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(`1번 ${data.toString()}`); // 우리가 읽을 수 있도록 바꾼다.
    })
    .catch((err) => {
        throw err;
    });

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(`2번 ${data.toString()}`); // 우리가 읽을 수 있도록 바꾼다.
    })
    .catch((err) => {
        throw err;
    });

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(`3번 ${data.toString()}`); // 우리가 읽을 수 있도록 바꾼다.
    })
    .catch((err) => {
        throw err;
    });

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(`4번 ${data.toString()}`); // 우리가 읽을 수 있도록 바꾼다.
    })
    .catch((err) => {
        throw err;
    });