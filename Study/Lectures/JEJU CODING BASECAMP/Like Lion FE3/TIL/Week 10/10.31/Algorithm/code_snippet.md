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

### 1.4 기본 자료구조 및 알고리즘

1. 스택과 큐
2. 연결리스트
3. 트리와 그래프
   3.1. 트리 구현
   3.2. 트리의 순회
4. 정렬 알고리즘
   4.1. 선택정렬  
   4.2. 삽입정렬  
   4.3. 병합정렬  
   4.4. 퀵정렬
5. 페이지 교체 알고리즘
6. 슬라이딩 윈도우와 투 포인터 알고리즘

### 1.4.1 스택과 큐

- 스택

  - [삽입] arr.push
  - [삭제] arr.pop
  - ADT: 스택 자료구조에 대한 기본적인 설계도면

```js
class Stack {
  constructor() {
    this.arr = []; // 연결리스트로 구현할수도있지만, 지금 배우지 않았으므로 배열로 구현
    this.length = 0;
  }

  push(data) {
    this.arr.push(data);
    this.length += 1;
  }

  pop(index) {
    if (this.length == 0) {
      return "배열의 길이가 0입니다!";
    }

    if (index > this.arr.length - 1) {
      this.length -= 1;
      return this.arr.pop();
    }

    let result = this.arr.splice(index, 1);
    this.length -= 1;
    return result;
  }

  empty() {
    if (this.length == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  top() {
    return this.arr[this.length - 1];
  }

  bottom() {
    return this.arr[0];
  }

  display() {
    return this.arr;
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
s.display();
```

- 큐
  - [삽입] arr.push 또는 arr.unshift
  - [삭제] arr.shift 또는 arr.pop
  - arr.unshift(1000): 맨 앞에 1000을 삽입
  - arr.shift(): 맨 앞에 값을 꺼냄
  - arr.push: 맨 뒤에 값을 삽입
  - arr.pop: 맨 뒤에 값을 꺼냄

### 1.4.2 연결리스트

- 연결리스트는 메모리 효율을 위해 사용되는 경우가 많음
- js에서는 그다지 메모리 효율이 좋지 못함
- 개념: https://en.wikipedia.org/wiki/Linked_list
- 알고리즘 시각화: https://visualgo.net/ko

- 싱글 / 더블 / 원형 연결리스트(회전 초밥문제에서 등장)가 자주 나옴

- 구현방법 1

```js
const list = {
  head: {
    value: 46,
    next: { value: 49, next: { value: 97, next: { value: 12, next: null } } },
  },
};

list.head.next.next.value; // 97
list.head.next.next.next.value; // 12
```

- 구현방법2

```js
let list = {
  head: null,
};

let node1 = { value: 46, next: null }; // node2가 선언되어있지 않으므로 next자리에 node2를 적을 수 없음
let node2 = { value: 49, next: null };
let node3 = { value: 97, next: null };
let node4 = { value: 12, next: null };

node1.next = node2; // node2에서도 next값을 호출할 수 있으므로 node2.value가 아닌 node2를 가리켜야 함
node2.next = node3;
node3.next = node4;

list.head = node1;
list.head.next.next.value; // 97
```

- 문제

```js
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> [null]
// 35를 출력할 것
```

- 풀이1

```js
let list = {
  head: null,
};

let node1 = { value: 90, next: null };
let node2 = { value: 2, next: null };
let node3 = { value: 77, next: null };
let node4 = { value: 35, next: null };
let node5 = { value: 21, next: null };
let node6 = null;

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

list.head = node1;
list.head.next.next.next.value;
```

- 풀이2

```js
js;
const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: {
            value: 21,
            next: null,
          },
        },
      },
    },
  },
};

list.head.next.next.next.value;
```

#### 클래스로 연결리스트 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

node1 = new Node(90);
node2 = new Node(2);
node3 = new Node(77);
node4 = new Node(35);
node5 = new Node(21);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node1.data; // 90
node1.next.next.data; // 77
node1.next.next.next.data; // 35
```

#### 클래스로 연결리스트 구현2

```js
// head -> ['init', next]
//
//               tail

//
//
//

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init"); // data에만 init이 들어가고 next에는 null이 있는 것
    this.head = init;
    this.tail = init;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    this.tail.next = 새로운노드; // 마지막 값(null)은 새로운노드가 됨
    this.tail = 새로운노드; // 마지막 노드는 새로운노드가 됨
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);

l.head.data; // init
l.head.next.data; // 1
l.head.next.next.data; // 2
l.head.next.next.next.data; // 3
```

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
    this.displayData = "";
  }

  length() {
    return this.length;
  }

  toString() {
    return this.displayData;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
    this.displayData += `${data}, `;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
```

2. step 2 - class로 node 구현

```javascript
// 위 문제 처럼 만들어 보도록 하겠습니다.
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

node1 = new Node(90);
node2 = new Node(2);
node3 = new Node(77);
node4 = new Node(35);
node5 = new Node(21);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node1.data;
// 90
node1.next.next.data;
// 77
node1.next.next.next.data;
// 35
```

3. step 3 - class로 linkedList 구현

```js
// head -> ['init', next]
//               ↑
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑
//                              tail
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);

// l.head.data
// 'init'
// l.head.next.data
// 1
// l.head.next.next.data
// 2
// l.head.next.next.next.data
// 3

// 새로운노드 = node(1, null)
// init.next 값은 null인데! null자리를 '새로운노드node(1, null)'로!
// this.tail은 이제 node(1, null)
//
// 새로운노드 = node(2, null)
// node(1, null).next 값은 null인데! null자리를 '새로운노드node(2, null)'로!
// node(1, null) = 새로운노드node(2, null)
//
// 새로운노드 = node(3, null)
// node(2, null).next값은 null인데! null자리를 '새로운노드node(3, null)'로!
// node(2, null) = 새로운노드node(3, null)
```

4. step 4 - class로 linkedList에서 length 구현

```js
// head -> ['init', next]
//               ↑
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑
//                              tail

// 여기서 데이터를 추가하면 생성되는 노드마다 데이터 공간이 할당되는 것이라 메모리가 크게 필요하게 됩니다.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  length() {
    return this.length;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

5. step 5 - class로 linkedList에서 toString 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
    this.displayData = "";
  }

  length() {
    return this.length;
  }

  toString() {
    return "<" + this.displayData.slice(0, -2) + ">";
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
    this.displayData += `${data}, `;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

5. step 6 - class로 linkedList에서 toArray 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
    this.displayData = "";
    this.displayDataArr = [];
  }

  length() {
    return this.length;
  }

  toString() {
    return "<" + this.displayData.slice(0, -2) + ">";
  }

  toArray() {
    return this.displayDataArr;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
    this.displayData += `${data}, `;
    this.displayDataArr.push(data);
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

6. a

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  length() {
    return this.length;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

7. a

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  length() {
    return this.length;
  }

  toString() {
    let 순회용현재노드 = this.head;

    //처음 순회용 현재 노드가 init이기 때문에
    순회용현재노드 = 순회용현재노드.next;

    let 출력데이터 = "";
    for (let i = 0; i < this.length; i++) {
      출력데이터 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }

    return 출력데이터;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

7. step7 - (중요) toString을 순회로 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  // length() { //this.length가 덮어 씀
  //     return this.length;
  // }

  toString() {
    let 순회용현재노드 = this.head;

    //처음 순회용 현재 노드가 init이기 때문에
    순회용현재노드 = 순회용현재노드.next;

    let 출력데이터 = "";
    for (let i = 0; i < this.length; i++) {
      출력데이터 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }

    //return 출력데이터;
    return "[" + 출력데이터.slice(0, -2) + "]";
  }

  fullData() {
    return JSON.parse(this.toString());
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

9. step9- linked list에 node 삽입하기

```js
class Node {
  constructor;
}
```

<br>

10. Double Linked List의 기본 형태

```js
const list = {
  head: null,
};

let list1 = { value: 12, next: null, pre: null };
let list2 = { value: 99, next: null, pre: null };
let list3 = { value: 37, next: null, pre: null };
let list4 = { value: 2, next: null, pre: null };

list1.next = list2;
list2.next = list3;
list3.next = list4;

/* pre는 해당 노드를 가리킴 (해당 node의 value를 가리키는것이 아님) */
list1.pre = list.head;
list2.pre = list1;
list3.pre = list2;
list4.pre = list3;

list1.next.next.value; // 37
list3.pre.pre.value; // 12
list4.pre.pre.pre.next.next.value; // 37
```

<br>
<br>

- Double linked list

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  // length() { //this.length가 덮어 씀
  //     return this.length;
  // }

  toString() {
    let 순회용현재노드 = this.head;

    //처음 순회용 현재 노드가 init이기 때문에
    순회용현재노드 = 순회용현재노드.next;

    let 출력데이터 = "";
    for (let i = 0; i < this.length; i++) {
      출력데이터 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }

    // return 출력데이터;
    return "[" + 출력데이터.slice(0, -2) + "]";
  }

  fullData() {
    return JSON.parse(this.toString());
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.length += 1;
  }

  insert(index, data) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    for (let i = 0; i < index - 1; i++) {
      순회용현재노드 = 순회용현재노드.next;
    }

    let 새로운노드 = new Node(data);
    새로운노드.next = 순회용현재노드.next;
    순회용현재노드.next = 새로운노드;
    this.length += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

### 1.4.3 트리와 그래프

### 1.4.4 정렬 알고리즘

#### 1.4.4.1 선택정렬

- step1

```
전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
후 = []
```

- step2

```
전 = [199, 22, 33,  32, 64, 72, 222, 233]
후 = [12]
```

- step3

```
전 = [199, 33,  32, 64, 72, 222, 233]
후 = [12, 22]
```

- step4

```
전 = [199, 33, 64, 72, 222, 233]
후 = [12, 22, 32]
```

- step5

```
전 = [199, 64, 72, 222, 233]
후 = [12, 22, 32,  33]
```

#### 1.4.4.2 삽입정렬

- step1

```js
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;
  if (입력배열의길이 <= 1) {
    return 입력배열;
  }
  let 중간값 = parseInt(입력배열의길이 / 2);
  // ~~(입력배열의길이 / 2)와 같습니다.
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));

  return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;
}

console.log(병합정렬(입력값));
```
