/* Javascript Event */

const title = document.querySelector(".hello h1");

console.log(title);
console.dir(title);  
// 콘솔의 내부를 보고 싶을 때 dir 사용
// console 내부에는 event가 존재 (event는 js의 객체임)

title.style.color = "blue";
// h1의 style을 자바스크립트로 변경 


// 자바스크립에서 하는 작업의 대부분은 event를 listen하는 것
// event - 마우스 클릭, 엔터, 이름 적기, wifi 접속 해제 등
// 모든 event를 자바스크립트는 listen 할 수 있음


// click시 작동하는 함수
// title.addEventListener("click")시 작동하는 동작 정의
function handleTitleClick(){
    console.log("title was clicked !");
    title.style.color = "aqua";
}


title.addEventListener("click", handleTitleClick);
// 자바스크립트에 무슨 event를 listen하고 싶은지 인자를 전달
// title을 click하는 것을 listen (어떤 event를 listen하고 싶은지 명시)
// click event 발생시 handleTitleClick 함수 실행 
// 입력값으로 함수 전달시 소괄호()를 넣지 않도록 주의 
// 왜냐하면 실행버튼을 누르기를 원하는 것이 아닌 
// 자바스크립트에 함수만을 넘겨주고 유저가 click시 
// 자바스크립트가 실행버튼을 대신 눌러주기를 원하기 때문이다



//handleTitleClick()  
// 소괄호를 추가함으로써 실행버튼을 누를 수 있음