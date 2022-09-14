# RESET CSS

- 브라우저마다 제공하는 요소들의 기본 스타일이 각기 다름
- 따라서 초기화시켜주는 작업이 필요함
- 이것은 RESET CSS라 함

## 종류

1. 에릭 마이어의 RESET CSS

- 2011년 이후로 업데이트 중단

2. NOMALIZE.CSS

- 기본적인 스타일 속성들을 모두 제거하지 않음
- 브라우저 스타일은 기반으로 하고,추가적인 스타일을 덧붙여서 비슷하게 만듦
- RESET CSS와 달리 브라우저 고유의 스타일을 존중하면서 스타일을 추가해서 사용함
- 오늘날 가장 많이 사용하는 CSS

3. CSS REMEDY

- 아직 진행중인 프로젝트, 사용시 유의할 것
- 참고 삼아서 보는정도는 괜찮음

# 아이디 선택자 (id selector)

- 페이지 내 요소를 유일하게 식별할 때 사용
- 같은 페이지 내 id값은 유일해야 함
- id명은 알파벳 , '\_'(언더바), '-'(하이픈)으로 시작해야 함
- id명은 직관적이고 간단명료 해야함

# 클래스 선택자 (class selector)

- 해당 요소를 식별할 때 사용
- 한 페이지내에 여러 개가 존재할 수 있음
- 알파벳, '\_'(언더바), '-'(하이픈)으로 시작해야함
- 클래스명은 직관적이고 간단명료 해야함
- 클래스는 중복이 가능하다
- [클래스 선택자 예시](./class_selector.html)

# 1만 시간의 법칙

- 모달은 맨 마지막에 다루는것이 유지보수에 용이하다

- section, main,header 들은 눌렀을 때 이동해야하므로, id로 설정하는게 좋다. 구획을 나누는것들은 id를 주는것이 일반적이다

- id부여시 페이지내에서 이동가능한 링크가 됨

- 검색엔진에서 공개되지 말아야 할 검색키워드 등이 들어가는 경우에는 POST로 처리하는 것이 낫다

- 의도적으로 상세페이지로 이동못하게끔 하는것은 POST로 처리함

- img VS background-image
- 백그라운드 이미지는 변경되지 않을 이미지임 (백엔드 입장)
- 이미지는 백엔드 입장에서 컨트롤 되는 이미지
- 백엔드 개발자와 협업할 때 이미지를 어디에 쏴줘야 하는지에 고민해보기

- 앞뒤 맥락없이 판단이 가능하면 article로 설정

# CSS 공백처리

- CSS또한 HTML처럼 공백을 병합함

## 벤더프리픽스

- 벤더(브라우저 제조사, 통신 제공업체)와 프리픽스(접두어)의 합성어.

- 지원하지 않는 코드도 이용하고 싶을때 벤더프리픽스 사용

- 크로스브라우징시 몇버전부터 몇버전까지 호환을 해줄것인지 논의부터 해야 함

# CSS selector

- Selector: 스타일을 지정할 HTML 요소

- id는 문서 내에서 유일해야 함(한 태그 내에서 중복사용 불가)

- id는 언더바, 하이픈 등으로 시작해야 함

# 선택자 우선순위

1. 후자 우선의 원칙

   - 동일한 선택자가 연속으로 사용되는 경우 후자에 존재하는 것을 우선시함

2. 구체성(Specificity)의 원칙

   - 한 선택자가 다른 선택자보다 더 구체적으로 작성된 경우 구체적인 선택자를 우선으로 함

3. 중요성의 원칙
   - 다른 속성보다 더 우선적으로 적용되어야 할 중요한 스타일 속성이 있는 경우 속성값 다음에 `!important`를 추가함

# CSS Specificity - CSS 구체성(명시도)

- 같은 우선순위일 경우 후자의 것을 우선시함

- 구체성이 높은 선택자에 높은 우선순위를 부여

# style 우선 적용순서

- id > class > type 순으로 스타일 가중치 부여

- 클래스 선택자 개수가 아무리 많다고 하더라도 id의 우선순위를 이길 수 없다

# 중요성의 원칙

# CSS BOX MODEL

- 모든 HTML 요소들은 모두 안에 박스들을 가지고 있음

- margin, border, padding, content가 박스모델에 해당됨

# 박스 유형

1. 블록 박스
2. 인라인 박스

# Ref

- [CSS Specifishity](https://specifishity.com/)

- [CSS로 라이언 그리기](https://zinee-world.tistory.com/426)

- [flex box 연습](https://flexboxfroggy.com/#ko)

- [CSS dinner](https://flukeout.github.io/#)

- [flex & grid](https://flexngrid.com/)

- [잭오랜턴 캐릭터 따라 만들기](https://www.youtube.com/watch?v=-whGdudSBqU&ab_channel=%EB%B9%94%EC%BA%A0%ED%94%84CSS)

- [에릭 마이어의 Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

- [normalize css (reset css)](https://necolas.github.io/normalize.css/)

- [sanitize css (reset css)](https://csstools.github.io/sanitize.css/)

- [cssremedy (reset css)](https://github.com/jensimmons/cssremedy)

- [Autoprexier CSS](https://autoprefixer.github.io/)

- [Specificity Calculator](https://autoprefixer.github.io/)

- [1만 시간의 법칙 Figma](https://www.figma.com/file/YIoHn24LhFrCBEedo96rx6/1%EB%A7%8C-%EC%8B%9C%EA%B0%84%EC%9D%98-%EB%B2%95%EC%B9%99?node-id=0%3A1)

- [caniuse (브라우저에 따라 사용가능한 HTML 요소, CSS 속성, JS문법 등의 정보를 제공)](https://caniuse.com/)

- [CSS 자가진단 체크리스트](https://velog.io/@teo/css-self-checklist)

- [MDN- CSS 선택자](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors)

- [MDN- CSS 참고서](https://developer.mozilla.org/ko/docs/Web/CSS/Reference)

- 빔캠프 소그리기
- 빔캠프 팀소개 웹 페이지 만들기
- 빔캠프 반응형 자기소개 페이지, 웹사이트 따라만들기
- 빔캠프 아코디언 커버 따라만들기 2개
