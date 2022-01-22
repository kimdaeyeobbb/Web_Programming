/* CSS와 결합한 JS 연습 */
// CSS를 JS에서 구현하는 것은 효율적이지 않다.
// 따라서 CSS의 구체적인 내용은 CSS 파일에 작성하는 것이 좋음

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked"
    if(h1.className === "clickedClass"){
        h1.className = "";
    } else {
        h1.className = "clickedClass";
    }
    console.log(h1.className);
}
// 이를 이용하여 js가 css와 직접 대화하지 않고 HTML을 변경
// h1.className은 setter이자 getter이다.

h1.addEventListener("click", handleTitleClick);