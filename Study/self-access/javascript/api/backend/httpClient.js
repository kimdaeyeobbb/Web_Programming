var http = require("http");  // http 모듈 로드
var options = {  // 접속할 서버의 정보와 호출할 페이지 정보
    host: "127.0.0.1",
    port: 8000,
    path: "/"
}

var req = http.request(options, (res) => {
    // request 함수를 이용해서 호출
    // 첫번째 인자- 앞서 선언한 접속 정보를 담은 변수
    // 두번째 인자- 응답 정보를 담은 콜백 함수

    var data = "";
    /* 데이터가 전달되었을 때 */
    res.on("data", (chunk) => {
        data += chunk;  // 수신된 데이터를 합침
    })

    /* 데이터가 모두 전달되었을 때 */
    res.on("end", () => {
        // 요청을 명시적으로 완료하겠다는 end 함수 호출
        console.log(data);  // 데이터 수신 완료(시 화면에 출력)
    })
})