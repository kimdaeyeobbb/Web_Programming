/* 조건부 랜더링 */
import { useState } from "react";

/* 교재 내용 */
// user.login ? <Notice> : <Login>
// true && <h1>hello world</h1> -> h1 출력
// false && <h1>hello world</h1> -> false 출력
// true || <h1>hello world</h1> -> true 출력
// false || <h1>hello world</h1> -> h1 출력

// 예시
// newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력

// 클릭시 페이지가 바뀜
// 구조분해할당을 하기 위해서 매개변수를 {}로 감싸줘서 넣어야 함
function Contents({ listName }) {
  // 조건에 따라 다른 페이지가 랜더링됨
  if (listName === "about") {
    return (
      <div>
        about Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem itaque, esse perspiciatis maiores voluptatibus laudantium
        laboriosam vero libero nisi. Delectus vel saepe tempore, cum totam
        aperiam modi odio soluta minima?
      </div>
    );
  } else if (listName === "product") {
    return (
      <div>
        product Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem itaque, esse perspiciatis maiores voluptatibus laudantium
        laboriosam vero libero nisi. Delectus vel saepe tempore, cum totam
        aperiam modi odio soluta minima?
      </div>
    );
  } else if (listName === "cart") {
    return (
      <div>
        cart Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem itaque, esse perspiciatis maiores voluptatibus laudantium
        laboriosam vero libero nisi. Delectus vel saepe tempore, cum totam
        aperiam modi odio soluta minima?
      </div>
    );
  } else if (listName === "contact") {
    return (
      <div>
        contact Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem itaque, esse perspiciatis maiores voluptatibus laudantium
        laboriosam vero libero nisi. Delectus vel saepe tempore, cum totam
        aperiam modi odio soluta minima?
      </div>
    );
  }
  return <div>404 페이지를 찾을 수 없습니다.</div>;
}

function Navbar() {
  const [listName, setListName] = useState("about"); // 초기값이 'about'
  const handleChangeId = (e) => {
    // 들어오는 이벤트(e)를 통해 setListName을 변경시켜줄것임
    setListName(e.target.id);
  };
  return (
    <>
      <nav>
        <ul>
          {/* 가독성을 위해 개행 */}
          <li
            id="about"
            style={listName === "about" ? { color: "red" } : { color: "black" }}
            onClick={handleChangeId}
          >
            About
          </li>
          <li
            id="product"
            style={
              listName === "product" ? { color: "red" } : { color: "black" }
            }
            onClick={handleChangeId}
          >
            Product
          </li>
          <li
            id="cart"
            style={listName === "cart" ? { color: "red" } : { color: "black" }}
            onClick={handleChangeId}
          >
            Cart
          </li>
          <li
            id="contact"
            style={
              listName === "contact" ? { color: "red" } : { color: "black" }
            }
            onClick={handleChangeId}
          >
            Contact
          </li>
        </ul>
      </nav>
      <Contents listName={listName} />
    </>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
