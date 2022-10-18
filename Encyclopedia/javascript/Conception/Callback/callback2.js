console.log("1");
/* 브라우저에서 제공하는 API, 지정된 시간이 지나면 전달한 콜백함수를 호출함. setTimeout에 TimeHandler라는 콜백함수를 전달해주고, 시간관련 요소를 지정하는 인자가 존재 */
setTimeout(function () {
    console.log("2");
}, 1000); // 1000ms = 1초가 지나고 나서 우리가 지정한 함수가 실행되게 함
console.log("3");

/* 콜백을 받아서 바로 실행하는 함수 */
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));