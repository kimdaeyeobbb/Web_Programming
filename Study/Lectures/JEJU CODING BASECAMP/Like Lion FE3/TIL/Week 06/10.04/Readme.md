# 10.04

## BigInt

- 9007199254740991라는 숫자와 Number.MAX_SAFE_INTEGER는 동일한 숫자이다.
- 안전하지 않은 숫자를 BigInt안에 넣으면 안전하지 않은 숫자가 도출된다

<br>

## 변수 선언 키워드

1.  const

    - 참조 변경 불가 (값의 변경불가가 아님)
    - const로 대부분의 값을 표현할 것
    - 코드를 리뷰하는 동안 해당 변수가 변경될지 신경쓸 필요가 없다

           ```js
           const rate = 0.1;
           const total = 10000;

           //... 1000줄의 코드, 무슨 일이 일어나도 상관없음
           return rate * total;
           ```

2.  let

    - 참조 변경 가능

      ```js
      const rate = 0.1;
      const total = 10000;

      //... 1000줄의 코드, 무슨 일이 일어났는지 알 수 없음
      return rate * total;
      ```

3.  var

    - 이제 사용하지 말 것
    - 스코프를 강제하지 않으므로 견고한 코딩이 불가능하다

<br>

## boolean

```js
let one = true; // 다른 언어는 True인 경우도 있다
let two = false; //

console.log(Boolean("")); // false
one = "";

console.log(Boolean(" ")); // true (문자열이 하나라도 들어오면 true)
console.log(Boolean(0)); // false
console.log(Boolean(100)); // true (0외의 다른 숫자들은 true)
console.log(Boolean(-100)); // true (0외의 다른 숫자들은 true)
```

<br>

```js
let three; // undefineed
console.log(Boolean(three)); // false
```

<br>

```js
let four = null; // null
console.log(Boolean(four)); // false
```

<br>

```js
let five = Infinity; // 무한대의 숫자 (비교할 때 사용)
console.log(Boolean(five)); // true
// 0이외의 다른 숫자들은 true
```

<br>

```js
/* 우리를 힘들게 하는 js */
console.log(Boolean([])); // true (빈 Array를 true 취급)
// 파이썬에서는 빈 배열이 되면 false취급
```

- while문은 메모리 전체를 잡아먹는다 (유의해서 사용할 것)

<br>

```js
console.log(Boolean({})); // true
```

- a
