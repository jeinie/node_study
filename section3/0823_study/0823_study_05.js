const { fstat } = require('fs');
const https = require('https');

// 서버 초기화할 때이므로 sync 써도 됨
https.createServer({ // http 에서 인수 추가 (cert, key, ca 꼭 추가)
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
}, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<p>Hello</p>');
    res.end('<p>Hello Server</p>');
}).listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다.');
})