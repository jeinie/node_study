// 딱 한 번 실행하거나 서버 초기화 할 때만 (서버 실행한 후에는 계속 기다리는 상황 발생)
// 동기로 바꾸면
const fs = require('fs');

var data = fs.readFileSync('./readme.txt');
console.log(`1번 ${data.toString()}`);

data = fs.readFileSync('./readme.txt');
console.log(`2번 ${data.toString()}`);

data = fs.readFileSync('./readme.txt');
console.log(`3번 ${data.toString()}`);

data = fs.readFileSync('./readme.txt');
console.log(`4번 ${data.toString()}`);