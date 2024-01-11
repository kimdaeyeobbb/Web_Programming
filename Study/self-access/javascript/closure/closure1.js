function f() {
    let x = 0;
    for (let i = 0; i < 5; i++) {
        setTimeout(function A() {
            console.log(i, x++)
        }, 1000)
    }
}

f()