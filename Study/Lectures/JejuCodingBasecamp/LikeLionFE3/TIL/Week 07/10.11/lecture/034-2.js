function func1(a, b, c,) {
    return a + b + c
}

func1(10, 20, 30)   // 처음에만 출력. 두번째부터는 console.log로 감싸줘야 출력
console.log(func1(10, 20, 30))