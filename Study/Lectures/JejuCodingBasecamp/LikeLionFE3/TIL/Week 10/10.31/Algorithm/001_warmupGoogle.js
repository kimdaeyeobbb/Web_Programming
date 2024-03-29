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


const countingEight3 = num => [...Array(num)].map((_, idx) => idx + 1).toString().match(/8/g).length
console.log(countingEight3(10000))


function countingEight4(num) {
    let arr = []
    for (let i = 1; i <= 10000; i++) {
        arr.push(i)
    }
    let result = [...arr.join('')].filter(el => el === '8').length
    return result
}
console.log(countingEight4(10000))