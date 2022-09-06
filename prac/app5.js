// __filename : 현재 파일 경로
// __dirname : 현제 폴더(디렉터리) 경로
console.log(__filename);
console.log(__dirname);

// Process
setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));