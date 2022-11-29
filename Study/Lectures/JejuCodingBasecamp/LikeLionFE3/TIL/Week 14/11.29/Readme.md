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

# a
