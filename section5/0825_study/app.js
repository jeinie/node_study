const express = require('express');
const { fs } = require('fs');
const path = require('path');
//const { process } = require('process');
const app = express();

// body-parser 은 옛날 문법 (body-parser: 미들웨어 / 요청과 응답 사이에서 공통적인 기능을 수행하는 소프트웨어)
// body-parser : 요청의 본문을 지정한 형태로 파싱해준다.
// 원래는 app.use(bodyParser());
app.use(express.json()); // bodyParser 가 express 안에 들어감
app.use(express.urlencoded({ extended: true })); // true면 qs(모듈), false는 querystring / 웬만하면 true로 (나중에 프론트에서 서버로 데이터 넘겨줄 때 등 qs 모듈 사용할 때 유용)

app.use('요청 경로', express.static('실제 경로'));
// localhost:3000/index.html           learn-express/public-3030/index.html
// 보안에 좋다. 서버 구조 위치를 예측할 수 없어서
app.use('/', express.static(__dirname, 'public-3030'));

// 미들웨어간 데이터 전달
app.use((req, res, next) => {
    req.data = '데이터 넣기';
    next();
}, (req, res, next) => {
    console.log(req.data);
    next();
})

// 서버 실행할 땐 대부분 npm start
// npm i morgan cookie-parser express-session
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
app.use(morgan('dev'));
app.use(cookieParser());
app.set('port', process.env.PORT || 3000);
app.use(cookieParser('abc')); // 쿠키 암호화 설정

// 미들웨어 (미들웨어는 next 해줘야 다음으로 넘어감)
// 미들웨어는 서버로 요청 보낼 때마다 실행됨 (모든 라우터에서 실행)
/*app.use((req, res, next) => {
    console.log('모든 요청에 실행하고 싶어요');
    next();
}, (req, res, next) => {
    throw new Error('에러가 났어요');
});*/

// 로그인 세션 관련
app.use('/', (req, res, next) => {
    if (req.session.id) { // 로그인 했으면 (세션에 id 가 있으면)
        express.static(__dirname, 'public')(req, res, next) // 예를 들어 사진과 같은 데이터들을 프론트로 넘겨주면 됨
    } else { // 로그인 안했으면
        next(); // 그냥 다음으로 넘어감
    }
})

app.get('/', (req, res, next) => {
    req.cookies // { mycookie: 'test' } -> 쿠키가 있으면 알아서 넣어준다.
    req.signedCookies; // 쿠키 암호화 가능
    // 전에 쿠키 세팅했을 때
    // 'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    // 이제는 아래와 같이 해주면 된다.
    res.cookie('name', encodeURIComponent(name), {
        expires: new Date(),
        httpOnly: true,
        path: '/',
    })

    // 쿠키 지울 경우
    res.clearCookie('name', encodeURIComponent(name), {
        httpOnly: true,
        path: '/',
    })

    // express.json() / express.urlencoded({extended: true})을 사용했으므로 바로 req.body.name 이 가능함
    req.body.name // 또는 req.body.hello 뭐 이렇게...
    res.sendFile(path.join(__dirname, 'index.html'));
})

// 라우터
/*app.get('/', (req, res) => {
    res.send('hello express!');
    //res.sendFile(path.join(__dirname, 'index.html'));
});*/

// 라우트 매개변수 (route parameter라서 req.params)
// localhost:3000/category/jjy
app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

/*app.post('/', (req, res) => {
    res.send('hello express!');
});*/

app.get('/about', (req, res) => {
    res.send('hello express');
});

/*app.use((req, res, next) => {
    res.send('404 에러입니다.');
});*/

// 에러 처리 직접 해줘야 함
// 에러 미들웨어는 반드시 4개 다 써줘야 함
app.use((err, req, res, next) => {
    console.error(err);
    res.send('에러가 발생했습니다');
}) // 한 라우터에서 여러번 send 할 수 없음!

app.listen(app.get('port'), () => {
    console.log('3000번 포트에서 대기 중...');
})

/*app.get('/', (req, res) => {
    res.json({ hello: '홍길동' });
});*/