const zip = (a, b) => a.map((v, i) => [v, b[i]])
let s = [1, 3, 4, 8, 13, 17, 20];

let pairs = zip(s.slice(0, s.length - 1), s.slice(1))
function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1
    }
    return 0;
}

console.log(pairs.sort(비교))
console.log(pairs.sort(비교)[0])