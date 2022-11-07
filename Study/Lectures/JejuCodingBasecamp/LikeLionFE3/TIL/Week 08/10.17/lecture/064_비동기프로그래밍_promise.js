/* resolve 케이스 (성공한 케이스) */

let p = new Promise(function (resolve, reject) {
    // 비동기적으로 실행될 code 작성
    resolve('hello world')    // 성공 (hello world를 밑의 메시지 위치로 넣음)
}).then(메시지 => {   // 성공(resolve)시 then이 받음. 받은 메시지를 가지고 뭘 할것인지를 기재
    alert(메시지)
    return 메시지.split(' ')[0]  // hello
}).then(메시지 => {     // 위에서 return한 값이 또 메시지를 준 것
    alert(메시지)
    alert(메시지)
    return 메시지[0]   // h
})

console.log(p)   // Promise {<pending>}
console.log(p)  // Promise {<fulfilled>: 'h'}


/* reject 케이스 */

let p2 = new Promise(function (resolve, reject) {
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    alert('catch 실행!!!')
})

console.log(p2)
console.log(p2)


/* resolve인데 중간에 error가 던져졌을 떄 */
let p3 = new Promise(function (resolve, reject) {
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error("Error 발생! 경고경고!")   // 에러 던짐
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지);   // Error 발생! 경고경고!
    alert('catch 실행!!!')
})

console.log(p3)
console.log(p3)


/* 일부러 시간이 걸리게 설계한 에제 */
let p4 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('끝났다!'), 3000)
})

console.log('hello world')
console.log(p4)  // Promise {<pending>}

// 3초 후에
console.log(p4)  // Promise {<fulfilled>: '끝났다!'}