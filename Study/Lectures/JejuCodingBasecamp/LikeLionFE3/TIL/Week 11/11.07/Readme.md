# 22.11.07 (월)

# 질의응답 내용

- [관련자료](http://www.tcpschool.com/html-input-types/hidden)

<br><br>

# 프로그래머스 100제

## 문제풀이 패턴 분석

### 01

```js
let k = "asdaf1431sdf32faf";

let arr1 = k.split("");
let arr2 = Array.from(k);

arr1.filter((x) => +x).map((v) => parseInt(v)); // 숫자만 추출
arr1
  .filter((x) => +x)
  .map((v) => parseInt(v))
  .reduce((acc, cur) => acc + cur); // 숫자만 추출해서 총합계산
```

### 02

```js
"onetwothreefour".match(/(one|two|three|four)/g)(4)[
  ("one", "two", "three", "four")
];
let s = { one: 1, two: 2, three: 3, four: 4 };
undefined;
let ss = "onetwothreefour".match(/(one|two|three|four)/g);
undefined;
for (i of ss) {
  console.log(s[i]);
}
```

<br><br>

# jQuery

## 제이쿼리 필터

### 09

- [예제](jQuery/009.html)
- 당시에는 큰 역할을 함. 지금은 찬밥신세.
- 당시에는 css로 스타일링이 안되어서 jQuery등으로 스타일링함
- 라이브러리에 너무 의존하지마라. 기본기에 충실해라 (html,css,js)

### 10

- 당시에는 쿼리셀렉터를 사용하는 $ 표시도 없었음

### 013-2

- fetch, axios, jQuery의 AJAX 중 보통 하나를 선택함.
- 요즘에는 AJAX를 거의 사용안함 (단, 프로젝트 기간이 짧아서 급한경우 사용)
- 프로젝트 기한이 적을 때 React 사용 안함 (오래걸림)

<br><br>

# Ajax

- fetch, axios, ajax를 아우르는 용어가 Ajax임

## jQuery로 Ajax 사용하기

<br><br>

# HTTP/HTTPS

- 앞으로도 여러해에 걸쳐서 우리들의 마음을 힘들게 할 것임

## a

## fragment

- 해당되는 id를 찾아서 갈 수 있게함. fragment를 사용해서 페이지를 열때 페이지의 특정위치에서 열리게 만들 수 있음

<br><br>

# jsonserver

- update는 put
