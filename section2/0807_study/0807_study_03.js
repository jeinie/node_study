const { odd, even } = require('./0807_study_01');
const checkNumber = require('./0807_study_02');

function  checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));