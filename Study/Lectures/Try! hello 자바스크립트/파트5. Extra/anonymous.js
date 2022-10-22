var sum = 0;

// 1~50까지의 합을 구하고
for (var i = 1; i <= 50; i++) {
    sum += i;
}

/* 함수로 만들지 않으면 i값을 건드리게 되어 원하지 않는 결과가 나오게 됨 */
(function () {
    // 여기에서 1~5의 값을 출력하고 싶음
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
})();

// 51~100까지의 값을 추가로 계산
for (; i <= 100; i++) {
    sum += i;
}

console.log(sum);