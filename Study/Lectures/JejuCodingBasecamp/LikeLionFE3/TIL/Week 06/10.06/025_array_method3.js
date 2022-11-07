let test1 = Array(100).fill(0).map((_, index) => index + 1).filter(i => i % 3 === 0)   // filter를 추가해서 조건에 맞는것 걸러내기
console.log(test1);

let test2 = Array(100).fill(0).map((_, index) => index + 1).filter(i => i % 3 === 0 || i % 5 === 0)
console.log(test2);   // 3의배수와 5의배수 같이 걸러냄


// 누적하고 싶으면 forEach사용 
let sum = 0;
let test3 = Array(100).fill(0).map((_, index) => index + 1).filter(i => i % 3 === 0 || i % 5 === 0).forEach(x => sum += x);
console.log(sum);  // 2418