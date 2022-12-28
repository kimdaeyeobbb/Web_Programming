# 22.12.28 수업

- https://n-roo.tistory.com/13
- https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=ko
- https://www.w3.org/WAI/standards-guidelines/wcag/
- http://www.wa.or.kr/board/view.asp?sn=161&page=1&search=&SearchString=&BoardID=0004&cate=
- https://www.opencheongwadae.kr/
- https://www.samsung.com/sec/smartphones/galaxy-z-fold4-5g-sm-f936-cpo/SM-F936NDREKOO/
- https://www.musinsa.com/categories/item/005
- https://www.coupang.com/np/search?component=&q=%EC%95%A0%ED%94%8C&channel=user
- https://browse.gmarket.co.kr/search?keyword=%EC%86%8C%EA%B3%A0%EA%B8%B0
- https://search.11st.co.kr/Search.tmall?kwd=%25EB%25A0%2588%25EA%25B3%25A0
- https://codingparty.goorm.io/codinghero

- 코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style></style>
  </head>

  <body>
    <a href="">메인메뉴 바로가기</a>
    <a href="">본문 바로가기</a>
    <a href="">푸터 바로가기</a>

    <article>
      <h1>제목입니다.</h1>
      <header>
        <h2>헤더입니다.</h2>
        <nav>
          <ul>
            <li><a href="">메뉴1</a></li>
            <li><a href="">메뉴2</a></li>
            <li><a href="">메뉴3</a></li>
          </ul>
        </nav>
      </header>
      <main id="contMain">
        <h2>본문영역입니다.</h2>
      </main>
      <footer id="contFooter">
        <h2>푸터영역입니다.</h2>
      </footer>
    </article>
  </body>
</html>
```

```css
header {
  height: 200px;
  background-color: royalblue;
}

nav li {
  display: inline-block;
  padding: 30px;
  font-size: 20px;
}

main {
  height: 1000px;
  background-color: pink;
}

footer {
  background-color: lightgreen;
  height: 200px;
}
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      header {
        height: 200px;
        background-color: royalblue;
      }

      nav li {
        display: inline-block;
        padding: 30px;
        font-size: 20px;
      }

      main {
        height: 1000px;
        background-color: pink;
      }

      footer {
        background-color: lightgreen;
        height: 200px;
      }

      .skip {
        position: absolute;
        top: -100%;
        z-index: 100;
        border: 3px solid black;
        background-color: #fff;
        color: #000;
      }

      .skip:focus {
        top: 0;
      }
    </style>
  </head>

  <body>
    <a href="#navMain" class="skip">메인메뉴 바로가기</a>
    <a href="#contMain" class="skip">본문 바로가기</a>
    <a href="#contFooter" class="skip">푸터 바로가기</a>

    <article>
      <h1>제목입니다.</h1>
      <header>
        <h2>헤더입니다.</h2>
        <nav id="navMain">
          <ul>
            <li><a href="">메뉴1</a></li>
            <li><a href="">메뉴2</a></li>
            <li><a href="">메뉴3</a></li>
          </ul>
        </nav>
      </header>
      <main id="contMain">
        <h2>본문영역입니다.</h2>
      </main>
      <footer id="contFooter">
        <h2>푸터영역입니다.</h2>
      </footer>
    </article>
  </body>
</html>
```

- https://chrome.google.com/webstore/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn?hl=ko

- https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .txt-hide {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
      }

      .labl-hold::before {
        display: inline-block;
        content: "";
        width: 22px;
        height: 22px;
        vertical-align: -5px;
        background-image: url("images/css_sprites.png");
        background-position: -52px -10px;
      }

      .inp-hold:checked + .labl-hold::before {
        background-image: url("images/css_sprites.png");
        background-position: -10px -10px;
      }

      .inp-hold:focus + .labl-hold::before {
        outline: 2px solid #000;
        outline-offset: 5px;
        border-radius: 50%;
        box-sizing: border-box;
      }

      @media screen and (-webkit-min-device-pixel-ratio: 2) {
        .labl-hold::before {
          background-image: url("images/css_sprites_retina.png");
          background-position: -52px -10px;
          background-size: 84px 42px;
        }

        .inp-hold:checked + .labl-hold::before {
          background-image: url("images/css_sprites_retina.png");
          background-position: -10px -10px;
        }
      }
    </style>
  </head>

  <body>
    <input type="checkbox" id="inpHold" class="inp-hold txt-hide" />
    <label for="inpHold" class="labl-hold">선택해주세요</label>
  </body>
</html>
```

- https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/Attributes/aria-label

- https://www.notion.so/paullabworkspace/23-CSS-607aa331d932442c9048f50c4734fde6

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .txt-hide {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
      }

      .labl-hold::before {
        display: inline-block;
        content: "";
        width: 22px;
        height: 22px;
        vertical-align: -5px;
        background-image: url("images/css_sprites.png");
        background-position: -52px -10px;
      }

      .inp-hold:checked + .labl-hold::before {
        background-image: url("images/css_sprites.png");
        background-position: -10px -10px;
      }

      .inp-hold:focus + .labl-hold::before {
        outline: 2px solid #000;
        outline-offset: 5px;
        border-radius: 50%;
        box-sizing: border-box;
      }

      @media screen and (-webkit-min-device-pixel-ratio: 2) {
        .labl-hold::before {
          background-image: url("images/css_sprites_retina.png");
          background-position: -52px -10px;
          background-size: 84px 42px;
        }

        .inp-hold:checked + .labl-hold::before {
          background-image: url("images/css_sprites_retina.png");
          background-position: -10px -10px;
        }
      }
    </style>
  </head>

  <body>
    <input type="checkbox" id="inpHold" class="inp-hold txt-hide" />
    <label for="inpHold" class="labl-hold">선택해주세요</label>
  </body>
</html>
```

- https://july249.tistory.com/entry/HTML-aria-label%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* a {
            display: inline-block;
            width: 20px;
            height: 20px;
            background-image: url('./images/logo_naver.png');
            background-size: cover;
        } */

      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        vertical-align: -5px;
        background-image: url("images/css_sprites.png");
        background-position: -52px -10px;
      }

      span[aria-checked="true"] {
        background-image: url("images/css_sprites.png");
        background-position: -10px -10px;
      }

      /* .txt-hide {
            position: absolute;
            clip: rect(0 0 0 0);
            width: 1px;
            height: 1px;
            margin: -1px;
            overflow: hidden;
        } */

      /* .labl-hold::before {
            display: inline-block;
            content: '';
            width: 22px;
            height: 22px;
            vertical-align: -5px;
            background-image: url("images/css_sprites.png");
            background-position: -52px -10px;
        }

        .inp-hold:checked+.labl-hold::before {
            background-image: url("images/css_sprites.png");
            background-position: -10px -10px;
        }

        .inp-hold:focus+.labl-hold::before {
            outline: 2px solid #000;
            outline-offset: 5px;
            border-radius: 50%;
            box-sizing: border-box;
        } */

      /* @media screen and (-webkit-min-device-pixel-ratio: 2) {
            .labl-hold::before {
                background-image: url("images/css_sprites_retina.png");
                background-position: -52px -10px;
                background-size: 84px 42px;
            }

            .inp-hold:checked+.labl-hold::before {
                background-image: url("images/css_sprites_retina.png");
                background-position: -10px -10px;
            }
        } */
    </style>
  </head>

  <body>
    <!-- <input type="checkbox" id="inpHold" class="inp-hold txt-hide"> -->
    <!-- role : 접근성 보조기술에 요속의 실질적인 역할이 무엇인지 알려줍니다. -->
    <!-- aria-label : 요소에 대한 설명을 제공합니다. -->

    <!-- <a href="https://www.naver.com" target="_blank" aria-label="네이버로 이동합니다. 새창에서 열립니다."></a> -->

    <span
      role="checkbox"
      aria-checked="false"
      aria-labelledby="inpHold"
      tabindex="0"
    ></span>

    <label id="inpHold" class="labl-hold" tabindex="0">선택해주세요</label>

    <script>
      const item = document.querySelector("span");
      const itemLabel = document.querySelector("label");

      // item.addEventListener('click', changeCheckbox);
      // item.addEventListener('keydown', changeCheckbox);
      // itemLabel.addEventListener('click', changeCheckbox);
      // itemLabel.addEventListener('keydown', changeCheckbox);

      [item, itemLabel].forEach((item) => {
        ["click", "keydown"].forEach((eventType) => {
          item.addEventListener(eventType, changeCheckbox);
        });
      });

      function changeCheckbox(event) {
        const spaceBar = 32;
        const checked = item.getAttribute("aria-checked");

        if (event.keyCode && event.keyCode !== spaceBar) {
          return;
        } else if (checked === "true") {
          item.setAttribute("aria-checked", "false");
        } else {
          item.setAttribute("aria-checked", "true");
        }
      }
    </script>
  </body>
</html>
```
