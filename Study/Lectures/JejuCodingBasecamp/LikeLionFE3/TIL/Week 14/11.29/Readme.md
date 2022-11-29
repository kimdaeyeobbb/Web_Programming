# 22.11.29 (화)

# 간단한 코드 스니팻

```js
Infinity - Infinity;
Math.ceil(); // 올림
Math.floor(); // 내
```

# 정수구하기 (소수점 제거)

```js
~~(10 / 3); // 비트단위 연산자
parseInt(10 / 3);
Math.floor(10 / 3);
(10 / 3) << 0; // 비트 단위 연산자
(10 / 3) | 0; // 비트 단위 OR 연산자
```

<br>

# 비트 단위 연산

# 숨어있는 숫자의 덧셈

- (정규표현식 연습 사이트)[https://regexr.com/]

```js
Array.from("aAb1B2cC34oOp");
"aAb1B2cC34oOp".split("");
Array.from("aAb1B2cC34oOp").map((v) => +v);
Array.from("aAb1B2cC34oOp")
  .map((v) => +v)
  .filter((v) => !Number.isNaN(v));
// 순서를 바꿔도 어차피 map으로 숫자를 변환해야 합니다.
// Array.from('aAb1B2cC34oOp').filter(v => +v)
Array.from("aAb1B2cC34oOp")
  .map((v) => +v)
  .filter((v) => !Number.isNaN(v))
  .reduce((a, c) => a + c, 0);

function solution(my_string) {
  return Array.from(my_string)
    .map((v) => +v)
    .filter((v) => !Number.isNaN(v))
    .reduce((a, c) => a + c, 0);
}

"aAb1B2cC34oOp".replace(/[a-zA-Z]/g, "!");
// '!!!1!2!!34!!!'
"aAb1B2cC34oOp".replace(/[a-zA-Z]/g, "");
// '1234'
"aAb1B2cC34oOp".replace(/[^\d]/g, "");
// '1234'
"aAb1B2cC34oOp".replace(/[\D]/g, "");
// '1234'
"abcAb1B2abcC34oOp".replaceAll("abc", "");
// 'Ab1B2C34oOp'
"abcAb1B2abcC34oOp".replaceAll(/[a-zA-Z]/g, "");
// '1234'
"aAb1B2cC34oOp".match(/[\d]/g);
// ['1', '2', '3', '4']

function solution(my_string) {
  return my_string
    .match(/[\d]/g)
    .map((v) => +v)
    .reduce((a, c) => a + c, 0);
}
```

<br>

# 진료순서 정하기

```js
// 원본이 변경이 되어버리기 때문에 원하는 결과가 안나옵니다.
function solution(emergency) {
  const sorted = emergency.sort((a, b) => b - a);
  return sorted.map((v) => indexOf(v) + 1);
}

let 원본 = [3, 76, 24];
let 사본 = 원본.sort((a, b) => b - a);
사본;
// [76, 24, 3]
원본;
// [76, 24, 3]

function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

function solution(emergency) {
  const sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
```

## 복사

- 깊은 복사
- 전개 구문으로 복사
- slice로 복사
- JSON.stringify()로 복사
- Object.assign()으로 복사
- Lodash 라이브러리 사용

<br>

# 다항식 더하기

```js
[3, 10].join("x + ");
// '3x + 10'

"3x + 7 + x".split(" + ");

"3x + 7 + x".split(" + ").filter((v) => v.includes("x"));

// x 항만 골라내기
"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => v.replace("x", "") || "1");

"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => +v.replace("x", "") || 1);

"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => +v.replace("x", "") || 1)
  .reduce((a, c) => a + c, 0);

// 숫자 항만 골라내기
"3x + 7 + x"
  .split(" + ")
  .filter((v) => !v.includes("x"))
  .map((v) => +v)
  .reduce((a, c) => a + c, 0);

function solution(polynomial) {
  answer = [];
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => v.includes("x"))
      .map((v) => +v.replace("x", "") || 1)
      .reduce((a, c) => a + c, 0)
  );
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => !v.includes("x"))
      .map((v) => +v)
      .reduce((a, c) => a + c, 0)
  );
  return answer.join("x + ");
}
```

```js
[3, 10].join("x + ");
// '3x + 10'

"3x + 7 + x".split(" + ");

"3x + 7 + x".split(" + ").filter((v) => v.includes("x"));

// x 항만 골라내기
"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => v.replace("x", "") || "1");

"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => +v.replace("x", "") || 1);

"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => +v.replace("x", "") || 1)
  .reduce((a, c) => a + c, 0);

// 숫자 항만 골라내기
"3x + 7 + x"
  .split(" + ")
  .filter((v) => !v.includes("x"))
  .map((v) => +v)
  .reduce((a, c) => a + c, 0);

function solution(polynomial) {
  answer = [];
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => v.includes("x"))
      .map((v) => +v.replace("x", "") || 1)
      .reduce((a, c) => a + c, 0)
  );
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => !v.includes("x"))
      .map((v) => +v)
      .reduce((a, c) => a + c, 0)
  );
  if (answer[0] === 1 && answer[1] !== 0) {
    return `x + ${answer[1]}`;
  }
  if (answer[0] === 1 && answer[1] === 0) {
    return `x`;
  }
  if (answer[0] !== 1 && answer[1] === 0) {
    return `${answer[0]}x`;
  }
  if (answer[0] === 0 && answer[1] !== 0) {
    return `${answer[1]}`;
  }
  if (answer[0] === 0 && answer[1] === 0) {
    return ``;
  }
  return answer.join("x + ");
}
```

```js
function solution(polynomial) {
  let answer = [];
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => v.includes("x"))
      .map((v) => +v.replace("x", "") || 1)
      .reduce((a, c) => a + c, 0)
  );
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => !v.includes("x"))
      .map((v) => +v)
      .reduce((a, c) => a + c, 0)
  );

  // if (answer[1] === 0) {
  //     answer.pop();
  // }
  // 여기서 위 코드를 3항 연산자로 만들면 어느정도 간소화가 가능
  let result = [];
  if (answer[0]) result.push(`${answer[0] === 1 ? "" : answer[0]}x`);
  if (answer[1]) result.push(answer[1]);
  return result.join(" + ");
}
```

```js
[3, 10].join("x + ");
// '3x + 10'

"3x + 7 + x".split(" + ");

"3x + 7 + x".split(" + ").filter((v) => v.includes("x"));

// x 항만 골라내기
"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => v.replace("x", "") || "1");

"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => +v.replace("x", "") || 1);

"3x + 7 + x"
  .split(" + ")
  .filter((v) => v.includes("x"))
  .map((v) => +v.replace("x", "") || 1)
  .reduce((a, c) => a + c, 0);

// 숫자 항만 골라내기
"3x + 7 + x"
  .split(" + ")
  .filter((v) => !v.includes("x"))
  .map((v) => +v)
  .reduce((a, c) => a + c, 0);

function solution(polynomial) {
  answer = [];
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => v.includes("x"))
      .map((v) => +v.replace("x", "") || 1)
      .reduce((a, c) => a + c, 0)
  );
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => !v.includes("x"))
      .map((v) => +v)
      .reduce((a, c) => a + c, 0)
  );
  if (answer[0] === 1 && answer[1] !== 0) {
    return `x + ${answer[1]}`;
  }
  if (answer[0] === 1 && answer[1] === 0) {
    return `x`;
  }
  if (answer[0] !== 1 && answer[1] === 0) {
    return `${answer[0]}x`;
  }
  if (answer[0] === 0 && answer[1] !== 0) {
    return `${answer[1]}`;
  }
  if (answer[0] === 0 && answer[1] === 0) {
    return ``;
  }
  return answer.join("x + ");
}

// 코드 간소화
function solution(polynomial) {
  let answer = [];
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => v.includes("x"))
      .map((v) => +v.replace("x", "") || 1)
      .reduce((a, c) => a + c, 0)
  );
  answer.push(
    polynomial
      .split(" + ")
      .filter((v) => !v.includes("x"))
      .map((v) => +v)
      .reduce((a, c) => a + c, 0)
  );

  let result = [];
  if (answer[0]) result.push(`${answer[0] === 1 ? "" : answer[0]}x`);
  if (answer[1]) result.push(answer[1]);
  // [10].join(' + ')
  // '10'
  return result.join(" + ");
}
```

<br>

# OX퀴즈

```js
// 코딩테스트 중 eval을 사용하지 못하도록 막아놓은 곳이 있습니다. 참고하세요.

eval();
eval("10 + 10");
// 20
eval("10 - 3");
// 7
eval("5 + 6 = 11"); // error
eval("5 + 6 == 11"); // true

quiz.split(" = ")[0] +
  // '5 + 6'
  quiz.split(" = ")[1];
// 11

function solution(quiz) {
  let result = [];
  for (item of quiz) {
    const 연산식 = eval(item.split(" = ")[0]);
    const 결과값 = +item.split(" = ")[1];
    result.push(eval(연산식) === 결과값 ? "O" : "X");
  }
  return result;
}
```

<br>

# 겹치는 선분의 길이

```js
function solution(lines) {
  // 100이 0, 101은 1
  // 99는 -1, 98은 -2
  let line = Array(201).fill(0); // 0 포함 201개
  for (let [i, j] of lines) {
    for (; i < j; i++) {
      line[100 + i]++;
    }
  }
  return line.filter((v) => v >= 2).length;
}
```

```python
def solution(lines):
    sets = [set(range(min(l), max(l))) for l in lines]
    return len(sets[0] & sets[1] | sets[0] & sets[2] | sets[1] & sets[2])
```

```js
function solution(lines) {
  // 100이 0, 101은 1
  // 99는 -1, 98은 -2
  let line = Array(201).fill(0); // 0 포함 201개
  for (let [i, j] of lines) {
    for (; i < j; i++) {
      line[100 + i]++;
    }
  }
  return line.filter((v) => v >= 2).length;
}

// 큰값 = Math.max(...lines.flat())
// 작은값 = Math.min(...lines.flat())
// Math.max([[0, 1], [2, 5], [3, 9]])
// NaN
// let value = [[0, 1], [2, 5], [3, 9]]
// let value2 = [[0, [1, 2]], [2, 5], [3, 9]]
// value.flat()
// [0, 1, 2, 5, 3, 9]
// value2.flat()
// [0, Array(2), 2, 5, 3, 9]
// value2.flat(Infinity)
// [0, 1, 2, 2, 5, 3, 9]
// Math.max(...value2.flat(Infinity))
// 9
```

- [참고자료](https://www.acmicpc.net/problem/1689)
- [참고자료](https://velog.io/@kwb020312/%E3%80%B0%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B2%B9%EC%B9%98%EB%8A%94-%EC%84%A0%EB%B6%84%EC%9D%98-%EA%B8%B8%EC%9D%B4-3nnyugc1)
- [참고자료](https://konghana01.tistory.com/142)
- [참고자료](https://ryong9rrr.github.io/pgm-Lv0-%EA%B2%B9%EC%B9%98%EB%8A%94-%EC%84%A0%EB%B6%84%EC%9D%98-%EA%B8%B8%EC%9D%B4/)
- [참고자료]()
- [참고자료]()
- [참고자료]()

<br>

# [가사 검색](https://school.programmers.co.kr/learn/courses/30/lessons/60060)

```js
// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

// -- section 1 --
words: ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries: ["fro??", "????o", "fr???", "fro???", "pro?"];
result: [3, 2, 4, 1, 0];

"fro??"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 3

"????o"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 2

"fr???"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 4

"frodo".match(/fro../g);
// ['frodo']
"frodot".match(/fro../g);
// ['frodo']
"frotdot".match(/fro../g);
// ['frotd']
"ftrotdot".match(/fro../g);
// null
"aafrotdot".match(/fro../g);
// ['frotd']
"abcdo".match(/....o/g);
// ['abcdo']
"abcdok".match(/....o/g);
// ['abcdo']
"dok".match(/....o/g);
// null

// -- section 2 --
let 패턴 = new RegExp("fro..", "g");
"frodo".match(패턴);
// ['frodo']
"ftrotdot".match(패턴);
// null

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"];
```

- 정확성 & 효율성을 같이 물어본다면 `클래스 구현 문제`일 가능성이 높다

```js
// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

// -- section 1 --
words: ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries: ["fro??", "????o", "fr???", "fro???", "pro?"];
result: [3, 2, 4, 1, 0];

"fro??"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 3

"????o"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 2

"fr???"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 4

"frodo".match(/fro../g);
// ['frodo']
"frodot".match(/fro../g);
// ['frodo']
"frotdot".match(/fro../g);
// ['frotd']
"ftrotdot".match(/fro../g);
// null
"aafrotdot".match(/fro../g);
// ['frotd']
"abcdo".match(/....o/g);
// ['abcdo']
"abcdok".match(/....o/g);
// ['abcdo']
"dok".match(/....o/g);
// null

// -- section 2 --
let 패턴 = new RegExp("fro..", "g");
"frodo".match(패턴);
// ['frodo']
"ftrotdot".match(패턴);
// null

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"];
```

```js
// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

// -- section 1 --
words: ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries: ["fro??", "????o", "fr???", "fro???", "pro?"];
result: [3, 2, 4, 1, 0];

"fro??"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 3

"????o"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 2

"fr???"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 4

"frodo".match(/fro../g);
// ['frodo']
"frodot".match(/fro../g);
// ['frodo']
"frotdot".match(/fro../g);
// ['frotd']
"ftrotdot".match(/fro../g);
// null
"aafrotdot".match(/fro../g);
// ['frotd']
"abcdo".match(/....o/g);
// ['abcdo']
"abcdok".match(/....o/g);
// ['abcdo']
"dok".match(/....o/g);
// null

// -- section 2 --
let 패턴 = new RegExp("fro..", "g");
"frodo".match(패턴);
// ['frodo']
"ftrotdot".match(패턴);
// null

let 패턴 = new RegExp("fro..", "g");
패턴.test("frodo"); // 우리한테 필요한 것은 boolean 값
// true

// 코드 시작

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"];

let q = queries[0].replaceAll("?", ".");
console.log(q);
let pattern = new RegExp(q, "g");
let count = 0;
for (let word of words) {
  if (pattern.test(word)) {
    count++;
  }
}
console.log(count);

// 코드 끝

// true, false를 반복합니다.
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);

// 따라서 아래 코드를 모두 판별하고 싶을 때에는
// 패턴을 동적으로 할당해줘야 합니다.
pattern.test(words[1]);
pattern.test(words[2]);
pattern.test(words[3]);
pattern.test(words[4]);
pattern.test(words[5]);

// 코드 시작

// 아래와 같이 했을 경우 4가 출력됩니다.
// 따라서 길이도 체크를 해주어야 합니다.
function solution(words, queries) {
  let q = queries[0].replaceAll("?", ".");
  let count = 0;
  for (let word of words) {
    const pattern = new RegExp(q, "g");
    if (pattern.test(word)) {
      count++;
    }
  }
  console.log(count);
}

solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);

// 코드 끝
```

```js
// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

// -- section 1 --
words: ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries: ["fro??", "????o", "fr???", "fro???", "pro?"];
result: [3, 2, 4, 1, 0];

"fro??"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 3

"????o"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 2

"fr???"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 4

"frodo".match(/fro../g);
// ['frodo']
"frodot".match(/fro../g);
// ['frodo']
"frotdot".match(/fro../g);
// ['frotd']
"ftrotdot".match(/fro../g);
// null
"aafrotdot".match(/fro../g);
// ['frotd']
"abcdo".match(/....o/g);
// ['abcdo']
"abcdok".match(/....o/g);
// ['abcdo']
"dok".match(/....o/g);
// null

// -- section 2 --
let 패턴 = new RegExp("fro..", "g");
"frodo".match(패턴);
// ['frodo']
"ftrotdot".match(패턴);
// null

let 패턴 = new RegExp("fro..", "g");
패턴.test("frodo"); // 우리한테 필요한 것은 boolean 값
// true

// 코드 시작

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"];

let q = queries[0].replaceAll("?", ".");
console.log(q);
let pattern = new RegExp(q, "g");
let count = 0;
for (let word of words) {
  if (pattern.test(word)) {
    count++;
  }
}
console.log(count);

// 코드 끝

// true, false를 반복합니다.
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);

// 따라서 아래 코드를 모두 판별하고 싶을 때에는
// 패턴을 동적으로 할당해줘야 합니다.
pattern.test(words[1]);
pattern.test(words[2]);
pattern.test(words[3]);
pattern.test(words[4]);
pattern.test(words[5]);

// 코드 시작

// 따라서 길이도 체크를 해주어야 합니다.
function solution(words, queries) {
  let q = queries[0].replaceAll("?", ".");
  let count = 0;
  for (let word of words) {
    const pattern = new RegExp(q, "g");
    // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
    if (pattern.test(word) && q.length === word.length) {
      count++;
    }
  }
  console.log(count);
}

solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);

// 코드 끝
```

```js
function solution(words, queries) {
  let result = [];
  for (let q of queries) {
    q = q.replaceAll("?", ".");
    let count = 0;
    for (let word of words) {
      const pattern = new RegExp(q, "g");
      // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
      if (pattern.test(word) && q.length === word.length) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);
```

```js
// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

// -- section 1 --
words: ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries: ["fro??", "????o", "fr???", "fro???", "pro?"];
result: [3, 2, 4, 1, 0];

"fro??"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 3

"????o"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 2

"fr???"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 4

"frodo".match(/fro../g);
// ['frodo']
"frodot".match(/fro../g);
// ['frodo']
"frotdot".match(/fro../g);
// ['frotd']
"ftrotdot".match(/fro../g);
// null
"aafrotdot".match(/fro../g);
// ['frotd']
"abcdo".match(/....o/g);
// ['abcdo']
"abcdok".match(/....o/g);
// ['abcdo']
"dok".match(/....o/g);
// null

// -- section 2 --
let 패턴 = new RegExp("fro..", "g");
"frodo".match(패턴);
// ['frodo']
"ftrotdot".match(패턴);
// null

let 패턴 = new RegExp("fro..", "g");
패턴.test("frodo"); // 우리한테 필요한 것은 boolean 값
// true

// 코드 시작

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"];

let q = queries[0].replaceAll("?", ".");
console.log(q);
let pattern = new RegExp(q, "g");
let count = 0;
for (let word of words) {
  if (pattern.test(word)) {
    count++;
  }
}
console.log(count);

// 코드 끝

// true, false를 반복합니다.
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);

// 따라서 아래 코드를 모두 판별하고 싶을 때에는
// 패턴을 동적으로 할당해줘야 합니다.
pattern.test(words[1]);
pattern.test(words[2]);
pattern.test(words[3]);
pattern.test(words[4]);
pattern.test(words[5]);

// 코드 시작

// 따라서 길이도 체크를 해주어야 합니다.
function solution(words, queries) {
  let q = queries[0].replaceAll("?", ".");
  let count = 0;
  for (let word of words) {
    const pattern = new RegExp(q, "g");
    // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
    if (pattern.test(word) && q.length === word.length) {
      count++;
    }
  }
  console.log(count);
}

solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);

// 코드 끝

// -- section 3 --
function solution(words, queries) {
  let result = [];
  for (let q of queries) {
    q = q.replaceAll("?", ".");
    let count = 0;
    for (let word of words) {
      const pattern = new RegExp(q, "g");
      // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
      if (pattern.test(word) && q.length === word.length) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);

// -- section 4 --
// 4번이니까, 난이도가 4/5니까, 정규표현식으로 풀리지 않을 것이다.
// 문자열 관련 알고리즘 검색 -> https://izmirprogramming.tistory.com/8 등
// 대부분은 class 형태의 링크드 리스트가 답
// '트라이 알고리즘'을 사용해야겠다!

/*
패턴 : 'fro..'
'frodo'
{'f' : 다음object} count : 1
{'r' : 다음object} count : 1
{'o' : 다음object} count : 1 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1
{'o' : 다음object} count : 1
*/

// {
//     value : 'f'
//     count : 1
//     {
//         value : 'r'
//         count : 1
//         {
//             value : 'o'
//             count : 1
//             {
//                 value : 'd'
//                 count : 1
//                 {
//                     value : 'o'
//                     count : 1
//                 }
//             }
//         }
//     }
// }
```

```js
패턴 : 'fro..'
'frodo', 'front'
{'f' : 다음object} count : 2
{'r' : 다음object} count : 2
{'o' : 다음object} count : 2 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1, {'n' : 다음object} count : 1
{'o' : 다음object} count : 1, {'t' : 다음object} count : 1
```

```js
// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060

// -- section 1 --
words: ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries: ["fro??", "????o", "fr???", "fro???", "pro?"];
result: [3, 2, 4, 1, 0];

"fro??"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 3

"????o"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 2

"fr???"[("frodo", "front", "frost", "frozen", "frame", "kakao")]; // -> 4

"frodo".match(/fro../g);
// ['frodo']
"frodot".match(/fro../g);
// ['frodo']
"frotdot".match(/fro../g);
// ['frotd']
"ftrotdot".match(/fro../g);
// null
"aafrotdot".match(/fro../g);
// ['frotd']
"abcdo".match(/....o/g);
// ['abcdo']
"abcdok".match(/....o/g);
// ['abcdo']
"dok".match(/....o/g);
// null

// -- section 2 --
let 패턴 = new RegExp("fro..", "g");
"frodo".match(패턴);
// ['frodo']
"ftrotdot".match(패턴);
// null

let 패턴 = new RegExp("fro..", "g");
패턴.test("frodo"); // 우리한테 필요한 것은 boolean 값
// true

// 코드 시작

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"];

let q = queries[0].replaceAll("?", ".");
console.log(q);
let pattern = new RegExp(q, "g");
let count = 0;
for (let word of words) {
  if (pattern.test(word)) {
    count++;
  }
}
console.log(count);

// 코드 끝

// true, false를 반복합니다.
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);
pattern.test(words[0]);

// 따라서 아래 코드를 모두 판별하고 싶을 때에는
// 패턴을 동적으로 할당해줘야 합니다.
pattern.test(words[1]);
pattern.test(words[2]);
pattern.test(words[3]);
pattern.test(words[4]);
pattern.test(words[5]);

// 코드 시작

// 따라서 길이도 체크를 해주어야 합니다.
function solution(words, queries) {
  let q = queries[0].replaceAll("?", ".");
  let count = 0;
  for (let word of words) {
    const pattern = new RegExp(q, "g");
    // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
    if (pattern.test(word) && q.length === word.length) {
      count++;
    }
  }
  console.log(count);
}

solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);

// 코드 끝

// -- section 3 --
function solution(words, queries) {
  let result = [];
  for (let q of queries) {
    q = q.replaceAll("?", ".");
    let count = 0;
    for (let word of words) {
      const pattern = new RegExp(q, "g");
      // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
      if (pattern.test(word) && q.length === word.length) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);

// -- section 4 --
// 4번이니까, 난이도가 4/5니까, 정규표현식으로 풀리지 않을 것이다.
// 문자열 관련 알고리즘 검색 -> https://izmirprogramming.tistory.com/8 등
// 대부분은 class 형태의 링크드 리스트가 답
// '트라이 알고리즘'을 사용해야겠다!

/*
패턴 : 'fro..'
'frodo'
{'f' : 다음object} count : 1
{'r' : 다음object} count : 1
{'o' : 다음object} count : 1 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1
{'o' : 다음object} count : 1
*/

// {
//     value : 'f'
//     count : 1
//     {
//         value : 'r'
//         count : 1
//         {
//             value : 'o'
//             count : 1
//             {
//                 value : 'd'
//                 count : 1
//                 {
//                     value : 'o'
//                     count : 1
//                 }
//             }
//         }
//     }
// }

/*
패턴 : 'fro..'
'frodo', 'front'
{'f' : 다음object} count : 2
{'r' : 다음object} count : 2
{'o' : 다음object} count : 2 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1, {'n' : 다음object} count : 1
{'o' : 다음object} count : 1, {'t' : 다음object} count : 1
*/

// [{'f':2}, {'r':2}, {'o':2}, {'d':1, 'n':1}, {'o':1, 't':1}]
// [[{}], [{},{}], [{},{},{}], [{},{},{},{}], [{},{},{},{},{}]...
```

```js
class Node {
  constructor() {
    this.children = {};
    this.count = 0;
  }
}

class 트라이 {
  constructor() {
    this.root = new Node();
  }

  insertData(word) {
    let current = this.root;
    current.count += 1;
    for (const s of word) {
      let child = current.children[s];

      if (!child) {
        child = new 노드();
        current.children[s] = child;
      }

      child.count += 1;
      current = child;
    }
  }

  search(query) {
    let current = this.root;
    for (const q of query) {
      if (q === "?") {
        return current.count;
      } else if (!current.children[q]) {
        return 0;
      }
      current = current.children[q];
    }
  }
}

function solution(words, queries) {
  answer = [];

  const 트라이배열 = Array(11);
  const 트라이역배열 = Array(11);

  for (const word of words) {
    const 단어길이 = word.length;
    const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이();
    const 트라이2 = 트라이역배열[단어길이]
      ? 트라이역배열[단어길이]
      : new 트라이();
    트라이1.insertData(word);
    트라이2.insertData([...word].reverse().join(""));
    트라이배열[단어길이] = 트라이1;
    트라이역배열[단어길이] = 트라이2;
  }

  console.log(트라이배열);
  console.log(트라이역배열);

  return answer;
}
```

```js
solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);
```

```js
class 노드 {
  constructor() {
    this.children = {};
    this.count = 0;
  }
}

class 트라이 {
  constructor() {
    this.root = new 노드();
  }

  insertData(word) {
    let current = this.root;
    current.count += 1;
    for (const s of word) {
      let child = current.children[s];

      if (!child) {
        child = new 노드();
        current.children[s] = child;
      }

      child.count += 1;
      current = child;
    }
  }

  search(query) {
    let current = this.root;
    for (const q of query) {
      if (q === "?") {
        return current.count;
      } else if (!current.children[q]) {
        return 0;
      }
      current = current.children[q];
    }
  }
}

function solution(words, queries) {
  answer = [];

  const 트라이배열 = Array(11);
  const 트라이역배열 = Array(11);

  for (const word of words) {
    const 단어길이 = word.length;
    const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이();
    const 트라이2 = 트라이역배열[단어길이]
      ? 트라이역배열[단어길이]
      : new 트라이();
    트라이1.insertData(word);
    트라이2.insertData([...word].reverse().join(""));
    트라이배열[단어길이] = 트라이1;
    트라이역배열[단어길이] = 트라이2;
  }

  console.log(트라이배열);
  console.log(트라이역배열);

  return answer;
}

solution(
  ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  ["fro??", "????o", "fr???", "fro???", "pro?"]
);
```

```js
// 카카오 2020년 공채문제 4번
// https://programmers.co.kr/learn/courses/30/lessons/60060


// -- section 1 --
words   : ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries : ["fro??", "????o", "fr???", "fro???", "pro?"]
result  : [3, 2, 4, 1, 0]

"fro??"
["frodo", "front", "frost", "frozen", "frame", "kakao"] // -> 3

"????o"
["frodo", "front", "frost", "frozen", "frame", "kakao"] // -> 2

"fr???"
["frodo", "front", "frost", "frozen", "frame", "kakao"] // -> 4

"frodo".match(/fro../g)
// ['frodo']
"frodot".match(/fro../g)
// ['frodo']
"frotdot".match(/fro../g)
// ['frotd']
"ftrotdot".match(/fro../g)
// null
"aafrotdot".match(/fro../g)
// ['frotd']
"abcdo".match(/....o/g)
// ['abcdo']
"abcdok".match(/....o/g)
// ['abcdo']
"dok".match(/....o/g)
// null


// -- section 2 --
let 패턴 = new RegExp('fro..', 'g')
"frodo".match(패턴)
// ['frodo']
"ftrotdot".match(패턴)
// null

let 패턴 = new RegExp('fro..', 'g')
패턴.test("frodo") // 우리한테 필요한 것은 boolean 값
// true


// 코드 시작

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

let q = queries[0].replaceAll('?', '.')
console.log(q)
let pattern = new RegExp(q, 'g')
let count = 0
for (let word of words){
    if (pattern.test(word)){
        count++
    }
}
console.log(count)

// 코드 끝

// true, false를 반복합니다.
pattern.test(words[0])
pattern.test(words[0])
pattern.test(words[0])
pattern.test(words[0])
pattern.test(words[0])
pattern.test(words[0])

// 따라서 아래 코드를 모두 판별하고 싶을 때에는
// 패턴을 동적으로 할당해줘야 합니다.
pattern.test(words[1])
pattern.test(words[2])
pattern.test(words[3])
pattern.test(words[4])
pattern.test(words[5])


// 코드 시작

// 따라서 길이도 체크를 해주어야 합니다.
function solution(words, queries){
    let q = queries[0].replaceAll('?', '.')
    let count = 0
    for (let word of words){
        const pattern = new RegExp(q, 'g')
        // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
        if (pattern.test(word) && q.length === word.length){
            count++
        }
    }
    console.log(count)
}

solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    ["fro??", "????o", "fr???", "fro???", "pro?"]
)

// 코드 끝


// -- section 3 --
function solution(words, queries){
    let result = []
    for (let q of queries){
        q = q.replaceAll('?', '.')
        let count = 0
        for (let word of words){
            const pattern = new RegExp(q, 'g')
            // 길이 체크를 안했을 경우 frozen이 true가 됩니다.
            if (pattern.test(word) && q.length === word.length){
                count++
            }
        }
        result.push(count)
    }
    return result
}

solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    ["fro??", "????o", "fr???", "fro???", "pro?"]
)

// -- section 4 --
// 4번이니까, 난이도가 4/5니까, 정규표현식으로 풀리지 않을 것이다.
// 문자열 관련 알고리즘 검색 -> https://izmirprogramming.tistory.com/8 등
// 대부분은 class 형태의 링크드 리스트가 답
// '트라이 알고리즘'을 사용해야겠다!

/*
패턴 : 'fro..'
'frodo'
{'f' : 다음object} count : 1
{'r' : 다음object} count : 1
{'o' : 다음object} count : 1 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1
{'o' : 다음object} count : 1
*/

// {
//     value : 'f'
//     count : 1
//     {
//         value : 'r'
//         count : 1
//         {
//             value : 'o'
//             count : 1
//             {
//                 value : 'd'
//                 count : 1
//                 {
//                     value : 'o'
//                     count : 1
//                 }
//             }
//         }
//     }
// }

/*
패턴 : 'fro..'
'frodo', 'front'
{'f' : 다음object} count : 2
{'r' : 다음object} count : 2
{'o' : 다음object} count : 2 // 여기까지만 보면 됩니다.
{'d' : 다음object} count : 1, {'n' : 다음object} count : 1
{'o' : 다음object} count : 1, {'t' : 다음object} count : 1
*/

// [{'f':2}, {'r':2}, {'o':2}, {'d':1, 'n':1}, {'o':1, 't':1}]
// [[{}], [{},{}], [{},{},{}], [{},{},{},{}], [{},{},{},{},{}]...

let 트라이 = []
for (let i = 0; i < 10; i++) {
    let insertArray = []
    for (let j = 0; j < i + 1; j++) {
        insertArray.push({})
    }
    트라이.push(insertArray)
}

트라이

// [{…}] -> 0번째 인덱스인데 1글자가 들어가니까요.
// [{…}, {…}]
// [{…}, {…}, {…}]
// [{…}, {…}, {…}, {…}]
// [{…}, {…}, {…}, {…}, {…}]
// [{…}, {…}, {…}, {…}, {…}, {…}]
// ... 중략 ...

function solution (words){
    let 트라이 = []
    for (let i = 0; i < 10; i++) {
        let insertArray = []
        for (let j = 0; j < i + 1; j++) {
            insertArray.push({})
        }
        트라이.push(insertArray)
    }

    for (const word of words) {
        for (const index in word) {
            let s = word[index]
            // console.log(s)
            if(s in 트라이[word.length-1][index]){
                트라이[word.length-1][index][s] += 1
            } else {
                트라이[word.length-1][index][s] = 1
            }
        }
    }
    return 트라이
}

solution(['frodo', 'front'])
solution(["frodo", "front", "frost", "frozen", "frame", "kakao"])


// -- section 5 --

// Tree로 해결하는 방법(대부분의 검색 효율성은 Tree 문제)
// 단어 문제이기 때문에 트라이라는 알고리즘 선택

// 하나의 레벨(층) 단위의 object 생성
{
    'f' : {
        '연결노드' : 다음노드,
        '개수' : 0
    }
}

// 하나의 레벨(층) 단위의 object 생성
// 레벨1 노드
{
    'f' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 1 //문자열의 개수
    }
}

// 레벨2 'f' 연결 노드
{
    'r' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 2
    }
}

// 레벨3 'r' 연결 노드
{
    'o' : {
        '연결노드' : 다음노드,
        '개수' : 2,
        '현재레벨' : 3
    }
}

// 레벨4 'o' 연결 노드
{
    'd' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 4
    },
    'n' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 4
    }
}

// 레벨5 'd' 연결 노드
{
    'o' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 5
    }
}

// 레벨5 'n' 연결 노드
{
    't' : {
        '연결노드' : 다음노드,
        '개수' : 1,
        '현재레벨' : 5
    }
}

class 노드 {
    constructor(){
        this.children = {}
        this.count = 0
    }
}

class 트라이 {
    constructor(){
        this.root = new 노드()
    }

    insertData(word){
        // 'frodo'
        let current = this.root
        current.count += 1
        for (const s of word) {
            //let child = current.children['f']
            let child = current.children[s]

            if(!child) {
                child = new 노드()
                current.children[s] = child
            }

            child.count += 1
            current = child
        }
    }

    search(query){
        let current = this.root
        for (const q of query) {
            if(q === '?') {
                return current.count
            } else if (!current.children[q]){
                return 0;
            }
            current = current.children[q]
        }
    }
}

function solution(words, queries){
    answer = []

    const 트라이배열 = Array(11)
    const 트라이역배열 = Array(11)

    for (const word of words) {
        const 단어길이 = word.length
        const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이()
        const 트라이2 = 트라이역배열[단어길이] ? 트라이역배열[단어길이] : new 트라이()
        트라이1.insertData(word)
        트라이2.insertData([...word].reverse().join(''))
        트라이배열[단어길이] = 트라이1
        트라이역배열[단어길이] = 트라이2
    }

    console.log(트라이배열)
    console.log(트라이역배열)

    return answer
}

solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    ["fro??", "????o", "fr???", "fro???", "pro?"]
)

// -- section 6 --

class 노드 {
    constructor(){
        this.children = {}
        this.count = 0
    }
}

class 트라이 {
    constructor(){
        this.root = new 노드()
    }

    insertData(word){
        let current = this.root
        current.count += 1
        for (const s of word) {
            let child = current.children[s]

            if(!child) {
                child = new 노드()
                current.children[s] = child
            }

            child.count += 1
            current = child
        }
    }

    search(query){
        let current = this.root
        for (const q of query) {
            if(q === '?') {
                return current.count
            } else if (!current.children[q]){
                return 0;
            }
            current = current.children[q]
        }
    }
}

function solution(words, queries){
    answer = []

    const 트라이배열 = Array(11)
    const 트라이역배열 = Array(11)

    for (const word of words) {
        const 단어길이 = word.length
        const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이()
        const 트라이2 = 트라이역배열[단어길이] ? 트라이역배열[단어길이] : new 트라이()
        트라이1.insertData(word)
        트라이2.insertData([...word].reverse().join(''))
        트라이배열[단어길이] = 트라이1
        트라이역배열[단어길이] = 트라이2
    }

    // console.log(트라이배열)
    // console.log(트라이역배열)

    for (const query of queries) {
        if (!트라이배열[query.length]){
            answer.push(0)
            continue
        }

        let count

        if(query[0] !== '?'){
            count = 트라이배열[query.length].search(query)
        } else {
            count = 트라이역배열[query.length].search([...query].reverse().join(''))
        }
        answer.push(count)
    }

    return answer
}

let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

solution(words, queries)
```

# 문제풀이 전략

- 앞 문제가 쉽습니다. 4번까지는 그냥 푸시면 됩니다. 5, 6, 7, 8은 한 번 훑어봐주세요. 다만 그렇다고 해도 순서대로 가셔야 합니다. 왜 그러냐면
  지금처럼 '정규표현식'으로 푸는 문제인줄 알았다가 돌아오는 시간이 더 걸릴 수도 있기 때문이에요.
  어? 8번이 쉽네? 이렇고 8번부터 푸시면 대참사가 일어납니다.
  풀다가 정해진 시간이 넘어가면 다 못푸셨어도 다음 문제로 넘어가시고요.
  일단 1번부터 4번까진 한 문제당 30분 ~ 40분 정도면 족합니다.

## 효율성 테스트 점수가 있는 문제들의 경우는 '대략 몇 초 안에 연산이 끝나야 한다'라고 명시되어 있지 않아서 저는 일단 시간복잡도를 고려하지 않고 문제를 바로 풀게 됩니다. 하지만 방금과 같은 문제는 정규 표현식을 사용하거나, 삼중 for문이 들어가면 바로 시간 초과가 나오게 되더라고요. 이럴때는 바로 class 문법으로 접근해야 할까요??

- 효율성 테스트는 일단 반복이 많아지면 거의 틀렸다라고 생각하셔야 합니다. 제가 경험해본 효율성 테스트 문제들은 대부분
  class로 노드 연결하는 문제가 많았습니다. (특히 그중에서도 '트리' 문제가 많았습니다.)
  트라이도 '트리'이고요.

  ##
