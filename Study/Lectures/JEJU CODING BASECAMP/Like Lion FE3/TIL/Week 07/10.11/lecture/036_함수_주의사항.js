// 즉시실행함수 - 메모리 효율을 극대화시키기 위해 사용 (이름이 없으므로 재사용성은 없음)

/* 익명 즉시 실행 ㅏㅁ수 */
(function () {
    let a = 1;
    let b = 2;
    return a + b;
}());


/* 기명 즉시 실행 함수 */
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
}());

foo();  // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음
// 메모리를 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리