// os => 운영체제의 정보를 담고 있음 (내장 모듈)
const os = require('os'); // 내장모듈이므로 이름만 적어줘도 됨 (저번에는 직접 만든 거라 경로 적어줌))

// path => 경로 처리
const path = require('path');

// queryString (주소에 데이터가 담겨 있다.)
// 문자열이어서 자바스크립트에서 다루기가 불편하므로
// 객체로 다루는 것이 searchParams
const url = require('url');
const queryString = require('queryString');

const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = queryString.parse(parseUrl.query);
console.log('querystring.parse(): ', query);
console.log('querystring.stringfy(): ', queryString.stringify(query));

// worker_threads 멀티쓰레드인데, 거의 안 쓰임. 거의 싱글 스레드 사용
// 동영상 봐봤는데 복잡하고, 쓰일 일이 거의 없어서 나중에 쓸 상황 생길 때 공부해도 상관 없을 듯