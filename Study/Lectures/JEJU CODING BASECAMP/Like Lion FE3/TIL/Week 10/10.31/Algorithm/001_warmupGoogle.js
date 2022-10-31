function countingEight(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        for (let idx = 0; idx < String(i).length; idx++) {
            if (String(i)[idx] === '8') count += 1;
        }
    }
    return count;
}

console.log(countingEight(10000))



const countingEight2 = num => Array(10000).fill(1).map((n, idx) => n + idx).join('').match(/8/g).length
console.log(countingEight2(10000))