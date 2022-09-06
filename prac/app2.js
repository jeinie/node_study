const { odd, even } = require('./app');
const checkNumber = require('./app1');

console.time('time');
function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.timeEnd('time');
console.log(checkStringOddOrEven('hello'));