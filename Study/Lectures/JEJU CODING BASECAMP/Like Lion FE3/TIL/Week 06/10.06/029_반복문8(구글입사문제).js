// 구글입사문제

let x20 = Array(10000).fill(0).map((_, index) => (index + 1)).join(' ')
let result20 = 0;

for (let i = 0; i < x20.length; i++) {
    if (x20[i] === '8') {
        result20 += 1;
    }
}
console.log(result20);



// 또다른 정답 (위의것보다는 효율이 떨어짐)
// let arr = Array(10000).fill(0).map((_, index) => (index + 1).toString())