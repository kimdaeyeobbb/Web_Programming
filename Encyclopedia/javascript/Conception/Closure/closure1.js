var outer = function () {  // 1) ouert 함수 실행시
    var a = 1;   // 2) a라는 변수가 선언됨

    var inner = function () {  // 3) inner 함수 선언됨
        var b = 5;
        var c = 6;

        a = a + b + c;
        console.log(a);   // 12
    };

    inner();   // 4) outer함수가 inner 함수를 실행
}


outer();   // outer함수 실행시킴

/*
inner 함수에는 자기보다 상위의 부모에 접근할 수 있는 권한이 존재.
따라서 a에 접근할 수 있으므로 a=1이라는 값을 가져와서 사용할 수 있었던 것임
*/