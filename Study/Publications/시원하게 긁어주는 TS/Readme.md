# 시원하게 긁어주는 TypeScript 집필 준비 자료

## 터미널 명령어 모음

1. tsc app.ts<br>

```ts
tsc app.ts  // tsc => typescript compiler
```

2. node app.js<br>

- node를 통해 app.js를 실행시키는 것

```js
node app.js   // app.js의 결과를 보여줌
```

3. tsc --init<br>

- tsconfig.json을 추가해서 vscode의 버그를 해결함

```ts
tsc --init
```

4. tsc -w<br>

- 타입스크립트 컴파일러가 파일 내 변경사항을 감지하고, 변경 내용을 자동으로 컴파일할 수 있도록 만들어줌

```ts
tsc -w app.ts
// w: watch. 감시하다.
```

<br><br>

## ch 01

### 타입스크립트 큰 특징

1. 정적 형식 제공 (강력한 형식, 형식 추론)
2. 묶어서 관리 (클래스, 네임스페이스, 열거형) (공용 구조체 형식)

### 타입스크립트를 사용해야 하는 이유

- 미래 버전의 js를 지금 당장 사용 가능

- 강력한 형식을 지님 (형식 안정성을 제공받음)<br>
  => 긴 분량의 js에서 오류가 어디있는지 찾기 힘들지만 ts를 어디에서 오류가 발생하는지를 발견할 수 있음

- 많은 SPA 프레임워크에서 TS를 도입 (리액트, 뷰등)

### 노드 패키지 관리자 (NPM)

- 타입스크립트는 큰 규모의 자바스크립트 개발을 위해 만들어짐
  (자바스크립트로는 큰 규모의 앱 개발이 힘들다)

- 타입스크립트는 컴파일시 자바스크립트 자체로 변환됨

- 타입스크립트가 자바스크립트를 포함하는 집합임 (확대집합, SuperSet)

- 타입스크립트는 오픈소스이며, 모든 브라우저/호스트/OS에서 올라가는 순수한 자바스크립트 코드임
  (크로스플랫폼에서 개발을 해줄 수 있음)

### 타입스크립트의 장점

- 구조화 (하나의 앱으르 묶어서 관리가 가능함)

### 타입스크립트를 왜 써야하는가?

- 조금 더 큰 규모를 구조화 시켜줌
- 체계화있게 유지보수를 할 수 있게 만듦

### 타입스크립트 예시

```ts
var ex1: string = "Coffee chat 22.10.01";
// 변수명 뒤에 타입이 들어옴 (기존의 js에서는 타입지정 X => ts는 이와달리 정적타입)
```

## ch03

### 이용하고 싶은 아이디어 (배열내 메서드 종류가 다름으로 js를 환기시킴과 동시에 타입에 대한 설명으로 자연스레 이어나가려는 목적)

- array내 요소가 string일 때 사용할 수 있는 메서드 종류
  ![image](https://user-images.githubusercontent.com/68424403/193397892-fe3b7eaa-be30-4a95-a06c-09adcea574cb.png)

- array내 요소가 number일 때 사용할 수 있는 메서드 종류
  ![image](https://user-images.githubusercontent.com/68424403/193397905-e0e2d41e-1b0a-43cf-a6a9-0350413c9d04.png)

- 해당부분 전체 코드

```ts
let age: number = 30;
let isStudent: boolean = true;

// Array
let numarr1: number[] = [1, 2, 3];
let numarr2: Array<number> = [1, 2, 3];
let strarr1: string[] = ["가", "나", "다"];
let strarr2: Array<string> = ["가", "나", "다"];

strarr1.push(7); // error (문자열 배열에 숫자를 추가하려고 하므로)

// tuple
let tup1: [string, number]; // 인덱스별로 타입이 다를 때 사용 (배열의 첫번쨰 요소는 string, 두번째 요소로 number를 사용)
tup1 = ["가", 1]; // 여기서 tolowercase는 첫번째 요소에만 사용이 가능하게 됨
tup2 = [2, "나"]; // error

tup1[0].toLowerCase(); // 여기서 tolowercase는 첫번째 요소에만 사용이 가능하게 됨
tup1[1].toLowerCase(); // error number에는 toLowerCase 적용 불가
```

### 아이디어

- 여기서 js상 void를 안넣었을 때와 넣었을 때의 차이점 & ts에서 void를 넣어주면 js와 뭐가 다른지에 대해서 조금 더 구체적으로 서술해야 함

```ts
// void, never

/* javascript */
function sayHello() {
  console.log("hello"); // 콘솔만찍고 아무것도 반환하지 않음
}

/* typescript */
// void -> 함수에서 아무것도 반환하지 않을 때 사용
function sayHello(): void {
  console.log("hello");
}
```

<br>

- 여기서 js상 never를 안넣었을 때와 넣었을 때의 차이점 & ts에서 never를 넣어주면 js와 뭐가 다른지에 대해서 조금 더 구체적으로 서술해야 함

```ts
/* js */
function showError() {
  throw new Error(); // 항상 에러를 반환
}

function infLoop() {
  // 영원히 끝나지 않는 함수
  while (true) {
    // do forever
  }
}

/* ts */
function showError(): never {
  throw new Error(); // 항상 에러를 반환
}

function infLoop(): never {
  // 영원히 끝나지 않는 함수
  while (true) {
    // do forever
  }
}
```

### 아이디어 (enum)

```ts
// enum
// js에는 없는타입. 비슷한 값들끼리 묶어줌

/* js */

/* ts */
// enum -> 값을 할당하지 않는 경우 0부터 차례대로 1씩 증가시키면서 값을 자동할당
enum Os { // 각각에게 0,1,2라는 값을 할당
  Window,
  Ios,
  Android,
}

enum Os2 { // 각각에게 7,8,9라는 값을 할당
  Window = 7, // 7할당시 8,9가 그 다음 애들에게 할당됨
  Ios,
  Android,
}

enum Os3 { // 각각에게 7,8,9라는 값을 할당
  Window = 7, // 7할당
  Ios = 11, // 11할당시
  Android, // +1된 12가 Android에게 자동할당됨
}

console.log(Os["Android"]); // 2
console.log(Os[2]); // Android
```

<br>

-

```ts
// enum
// js에는 없는타입. 비슷한 값들끼리 묶어줌

/* js */

/* ts */
// enum -> 값을 할당하지 않는 경우 0부터 차례대로 1씩 증가시키면서 값을 자동할당
enum Os { // 각각에게 0,1,2라는 값을 할당
  Window,
  Ios,
  Android,
}

enum Os2 { // 각각에게 7,8,9라는 값을 할당
  Window = 7, // 7할당시 8,9가 그 다음 애들에게 할당됨
  Ios,
  Android,
}

enum Os3 { // 각각에게 7,8,9라는 값을 할당
  Window = 7, // 7할당
  Ios = 11, // 11할당시
  Android, // +1된 12가 Android에게 자동할당됨
}

console.log(Os["Android"]); // 2
console.log(Os[2]); // Android

/* ts2 */
// 특정값만 입력할 수 있도록 강제함 & 공통점이 있을 때 enum을 사용
enum OS4 {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

let myOS: OS4;
// myOS의 타입이 OS4 (enum 타입 지정)
// myOS에는 Window, Ios, Android만 입력할 수 있게 됨

myOS = OS4.Window; // enum타입 사용 예시
```

<br>

### 아이디어 (null, undefined)

- js에서 null과 undefined 타입을 못쓰는 경우 뭐가 불편한지에 대해 서술 -> ts에서 타입을 쓰면 좋다라고 서술하면서 ts사용을 꼬드기기

```ts
// null, undefined

/* js */
let str1 = null;
let str2 = undefined;

/* ts */
let str1: null = null;
let str2: undefined = undefined;
```

<br><br>

## 아이디어 (interface)

- x,y에 마우스를 갖다대면 number라는 타입이 뜨는데,

```ts
// 인터페이스로 함수 정의
interface Add {
  (num1: number, num2: number): number;
  // 인자값과 리턴값 (콘솔창에 찍어주기만하면 리턴값이 없으므로 number 대신 void타입으로 설정)
}

// const add: Add = function () {};  //error

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20);
add(10, 20, 30); // error
add(10, "20"); // error

interface IsAdult {
  (age: number): boolean;
}

const agecounting: IsAdult = (age) => {
  return age > 19; // 19보다 크면 true, 아니면 false
};

agecounting(29);
```

<br><br>

### 아이디어 (제네릭)

- 변환된 결과는 제네릭이라는 키워드가 없으므로 JS는 일반적인 JS의 프로토타입을 사용함 + TS는 넘겨주는 타입이 명확하지만 JS는 ANY 타입임(모든 값을 다 받는 타입으로 변환이 됨)

- 프로그램을 세련되게 작업하고 싶을 경우 제네릭을 사용함

```ts
/* Array 제네릭 클래스 사용하기 */
// Array 클래스의 제네릭 버전은 Array<T> 형태로 표현함
// Array of T 형태로 읽음
// T는 특정 형식을 받아들이는 형식 매개 변수임
// 형식 매개 변수에 지정된 값에 따라 해당 객체의 성질이 결정됨

// 1) 제네릭 클래스의 인스턴스를 생성하려면 Array<T> 형태로 Array<string>으로 문자열만 다룰 수 있는 객체(Object)를 생성할 수 있다
let stack: Array<string> = []; // stack객체의 타입은 Array<string> , Array Of String. string만 담을 수 있는 그릇이 생성됨

// 2) Array<string>으로 선언된 stack 객체는 문자열만 입력 받을 수 있음 (Array Of String으로 만들었기 때문임) => 다른 타입 입력시 컴파일러에서 에러 발생시킴
stack.push("First"); // push 메서드는 문자열만 입력 가능하게 됨
stack.push("Second"); // push 메서드는 문자열만 입력 가능하게 됨

// 3) 마찬가지로 pop() 메서드의 결과도 문자열로 바로 출력이 됨
console.log(stack.pop()); // 문자열로 바로 출력 -> "Second"
console.log(stack.pop()); // 문자열로 바로 출력 -> "First"

// 어찌됐건 하나의 객체를 만들고 문자열만 저장하게 해주고 싶다. 할 경우 Array Of String의 형태로 배열을 만들어서 사용을 해줄 수 있음

// 일반 클래스인 Araay와 제네릭 클래스인 Array<T>는 하는 일이 동일하다.
// 다만, Array 클래스는 데이터를 object로 다루고(any타입으로, 모든 데이터 형식이 다 들어옴) Array<T> 클래스는 T로 지정한 데이터만 다룬다.
//  object로 만들어진 데이터를 실제 사용하려는 string과 같은 형식으로 사용하려면 중간에 변환의 과정을 거치기 대문에 이 부분에서 추가적인 작업을 진행하는 비용이 발생한다.
// 그래서 정확한 데이터 형식을 사용할 수 있는 Array<T>와 같은 제네릭 클래스의 사용을 권장한다.
// (이와 같이 제네릭 객체를 사용하게 되면 어떤 형식 변환과정없이 문자열만 지정해놨으면 문자열만 입력받고 문자열만 출력하면 됨)
```

### 아이디어

### 제네릭 개념정리

#### 제네릭 사전적 정의

- C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징
- 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됨

#### 제네릭의 한 줄 정의와 예시

- 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 뜻함

- js 관점

```js
function getText(text) {
  return text;
}

getText("hello");
```

- ts관점

```ts

```
