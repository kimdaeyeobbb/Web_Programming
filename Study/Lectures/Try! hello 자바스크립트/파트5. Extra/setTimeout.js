function callback() {
    console.log("timeout")
}

setTimeout(callback, 3000);  // 일정시간이 지났을 때 호출될 콜백함수, 시간텀


/* 콟백함수 리팩토링 - 익명함수로 만듦 & 함수 즉시 호출 적용 */
setTimeout(
    function () {
        console.log("timeout")
    }, 5000);