const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("성공"); // 비동기 작업의 결과값
  }, 500);
});

promise.then(function (res) {
  // then 메서드 -> 인수로 전달한 콜백 함수의 비동기 작업이 성공했을 때 실행
  console.log(res);
}); // 성공
