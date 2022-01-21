/* Javascript event2 - listen하고 싶은 event 찾기 */
// 'element명 element mdn'으로 구글링

// 얘를 통해 사용가능한 event 파악가능
// property 앞에 on이 붙어있는 것이 event listener
// event 사용시 on을 빼고 사용해야 함

const title = document.querySelector("div.hello:first-child h1");
console.dir(title);

function handleTitleClick(){
    title.style.color = "red";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here !";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone !";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);