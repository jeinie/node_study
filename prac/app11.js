const http = require('http');
const fs = require('fs').promises;

// cert, key, ca 추가
http.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
    ]
}, (req, res) => {
    res.writeHead()
})