let 수학점수 = [10, 99, 88, 85, 21, 35];

/* 수학점수의 평균을 구하기 */

/* 방법 1 */
// sum = 0

// for (let i = 0; ; i++) {
//     sum += 수학점수[i]
//     console.log(sum)
//     if (i > 수학점수.length - 1) {
//         break;
//     }
// }

// let avg = sum / (수학점수.length)

// console.log(avg)

/* 방법2 */
let result1 = (수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3] + 수학점수[4] + 수학점수[5]) / 6
console.log(result1)

/* 방법3 */
let s2 = 0
let result2 = 수학점수.forEach((val2 => s2 += val2))
console.log(s2 / 6);


/* 방법4 */
console.log(수학점수.reduce((a, b) => a + b, 0) / 6);


/* 방법5 */
let s5 = 0;
for (let i = 0; i < 수학점수.length; i++) {
    s5 += 수학점수[i];
}

console.log(s5 / 수학점수.length)