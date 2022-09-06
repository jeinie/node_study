// 모든 에러가 다 이쪽으로 옴 (에러 한번에 처리)
process.on('uncaughtException', (err) => {
    console.log('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('서버');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);