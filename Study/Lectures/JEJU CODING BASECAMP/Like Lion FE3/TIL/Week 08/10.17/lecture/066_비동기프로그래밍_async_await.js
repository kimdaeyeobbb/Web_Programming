// 모던 자바스크립트 예제
async function f() {
    return 100;
}

/* 성공한 경우 - then사용 */
f().then(alert);  // 100



/* 예제2 - async를 function 앞에 붙임. 비동기 방식으로 작동 */
async function f2() {
    return 'hello world';
}

console.log('!')

f2().then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지[0]
});

console.log('!!')

// 작동 순서: ! -> !! -> hello world -> hello




/* 예제3 - 기다린 것 (예제 4와 비교해보기)*/
async function f3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)   // setTimeout 설정 -> 1초 동안 delay 
    });
    let result = await promise;   // 완료가 되어서 메시지가 result로 가서 출력. await를 빼면 기다리지 않음
    alert(result);   // "완료!"
}

f3();


/* 예제4 - 기다리지 않은 것 (예제 3과 비교해보기)*/
async function f4() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)   // setTimeout 설정 -> 1초 동안 delay 
    });
    let result = promise;   // result는 기다리지 않았으므로 object Promise 자체를 가짐. 완료가 되어서 메시지가 result로 가서 출력. await를 빼면 기다리지 않음
    console.log(result)  // pending상태 -> 다끝나면 fullfilled (fulfilled는 async에서 찍힌 것. f4()의 반환값으로 찍힌 것)
    alert(result);   // "완료!"
    return "f4 종료"
}

f4();    // Promise {<fulfilled>: 'hello'} -> f4()의 반환값으로 나옴



/* 예제 5 */
async function f5() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료!")
            resolve("완료!")
        }
            , 1000)
    });
    let result = promise;
    console.log(result)
    alert(result);
    return "f5 종료"
}

f5();




/* 예제 6 */
// await은 async 함수에서만 사용이 가능함
function f6() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료")
            resolve("완료!")
        }, 1000)
    });

    let result = await promise;
    console.log(result);
    return 'hello'
}


/* 예제 7- 예제 6과 비교 */
async function f7() {
    return 'hello'
}

f7();




/* 예제 8 */
// await이 있으면 기다려 줌
// async가 있으면 promise를 반환
// await은 promise 내부에서 사용함
async function f8() {

    let promise = new Promise((resolve,
        reject) => {
        setTimeout(() => {
            alert("완료-1")
            resolve("완료!")
        }, 1000)
    });

    let result = await promise;
    alert(result + '완료-2');
    return 'hello'
}


f8();


/* 예제 9 - await을 붙이지 않음 (에제8과 비교) */
