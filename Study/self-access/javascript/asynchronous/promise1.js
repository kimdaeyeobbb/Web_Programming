const promise = new Promise(
  /* 프로미스를 객체화 하기 위해 전달하는 실행 함수(비동기 작업을 수행하는 함수) */
  (resolve, reject) => {
    setTimeout(() => {
      console.log("setTimeout 내부에서 console.log를 통한 추력");
    }, 2000);
  }
);

console.log(promise);
// Promise { <pending> }
// setTimeout 내부에서 console.log를 통한 추력
