var req = new XMLHttpRequest();   // new - 새로운 객체를 생성하는 키워드
req.onreadystatechange = function a() {
    console.log(this.readyState, this.status)
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.response)
    }
}
req.open('GET', "./data.txt");  // HTTP 메서드, 얻어올 리소스
// req.open('GET', "http://www.google.co.kr/");  // HTTP 메서드, 얻어올 리소스
req.send();  // HTTP request 전송
console.log(req.response)