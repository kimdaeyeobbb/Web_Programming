/* classList */
// contains - 명시된 class가 HTML element의 class에 포함되어 있는지 알려줌

/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)){
        // HTML의 element가 가지고 있는 요소를 또 사용하는 것
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);

여기까지는 개발자들이 항상 하는 흔한 작업이다. */




/* toggle function */
// class name존재 여부를 확인
// class name 존재시 toggle은 class name 삭제
// class name 존재하지 않을 경우 toggle이 class name 추가
// 위에서 한 작업을 다음의 짧은 코드로 구현할 수 있다.

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);