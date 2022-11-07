function sum(x, y, 콜백함수) {
    콜백함수(x + y);
    //return x + y;
}

console.log(sum(10, 20, console.log));
//30
//undefined(return이 없으므로)


function documentWriter(s) {
    document.write('콜백함수', s)
}

sum(10, 20, documentWriter)  // 콜백함수 30 (함수를 argument로 전달한 것)
