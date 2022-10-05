let myObj = {};   // 객체를 중괄호를 통해 선언 -> '리터럴'이라고 함

let myObj2 = {
    val1: 10, val2: 30
}  // 프로퍼티: key와 value의 쌍


/* Immutable */
let val = "hello";
val[2] = "z";
console.log(val);  // 문자열은 불변성을 띔