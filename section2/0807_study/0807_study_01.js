const odd = '홀수입니다.';
const even = '짝수입니다.';

// 객체로 넘길 때
module.exports = {
    odd,
    even
};

/* 원래는 이렇게 하는데 최신 문법에서는 키와 값 변수가 같은 경우 위와 같이 생략 가능
module.exports = {
    odd: odd,
    even: even
};
*/

//module.exports = [odd, even] // 배열로 넘기기