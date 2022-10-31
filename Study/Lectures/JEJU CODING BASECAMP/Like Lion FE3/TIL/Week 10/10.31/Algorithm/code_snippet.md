# 1. 자료구조와 알고리즘, 코딩테스트

- 추천 서적
  - 목적별 분류
    - 학문적 접근: The Art of Computer Programming(도널드 커누스)
    - 코딩테스트 접근: 파이썬 알고리즘 인터뷰 (박상길 -> `카카오 코딩테스트 출제위원출신`)
    - 기타: 파이썬 자료구조와 알고리즘 (중학교 학생 가르칠 때 사용)
    - 기타2: 그림으로 배우는 알고리즘(코드 없고 그림만 있음)
    - 기타3: 알고리즘 산책 (역사적인 알고리즘을 쭉 훑어봄. 수학적인 내용이 많고 코드는 C++로 되어 있으나 보는데 큰 무리는 없음)

## 1.1 코테 전 준비사항

1. 플랫폼에 익숙해지자 (프로그래머스, 구름EDU 등)

   - 프로그래머스 Node 버전 => 몇개월전만해도 12였음 (replaceAll은 15버전 사용)
   - 사용 가능 라이브러리를 미리 확인할 것
   - [파이썬 사용시] numpy, pandas 같은 라이브러리는 사용 금지이지만 간혹가다 제한이 없는곳도 있음. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열 연산의 경우 50배 이상의 성능을 보임

2. 언어 선택 (속도: C++, 풀이: Python)
3. 코드 스니팻(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), [Cheatsheet](https://htmlcheatsheet.com/js/), A4용지 준비 => 미리만들어 놓고 시험을 준비할 것
4. 유용한 라이브러리 정리 (collections, itertools, re, bisect 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
5. 기억하자! 예외처리!
6. 속도개선
   1. 속도 문제가 있으면 class로 구현할 것 (일부러 클래스로 구현하지 않으면 풀 수 없도록 만드는 것들이 있음)
   2. 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있으므로 메서드보다 통상 8배정도 빠름)하세요. 다만 공간복잡도가 상승할 수 있음 (리스트.reverse(), reversed(리스트), 리스트[::-1])
   3. for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
   4. 재귀는 느립니다. 최후의 수단으로 사용하세요

## 1.2 문제 유형과 출제 방식

- 5~6시간 (6~7문제) -> 4문제 맞추면 합격, 3문제 맞추면 합격이 간당간당
- 30분씩 4문제, 2시간씩 2문제 푸는 전략으로 접근할 것
- 문제 유형 분석 관련 글

  - [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
  - [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
  - [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
    - 요구사항 구현 알고리즘(33%)
    - 그리디 알고리즘(20%)
    - 너비우선탐색, 깊이우선탐색(20%) -> 거의 1문제는 무조건 나온다고 보면 됨 (깊스너큐 -> 깊이우선탐색은 스택, 너비우선탐색은 큐)
    - 정렬 (8%)
    - 다이나믹 프로그래밍, 최단경로, 이진 탐색 등

- 전체 문제 유형

  - 알고리즘
    - 정렬
    - 이진 검색
    - 비트 연산
    - 슬라이딩 윈도우(작업영역의 범위를 오른쪽으로 이동하며 점점 범위를 줄여나가면서 작업하는것), 페이지 교체, 투포인터(포인터의 위치를 변경해나가면서 작업)
    - 분할 정복
      - 그리디 알고리즘
      - 다이나믹 프로그래밍
  - 자료구조
    - 선형구조
      - 스택과 큐, 데크(음식점의 회전초밥 문제로 많이 나옴)
      - 연결리스트 (보통 클래스로 구현), 해시 테이블 (KEY&VALUE 쌍을 가지고 있는 OBJECT 형태로 구현)
    - 비선형구조
      - 그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
      - 트리
        - 힙
        - 트라이 (정 안되면 버리는것도 전략)

# 동기부여

- 정해진 틀을 벗어나는 것을 두려우하지 마라
- 목표가 없는 꿈은 한낱 꿈에 불과하고, 실망할 일만 하나 더 생길 뿐이다.
- 뚜렷한 목표를 가져라 (인생,올해,한달,매일의 목표등)
- 목표 성취를 위해 끈기와 훈련이 필연적으로 필요하다
- 매일을 계획하고 위대하게 노력하면 이루어진다.
- 더 많은 일을한다고 더 많이 전진하는게 아니고, 더 많은걸 이루는게 아니다 (이 차이를 알아야한다)
- 단지 잘 살기 위해가 아닌 차이를 위해 갈망하라

<BR>

# 위니브와 함께하는 알고리즘

## 알고리즘이란?

- 이는 철학적인 문제로서, 이 책에서는 답할 수가 없다. 그리고 다행이 그런 대답이 필요하지도 않다. (오트만 비트마이어)
- 초보자들에겐 개념 정의라는 것이 도통 쓸모 없다. 그들에게 필요한 건 시간이다. (알고리즘 행성 여행자들을 위한 안내서)
- 컴퓨터가 수행할 일을 순서대로 알려주는 명령어의 집합

- 정말 열심히 노력하는 것은 성공한 사람들이 모두 거쳤던 관문이다 (덴젤 워싱턴)

## 알고리즘을 측정하는 대표적인 방법

1. 시간복잡도
2. 공간복잡도

## 1.3 워밍업 문제

### 1.3.1 워밍업 문제 (google)

- 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

- 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.<br>
  (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

- [문제 링크](https://codingdojang.com/scode/393)

- 풀이

```js
let str = "";

for (let i = 1; i <= 10000; i++) {
  str += i;
}

console.log(str.match(/8/g).length);
```

- 풀이2

```js
let str = "";
for (let i = 1; i <= 10000; i++) {
  str += i;
}
console.log(str.split("").filter((item) => item === "8").length);
```

- 풀이3

```js
const answer = Array(10000)
  .fill(0)
  .map((n, index) => n + index)
  .join("")
  .match(/8/g).length;
console.log(answer);
```

#### 활용할 수 있는 기본 개념 코드

```js
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

Infinity - Infinity(123.45).toFixed(); // 123
(123.45).toFixed(1); // 123.4

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur) => (acc += cur));
```

- flat

```js
// 모두를 평평하게 만들고 싶을 경우 Infinity 삽입

[1, [2, [3, [4]]]].flat(Infinity); // [1,2,3,4]
```

- 빈 배열 만들기

```js
Array(10).fill(0);
[...Array(10)].map((_, i) => i + 1);
".".repeat(10).split("."); // 권장하지 않음
".".repeat(9).split(".");
"010-1234-5678".split("-"); // ['010','1234','5678']
```

- zip

```js
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
console.log(zip([1, 2, 3], ["b", "c", "d"])); //  [ [ 1, 'b' ], [ 2, 'c' ], [ 3, 'd' ] ]

const zipLongest = (placeholder = undefined, ...arrays) => {
  const length = Math.max(...arrays.map((arr) => arr.length));
  return Array.from({ length }, (value, index) =>
    arrays.map((array) =>
      array.length - 1 >= index ? array[index] : placeholder
    )
  );
};

console.log(
  zipLongest("hello", [1, 2, 3, 4, 5], "world", ["a", "b", "c", "d", "e"])
);
```

### 1.3.2 워밍업 문제(daum)

- [문제](https://codingdojang.com/scode/408)
- 1차원 점들이 주어졌을 때 그 중 거리가 가장 짧은 것들의 쌍을 출력하는 함수를 작성하시오 (단, 점들의 배열은 모두 정렬되어있다고 가정)

- 풀이1

```js
for (let i = 1; i < s.length; i++) {
  arr.push(s[i] - s[i - 1]);
}

return Math.min(...arr);
```

- 풀이2

```js
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
let s = [1, 3, 4, 8, 13, 17, 20];

let pairs = zip(s.slice(0, s.length - 1), s.slice(1));
function 비교(a, b) {
  if (a[1] - a[0] < b[1] - b[0]) {
    return -1;
  }
  if (a[1] - a[0] > b[1] - b[0]) {
    return 1;
  }
  return 0;
}

console.log(pairs.sort(비교));
console.log(pairs.sort(비교)[0]);
```

- 풀이3

```js
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
let s = [1, 3, 4, 8, 13, 17, 20];

let pairs = zip(s.slice(0, s.length - 1), s.slice(1));
let 최솟값 = Infinity;
let 최솟값쌍 = [];

for ([i, j] of pairs) {
  if (j - i < 최솟값) {
    최솟값 = j - i;
    최솟값쌍 = [i, j];
  }
}
console.log(최솟값쌍);
```
