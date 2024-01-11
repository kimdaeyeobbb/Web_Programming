var net = require("net"); // net 모듈 로드
var server = net.createServer((socket) => {
    socket.end("소켓 엔드!")
})