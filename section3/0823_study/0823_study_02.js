const http = require('http');

// 매번 res.write() 쓰기 번거로우므로 html 파일을 만들어서 그 파일을 읽게 하면 됨
const fs = require('fs').promises;

// async 하면 에러 처리하기 (try, catch 구문)
const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'}); // html문서인지, 한글인지 알려준다.
        const data = await fs.readFile('./server.html');
        res.end(data); // html 파일을 읽어서 전송
    } catch (error) {
        console.error(error);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
        res.end(error.message);
    }
}).listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
})
server.on('error', (error) => {
    console.error('error');
})