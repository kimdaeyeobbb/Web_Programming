# 22.11.28 (월)

# [프로젝트 사이트](https://weniv.github.io/react-blog/)

# 명령어 모음

- 리액트 실행을 위한 기본적인 환경설정

```bash
npx create-react-app my-app --template basic-react
```

- 스타일드 컴포넌트 구성을 위한 기본적인 환경설정

```bash
cd my-app
npm i react-router-dom styled-components axios
```

# 참고사이트

- [ERD 다이어그램](https://www.erdcloud.com/)

# 프로젝트 구성

- 실제 프로젝트를 구성할 때에도 `<!--header-->` 등의 주석을 달아놓으면 진행이 수월하다

- 위에있는 배너가 고정값이 아니면 서버에서 받아와야하는 값일 것임.

## 로그인 정보

- 상단위 좌측 중단, 컴포넌트 가운데서도 사용 -> 같은 요소를 여러번 사용하므로 props drilling이 발생하겠다고 예측 가능 -> context로 관리할 것임

## 파일별 구성

- 파일별로 `폴더명.jsx`, `폴더명(소문자).css` 생성할 것

## fetch 작업

```js
fetch(
  "https://raw.githubusercontent.com/weniv/react-blog/react/public/data.json",
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log("성공:", data);
  })
  .catch((error) => {
    console.error("실패:", error);
  });
```

- 결과값

```
Promise {<pending>}
성공: {blog: {…}, posts: Array(6), users: Array(2)}
```

- 실무 환경에서는 모든 데이터가 한 공간에 있지 않음

### blog 데이터

- https://raw.githubusercontent.com/weniv/react-blog/react/public/blog.json

### post 전체 데이터

- https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json
- 이 데이터가 제목과 썸네일, 카테고리, Author 정보가 라이트하게 들어있는 데이터 (수정해서 contents는 삭제함)

### post 개별 데이터

- https://raw.githubusercontent.com/weniv/react-blog/react/public/post1.json
- https://raw.githubusercontent.com/weniv/react-blog/react/public/post2.json
- https://raw.githubusercontent.com/weniv/react-blog/react/public/post3.json
- https://raw.githubusercontent.com/weniv/react-blog/react/public/post4.json
- https://raw.githubusercontent.com/weniv/react-blog/react/public/post5.json
- https://raw.githubusercontent.com/weniv/react-blog/react/public/post6.json

- 해당 데이터는 로그인을 해야만 받아올 수 있는 데이터입니다.(실무에서는요.)

### 서버와의 통신

- 언제 fetch를 날려야 하는가?
  - 각 게시물을 눌렀을 경우에 fetch를 날리면 됨
- 데이터를 뿌려줄 떄 전체 데이터를 컴포넌트 array로 이미만듦
- 따라서 컴포넌트상 데이터는 light한 데이터여야 함
- 개별 데이터들은 굉장히 많은 데이터들이 쓰여있어야 함
- 게시물 데이터 정보와 썸네일 정보가 있어야 함

<br>

## 작업순서

### App.jsx

```jsx
// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
// import "./app.css"; // 나중에 스타일드 컴포넌트로 바꿔야 함

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 페이지가 2개니까 라우트는 2개만 생성 */}
        <Route path="/" element={<Home />} />
        {/* 블로그가 들어오는데, 뒤에는 가변적인 숫자 (아이디)가 들어올 것임 */}
        <Route path="/blog/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

- `localhost:3000/blog/숫자` 형식으로 URL 삽입시 작업내용이 잘 나오나 확인할 것

### Home.jsx

```jsx
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}
```

### Header.jsx

```jsx
import { Link } from "react-router-dom"; // a태그 대신 link 사용
import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to="/">
              <img src="./assets/Logo.svg" alt="My Blog" />
            </Link>
          </h1>
          <ul>
            {/* 로그인 */}
            <li className="profile-img">
              <Link to="/">
                <img src="./assets/profile.jpg" alt="My Page" />
              </Link>
            </li>
            <li>
              <Link to="/" className="button">
                <img src="./assets/icon-modify-white.svg" alt="" />
                <span>Write</span>
              </Link>
            </li>
            <li>
              <button className="button white">
                <img src="./assets/icon-logout.svg" alt="" />
                <span>Logout</span>
              </button>
            </li>
            {/* //로그인 */}
          </ul>
        </div>
      </header>
    </>
  );
}
```

- class는 className으로 수정
- href는 to로 바꿈
- `<Link to ='/'>` : 일단은 메인페이지로 모두 이동하게 만듦

### Banner.jsx

```jsx
import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <div className="max-width">
        <div className="banner-contents">
          <p className="sub-text">React Blog</p>
          <p className="main-text">My BLOG</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nostrum dolor provident beatae deserunt magnam, illo neque. Maiores
            ipsum commodi dolorum beatae aliquid laboriosam est
          </p>
        </div>
      </div>
    </div>
  );
}
```

### Main.jsx

```jsx
import React from "react";

export default function Main() {
  return (
    <main>
      {/* // <!-- posts --> */}
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <ul class="posts">
          <li>
            <a href="post-view.html" class="post">
              <article>
                <img src="./images/post-img6.jpg" alt="" />
                <div class="contents-wrap">
                  {/* <!-- category --> */}
                  <dl class="category">
                    <dt class="a11y-hidden">Category</dt>
                    <dd>Life</dd>
                    <dd>Style</dd>
                  </dl>
                  {/* <!-- //category -->  */}

                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  </h3>

                  {/* <!-- author --> */}
                  <dl class="author-wrap">
                    <dt class="a11y-hidden">Author</dt>
                    <dd class="author">
                      <img src="./images/profile.jpg" alt="" /> Chilli
                    </dd>
                    <dt class="a11y-hidden">Created</dt>
                    <dd class="created">2022.05.25</dd>
                  </dl>
                  {/* <!-- //author --> */}

                  <p class="post-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore illum nostrum perferendis voluptas, voluptate
                    soluta corrupti dolore quidem. Placeat, eaque!
                    Exercitationem est facilis dolor quas odio cum incidunt
                    repudiandae vel. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Inventore illum nostrum perferendis
                    voluptas, voluptate soluta corrupti dolore quidem. Placeat,
                    eaque! Exercitationem est facilis dolor quas odio cum
                    incidunt repudiandae vel. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Inventore illum nostrum
                    perferendis voluptas, voluptate soluta corrupti dolore
                    quidem. Placeat, eaque! Exercitationem est facilis dolor
                    quas odio cum incidunt repudiandae vel. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Inventore illum
                    nostrum perferendis voluptas, voluptate soluta corrupti
                    dolore quidem. Placeat, eaque! Exercitationem est facilis
                    dolor quas odio cum incidunt repudiandae vel."
                  </p>
                </div>
              </article>
            </a>
          </li>
          <li>
            <a href="post-view.html" class="post">
              <article>
                <img src="./images/post-img5.jpg" alt="" />
                <div class="contents-wrap">
                  {/* <!-- category --> */}
                  <dl class="category">
                    <dt class="a11y-hidden">Category</dt>
                    <dd>Life</dd>
                    <dd>Style</dd>
                  </dl>
                  {/* <!-- //category --> */}

                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  </h3>

                  <dl class="author-wrap">
                    <dt class="a11y-hidden">Author</dt>
                    <dd class="author">
                      <img src="./images/profile.jpg" alt="" /> Chilli
                    </dd>
                    <dt class="a11y-hidden">Created</dt>
                    <dd class="created">2022.05.25</dd>
                  </dl>
                  <p class="post-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore illum nostrum perferendis voluptas, voluptate
                    soluta corrupti dolore quidem. Placeat, eaque!
                    Exercitationem est facilis dolor quas odio cum incidunt
                    repudiandae vel. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Inventore illum nostrum perferendis
                    voluptas, voluptate soluta corrupti dolore quidem. Placeat,
                    eaque! Exercitationem est facilis dolor quas odio cum
                    incidunt repudiandae vel. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Inventore illum nostrum
                    perferendis voluptas, voluptate soluta corrupti dolore
                    quidem. Placeat, eaque! Exercitationem est facilis dolor
                    quas odio cum incidunt repudiandae vel. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Inventore illum
                    nostrum perferendis voluptas, voluptate soluta corrupti
                    dolore quidem. Placeat, eaque! Exercitationem est facilis
                    dolor quas odio cum incidunt repudiandae vel."
                  </p>
                </div>
              </article>
            </a>
          </li>
          <li>
            <a href="post-view.html" class="post">
              <article>
                <img src="./images/post-img4.jpg" alt="" />
                <div class="contents-wrap">
                  {/* <!-- category --> */}
                  <dl class="category">
                    <dt class="a11y-hidden">Category</dt>
                    <dd>Life</dd>
                    <dd>Style</dd>
                  </dl>
                  {/* <!-- //category --> */}

                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  </h3>

                  <dl class="author-wrap">
                    <dt class="a11y-hidden">Author</dt>
                    <dd class="author">
                      <img src="./images/profile.jpg" alt="" /> Chilli
                    </dd>
                    <dt class="a11y-hidden">Created</dt>
                    <dd class="created">2022.05.25</dd>
                  </dl>
                  <p class="post-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore illum nostrum perferendis voluptas, voluptate
                    soluta corrupti dolore quidem. Placeat, eaque!
                    Exercitationem est facilis dolor quas odio cum incidunt
                    repudiandae vel. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Inventore illum nostrum perferendis
                    voluptas, voluptate soluta corrupti dolore quidem. Placeat,
                    eaque! Exercitationem est facilis dolor quas odio cum
                    incidunt repudiandae vel. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Inventore illum nostrum
                    perferendis voluptas, voluptate soluta corrupti dolore
                    quidem. Placeat, eaque! Exercitationem est facilis dolor
                    quas odio cum incidunt repudiandae vel. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Inventore illum
                    nostrum perferendis voluptas, voluptate soluta corrupti
                    dolore quidem. Placeat, eaque! Exercitationem est facilis
                    dolor quas odio cum incidunt repudiandae vel."
                  </p>
                </div>
              </article>
            </a>
          </li>
          <li>
            <a href="post-view.html" class="post">
              <article>
                <img src="./images/post-img3.jpg" alt="" />
                <div class="contents-wrap">
                  {/* <!-- category --> */}
                  <dl class="category">
                    <dt class="a11y-hidden">Category</dt>
                    <dd>Life</dd>
                    <dd>Style</dd>
                  </dl>
                  {/* <!-- //category --> */}

                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  </h3>

                  <dl class="author-wrap">
                    <dt class="a11y-hidden">Author</dt>
                    <dd class="author">
                      <img src="./images/profile.jpg" alt="" /> Chilli
                    </dd>
                    <dt class="a11y-hidden">Created</dt>
                    <dd class="created">2022.05.25</dd>
                  </dl>
                  <p class="post-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore illum nostrum perferendis voluptas, voluptate
                    soluta corrupti dolore quidem. Placeat, eaque!
                    Exercitationem est facilis dolor quas odio cum incidunt
                    repudiandae vel. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Inventore illum nostrum perferendis
                    voluptas, voluptate soluta corrupti dolore quidem. Placeat,
                    eaque! Exercitationem est facilis dolor quas odio cum
                    incidunt repudiandae vel. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Inventore illum nostrum
                    perferendis voluptas, voluptate soluta corrupti dolore
                    quidem. Placeat, eaque! Exercitationem est facilis dolor
                    quas odio cum incidunt repudiandae vel. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Inventore illum
                    nostrum perferendis voluptas, voluptate soluta corrupti
                    dolore quidem. Placeat, eaque! Exercitationem est facilis
                    dolor quas odio cum incidunt repudiandae vel."
                  </p>
                </div>
              </article>
            </a>
          </li>
          <li>
            <a href="post-view.html" class="post">
              <article>
                <img src="./images/post-img2.jpg" alt="" />
                <div class="contents-wrap">
                  {/* <!-- category --> */}
                  <dl class="category">
                    <dt class="a11y-hidden">Category</dt>
                    <dd>Life</dd>
                    <dd>Style</dd>
                  </dl>
                  {/* <!-- //category --> */}

                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  </h3>

                  <dl class="author-wrap">
                    <dt class="a11y-hidden">Author</dt>
                    <dd class="author">
                      <img src="./images/profile.jpg" alt="" /> Chilli
                    </dd>
                    <dt class="a11y-hidden">Created</dt>
                    <dd class="created">2022.05.25</dd>
                  </dl>
                  <p class="post-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore illum nostrum perferendis voluptas, voluptate
                    soluta corrupti dolore quidem. Placeat, eaque!
                    Exercitationem est facilis dolor quas odio cum incidunt
                    repudiandae vel. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Inventore illum nostrum perferendis
                    voluptas, voluptate soluta corrupti dolore quidem. Placeat,
                    eaque! Exercitationem est facilis dolor quas odio cum
                    incidunt repudiandae vel. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Inventore illum nostrum
                    perferendis voluptas, voluptate soluta corrupti dolore
                    quidem. Placeat, eaque! Exercitationem est facilis dolor
                    quas odio cum incidunt repudiandae vel. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Inventore illum
                    nostrum perferendis voluptas, voluptate soluta corrupti
                    dolore quidem. Placeat, eaque! Exercitationem est facilis
                    dolor quas odio cum incidunt repudiandae vel."
                  </p>
                </div>
              </article>
            </a>
          </li>
          <li>
            <a href="post-view.html" class="post">
              <article>
                <img src="./images/post-img1.jpg" alt="" />
                <div class="contents-wrap">
                  {/* <!-- category --> */}
                  <dl class="category">
                    <dt class="a11y-hidden">Category</dt>
                    <dd>Life</dd>
                    <dd>Style</dd>
                  </dl>
                  {/* <!-- //category --> */}

                  <h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  </h3>

                  <dl class="author-wrap">
                    <dt class="a11y-hidden">Author</dt>
                    <dd class="author">
                      <img src="./images/profile.jpg" alt="" /> Chilli
                    </dd>
                    <dt class="a11y-hidden">Created</dt>
                    <dd class="created">2022.05.25</dd>
                  </dl>
                  <p class="post-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore illum nostrum perferendis voluptas, voluptate
                    soluta corrupti dolore quidem. Placeat, eaque!
                    Exercitationem est facilis dolor quas odio cum incidunt
                    repudiandae vel. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Inventore illum nostrum perferendis
                    voluptas, voluptate soluta corrupti dolore quidem. Placeat,
                    eaque! Exercitationem est facilis dolor quas odio cum
                    incidunt repudiandae vel. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Inventore illum nostrum
                    perferendis voluptas, voluptate soluta corrupti dolore
                    quidem. Placeat, eaque! Exercitationem est facilis dolor
                    quas odio cum incidunt repudiandae vel. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Inventore illum
                    nostrum perferendis voluptas, voluptate soluta corrupti
                    dolore quidem. Placeat, eaque! Exercitationem est facilis
                    dolor quas odio cum incidunt repudiandae vel."
                  </p>
                </div>
              </article>
            </a>
          </li>
        </ul>
        {/* <!-- //posts --> */}

        {/* <!-- about --> */}
        <aside class="about">
          <h2>About Me</h2>
          <img src="./images/profile.jpg" alt="" class="user-profile" />
          <p class="user-name">Chilli</p>
          <p class="user-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h3>Categories</h3>
          <ul class="categories">
            <li>
              <a href="#">Life</a>
            </li>
            <li>
              <a href="#">Style</a>
            </li>
            <li>
              <a href="#">Tech</a>
            </li>
            <li>
              <a href="#">Sport</a>
            </li>
            <li>
              <a href="#">Photo</a>
            </li>
            <li>
              <a href="#">Develop</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
          </ul>
          <h3>Follow</h3>
          <ul class="sns">
            <li>
              <a href="#">
                <img src="./assets/Facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/Twitter.svg" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/Instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/Github.svg" alt="GitHub" />
              </a>
            </li>
          </ul>
        </aside>
        {/* <!-- //about --> */}
      </div>
    </main>
  );
}
```

### Main 폴더

- Main 하위 폴더 생성
  - about
    - About.jsx 와 about.css 생성
  - author
    - jsx, css 파일 생성
  - category
    - jsx, css 파일 생성
  - posts
    - jsx, css 파일 생성

### Main.jsx

```jsx
import Posts from "./posts/Posts";
import About from "./about/About";

export default function Main() {
  return (
    <main>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <ul class="posts">
          {/* components array로 생성 */}
          <Posts />
        </ul>
        <About />
      </div>
    </main>
  );
}
```

### About.jsx

```jsx
import React from "react";

export default function About() {
  return (
    <div>
      <aside class="about">
        <h2>About Me</h2>
        <img src="./images/profile.jpg" alt="" class="user-profile" />
        <p class="user-name">Chilli</p>
        <p class="user-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h3>Categories</h3>
        <ul class="categories">
          <li>
            <a href="#">Life</a>
          </li>
          <li>
            <a href="#">Style</a>
          </li>
          <li>
            <a href="#">Tech</a>
          </li>
          <li>
            <a href="#">Sport</a>
          </li>
          <li>
            <a href="#">Photo</a>
          </li>
          <li>
            <a href="#">Develop</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
        </ul>
        <h3>Follow</h3>
        <ul class="sns">
          <li>
            <a href="#">
              <img src="./assets/Facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/Twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/Instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/Github.svg" alt="GitHub" />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
```

### Posts.jsx

```jsx
import Category from "../category/Category";
import Author from "../author/Author";

export default function Posts() {
  return (
    <li>
      <a href="post-view.html" class="post">
        <article>
          <img src="./images/post-img6.jpg" alt="" />
          <div class="contents-wrap">
            <Category />

            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

            <Author />

            <p class="post-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore illum nostrum perferendis voluptas, voluptate soluta
              corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
              dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Inventore illum nostrum
              perferendis voluptas, voluptate soluta corrupti dolore quidem.
              Placeat, eaque! Exercitationem est facilis dolor quas odio cum
              incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Inventore illum nostrum perferendis voluptas,
              voluptate soluta corrupti dolore quidem. Placeat, eaque!
              Exercitationem est facilis dolor quas odio cum incidunt
              repudiandae vel. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Inventore illum nostrum perferendis voluptas,
              voluptate soluta corrupti dolore quidem. Placeat, eaque!
              Exercitationem est facilis dolor quas odio cum incidunt
              repudiandae vel."
            </p>
          </div>
        </article>
      </a>
    </li>
  );
}
```

### Author.jsx

```jsx
import React from "react";

export default function Author() {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author">
        <img src="./images/profile.jpg" alt="" /> Chilli
      </dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">2022.05.25</dd>
    </dl>
  );
}
```

### Category.jsx

```jsx
import React from "react";

export default function Category() {
  return (
    <dl class="category">
      <dt class="a11y-hidden">Category</dt>
      <dd>Life</dd>
      <dd>Style</dd>
    </dl>
  );
}
```

### UserContext.jsx

```jsx
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

### App.jsx

```jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
// import "./app.css"; // 나중에 스타일드 컴포넌트로 바꿔야 함

function App() {
  const [userId, setUserId] = useState(1);
  const [isLogin, setIsLogin] = useState(true); // 로그인 여부 확인

  /* 로그인 로직 작성 */

  return (
    <UserContext.Provider>
      <BrowserRouter>
        <Routes>
          {/* 페이지가 2개니까 라우트는 2개만 생성 */}
          <Route path="/" element={<Home />} />
          {/* 블로그가 들어오는데, 뒤에는 가변적인 숫자 (아이디)가 들어올 것임 */}
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
```

- context 개념 재확인 요망
- props drilling이 필요한 경우 context 사용하는 것을 권장함 (props로 전달하는 분들도 있긴 함)

### Main.jsx

```jsx
import { useContext } from "react";
import Posts from "./posts/Posts";
import About from "./about/About";
import UserContext from "../../context/UserContext";

export default function Main() {
  const { isLogin } = useContext(UserContext);
  return (
    <main>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <ul class="posts">
          {/* components array로 생성 */}
          <Posts />
        </ul>
        {/* 로그인 성공시 about을 보여주고 실패하면 프래그먼트 보여줌 */}
        {isLogin ? <About /> : <></>}
      </div>
    </main>
  );
}
```

- useContext의 흐름이 이러해서 propsdrilling을 피하는 구나. 라고 생각하기
- 로그인 정보는 context를 많이 사용함

- App.jsx에서 useState의 값을 true, false값으로 바꿔가면서 로그인 확인

```jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
// import "./app.css"; // 나중에 스타일드 컴포넌트로 바꿔야 함

function App() {
  // 실제로는 로그인이 되는 로직이 들어가야 함
  const [userId, setUserId] = useState(1);
  const [isLogin, setIsLogin] = useState(true); // 로그인 여부 확인 (false로 바꾸면 로그인이 실패했으므로 일부 내용이 사라짐)

  /* 로그인 로직 작성 */

  return (
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          {/* 페이지가 2개니까 라우트는 2개만 생성 */}
          <Route path="/" element={<Home />} />
          {/* 블로그가 들어오는데, 뒤에는 가변적인 숫자 (아이디)가 들어올 것임 */}
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
```

### Main.jsx

```jsx
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import Posts from "./posts/Posts";
import About from "./about/About";
import "./main.css";

export default function Main() {
  const { isLogin } = useContext(UserContext);
  const [posts, setPosts] = useState();

  useEffect(() => {
    /* axios 통신을 통해서 데이터를 받아오기 */
    axios
      .get(
        "https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json"
      )
      .then((json) => {
        console.log(json);
        // setPosts(json); // 이렇게되면 무한 반복이 실행됨 (json 세팅) => useEffect로 감싸줘서 해결
        console.log(json.data);
        setPosts(json.data); // 이렇게되면 무한 반복이 실행됨 (json 세팅) => useEffect로 감싸줘서 해결. data 필드에 해당 하는 값만 posts가 가짐
      });
  }, []);

  return (
    <main>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <ul class="posts">
          {/* components array로 생성 */}
          <Posts posts={posts} />
        </ul>
        {/* 로그인 성공시 about을 보여주고 실패하면 프래그먼트 보여줌 */}
        {isLogin ? <About /> : <></>}
      </div>
    </main>
  );
}
```

- axios나 fetch는 useEffect로 감싸줄 것 (무한반복 이슈때문 -> 무한반복 내용 정리)
- useEffect가 없었다면 setPosts를 세팅 -> state값이 변한것이므로 -> 컴포넌트를 재랜더링 -> 다시 실행 -> 또 setPosts를 통해 세팅되므로 재랜더링 -> 반복
- useEffect는 처음 컴포넌트가 생성되었을 때만 실행됨. 감시하는 변수를 없게 하면 랜더링이 최초로 한번만 일어남. (안에 무슨일이 있다 하더라도)
- [useEffect 참고자료](https://paullabworkspace.notion.site/14-Hook-useEffect-386ecd57301845ebb402c40cc01bf330)

### Posts.jsx

```jsx
import Category from "../category/Category";
import Author from "../author/Author";

export default function Posts({ posts }) {
  console.log(posts); // undefined가 찍힘 -> 이후에 posts가 한번더 랜더링 -> 처음에 axios 통신이 제대로 안되어서 undefined값이 전달된 것
  // 처음에 undefined 던져주고 이후에 통신을 함
  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          <a href="post-view.html" class="post">
            <article>
              <img src="./images/post-img6.jpg" alt="" />
              <div class="contents-wrap">
                <Category />

                <h3>{post.title}</h3>

                <Author />

                <p class="post-description">{post.summary}</p>
              </div>
            </article>
          </a>
        </li>
      ))}
    </>
  );
}
```

- `<li key={post.id}>` : li의 key값이 유니크한 값임

### Main.jsx

```jsx
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import Posts from "./posts/Posts";
import About from "./about/About";
import "./main.css";

export default function Main() {
  const { isLogin } = useContext(UserContext);
  const [posts, setPosts] = useState();

  useEffect(() => {
    /* axios 통신을 통해서 데이터를 받아오기 */
    axios
      .get(
        "https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json"
      )
      .then((json) => {
        console.log(json);
        // setPosts(json); // 이렇게되면 무한 반복이 실행됨 (json 세팅) => useEffect로 감싸줘서 해결
        console.log(json.data);
        setPosts(json.data); // 이렇게되면 무한 반복이 실행됨 (json 세팅) => useEffect로 감싸줘서 해결. data 필드에 해당 하는 값만 posts가 가짐
      });
  }, []);

  return (
    <main>
      {/* posts가 undefined라면 프래그먼트, 아니면 아래의 것을 랜더링해  */}
      {posts === undefined ? (
        <></>
      ) : (
        <div class="max-width">
          <h2 class="a11y-hidden">Post</h2>
          <ul class="posts">
            {/* components array로 생성 */}
            <Posts posts={posts} />
          </ul>
          {isLogin ? <About /> : <></>}
        </div>
      )}
    </main>
  );
}
```

- 인터넷창에서 새로고침을 3초간 누르면 `캐시 비우기 및 새로고침`을 찾을 수 있음

### Posts.jsx

```jsx
import Category from "../category/Category";
import Author from "../author/Author";
import { Link } from "react-router-dom";

export default function Posts({ posts }) {
  console.log(posts); // undefined가 찍힘 -> 이후에 posts가 한번더 랜더링 -> 처음에 axios 통신이 제대로 안되어서 undefined값이 전달된 것
  // 처음에 undefined 던져주고 이후에 통신을 함

  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/blog/${post.id}`} className="post">
            <article>
              <img
                src={`https://github.com/weniv/react-blog/blob/react/public/assets/post-img${post.id}.jpg?raw=true`}
                alt=""
              />
              <div className="contents-wrap">
                <Category />
                <h3>{post.title}</h3>
                <Author />
                <p className="post-description">{post.summary}</p>
              </div>
            </article>
          </Link>
        </li>
      ))}
    </>
  );
}
```

- 각각의 블로그이므로 ~

- `이미지 URL 양식` : https://github.com/weniv/react-blog/blob/react/public/assets/post-img1.jpg?raw=true

### BlogDetail.jsx

```jsx
import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import axios from "axios";

export default function BlogDetail() {
  // const location = useLocation();
  // const params = useParams();
  // console.log(location);
  // console.log(params);

  const { id } = useParams();
  // paramms 받아온것을 구조분해 할당
  // http://localhost:3000/blog/1의 1을 받아온것
  // {id:1}에서 1을 구조분해할당해서 받아온 것
  console.log(id);

  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/weniv/react-blog/react/public/post${id}.json`
      )
      .then((json) => {
        console.log(json);
        console.log(json.data);
        setPost(json.data);
      });
  }, []);

  const renderingContents = [];
  let counter = 1;

  if (post !== undefined) {
    for (let content of post.contents) {
      if (content.type === "p") {
        renderingContents.push(<p key={counter}>{content.text}</p>);
        counter += 1;
      } else if (content.type === "img") {
        const url = `https://github.com/weniv/react-blog/blob/react/public${content.src}?raw=true`;
        renderingContents.push(<img key={counter} src={url} alt="" />);
        counter += 1;
      }
    }
  }

  return (
    <div>
      {post !== undefined ? (
        <div className="view">
          <div className="max-width">
            <section className="wrap-box">
              <div className="inner">
                <dl className="author-wrap">
                  <dt className="a11y-hidden">Author</dt>
                  <dd className="author">
                    <img
                      src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg"
                      alt=""
                    />{" "}
                    {post.userName}
                  </dd>
                  <dt className="a11y-hidden">Created</dt>
                  <dd className="created">2022.05.25</dd>
                </dl>
                <dl className="category">
                  <dt className="a11y-hidden">Category</dt>
                  <dd>{post.category[0]}</dd>
                  <dd>{post.category[1]}</dd>
                </dl>
                <div className="title-wrap">
                  <h2>{post.title}</h2>
                  <button className="btn-like">Like</button>
                </div>
                <hr />
                <div className="view-contents">
                  {/* 조건부 렌더링 */}
                  {renderingContents}
                </div>
                <div className="btn-group">
                  <Link to="#" className="btn-modify">
                    <span className="a11y-hidden">modify</span>
                  </Link>
                  <button type="button" className="btn-delete">
                    <span className="a11y-hidden">delete</span>
                  </button>
                </div>
                <Link to="#" className="btn-back">
                  <span className="a11y-hidden">Back</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
```

- useLocation:

- useParams: http://localhost:3000/blog/1에서 1번이라는 숫자를 useParams가 가져옴.

- 컨텐츠의 타입에 따라 각각의 태그를 생성해서 push 해주겠다는 것

### Posts.jsx

```jsx

```

### Author.jsx

```jsx
import React from "react";

export default function Author({ userName, profileImg, created }) {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author">
        <img
          src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true"
          alt=""
        />{" "}
        {userName}
      </dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">{created}</dd>
    </dl>
  );
}
```

### BlogDetail.jsx

```jsx
import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

export default function BlogDetail() {
  // const location = useLocation();
  // const params = useParams();
  // console.log(location);
  // console.log(params);

  const { id } = useParams();
  // paramms 받아온것을 구조분해 할당
  // http://localhost:3000/blog/1의 1을 받아온것
  // {id:1}에서 1을 구조분해할당해서 받아온 것
  console.log(id);

  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/weniv/react-blog/react/public/post${id}.json`
      )
      .then((json) => {
        console.log(json);
        console.log(json.data);
        setPost(json.data);
      });
  }, []);

  const renderingContents = [];
  let counter = 1;

  if (post !== undefined) {
    for (let content of post.contents) {
      if (content.type === "p") {
        renderingContents.push(<p key={counter}>{content.text}</p>);
        counter += 1;
      } else if (content.type === "img") {
        const url = `https://github.com/weniv/react-blog/blob/react/public${content.src}?raw=true`;
        renderingContents.push(<img key={counter} src={url} alt="" />);
        counter += 1;
      }
    }
  }

  return (
    <>
      <Header />
      <Banner />
      <>
        {post !== undefined ? (
          <div className="view">
            <div className="max-width">
              <section className="wrap-box">
                <div className="inner">
                  <dl className="author-wrap">
                    <dt className="a11y-hidden">Author</dt>
                    <dd className="author">
                      <img
                        src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg"
                        alt=""
                      />{" "}
                      {post.userName}
                    </dd>
                    <dt className="a11y-hidden">Created</dt>
                    <dd className="created">2022.05.25</dd>
                  </dl>
                  <dl className="category">
                    <dt className="a11y-hidden">Category</dt>
                    <dd>{post.category[0]}</dd>
                    <dd>{post.category[1]}</dd>
                  </dl>
                  <div className="title-wrap">
                    <h2>{post.title}</h2>
                    <button className="btn-like">Like</button>
                  </div>
                  <hr />
                  <div className="view-contents">
                    {/* 조건부 렌더링 */}
                    {renderingContents}
                  </div>
                  <div className="btn-group">
                    <Link to="#" className="btn-modify">
                      <span className="a11y-hidden">modify</span>
                    </Link>
                    <button type="button" className="btn-delete">
                      <span className="a11y-hidden">delete</span>
                    </button>
                  </div>
                  <Link to="#" className="btn-back">
                    <span className="a11y-hidden">Back</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
      <Footer />
    </>
  );
}
```

### Header.jsx

```jsx
import { Link } from "react-router-dom"; // a태그 대신 link 사용
import React from "react";
import imgLogo from "../../assets/Logo.svg";

export default function Header() {
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to="/">
              <img src={imgLogo} alt="My Blog" />
            </Link>
          </h1>
          <ul>
            {/* 로그인 */}
            <li className="profile-img">
              <Link to="/">
                <img
                  src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true"
                  alt="My Page"
                />
              </Link>
            </li>
            <li>
              <Link to="/" className="button">
                <img src="./assets/icon-modify-white.svg" alt="" />
                <span>Write</span>
              </Link>
            </li>
            <li>
              <button className="button white">
                <img src="./assets/icon-logout.svg" alt="" />
                <span>Logout</span>
              </button>
            </li>
            {/* //로그인 */}
          </ul>
        </div>
      </header>
    </>
  );
}
```

### reset.css

### main.css

```css
main > .max-width {
  display: flex;
  flex-direction: row-reverse;
  gap: 2.4rem;
  position: relative;
}

@media (max-width: 1024px) {
  main .max-width {
    flex-direction: column;
  }
}
```

### posts.css

```css

```

### author.css

### Header.css

```css
/* Header */
header {
  background: var(--white-color);
}
header .max-width {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 1rem 0;
}
header h1 {
  font-size: 3rem;
}
header h1 a {
  display: block;
  padding: 0.4rem;
  margin-left: -0.4rem;
}
header h1 a img {
  display: block;
}
header ul {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-img a {
  width: 4.4rem;
  height: 4.4rem;
  display: block;
  border-radius: 50%;
}
.profile-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

header .button {
  text-transform: none;
}

@media (max-width: 640px) {
  .only-pc {
    display: none;
  }
  header .button {
    width: 4.4rem;
    height: 4.4rem;
    padding: 0;
    border-radius: 50%;
  }
  header .button span {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }
}
```

### Footer.jsx

```jsx

```

### footer.css

```css

```

### banner.css

### category.css

### about.jsx

```jsx
import React from "react";
import "./about.css";

export default function About() {
  return (
    <div>
      <aside class="about">
        <h2>About Me</h2>
        <img
          src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true"
          alt=""
          class="user-profile"
        />
```

```jsx
import facebook from "../../../assets/Facebook.svg"; // 직접이미지 경로 지정하지 보다 이렇게 import해서 {facebook} 꼴로 속성값에 넣는게 좋음
```

- jsx 파일 내에서 상대경로를 읽을 수 있게 되어있지 않음
