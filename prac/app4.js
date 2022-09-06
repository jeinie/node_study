const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearTimeout(interval);
}, 2500);

const immdeiate = setImmediate(() => {
    console.log('즉시 실행');
});

const immdeiate2 = setImmediate(() => {
    console.log('실행되지 않습니다');
});

clearImmediate(immdeiate2);