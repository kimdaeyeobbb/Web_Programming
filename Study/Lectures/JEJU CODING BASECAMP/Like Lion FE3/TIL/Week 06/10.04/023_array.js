// splice 문제
let fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
// 1. splice 를 이용해 코끼리를 제거해보세요.
// 2. 참치 다음에 다금바리를 추가해보세요.
// 3. 돌고래를 제거하고 옥돔과 갈치를 추가해보세요.


// 1)
fish.splice(-1);
console.log(fish);

// 2)
fish.splice(7, 0, "다금바리");
console.log(fish);


// 3)
fish.splice(2, 1, "옥돔", "갈치");
console.log(fish);