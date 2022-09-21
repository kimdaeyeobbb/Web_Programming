# 22.09.21 기념일 계산기

## 객체

- 여러개의 값을 담는 자료형

- ~는 ~이다 라는 꼴의 값을 담음<br>(속성과 속성값으로 구성)

- 배열, 객체, 함수가 객체의 속성값으로 들어갈 수 있음

```js
var person = { name: 'danny', age: 19 };
// name: 키, 속성명
// danny: 값, 속성값
```

- 객체.키 꼴로 해당 값을 가져옴

```js
person.name; // danny
```

- javascript의 거의 모든 것은 객체다.
- 객체를 사용하는 예시

  - content.length;
    - content라는 문자열은 객체 & length 속성
  - document.write();
    - document: DOM을 다룰 수 있는 객체 / write: 메서드
  - console.log();
    - console: 객체 / log: 메서드

<br><br>

## 내장 객체

- javascript에는 특정기능을 가진 객체를 내장하고 있음
- ex) Date 객체

```js
var now = new Date();
```

<br><br>
