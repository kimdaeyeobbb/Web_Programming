// console.log(String('1234'))
// console.log('12345'.toString())

function pushcomma(n) {
    let str1 = String(n);
    let str2 = ''
    let idx = str1.length
    for (let i = str1.length - 3; i >= 0; i -= 3) {
        // console.log(str1.slice(i, idx))
        str2 = str1.slice(i, idx) + str2
        idx = i
        if (i !== 0) {
            str2 = ',' + str2
        }
    }
    return str2
}

console.log(pushcomma(1000))
console.log(pushcomma(100000))
console.log(pushcomma(100000000000))
console.log(pushcomma(10000000000000000))
console.log(pushcomma(100000000000000000))