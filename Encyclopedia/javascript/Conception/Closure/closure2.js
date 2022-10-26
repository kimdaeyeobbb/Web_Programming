var outer = function () {
    var a = 1;

    var inner = function () {
        var b = 5;
        var c = 6;

        a = a + b + c;
        console.log(a);
    };

    return inner;
};

var newInner = outer();  // newInner -> outer 함수의 실행결과

newInner();   // 12
// newInner 함수가 실행되면 outer함수가 실행된다는 뜻인데, outer 함수의 결과는 inner이다.
// 결국 newInner 함수가 실행된다는 의미는 inner 함수가 실행된다는 뜻과 동일하다