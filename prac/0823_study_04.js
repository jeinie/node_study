/*const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test'});
    res.end('Hello Cookie');
}).listen(8083, () => {
    console.log('8083번 포트에서 서버 대기 중입니다.');
});*/

const { fs } = require("fs");

const cookies = parseCookies(req.headers.cookie);

if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = url.parse(query);
    const expires = new Date();

    // 쿠키 유효 시간을 현재시간 + 5분으로 설정 (5분 안에는 새로고침해도 로그인이 유지됨)
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, { // expires.toGMTString() 쿠키의 만료시간 (브라우저가 서버에 만료된 쿠키는 안보내줌)
        Location: '/',
        'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
} else if (cookies.name) { // name이라는 쿠키가 있는 경우
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
} else { // 서버로 쿠키가 안보내졌을 경우
    try {
        const data = await fs.readFile('./cookie.html');
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(data);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(error.message);
    }
}