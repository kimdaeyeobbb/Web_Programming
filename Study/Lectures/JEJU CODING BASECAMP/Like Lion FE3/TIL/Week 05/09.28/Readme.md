# 22.09.28

- Nesting, Mixin은 필수로 알아둘 것 (중요)

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
