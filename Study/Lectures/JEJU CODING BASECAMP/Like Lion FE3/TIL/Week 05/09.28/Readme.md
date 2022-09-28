# 22.09.28

- Nesting, Mixin은 필수로 알아둘 것 (중요)

## CSS

- [중복되는 CSS 체킹 & 군더더기와 사용하지 않은 CSS클래스를 자동으로 검출](https://intrepidgeeks.com/tutorial/search-for-duplicate-css-and-similar-css)

## [CSS 전/후처리기](https://defineall.tistory.com/828)

## at-root

```scss
.one {
  background-color: yellow;
  .two {
    font-size: 20px;

    // three를 밖으로 빼내기 위해 @at-root 사용 (컴파일되어 나오는 결과물에는 three가 nesting 되지  않음
    @at-root .three {
      display: flex;
    }
  }
}
```

- 부모요소에 준 속성을 상속이 되지 않음 (밖으로 빠져나오므로). 아래의 코드와 동일

```scss{
.one {
  background-color: yellow;
  .two {
    font-size: 20px;

  }
}

.three {
    display: flex;
}
```

- Sass는 개인프로젝트에서 연습하고 팀프로젝트 단계에서 도움하는것은 고민해볼 것

## Saas 변수

- $를 붙여서 변수임을 나타냄

- 순수 css에서의 변수보다 기능이 훨씬 많다

- 사용되지 않는것에 변수를 사용할 필요는 없고, 두번 이상 사용될 경우 변수를 사용하는게 좋다.

- 한글변수가 오히려 의미전달이 잘 되는 경우가 있다. (한라산과 같은 고유명사, 새싹멤버 등)
- 한글코딩 김대현 (NHN 소속이었음) 글 참고

- 변수의 타입

  - numbers, strings, color, booleans, lists, null, map

    - ```scss
      // - numbrs: 1, .82, 20px, 2em 등
      // - strings: "./images/a.png", blod, left, uppercase 등
      // - colors: green, #FFF, rgba(255,0,0,0.5) 등
      // - booleans: true, false
      // - lists
      // - maps
      // - null
      ```

- 전체 컴파일은 하되, null 값인 것은 최종 결과 css파일에 포함되지 않음
- 에러가 나면 컴파일 되지 않음 (null값을 가지면 컴파일은 하지만 css 파일에 나타나지 않고, 에러가나면 그 부분은 컴파일을 하지 않는다)

## 연산자

- 고정값은 연산이 된다 (고정값과 가변값을 연산했을 때에는 에러가 발생한다. 나머지는 정상 작동)

- 나누기 연산자 (/)는 괄호가 있어야 정상적으로 작동함 (그렇지 않으면 문자로 인식)

## 믹스인

- 복습해서 채워넣을것(AM 10:26~ 내용)
- 회사의 믹스인 혹은 실무자들의 믹스인을 가지고 기술스택 공부할 것 (Sass 등)

## 논리연산자

- 0이외의 모든 값들은 true로 처리
-

## 믹스인!!!!!! (중요)

- 일종의 함수임. 코드의 반복 사용방지를 위해서 쓰는것임
- 보통 회사에 가면 회사에서 사용하는 믹스인이 존재
- 회사에 Sass가 없는데, 회사 내에서 안쓰면 Sass 도입하자고 제안하는 경우도 있음

## Extend

- [Sass mixin & Extend toast](https://ui.toast.com/fe-guide/ko_HTMLCSS)

## Sass function

- 리턴값이 존재
- `()` 표시가 있으면 함수 -> 이 `소괋호()`가 `실행시키는 역할`을 함
- `XXX()` 에서 `XXX`는 '변수'일 뿐임

## Ref

- [도움되는 Sass 깃헙](https://github.com/7ninjas/scss-mixins)

## 부트스트랩

- 부트스트랩은 전체 컬럼을 12컬럼으로 나눔
- 부트스트랩은 돈 주고 사는 용도 / 테일윈드는 직접 코드를 짜는 용도로 사용

- 나눠지는 섹션은 컨테이너로 감쌈

- 한 섹션 내에서 나눠지는 것은 row로 감쌈

- 여러 컬럼을 사용해서 여러 기기와의 호환성을 지원

- 테일윈드는 사용하면 디자인이 나와있는 경우에 있어서 빠르게 코딩이 가능하다

- 부트스트랩에서는 일일이 css고치지 않고 의도대로 적용이 안되면 !important를 때려버림

- [많이 쓰는 카드 클래스](https://getbootstrap.com/docs/5.2/components/card/)
