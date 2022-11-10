// 파일이름 : 007_http\app1.js

const http = require('http');
const server = http.createServer(function (req, res) {
    console.log('server가 구동중입니다.');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.write('<h1 style="color:black">hello world</h1>');
    // 다크모드 시에는 검은색 배경이 됩니다.
    res.end();
});

server.listen(8080);
// 8080: 포트
// 구동 후 인터넷 창에서 http://localhost:8080/   으로 접속해볼 것

// Ctrl+C 입력시 수행 중인 작업에서 빠져나옴