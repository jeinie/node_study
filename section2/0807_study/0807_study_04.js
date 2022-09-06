// console 객체
console.log('hi');
console.error(); // 에러 로깅

// 시간 로깅. 사이 실행시간 확인 가능 (성능 확인 시 사용)
console.time('start');
console.timeEnd('end')

// 타이머 메소드
//setTimeout(콜백 함수, 밀리초); // 주어진 밀리초 이후에 콜백 함수 실행
//setInterval(콜백 함수, 밀리초); // 주어진 밀리초마다 콜백 함수 반복 실행
//setImmediate(콜백 함수); // 콜백 함수 즉시 실행