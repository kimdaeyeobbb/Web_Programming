var req = new XMLHttpRequest();    // AJAX를 위한 객체 생성
req.open("GET", "./json/image_list.json");   // HTTP 요청방식 설정(GET) & URL설정
req.onreadystatechange = function () {
    // console.log(this.response)
    // console.log("readyState: ", this.readyState)
    if (this.readyState == 4) {   // 모든 데이터가 정상 수신되었을 경우 (readyState == 4:  XMLHttpRequest의 상태를 보유. 완성된 요청과 응답이 준비)
        console.log(this.response)  // 콘솔창에 json 파일이 정상적으로 전달되었는지 확인할 것
        var data = JSON.parse(this.response);
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "image");

            var img = document.createElement("img");
            img.src = data[i];   // 각각의 이미지 url이 선언될 수 있게 만듦
            div.appendChild(img);   // 이미지 태그를 안으로 집어넣음
            document.body.appendChild(div);   // div 추가 
        }
    }
}
req.send();   // HTTP request 전송  (콘솔창에 json 파일이 정상적으로 전달되었는지 확인할 것)