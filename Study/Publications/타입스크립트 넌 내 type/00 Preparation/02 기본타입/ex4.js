// enum
// js에는 없는타입. 비슷한 값들끼리 묶어줌
/* js */
/* ts */
// enum -> 값을 할당하지 않는 경우 0부터 차례대로 1씩 증가시키면서 값을 자동할당
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
var Os2;
(function (Os2) {
    Os2[Os2["Window"] = 7] = "Window";
    Os2[Os2["Ios"] = 8] = "Ios";
    Os2[Os2["Android"] = 9] = "Android";
})(Os2 || (Os2 = {}));
var Os3;
(function (Os3) {
    Os3[Os3["Window"] = 7] = "Window";
    Os3[Os3["Ios"] = 11] = "Ios";
    Os3[Os3["Android"] = 12] = "Android";
})(Os3 || (Os3 = {}));
console.log(Os["Android"]); // 2
console.log(Os[2]); // Android
/* ts2 */
// 특정값만 입력할 수 있도록 강제함 & 공통점이 있을 때 enum을 사용
var OS4;
(function (OS4) {
    OS4["Window"] = "win";
    OS4["Ios"] = "ios";
    OS4["Android"] = "and";
})(OS4 || (OS4 = {}));
var myOS;
// myOS의 타입이 OS4 (enum 타입 지정)
// myOS에는 Window, Ios, Android만 입력할 수 있게 됨
myOS = OS4.Window; // enum타입 사용 예시
