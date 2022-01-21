/* 자바스크립트에서 HTML 읽어들이기 */

// 자바스크립트는 HTML을 읽어온다
// 따라서 HTML에 항목을 추가하는 것도 가능하다
// document는 우리가 작성한 웹 페이지를 의미
// document는 HTML을 의미
// 자바스크립트에서는 html 자체가 아닌 html에 대한 객체를 읽어 들인다.


/* 이전 단계 수행 */
//const title = document.getElementById("title");
// title이라는 element를 getElementById란 함수로 가져옴
// getElementById는 document(HTML)의 함수
// getElementById를 통해 id로 element를 가져올 수 있다

//title.innerText = "Got you!";
// 자바스크립트로 HTML 수정



//console.log(title.id);
//console.log(title.className);
//console.dir(title);

/* 이전 단계 수행 완료 */




/* document getElementsByClassName */
//const hellos = document.getElementsByClassName("hello");
//console.log(hellos);

//const title = document.getElementsByTagName("h1");
// h1 태그 모두를 불러들임
// 태그란 - anchor, div, seciotn, button 등을 의미

//console.log(title); 
// title은 객체임



/* document querySelector */

const title = document.querySelector(".hello h1");
// querySelector는 css 방식으로 element를 검색함
// 이를 통해 hello란 class 내부에 존재하는 h1을 선별해서 가져올 수 있음
// hello라는 클래스 내부의 h1을 가져옴 
// querySelector는 클래스 명과 내부의 태그를 명시해줘야 함
// querySelector는 단 하나의 element를 return
// .hello h1이 여러개 존재할 경우 맨 처음 것만 도출

const title2 = document.querySelector(".hello h2");

console.log(title);
console.log(title2);   
// 존재하지 않는 element 찾으려 하면 null이 도출됨

const title3 = document.querySelectorAll(".hello h1");
// hello 클래스의 h1 태그 모두를 가져오고 싶을 시 qeurySelectorAll을 사용

