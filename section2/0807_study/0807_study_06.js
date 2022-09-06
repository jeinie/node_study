// __filename : 현재 파일 경로
// __dirname : 현재 폴더(디렉토리) 경로

console.log(__filename);
console.log(__dirname);

// Process
// nextTick promise timeout immdiate 순으로 출력됨
// 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리함
setImmdiate(() => {
    console.log('immediate');
});
process.nextTick(() => {
    console.log('nextTick');
});
setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));