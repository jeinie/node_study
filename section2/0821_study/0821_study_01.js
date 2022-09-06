//const fs = require('fs');

// 위의 것을 프로미스로 바꿔서 많이 사용한다.
const fs = require('fs').promises; // 이렇게 하면 then, catch를 사용

/*fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data); // 바이너리 데이터 (이진법을 16진법으로 바꾼 것이 콘솔에 찍힌다.)
    console.log(data.toString()); // 우리가 읽을 수 있도록 바꾼다.
});*/

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data); // 바이너리 데이터 (이진법을 16진법으로 바꾼 것이 콘솔에 찍힌다.)
        console.log(data.toString()); // 우리가 읽을 수 있도록 바꾼다.
    })
    .catch((err) => {
        throw err;
    });