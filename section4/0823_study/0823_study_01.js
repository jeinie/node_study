// 앞에서 http 서버 만들 때 내가 짤 코드들이 너무 많았음
// node로 서버를 만들 일이 많아지니까 사람들이 미리 짜놓은 코드를 공유함
// npm : Node Package Manager (노드의 패키지 매니저 / 다른 사람들이 만든 소스 코드들을 모아둔 저장소)
// 패키지 : npm에 업로드된 노드 모듈
// 다운받은 것들을 기록해놓은 것 -> package.json (npm init으로 만든다)
// package.json 에서 "scripts"는 터미널에 칠 명령어의 별명

// npm i -D nodemon
// dependencies 와 devDependencies 차이
// dev_ : 개발할 때만 쓰이는 패키지 저장
// _ : 배포할 떄까지 계속 쓰이는 패키지 저장
// npx rimraf node_modules