# 시원하게 긁어주는 TypeScript 집필 준비 자료

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

