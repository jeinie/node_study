const express = require('express');
const path = require('path');
//const bodyParser = reuquire('body-parser');
const app = express();
//app.unsubscribe(bodyPaser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // true 이면 qs, false 이면 querystring
app.set('port', process.env.PORT || 3000);


app.use('요청 경로', express.static('실제 경로'));
// localhost:3000/index.html      learn-express/public-3030/index.html
// 보안 좋다.
app.use('/', express.static(__dirname, 'public-3030'));

// 미들웨어
/*app.use((req, res, next) => {
    console.log('모든 요청에 실행');
    next();
}/*, (req, res, next) => {
    throw new Error('에러가 났어요');
})*/

// 라우터
/*app.get('/', (req, res) => {
    //res.send('hello express');
    res.sendFile(path.join(__dirname, 'index.html'));
})*/

// 라우트 매개변수 (req.param)
/*app.get('/category/:job', (req, res) => {
    res.send(`hello ${req.params.job}`);
})*/

// 로그인 세션 관리
app.use('/', (req, res, next) => {
    if (req.session.id) {
        express.static(__dirname, 'public')(req, res, next)
    } else {
        next();
    }
})

// 쿠키
app.get('/', (req, res, next) => {
    // { mycookie: 'test' }
    req.cookies;
    req.signedCookies; // 쿠키 암호화 기능
    res.cookie('name', encodeURIComponent(name), {
        expires: new Date(),
        httpOnly: true,
        path: '/',
    })

    // 쿠키 지울 경우
    res.clearCookie('name', encodeURIComponent(name) {
        httpOnly: true,
        path: '/',
    })
})

// 에러 처리
app.use((err, req, res, next) => {
    console.error(err);
    res.send('에러가 발생했습니다');
})

app.get('/', (req, res) => {
    res.json({ hello: '홍길동' });
})

app.listen(app.get('port'), () => {
    console.log('3000포트에서 대기 중...');
})