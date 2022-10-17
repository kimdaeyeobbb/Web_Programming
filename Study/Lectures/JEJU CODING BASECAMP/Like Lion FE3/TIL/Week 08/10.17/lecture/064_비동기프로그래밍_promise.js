let p = new Promise(function (resolve, reject) => {
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