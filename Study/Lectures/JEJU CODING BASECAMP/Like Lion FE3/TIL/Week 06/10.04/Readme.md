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

<br><br>

## 비교연산자

```js
const one = 10;
const two = 3;
const one_ = "10";

console.log(one > two);
console.log(one >= two);
console.log(one < two);
console.log(one <= two);
console.log(one == two);
console.log(one === two); // 다른 언어에 없음

// 우리를 힘들게 하는 js
console.log("------------------");
console.log(one == one_); // true (js는 너무 관대하다)
console.log(one === one_); // false (타입까지 비교했을 경우 false)
console.log(one != one_); // false
console.log(one !== one_); // true
```

<br><br>

## 논리연산자

- 정말 많이 사용함
- /_ true:1, flase:0, and(&&):곱, or(||):합, not(!):부정 _/

```js
/* true:1, flase:0, and(&&):곱, or(||):합, not(!):부정 */
// and, or는 단락평가에도 사용함

console.log(true || false); // true
console.log(true && false); // false
console.log(true || true); // true
console.log(!false); // true
console.log(!!false); // false
console.log(!!""); // false
console.log(!![]); // true
```

<br>

- !와 !!등을 굳이 사용하는 이유 (적절한 예시는 아니므로 가볍게 보고 넘길 것)

```js
let couponlist = ["9b5fcc71", "9b5fcc72", "9b5fcc73"];
user = [
  {
    userid: 1,
    username: "danny",
    coupon: couponlist[0],
    haveCoupon: !!coupon, // 쿠폰보유 여부
  },
];
```

- 배열이랑 객체는 참조형이라 일단은 메모리 주소를 참조하고 있어서 빈 껍데기여도 true가 나오는 걸까요? (가볍게 보고 넘길 것)

  - 아니오. js가 태생적으로 그런것뿐임. (이 논리대로라면 다른 언어에도 동일하게 작동해야 함)

<br>

```js
console.log("-------------------");
console.log("confuse_1");
console.log(!"false"); // false
console.log("false" == false); // false
console.log(!!NaN); // false (0으로 나눴을 때 Not A Number)
console.log(!!null); // false
console.log(!!undefined); // false
```

<br>

```js
console.log("false" == false); // false

const x = 10;
const y = 0;

console.log("abc" / y); // NaN
```

<br>

- 단락평가

```js




/* 단락 평가 */
username = '';   // false
console.log(username && "이름을 입력하지 않으신 분");
// 앞에것이 false이면 and할 필요가 없음
username = console.log(username || "이름을 입력하지 않으신 분");   // 앞의 것이 false이고 or 연산시 뒤의것을 읽어야함. 이럴 때 바로 변수에 뒤의것을 읽어서 넣음. 이것이 단락평가

/* 단락 평가2 */
username2 = 'abc';  // true
username2 = username2 || '이름을 입력하지 않으신분';
// 앞의것이 true+or연산 -> 뒤의 것을 읽어서 변수에 바로 집어넣음
// => 이것이 단락평가
console.log(username2);


/* 단락평가 3 */
username3 = '';   // false
pw3 = '';   // false
"회원가입성공여부" = username3 || "이름을 입력하지 않으신 분";
console.log(username3);



/* 문제 - id와 pw를 입력해야만 회원가입성공여부가 t또는 f가 나오게 만들기
둘 중 하나라도 입력이 안되면 false */


// 정답1
회원가입성공여부 = username || "이름을 입력하지 않으신 분";
console.log(username);
회원가입성공여부 = !!(username && pw); // 결과값을 불리언으로 내보내기 위해 !! 사용


// 정답2 (드모르간의 법칙)
// not(A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));   // false와 and의 조합일 경우 그 코드 자체가 불필요해지는 경우가 존재
console.log(!(x && y) === (!x || !y));


// 정답3
회원가입성공여부 = !!pw && !!username;   // 결과값을 불리언으로 내보내기 위해 !! 사용

```

### 여기서부터 다시 보기 (11시 ~ ) (018-2_confuse2부터)

- 암묵적 형변환은 의도를 파악하기 어려워서 사용을 자제하는게 좋다
- 묵시적 형변환 추천
- 마이너스 연산은 숫자에서 사용하는것이 자명함 (암묵적 연산)
- 문자열에서 +는 이어붙이기 위함
- js는 관대하기 때문에 마이너스 연산시 error를 뿜지 않고 수학적으로 계산해서 Number로 던져줌

<br>

## Object

## 해시값 (참고만 할 것)

- 암호화

  - abc -> FF0EB2864FEB22354747F8C85D42CCB5 (32자)

<br>

- 복호화

  - FF0EB2864FEB22354747F8C85D42CCB5 -> abc
  - 해쉬값은 이 방향이 불가능함
  - 이게 가능하다면 압축 알고리즘의 대발명이라고 볼 수 있다
  - 해쉬값은 복호화가 불가능함

<br>

- 충돌 가능성

  - 32자의 16진수를 사용하고 있으므로 16\*\*32 의 데이터를 가짐
  - 따라서 충돌가능성은 1/(16\*\*32)임 (0에 수렴)

<br>

- MD5는 깨짐
- sha256도 깨짐
- 현업에서는 `sha512` 사용함
- 이미 모든 알파벳에 대한 해쉬값을 해커가 가지고 있음 (rainbow attack)

<br>

- salt

  - 추가적인 문자등을 붙임

- 해쉬
  - 어떤 임의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 것
  - 암호화시킨 문자열로 데이터 변환

<br>

## 코딩 컨벤션 (NHN)

- [NHN 코딩 컨벤션](https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf)

- 네이밍 규칙은 레이아웃, 객체, 이미지, 폴더, 파일의 이름을 작성하는 규칙 (폴더명도 규칙이 존재)

- 들여쓰기는 2,4칸 중 선택

- z-index는 대부분 10단위로 되어 있음

- W3C Validation을 통과하면 내가 코딩을 좀 하는구나. 생각하면 됨

- 따옴표 사용은 회사 컨벤션을 따라갈 것

<BR>

## 코딩 컨벤션 (구글)

- [구글 코딩 컨벤션](https://github.com/google/styleguide)

-

## Object
