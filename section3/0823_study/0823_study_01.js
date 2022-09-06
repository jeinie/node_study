const http = require('http');

// http 서버에서도 지금 비동기이기 때문에 에러 날 수 있으므로 에러 처리
const server = http.createServer((req, res) => {
    // html인지 모르는 브라우저(사파리)가 있으므로
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'}); // html문서인지, 한글인지 알려준다.
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello</p>');
}).listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
})
server.on('error', (error) => {
    console.error('error');
})

// 서버 실행에 listen 하는 경우에는 터미널이 8080번 포트에 연결되어서 다른 동작을 더 이상 할 수 없음
// localhost 도메인 지원
// 도메인 뒤에 포트번호 쓰면 됨

// http 인 경우 뒤에 80 포트번호 생략 가능
// https 인 경우 뒤에 443 포트번호 생략 가능
// 8080 포트번호는 생략 불가