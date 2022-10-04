// 알고리즘 문제
// https://codingdojang.com/scode/350?answer_mode=hide

let s = 0;

for (let i = 0; i < 100; i++) {
    // const element = array[i];

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        s += i;
    }
}

console.log('');
console.log(s);