const zip = (a, b) => a.map((v, i) => [v, b[i]])
let s = [1, 3, 4, 8, 13, 17, 20];

let pairs = zip(s.slice(0, s.length - 1), s.slice(1))
let 최솟값 = Infinity;
let 최솟값쌍 = []

for ([i, j] of pairs) {
    if (j - i < 최솟값) {
        최솟값 = j - i
        최솟값쌍 = [i, j]
    }
}
console.log(최솟값쌍)