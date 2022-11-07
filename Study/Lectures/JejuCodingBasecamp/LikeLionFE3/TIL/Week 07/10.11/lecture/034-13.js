function a() {
    console.log('a 실행')
    function b() {
        console.log('b 실행')
    }
}

a()  // a 실행
b() // error (접근이 불가능한 함수. 함수가 끝난 다음 휘발됨) -> 안에서 선언된 함수는 밖에서 꺼내어 쓸 수 없다