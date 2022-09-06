// os, path
const os = require('os');
const path = require('path');

//console.log(os.arch);

// url
// queryString (주소에 데이터가 담겨 있다.)
// http://www.naver.com/?id=3&pw=1234

const url = require('url');
const queryString = require('queryString');

const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = queryString.parse(parseUrl.query);
console.log('querystring.parse(): ', query);
console.log('querystring.stringfy(): ', queryString.stringify(query));

// worker-threads 멀티쓰레드. 싱글 스레드