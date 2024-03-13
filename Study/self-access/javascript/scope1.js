var var1 = 1;

if (true) {
    var var2 = 2;
    if (true) {
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4;

    function bar() {
        var var5 = 5;
    }
}

console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)  // var4 is not defined
console.log(var5)


/*
* 지역 변수 -> 자신이 선언된 지역과 하위 지역 (중첩 함수)에서만 유효하며, 참조할 수 있음
* 중첩 함수의 지역스코프는 중첩 함수를 포함하는 외부 함수의 지역 스코프 ~
*
* 변수를 참조할 때, 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여
* 상위 스코프 방향으로 이동하며 선언된 변수를 검색함 (identifier resolution)
*
*
* lexical env
* 스코프 체인은 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결한 것임
* 전역 렉시컬 환경은 코드가 로드되면 곧바로 생성되고 함수의 렉시컬 환경은 함수가 호출되면 곧바로 생성됨ㅋz
*
*
* JS 엔진은 스코프 체인을 따라 변수를 참조하는 코드의 스코프에서 시작해서 상위 스코프 ㅂ방향으로 이동하며 선언된 변수를 검색함
*
*
* 함수를 어디에서 호출했는지에 따라 함수의 상위 스코프를 결정
* 함수를 어디에서 정의했는지에 따라 함수의 상위 스코프를 결정
*  
*
* */