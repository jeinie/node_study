//const value = require('./app');
//const odd = value.odd;
//const even = value.even;

// 구조분해 할당
const { odd, even } = require('./app');
//console.log(odd);
//console.log(value);

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else{
        return even;
    }
}

//console.log(checkOddOrEven(3));
module.exports = checkOddOrEven;