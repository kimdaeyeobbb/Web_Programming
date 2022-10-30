function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6))

console.log("spread용법 심화")

function max(...rest) {
    const [maxNum, ...notMax] = rest.sort((a, b) => b - a)
    return maxNum
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);