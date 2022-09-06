const value = require('./0807_study_01');
/*const odd = value.odd;
const even = value.even;
*/

// 위의 내용을 구조 분해 할당을 이용하면 (구조 분해 할당할 떄에는 속성명과 변수명이 같아야 한다.)
const {odd, even} = require('./0807_study_01');
console.log(value); // { odd: '홀수입니다.', even: '짝수입니다.' } 객체로 넘어옴을 알 수 있음 (배열로 넘기면 [ '홀수입니다.', '짝수입니다.' ])

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    }
    else {
        return even;
    }
}

//console.log(checkOddOrEven(3));

// 여러 객체 내보낼 수 있음. but, 한 파일 내에 한 번만 사용 가능!
module.exports = checkOddOrEven;