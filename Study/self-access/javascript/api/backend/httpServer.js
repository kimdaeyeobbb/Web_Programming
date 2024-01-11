const http = require("http");  // http 모듈 로드
var httpServer = http.createServer((req, res) => {
    // create Server 함수를 이용해 HTTP 서버 인스턴스 생성
    // 콜백으로 req, res 전달
    res.end("hello world")  // hello world 응답
})

httpServer.listen(8000);
// 8000번 포트로 listen
// 클라이언트가 특정 포트로 접속할 수 있도록 서버에 포트를 할당하고 응답받을 수 있게함