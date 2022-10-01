// enum
// js에는 없는타입. 비슷한 값들끼리 묶어줌

/* js */

/* ts */
// enum -> 값을 할당하지 않는 경우 0부터 차례대로 1씩 증가시키면서 값을 자동할당
enum Os { // 각각에게 0,1,2라는 값을 할당
  Window,
  Ios,
  Android,
}

enum Os2 { // 각각에게 7,8,9라는 값을 할당
  Window = 7, // 7할당시 8,9가 그 다음 애들에게 할당됨
  Ios,
  Android,
}

enum Os3 { // 각각에게 7,8,9라는 값을 할당
  Window = 7, // 7할당
  Ios = 11, // 11할당시
  Android, // +1된 12가 Android에게 자동할당됨
}

console.log(Os["Android"]); // 2
console.log(Os[2]); // Android

/* ts2 */
// 특정값만 입력할 수 있도록 강제함 & 공통점이 있을 때 enum을 사용
enum OS4 {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

let myOS: OS4;
// myOS의 타입이 OS4 (enum 타입 지정)
// myOS에는 Window, Ios, Android만 입력할 수 있게 됨

myOS = OS4.Window; // enum타입 사용 예시
