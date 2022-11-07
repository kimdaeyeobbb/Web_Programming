/* 로또 만들기 */
// Math.random() // 0<=num<1
// parseInt(Math.random() * 45 + 1) // 1<= num <46

let lotto = []
for (let i = 0; i < 6; i++) {
    lotto.push(parseInt(Math.random() * 45 + 1))
}

console.log(`로또 번호: ${lotto}`)