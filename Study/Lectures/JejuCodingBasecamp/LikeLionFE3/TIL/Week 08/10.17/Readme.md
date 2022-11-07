# 22.10.17 월

# truthy & falsy

- 주의 (그냥 그렇구나. 하고 알고가는 것임. 우리가 결과로 유추하는 것이지 '왜 그런가'에 대해 깊이 빠지지 말것)

```js
console.log(truthyAndFalsy(1)); // true
console.log(truthyAndFalsy(0)); // false

console.log("0" == 0); // true
console.log("0" === 0); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log(1 == true); // true
console.log(1 === true); // false

console.log("true" == true); // false
// 1. json에서 값을 가져올 때 true를 문자열로 가져와서 error가 난 적이 있음
// 2. json에서 값을 가져올 때 true가 true로 되어 있어서 error가 난 적이 있음
console.log("true" === true); // false

console.log(0 == ""); // true
console.log(0 === ""); // false

console.log(false == ""); // true
console.log(false === ""); // false

console.log(false == null); // false
console.log(false === null); // false

console.log(false == undefined); // false
console.log(false === undefined); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log("truthy & falsy 판단");

function truthyAndFalsy(value) {
  return !!value;
}

console.log(truthyAndFalsy([])); // true -> 길이라는 값을 가지고 있음 (정확히 뭐 때문에 true인지 우리는 판단할 수 없음)
console.log(truthyAndFalsy({})); // true
console.log(truthyAndFalsy("")); // false

console.log(truthyAndFalsy(null)); // false
console.log(truthyAndFalsy(undefined)); // false
console.log(truthyAndFalsy(NaN)); // false
console.log(truthyAndFalsy(Infinity)); // true
console.log(truthyAndFalsy(-Infinity)); // true
console.log(truthyAndFalsy(-100)); // true
console.log(truthyAndFalsy("hello")); // true
```

<br>

# 드모르간의 법칙

```js
console.log("---------------");
console.log("드모르간의 법칙");

// or: ||
// and: &&

/*
not (A or B) = (not A) and (not B)
NOT (A and B) = (not A) or (not B)
*/

const x = 0;
const y = 1;

console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));
```

<br>

# NaN (심도 있게 보지 말것. 가볍게 보고 넘어갈 것)

- https://en.wikipedia.org/wiki/IEEE_754 -> NaN라는 것이 국제 표준에 따라서 만들어졌다는 것을 명시

```js
/* https://en.wikipedia.org/wiki/IEEE_754  -> 국제 표준에 따라서 만들어졌다는 것을 명시 Because 'Not a Number' is not a number,
and is not equal to anything, including Not a Number. */

// 표현해드리자면 '숫자가 아님'은 '숫자가 아님'과 동일한가?
console.log(NaN == NaN); // false

// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성합니다. 이러한 비교는 다음과 같이 수행됩니다.

/* Type(x)가 NaN이면 false를 반환합니다. y가 NaN이면 false를 반환합니다. 
이것은 알고리즘이 먼저 피연산자 중 하나가 NaN유형을 확인하기 전에 있는지 확인하고 그렇다면 false어쨌든 반환할 것임을 의미합니다. 
*/

console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log("---");

// 암기할 것
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log("---");

// isNaN는 논란의 여지가 있으므로 사용하면 안됨 (머릿속에서 잊을 것)
console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---");

// ES6에서 추가 도입 (그냥 암기)
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

/*
// https://www.designcise.com/web/tutorial/what-is-the-difference-between-isnan-and-number-isnan-in-javascript

x                Number(x)    isNaN(x)
undefined        NaN            true
{}                NaN            true
'foo'            NaN            true
new Date('')    NaN            true
new Number(0/0)    NaN            true


x               typeof x === 'number'   Number.isNaN(x)
undefined        false                    false
{}                false                    false
'foo'            false                    false
new Date('')    false                    false
new Number(0/0)    false                    false
*/
```

<br>

# 비동기 프로그래밍

```js
// 청소과정 설명
// 동기 프로그래밍 (순차적 구조)
// 호준: 청소기 돌리고 (10시)
// 설하: 빨래하고 (11시)
// 윤구: 설거지하고 (12시)
// 석규: 요리한다 (1시)

// 비동기 프로그래밍 (비순차적)
// 호준: 청소기 돌리고 (10시)
// 호준: 빨래하고 (10시)
// 호준: 설거지하고 (10시)
// 호준: 요리한다 (10시)
```

### 어떠한 요청을 보내면 해당 요청의 응답에 관계없이 바로 다음 동작이 실행됨

(즉, 실행중인 작업이 끝나기를 기다리지 않고 바로 다음 작업으로 넘어갈 수 있음)

- 싱글 스레드

  - 한 번에 한 작업만 함

## 카오스

- 그냥 재미삼아 보고 넘기기.

- 1. 빈 Array는 비교구문이 나왔을 때 강제로 숫자로 형변환이 됨

```js
console.log([] == ![]); // true
console.log([] == 0);

// 1. 빈 Array는 비교구문이 나왔을 때 강제로 숫자로 형변환이 됨
console.log(0 == ![]);
```

- 2. ![] == false 임

```js
console.log(0 == false);
```

- 3. false는 0으로 평가됨

```js
console.log(0 == 0);
```

- 부동소수점 오차 예시

```js
0.1 + 0.2 = 0.3 // false (0.300000000000000004 처럼 무한대의 숫자가 나옴)
```

## [부동 소수점 오차 참고자료](http://www.tcpschool.com/java/java_datatype_floatingPointNumber)

- NaN를 발생시키는 예시 (숫자로 평가될 수 없는것과 연산한 경우)

```JS
console.log('hello world' - 100)
console.log('hello world' + 100)
console.log('hello world' * 100)
console.log('hello world' / 100)
```

# 싱글스레드

### 한번에 하나의 테스크를 수행하는 것

### 요청에 대한 처리를 할 수 있는 주체가 단 하나만 존재하므로 순차적인 흐름을 가짐

### 장점: 작업의 순서가 보장되어 있으므로 설계가 단순하고 안전함

### 단점: 응답이 돌아오기까지 다음 동작으로 넘어가지 못하므로 자원을 효율적으로 사용하지 못함

- 카페 주문을 받는 분은 1명 (물론 멀티도 가능. 하지만 한 분이 주문을 멈춘다면 error처리가 필수임)
- 손님이 error나는 코드를 던지면 error라고 점원이 알리고 그 다음 주문을 안받음 (그 다음실행으로 넘어가지 않음)
- 코드를 실행시킬 수 있는 애가 1명인 것
- js는 싱글스레드임
- 일을 할 수 있는 녀석이 1명 -> js

<BR>

# 멀티스레드

- 일을 할 수 있는 녀석이 여러명 -> 다른언어 대부분이 지원
- 요청을 처리할 수 있는 작업 단위가 여러개<BR>
  => 하나의 태스크가 끝나기를 기다리지 않아도 다음 실행을 할 수 있게 됨

## 멀티스레드를 사용하는 비동기식 작업

### 장점: 요청에 대한 응답이 늦어지더라도 그 시간동안 다른 작업을 할 수 있음

### 단점: 싱글 스레드와 비교해서 설계가 복잡함, 비동기식으로 보낸 요청의 결과가 다음 실행에 영향을 미치는 경우에는 코드가 개발자의 의도와 다르게 동작할 수 있음

<BR>

# 싱글스레드와 멀티스레드 관련코드

```js
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
const one = "1";
const two = "2";
const three = "3";

console.log(one);
setTimeout(() => {
  console.log(two);
}, 1000);
console.log(three);

// 아래 코드는 왜 그럴까요?
const one = "1";
const two = "2";
const three = "3";

console.log(one);
setTimeout(() => {
  console.log(two);
}, 0);
console.log(three);

// 싱글쓰레드
// 일할 수 있는 녀석이 1명 -> JS

// 멀티쓰레드
// 일할 수 있는 녀석이 여러명 -> 다른언어 대부분이 지원합니다.
```

## 세원님 제공 (가볍게 읽어보기)

```
[멀티 스레드]
애플리케이션을 실행하면 운영체제로부터 실행에 필요한 메모리를 할당받아 애플리케이션이 실행되는데,
이것을 프로세스(process)라고 한다.
그리고 프로세스 내부에서 코드의 "실행 흐름"을 스레드(thread)라고 한다.

운영체제에서는 실행 중인 하나의 애플리케이션을 프로세스process라고 한다.
사용자가 애플리케이션을 실행하면 운영체제로부터 실행에 필요한 메모리를 할당받아 애플리케이션의 코드를 실행하는데
이것이 프로세스이다.

하나의 애플리케이션은 멀티 프로세스 multi process를 만들기도 한다.
예를 들어 메모장 애플리케이션을 2개 실행했다면 2개의 메모장 프로세스가 생성된 것이다.

<스레드>
운영체제는 두 가지 이상의 작업을 동시에 처리하는 멀티 태스킹(multi tasking)을 할 수 있도록 CPU 및 메모리 자원을
프로세스마다 적절히 할당해주고, 병렬로 실행시킨다.

예를 들어, 워드로 문서작업을 하면서 동시에 윈도우 미디어 플레이어로 음악을 들을 수 있다.

멀티 태스킹은 꼭 멀티 프로세스를 뜻하는 것은 아니다. 한 프로세스 내에서 멀티태스킹을 할 수 있도록 만들어진
애플리케이션도 있다. 대표적인것이 미디어 플레이어 Media player와 메신저 Messenger 입니다.
미디어 플레이어는 동영상 재생과 음악 재생이라는 두 가지 작업을 동시에 처리하고,
메신저는 채팅 기능을 제공하면서 동시에 파일 전송 기능을 수행하기도 한다.
어떻게 하나의 프로세스가 두 가지 이상의 작업을 처리할 수 있을까? 그 비밀은 멀티 스레드 multi thread에 있다.

스레드 thread는 사전적 의미로 한 가닥의 실이라는 뜻인데, 한 가지 작업을 실행하기 위해 순차적으로 실행할 코드를
실처럼 이어놓았다고 해서 유래된 이름이다.

하나의 스레드는 하나의 코드 실행 흐름이기 때문에 한 프로세스 내에 스레드가 2개라면 2개의 코드 실행 흐름이 생긴다는 의미이다.

멀티 프로세스는 운영체제에서 할당받은 자신의 메모리를 가지고 실행하기 때문에 각 프로세스는 서로 독립적이다.
따라서 하나의 프로세스에서 오류가 발생해도 다른 프로세스에 영향을 미치지 않는다.

하지만 멀티 스레드는 하나의 프로세스 내부에 생성되기 때문에 하나의 스레드가"예외를 발생시키면" 프로세스 자체가
종료될 수 있어 다른 스레드에 영향을 미치게 된다.
예를들어 멀티 프로세스인 워드와 엑셀을 동시에 사용하던 도중, 워드에 오류가 생겨 먹통이 되더라도 엑셀은 여전히
사용 가능하다.

그러나 멀티 스레드로 동작하는 메신저의 경우 파일을 전송하는 스레듯에서 예외가 발생하면 메신저 프로세스 자체가
종료되므로 채팅 스레드도 같이 종료된다. 그렇기 때문에 멀티 스레드에서는 "예외 처리 만전"을 기해야 한다.

멀티 스레드는 다양한 곳에서 사용된다. 대용량 데이터의 처리 시간을 줄이기 위해 데이터를 분할해서 병렬로 처리하기도
하고, UI를 가지고 있는 애플리케이션에서 네트워크 통신을 하기위해 사용되기도 한다.
또한 다수 클라이언트의 요청을 처리하는 서버를 개발할 떄에도 사용한다.
멀티 스레드는 애플리케이션을 개발하는데 꼭 필요한 기능이기 때문에 반드시 이해하고 활용할 수 있도록 해야한다.
```

# 스케줄러

- 일을 관리함

# 호출스택 (나중에 배움. 가볍게 읽기)

- api를 사용해서 불러온 애들은 나중에 실행한다는 뜻

1. 메모리에 실행함수 적재
2. 호출스택에 anonymous(전역컨텍스트)가 들어감
3. console.log(1)이 호출 스택에 쌓임
4. console.log(1)이 실행되어 console에 1을 찍고 스택에서 사라짐
5. 백그라운드에 timer(실행, 1) (계속 시간을 카운팅하는 중)
6. console.log(3)이 스택에 쌓임
7. console.log(3)이 실행되어 console에 3을 찍고 스택에서 사라짐
8. anonymous 사라짐
9. 1초가 지나가면 백그라운드에서 태스크 큐로 '실행 함수'를 가져옴 (백그라운드에서 없어짐)
10. 태스트 큐에서 실행함수를 호출 스택으로 가져옴
11. '실행 함수' 위에 console.log(2)가 쌓임
12. console.log

# 기초 CS

## 1. 스택

- 먼저 들어간 값이 가장 나중에 나오는 데이터 구조
- 출입구가 1개
- 문제: 다음 중 스택이 아닌 것은? (1,2,3,4,5 순서대로 넣었다고 가정) (선지는 나오는 순서를 정렬한 것임)

  - 1. 3,4,5,2,1 (1번넣고 2번넣고 3번넣고 3번 바로 빼고, 4번 넣고 4번 바로 빼고, 5번넣고 5번 바로 빼고,, 2번 빼고 1번 빼고)
  - 2. 5,4,3,2,1
  - 3. 3,2,4,5,1
  - 4. 4,2,3,1,5
  - 5. 1,2,3,4,5
  - 정답: 4 (4와 2는 2칸떨어져있으므로 바로 순서가 이어질 수 없음)

- 스택의 사용 사례
  - 웹 브라우저 방문기록 (뒤로 가기)
  - 실행 취소
  - 역순 문자열 만들기

## 2. 큐

- 먼저 들어간 값이 가장 빨리 나오는 데이터 구조
- 입구 1개, 출구 1개

## 3. 깊이우선탐색(DFS)은 스택, 너비우선탐색(BFS)은 큐.

- 깊이우선 탐색은 스택
- 너비우선 탐색은 큐

# 비동기 프로그래밍을 왜 알아야 하고, javascript의 실행 구조는 왜 알아야 하는가?

```
one()   // 페이지 로드하고
two()   // 서버에서 이미지와 상세 데이터를 받아오고 (http://test.api.weniv.co.kr/mall)
three()   // 읽어온 데이터를 뿌려준다
four()   // 페이지에 정적 데이터 로드


// 1,2는 독자적으로 쓸 수 있음
// 3,4는 데이터를 받아야 쓸 수 있음
```

- 코드에 따라서 유동적으로 따로 실행되는 것은 따로 실행되게 놔두고, 우리는 우리의 일을 하는 것

# promise

- 콜백 지옥을 해결하기 위해서 ES6에서 등장

- 비동기

```js
/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/
```

- 비동기는 처리 결과가 성공할 수도 있고, 실패할 수도 있다

- PROMISE의 상태
  - pending(대기상태) (데이터 요청)-> resolve(해결) (데이터 받아옴) -> fulfilled(성공)
  - pending(대기상태) -> reject (거부) -> rejected(실패)

```js
let p = new Promise(function(resolve,reject) => {
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
```

- 성공되면 then이 받음 (resolve는 then이 받음)
- then안에 받는 파라미터를 적어줌 (그 받은 메시지를 가지고 뭘 할것인지를 뒤에 이어서 적어줌)

## promise reject & catch (여기부터 강의 다시)

```js
let p = new Promise(function (resolve, reject) => {
    // 비동기적으로 실행될 code 작성
    reject('hello world')    // 실패
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
```

- error를 만나면 catch가 잡아냄
- promise 내부 에러는 catch가 담당
- 캐치가 두 개 이상 사용될 수 있음
- 주로 테스트를할 때 ~

- 예제

```js
/* 일부러 시간이 걸리게 설계한 에제 */
let p4 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("끝났다!"), 3000);
});

console.log("hello world");
console.log(p4); // Promise {<pending>}

// 3초 후에
console.log(p4); // Promise {<fulfilled>: '끝났다!'}
```

- finally는 관습적으로 마지막에 쓰는 것이지, 뒤에 이어붙이는 것이 안되는 것은 아님

- async나 fetch도 promise를..?

```js
let test = async function () {
  return "hello world";
};

console.log(test()); // Promise{<fulfilled>: 'hello world'}

let data = fetch("http://test..api.weniv.co.kr/mall");
console.log(data); // Promise{<fulfilld>: Response}
```

- 예제 (웹 브라우저 콘솔창에 찍어볼 것)

```js
fetch("http://test..api.weniv.co.kr/mall")
  .then((메시지) => {
    console.log(메시지);
    return 메시지;
  })
  .then((메시지) => {
    console.log(메시지.json());
  })
  .catch((메시지) => {
    // 정상작동이 되면 필요가 없게되는 코드 (프로젝트 진행시 에러케이스에 대한 것들을 고려해서 코드 작성할 것)
    //alert(메시지)
    alert(
      "홈페이지가 정상적으로 작동하지 않고 있습니다. 조치중이니 잠시만 기다려주시기 바랍니다."
    );
    console.log(메시지);
  });
```

# 13시 ~ 14시 30분 다시 듣기

# 작동 순서: ! -> !! -> hello world -> hello 인게 왜 그런 것인지 다시 확인 후 기재

# 14시 40분 제공 코드

- [사이트](https://paullabworkspace.notion.site/14-promise-async-await-a26f842fee9f4956b386e36155f5b58f)

# 066

- async를 앞에 써줘야 f가 promise가 됨

# 067

- async를 await의 문법적 설탕이라고 설명하는 것은 옳지 않음
- async를 promise라고 생각하면 됨.
- top-level await을 쓰면 비동기 함수 외부에서 await 키워드 사용할 수 있음
- await은 async 함수 안에서만 사용가능하다 ? (X) -> 함수 밖에서도 사용이 가능하다 (최근에 바뀜. 원래는 await이 async안에서만 동작했으나 탑레벨 await이 새로 생겼고, 이로인해 함수 밖에서도 사용이 가능한 것임.)
- 탑레벨 await가 생김으로 인하여 for문에서도 await을 사용할 수 있음

# 에러핸들링

- 기본 꼴

```js
try {
  // code
} catch (에러메시지) {
  // code
} finally {
  // code
}

// new Error(message)
// new SyntaxError(message)
// new ReferenceError(message)
```

- 에러가 날 수 있는 여지가 있는 곳 전체에 try설정 => 나중에 감이 생기면 고도화 하는 것임
- try ~ catch로 무한반복을 잡을 수 없음 (무한반복은 error가 아님)

- 예제 1

```js
try {
  let x = 10;
  let y = 20;
  console.log(x + y);
} catch (e) {
  console.log(e);
} finally {
  console.log("finally");
}
```

- 예제2 (예제1을 고쳐서 에러 발생시킴)

```js
try {
  let x = 10;
  let y = 20;
  console.log(x + y + z);
} catch (e) {
  console.log(e);
} finally {
  console.log("finally");
}

// ReferenceError: z is not defined
//    at <anonymous>:4:23
// finally
```

- 예제3 (z에 값이 할당되어 있지 않으므로 서비스가 멈춤) => 에러를 던져주고 스톱함.

```js
let x = 10;
let y = 20;
console.log(x + y + z);
let z = 30; // 값이 할당되지 않음. 서비스가 멈춤
```

- 예제4 (예제3과 비교) => 일부 기능이 수행이 안될 수는 있지만 서비스는 정상적으로 작동함. 에러를 던져주고 마지막까지 수행함

```js
try {
  let x = 10;
  let y = 20;
  console.log(x + y + z);
} catch (e) {
  console.log(e);
} finally {
  // 일부 기능이 수행이 안될 수는 있지만 서비스는 정상적으로 작동함
  console.log("finally");
}
```

- 예제 3,4 심화

```js
a(); // 로고 받아오기 메서드 - 사람 a가 개발함 (길동)
b(); // 상품 정보 받아오기 메서드 - 사람 b가 개발함 (철수)
c(); // 장바구니 구현 메서드 - 사람 c가 개발함 (둘리)

// a()에서 문제가 발생했을 경우 b(), c()도 멈춤

// but try~catch를 설정해주면 a()가 멈춰도 b(), c()는 작동함
```

## 코드리뷰시 - 에러처리 / 보안 이슈 처리하는 것이 중요

- 예제 5
  - throw는 강제적으로 에러를 발생시키는 것

```js
try{
    let x = 10;
    let y = 10;
    throw new Error('에러야!')
    console.log(x+y+z)
} catch(e){
    console.error(e)
    console.dir(e)
    console.error(e.message)
} finally {
    console..log('end')
}
```

- 예제6 (syntax error)

```js
try{
    let x = 10;
    let y = 10;
    throw new SyntaxError('에러야!')
    console.log(x+y+z)
} catch(e){
    console.error(e)
    console.dir(e)
    console.error(e.message)
} finally {
    console..log('end')
}
```

- try ~ catch는 런타임 에러만 잡아줌
- [try~catch와 에러 핸들링](https://ko.javascript.info/try-catch)

# 질의응답

- ![image](https://user-images.githubusercontent.com/68424403/196297541-82f3edfc-6f2e-42a9-803a-38801955e05b.png)

- ![image](https://user-images.githubusercontent.com/68424403/196297670-8628be2b-c41f-4ca4-b95e-7fe1b2c93a9c.png)<br>
  전역 컨텍스트: 실행 컨텍스트가 생성되고 실행되기 전에 생성되어 애플리케이션이 종료될 때까지 유지하는 전역 객체입니다. 이는 모든 전역 변수와 전역 함수 등을 포함<br>
  [관련 자료](https://poiemaweb.com/js-execution-context)
