# 22.10.19 (수)

# SPA (Single Page Application)

- 실제로 한개의 페이지에서 서비스 되는 것 (index.html 하나로 서비스 되는 페이지)
- 눌렀을 때 URL이 변하면 javascript가 컨트롤함
- 눌렀을 때 다른 페이지가 보이면 자바스크립트가 컨트롤 (새로운 html 파일을 만드는게 아님) (.js나 .md로 된 파일을 불러와서 다른 페이지를 보여주는 것)
- 장점
  - 자원을 아낄 수 있다
  - 재활용성을 높일 수 있다
  - 깜빡임이 없다 (이미 로드가 된 상태이므로) (이미 열려있고 여기서 추가 리소스만 받는것임.)
  - 사용자 경험을 좋게 만들 수 있다
- 단점
  - 개발 복잡도가 높다 (개발 시간이 늘어난다)
  - 검색엔진에서 검색이 제대로 되지 않을 수 있다 (SEO(검색 최적화)의 문제가 있을 수 있다)

# MPA (Multi Page Application)

- a

# index.html

- 이렇게 작성해도 가능

```html
<script type="module">
  const root = document.getElementById("root");

  async function getProducts() {
    const response = await fetch("http://test.api.weniv.co.kr/mall");
    const product = response.json();
    return product;
  }
  const products = await getProducts();
  console.log(products);
</script>
```

- inlinehtml은 보안 이유가 있음

- spa 코드

```html
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>위니브 스토어</title>
    <link
      href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="src/style/style.css" />
  </head>

  <body>
    <div id="root"></div>
    <script>
      const root = document.getElementById("root");

      // 통일성을 해친겁니다.
      // async await을 사용하셨으면 아래 코드도 async await을 사용하시는 것이 좋겠죠?
      async function getProductData() {
        const response = await fetch("http://test.api.weniv.co.kr/mall");
        const product = response.json();
        return product;
      }

      getProductData()
        .then((product) => {
          // console.log(product);
          const mainElement = document.createElement("main");
          mainElement.classList.add("product");
          // console.log(mainElement);

          // 통일성을 해친겁니다.
          // innerHTML로 처음부터 했으면 끝까지 innerHTML로
          // DOM 컨트롤로 처음부터 했으면 끝까지 DOM 컨트롤로
          mainElement.innerHTML = `
                        <h1 class="ir">상품목록</h1>
                        <ul class="product-list"></ul>
                    `;
          // console.log(mainElement);

          const productList = mainElement.querySelector(".product-list");
          product.forEach((item) => {
            // console.log(item);
            const productDetailLink = document.createElement("a");
            productDetailLink.href = `/detail/${item.id}`;
            productDetailLink.innerHTML = `
                            <li>
                                <div>${item.thumbnailImg}</div>
                                <div>${item.productName}</div>
                                <div>${item.price}</div>
                            </li>
                            `;
            // console.log(productDetailLink);
            productList.append(productDetailLink);
          });
          console.log(mainElement);
          const cart = document.createElement("a");
          cart.setAttribute("class", "link-btn cart-link");
          mainElement.append(cart);

          // console.log(productList)
          // console.log(mainElement)
          root.append(mainElement);
        })
        .then()
        .catch();
    </script>
  </body>
</html>
```
