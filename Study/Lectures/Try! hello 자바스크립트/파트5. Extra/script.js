/* eventHandler 함수를 정의 */
function eventHandler() {
    console.log("eventHandler");
    function innerFunction() {
        console.log("innerFunction")
    }
    /* innerFunction 함수 2번 호출 */
    for (var i = 0; i < 2; i++) {
        innerFunction();
    }
}