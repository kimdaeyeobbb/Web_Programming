import ColaGenerator from "./components/colaGenerator.js";   // ColaGenerator를 가져옴
import VendingMachine from "./components/vendingmachine.js";

const colaGenerator = new ColaGenerator();   // 인스턴스화
const vendingmachine = new VendingMachine();   // 인스턴스생성

await colaGenerator.setup();   // 콜라제너레이터 안의 셋업함수 실행시킴
// await를 만나면 자바스크립트는 프로미스 객체가 잘 반환될 떄까지 기다림
// await는 async와 같이 써야함 (항상 두개는 짝임)
// setup 메서드가 async함수가 됨

vendingmachine.setup() // JSON은 비동기통신이다. 자바스크립트는 아이템을 가져오면서 중단하지 않음. coloGenerator의 작업여부와 관계없이 얘가 실행이 됨. 콜라마늘기전에 얘가 먼저 실행될 수 있다


/* top level await */
// 참고자료 - https://v8.dev/features/top-level-await
// 즉시실행함수로 실행시켜주어야 함
// (async () => {
//     await colaGenerator.setup();
//     vendingmachine.setup();
// })



// await를 사용하려면 사용 대상이 async 메서드여야 함