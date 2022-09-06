process.on('uncaughtException', (err) => {
    console.log('에러', err);
});

setInterval(() => {
    throw new Error('서버 에러');
}, 1000);

setTimeout(() => {
    console.log('실행');
}, 2000);