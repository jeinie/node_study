// 프로미스
// 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
// then을 붙이면 결과를 반환

const condition = true; // true -> resolve, false -> reject
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공'); // then으로 연결
    } else {
        reject('실패'); // catch로 연결
    }
});

// 다른 코드.... => 코드를 분리할 수 있는 엄청난 차이!

promise
    .then((message)=>{
        console.log(message); // 성공한 경우 실행
    })
    .catch((error)=>{
        console.error(error); // 실패한 경우 실행
    })