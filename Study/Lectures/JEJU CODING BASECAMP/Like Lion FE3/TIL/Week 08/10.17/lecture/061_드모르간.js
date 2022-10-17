/* 3의 배수와 5의 배수 제외 */
for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i)
    }
}

console.log()

/* 드모르간 법칙 적용 */
for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) {
        console.log(i)
    }
}