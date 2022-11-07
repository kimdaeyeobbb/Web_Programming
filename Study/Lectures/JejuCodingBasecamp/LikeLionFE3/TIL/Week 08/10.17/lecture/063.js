// 동기 - 순차적
// 호준 : 로봇 청소기 돌리고(10시)
// 호준 : 빨래하고(11시)
// 호준 : 설거지하고(12시)
// 호준 : 요리한다(1시)

// 비동기 - 비순차적
// 호준 : 로봇 청소기 돌리면서(10시)
// 호준 : 빨래도 돌리고(10시)
// 호준 : 설거지하고(10시)
// 호준 : 요리할려고 물도 끓이고(10시)
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 1000);
console.log(three);

// 아래 코드는 왜 그럴까요?
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 0);
console.log(three);

// 싱글쓰레드
// 일할 수 있는 녀석이 1명 -> JS

// 멀티쓰레드
// 일할 수 있는 녀석이 여러명 -> 다른언어 대부분이 지원합니다.