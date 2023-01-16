# SEO

- [SEO 참고자료 - 네이버](https://searchadvisor.naver.com/guide/faq-serpremove)

# 1️⃣ 구글 검색 작동 방식

## 1. 웹 크롤링

## 2. 색인 생성(Indexing)

- 구글 DB에 저장되어 검색 결과를 알려줄 때 사용됨

- 검색로봇의 색인 생성 작업을 막는 메타태그
  - noindex: 검색결과에 이 페이지, 미디어 또는 리소스를 표시하지 않음. 이 지시어를 지정하지 않으면 페이지, 미디어 또는 리소스가 색인 생성되어 검색결과에 표시될 수 있음
  - nofollow: 이 페이지의 링크를 따라가지 않음. 이 지시어를 지정하지 않으면 Google에서는 페이지의 링크를 사용하여 링크된 페이지를 검색할 수 있음

```html
<meta name="robots" content="noindex, nofollow" />
```

- 보안이 들어가거나 개인정보가 들어간 페이지는 검색결과에 노출이 되면 좋지 않으므로 접근을 막는 것이 좋다

- 메타태그를 설정해주어야 검색이 되지 않음

## 3. 순위가 반영된 검색 결과 제공

- 사용자의 위치, 사용자의 모국어, 사용자가 이용중인 테스크톱 또는 휴대정화 등의 기기환경을 사용해서 가장 적절한 순위의 답안을 제시함<br>
  (기기환경에 따라 사용자의 만족감이 달라 질 수 있으므로 사용자에 따라 최적화된 페이지를 보여주는 것이 좋다)

### SEO 점수를 높게 받을 수 있는 포인트

- 페이지가 얼마나 빠르게 로딩될 수 있는가

### 모바일 친화적인 사이트 만들기

- [참고 사이트 1](https://search.google.com/test/mobile-friendly)

- [참고 사이트 2](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)

- 반응형 웹 디자인
- 동적 게재
- 별도의 URL

### 시각적 컨텐츠 확인

#### 이미지 확인하기

- 모바일 사이트에 데스트탑 사이트와 동일한 이미지 대체 텍스트가 있어야 함

### 구글 검색 작동방식

1. 구글이 내부적으로 가지고 있는 DB를 이용해서 자료를 가져옴
2. DB로부터 검색결과를 제공
3. 웹스파이더 실행
4. 로봇들이 사이트 탐색
5. 인덱싱 정보를 구글 DB에 저장
6. DB가 저장된 페이지가 사용자가 검색을 할때 반영되어 나타남

<br>

# 2️⃣ 손쉽게 사용 가능한 5가지 SEO 가이드

## 1. `<title>`태그를 통해 정확한 페이지 제목 정하기

- `<title>` 태그는 검색 엔진에 페이지의 주제가 무엇인지를 알려줌

### 1. title의 내용은 검색결과의 첫 번째 줄에 보여질 수 있음

### 2. 각 페이지에 사용할 고유한 제목을 사용함

### 3. 짧고 간결한 제목을 사용함

<br>

## 2. `description` 메타 태그를 사용함

- description 메타 태그는 페이지가 담고 있는 내용을 요약해서 서술함.

### description 메타 태그를 사용해야 하는 이유

- description 메타 태그에 쓰여진 내용을 페이지의 스니펫으로 사용할 수 있음

- 스니팻: 화면에 보여지는 템플릿. 구글에서 만들어 놓음. 어떤 특정 기업을 검색했을 때 특정한 형태대로 보여지게 함.

#

### site 연산자 사용하기

- naver.com 내에서 쇼핑이라는 키워드를 찾음

```
쇼핑 site:naver.com
```

- 구글에서 사용가능한 유용한 검색 연산자

1. OR
2.
3. related
4. -

<br>

## 3. 제목 태그(h1 ~ h6)를 사용해서 중요한 텍스트 강조하기

- 의미 있는 제목을 사용해서 중요한 주제를 표시하고 컨텐츠의 계층 구조를 만들어서 사용자가 쉽게 탐색할 수 있도록 함

- HeadingMaps (포트폴리오 꾸밀 때 헤딩태그들이 구조적으로 잘 위치하고 있는지 파악해야 함)

1. 개요를 작성한다는 가정하에 제목을 정함
   - 페이지 중
2. 꼭 필요한 부분에만 헤딩태그 사용하기

<br>

## 4. 의미있는 링크 텍스트 작성하기

### 1) 텍스트를 통한 설명 제공

### 2) 텍스트는 간결하고 한 눈에 들어오도록 작성해야 함

### 3) 링크를 쉽게 발견할 수 있도록 스타일을 설정함

- 웹 접근성 고려
- 시각장애인분들을 위해 다르게 스타일링하는게 중요함

### 4) 웹 페이지 내부에서 사용 가능한 링크 텍스트를 사용해야 함

- 내부 링크로 사이트를 탐색할 수 있도록 만든것
  - skip navigation (이를 이용하면 SEO에 도움을 줄 수 있다)

<br>

## The Open Graph protocol

- [참고자료](https://ogp.me/)

- 페이스북에서 제작함.

- 구글은 A페이지에서 B페이지로 이동하는 링크가 있으면 그 링크를 일종의 투표로 생각함.
- 많이 투표된 페이지 즉, 많은 링크들이 가리키는 페이지는 중요한 페이지로 판단되며, 중요한 페이지로 판단되면 페이지 순위가 높아짐

- 연결이 많이 되어있을 수록 중요도가 높다?

  - 자바스크립트에서의 메모리 관리. 참조가 많이될수록 가비지 컬렉션의 컬렉팅의 대상에서 제외됨.

- 외부에서 들어오는 유입이 많을수록 SEO에서 차지는 비율이 높음

<br>

## Twitter

- 트위터를 위한 카드 형태의 공유 프로토콜

```html
<meta name="twitter:card" content="카드의 타입" />
<meta name="twitter:title" content="카드의 제목" />
<meta name="twitter:description" content="카드 설명" />
<meta name="twitter:image" content="카드 썸네일 이미지 주소" />
```

<br>

## 카카오

- [참고자료](https://developers.kakao.com/docs/latest/ko/message/message-template#location)

<br><br>

# Recoil

- 공식홈페이지의 무료 영상강의는 불친절함

- recoil root는 상태관리하고자하는 것의 부모요소에 배치하는게 좋다 (하단의 예시 참고)

```jsx
const root = ReactDOM.createRoot();
root.render(
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
);
```

## 순수함수

- 동일한 인자를 전달받으면 동일한 결과값을 반환하는 함수
- 인자를 전달하는 외부 값도 동일하게 유지하고 있음
- 순수함수가 아닌 함수의 경우

```js
let myNumber = 3;
function pure(num) {
  return 2 + num;
}

console.log(myNumber);
console.log(pure(myNumber));
```

- 순수하지 않은 함수
  - 외부의 값이 바뀌고 있음
  - 함수의 값이 바뀌고 있음
  - 순수함수로 고치기 위해서는 return 값을 전개구문으로 고쳐주자

```js
let myArray = [1, 2, 3];
function notPure(arr, num) {
  return arr.push(num);
}

console.log(myArray);
console.log(notPure(myArray, 4));
```

- 순수함수로 고친 결과
  - 동일한 인자에 동일한 결과값을 도출함
  - 모든 결과값이 동일함
  - 외부에서 전달하는 값 또한 바뀌지 않음

```js
let myArray = [1, 2, 3];
function notPure(arr, num) {
  return [...myArray, num];
}

console.log(myArray);
console.log(notPure(myArray, 4));

console.log(myArray);
console.log(notPure(myArray, 4));

console.log(myArray);
console.log(notPure(myArray, 4));
```

## selector

- atom값을 가공함
- 함수이므로 함수로 작성
- 고유한 키값이 필요함
- get은 get이라는 recoil에서 사용하는 함수를 받음
- select가 atom 내부의 값을 필터링 해야함
- get이라는 함수를 인자로 받아와야함
- atom 값을 가져와서 가공하는 중간기지의 역할
- atom값에 영향을 미치면 안되기 때문에 pure function임
- atom 내부의 값이 하나이면 selector가 불필요하지만 객체등일 경우 selector를 이용해서 필터링을 할 수 있음
- atom값이 변경되면 selector 들이 자동으로 실행됨 => 필터링도 자동으로 실행됨 => 값을 새로 추가되었을 때에도 실시간으로 추가할 수 있음
- atom 값이 추가되었을때 selector함수가 자동으로 실행되므로 유용한 함수이다

## 참고자료

- https://auth.udacity.com/sign-in?next=https%3A%2F%2Fclassroom.udacity.com%2Fauthenticated

- https://survey.stackoverflow.co/2022/#overview

- https://mrgamza.tistory.com/634

- https://app.sideguide.dev/recoil/tutorial/

- https://jsbin.com/niqukaqavo/edit?js,console
- https://npmtrends.com/@reduxjs/toolkit-vs-jotai-vs-mobx-vs-recoil-vs-redux-vs-xstate-vs-zustand
- https://www.youtube.com/watch?v=P95DuIBwnqw&ab_channel=JackHerrington
- https://blog.openreplay.com/

<hr>
<br>

## 013

- label 클릭시 input창이 활성화 됨

## 019

- tbody를 쓰고싶다면 thead를 꼭 써줘야함. js로 push할때 thead가 없다면 에러가 발생할 수 있음

### block level VS inline level

- 블록 레벨 요소는 width, height, margin, padding이 적용되지만, 인라인 요소는 width, hegith가 지정되지 않고 좌우 margin padding만 가능하다
- 인라인: 좌우 마진만 가지고, 상하 마진을 가지지 않는다.

- block은 width와 height로 컨트롤 할 수 있음

### toast UI

- [참고자료](https://ui.toast.com/)

<br>

## 자손/형제/직계선택자

- 자손 선택자

```css
div p {
  color: red;
}
```

- 형제

```css
div + p {
  color: red;
}
```

- 직계

```css
div > p {
  color: red;
}
```

<br>

## 가상요소 vs 가상클래스

- 가상 클래스 선택자 : 클래스가 없는데 있는 것처럼 처리(콜론이 1개입니다.)
- 가상 요소 선택자 : 요소가 없는데 있는 것처럼 처리(콜론이 2개입니다.)

<br>

## justify content & align center

## flex & grid

- grid-template-areas

```css
body {
  grid-template-areas:
    "header header header"
    ""
    "";
}
```

## sweetalert

## summernote

- 구식버전이라 잘 사용하지 않음

## toastUI

- 진짜 좋음. 역시 머기업!

## tailwind

- space-y-8 : 0.25\*8임

## Scss

- 회사에서 면접보기 전에 무슨 스킬 쓰는지 물어보고 Scss쓴다고 하면 nesting , mixin등을 미리 공부해서 갈것

## JavaScript

### sort

- 원본을 만지지 않고 싶을 경우 spread 또는 slice를 같이 사용함

```js
let s = [1, 10, 2, 4, 3];
```

### null 비교

### forEach

### reduce

- 검색하지 않고 사용할 수 있는 정도로 외워놔야 함<br>
  (map도 마찬가지이다)

### 파선아실

### 클래스

- `#`을 붙이면 private field

### 예외처리

### 정규표현식

- `?`: 있거나 없거나
- `*`:
- `.`:

- 그룹분리

<br>

## React

### useMemo

### context

- redux와 context는 병렬적으로 가져갈 수 있다. 다만 목적은 다르다. redux를 사용하면 context를 사용할 필요가 없어진다.

<br>

## 코딩 컨벤션 참고자료

- https://www.notion.so/paullabworkspace/c5095036bda84fe4b1c600e2e8818aaf
- https://paullabworkspace.notion.site/c5095036bda84fe4b1c600e2e8818aaf

<br>

## Redux

- ㅁ
