// 1학기 떄 웹서버프로그래밍에서 이미지 파일 같은 거 업로드하는 거 만들었을 때 폼태그에서
// ecntype="multipart/form-data" 썼었는데
// body-parser로는 요청 본문을 해석할 수 없기 때문에
// multer 패키지 필요
const { application } = require('express');
const multer = require('multer');

// 환경변수 등과 같은 시스템 설정, 비밀키 등을 관리
const dotenv = require('dotenv');

// 서버 시작 전에 uploads 폴더 만든다. (서버 시작 전이므로 sync 써도 됨)
try {
    fs.readdirSync('uploads');
} catch (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

const upload = multer({
    // 업로드한 파일을 어디에 저장할 건지 (하드 디스크 또는 메모리)
    storage: multer.diskStorage({
        // 어디에 저장할지
        destination(req, file, done) {
            done(null, 'uploads/'); // 현재 폴더의 uploads 폴더에 저장
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 확장자 추출
            // 파일 이름 + 날짜 (날짜 넣는 이유는 파일 이름이 같으면 다른 사람이 쓴 게 덮어씌어지기 때문에 방지하기 위해) + 확장자
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    // 
    limits: { fileSize: 5 * 1024 * 1024 },
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
})