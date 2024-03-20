const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("실패"); // ①
  }, 500);
});

// 실행되지 않음
promise.then(function (res) {
  // ②
  console.log(res);
});

promise.catch(function (err) {
  console.log(err);
});

// 실패
