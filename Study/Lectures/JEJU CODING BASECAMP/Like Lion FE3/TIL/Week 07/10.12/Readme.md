# 22.10.12 (수)

## 함수

## 호이스팅

- 일단 지금은 함수형 호이스팅만 기억할 것
- ~ 선언시 ~ 상관없이 맨위로감
- let 선언시

## TDZ (Temporal D)

- A

## 클로저

- ㅁ

## 여기위에만 다시 듣기

## 생성자 함수

- 앞에 new 키워드를 붙이고 첫 글자를 대문자로 시작하는 것

- 비효율적 코드 (딱 봐도 코드가 길고 .. 별로..)

```js
let book = {
  책이름: "타스넌내타입",
  책가격: 10000,
  저자: "Danny",
  출판일: "22.10.11",
};

let newBook = {};

newbook["책이름"] = "javascript"; // 예를 들어 form에서 입력 받은 값
newbook["책가격"] = 1000000;
newbook["저자"] = "세원, 석규, 슬기";
newbook["책가격"] = "22.10.30";

// 위의 코드를 효율적으로 작성하는 것이 '생성자 함수'
```

- 효율적인 코드
- 메모리 상으로 더 효율적

```js
/

// 위의 코드를 효율적으로 작성하는 것이 '생성자 함수'
/* 효율적 코드 (생성자 함수) */
function Book2(책이름, 책가격, 저자, 출판일) {
    // this = {}   // new 키워드 사용시 내부적으로 얘가 있는것처럼 작동
    this.책이름 = 책이름   // this는 function이라는 자신을 가리키고 있음
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    //return this    // new 키워드 사용시 내부적으로 얘가 있는것처럼 작동
}

let data = Book2("HTML", 10, "유진", "22.12.30");
console.log(data); // 함수 내에 return이 없으면 undefined

let data2 = new Book2("CSS", 20, "유진", "23.12.30");   // new 키워드를 붙이면 undefined아님
console.log(data2); // Book2 {책이름: 'CSS', 책가격: 10, 저자: '유진', 출판일: '22.12.30'}

let data3 = new Book2("js", 30, "유진", "24.12.30");

console.log(data, data2, data3); // undefined Book2 {책이름: 'CSS', 책가격: 20, 저자: '유진', 출판일: '23.12.30'} Book2 {책이름: 'js', 책가격: 30, 저자: '유진', 출판일: '24.12.30'}
```

## 생성자 함수를 왜 사용하나요?

- 객체를 생성하기 위해서 사용

- 프로퍼티들의 집합을 만들 때 사용

- [생성자 함수 자료](https://ko.javascript.info/constructor-new)

## 콜백함수

- callback function
- 나중에 부르겠다는 뜻

- 예시

```js
function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  //return x + y;
}

console.log(sum(10, 20, console.log));
//30
//undefined(return이 없으므로)
```

- 예시2

```js
function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  //return x + y;
}

console.log(sum(10, 20, console.log));
//30
//undefined(return이 없으므로)

function documentWriter(s) {
  document.write("콜백함수", s);
}

sum(10, 20, documentWriter) - // 콜백함수 30

```

- 함수명을 argument로 전달해서 코드 어딘가에서 호출해주는 것이 '콜백함수'

- 예시3

```js
function 제곱(x) {
  return x ** 2;
}

let arr1 = [10, 20, 30, 40, 50];
arr1.map(제곱); // (5) [100, 400, 900, 1600, 2500]  여기에 함수명만 argument로 넘겨주면 됨
```

- argument로 함수를 전달하는 것이 콜백함수

- 예시4

```js
let arr1 = [10, 20, 30, 40, 50];
arr1.map(제곱); // (5) [100, 400, 900, 1600, 2500]  여기에 함수명만 argument로 넘겨주면 됨
arr1.map((x) => x ** 2); // (5) [100, 400, 900, 1600, 2500] (화살표 함수 사용)\

/* 호이스팅 */
function 제곱(x) {
  return x ** 2;
}
```

## forEach

- forEach는 순회만 함. map은 새로운 array 생성

- forEach는 메서드
- callback 함수를 넣어주면됨 (argument로 함수를 전달)

- ex

```js
function 두배(x) {
  console.log(x * 2);
}

let arr = [10, 20, 30, 40, 50];
arr1.forEach(두배);
// 함수를 인자로 전달 -> 콜백함수
// forEach는 순회만 함. map은 새로운 array 생성
```
