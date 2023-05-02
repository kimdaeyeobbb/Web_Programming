/* fetch 함수 */
// XMLHttpRequest 객체와 마찬가지로 HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 WEB API
// XMLHttpRequest 객체보다 사용법이 간단하고 프로미스를 지원하기 때문에 비동기 처리를 위한 콜백 패턴의 단점에 자유로움
// IE를 제외한 대부분의 모던 브라우저에서 제공함
// fetch 함수에는 HTTP 요청을 전송할 URL과 HTTP 메서드, HTTP 요청 헤더, 페이로드등을 설정한 객체를 전달함

// fetch 함수로 HTML 문서를 전달할 경우 -> 로드된 HTML 파일의 내용이 문자열로 되어 있으므로 HTML 소스 코드로 변환시켜야 함
// DOM parser 인터페이스는 DOM document 문서에 맞는 XML 및 HTML 소스코드를 해석할 수 있는 기반을 제공함

function insertHtmlFile(file) {
    fetch(file)  // fetch 함수를 사용하여 header.html 파일을 가져옴
        .then(response => response.text())   // fetch함수에서 반환된 response 객체에서 text 메서드를 호출해서 data 변수에 HTML 문자열 저장
        .then(data => {
            const html_dom = new DOMParser().parseFromString(data, 'text/html');
            const bodyContents = html_dom.body.innerHTML;
            document.querySelector('body').insertAdjacentHTML('beforeend', bodyContents);
        })
        // html 문자열을 DOMParser를 이용해서 새로운 DOM 객체인 html_dom에 저장
        // 현재 문서의 'body' 요소를 querySelector를 이용하여 가져옴 
        // insertAdjacentElement 메서드를 사용하여 html_dom요소를 'body'의 마지막 자식 요소로 삽입함
        .catch(err => console.log(err));
}


document.addEventListener('DOMContentLoaded', () => {
    // document 요소에 DOMContentLoaded 이벤트 리스너를 추가함
    // 화면이 로딩되면 이벤트 콜백 함수가 실행됨
    insertHtmlFile('header.html');
    insertHtmlFile('sidebar.html');
})


/* DOMContentLoaded */
// 화면이 로딩되자마자 이벤트가 실행되도록 만듦
// DOMContentLoaded 이벤트 => 문서의 초기 HTML문서를 완전히 로드하고 분석한 후에 발생함  (이벤트 리스너를 등록하면 문서가 준비된 즉시 호출됨)
// DOMContentLoaded 이벤트에 등록된 함수는 문서가 준비되면 자동으로 호출됨