/* Javascript Event3 - */
// document로는 head, body, title 등을 가져올 수 있다
// 나머지는 querySelector등을 이용해서 가져와야 한다.

const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    
    h1.style.color = newColor;

    //console.log(h1.style.color);   // getter, 색상을 가져옴
    //h1.style.color = "blue";   // setter, 색상을 설정
    //console.log(h1.style.color);
}

h1.addEventListener("click", handleTitleClick);