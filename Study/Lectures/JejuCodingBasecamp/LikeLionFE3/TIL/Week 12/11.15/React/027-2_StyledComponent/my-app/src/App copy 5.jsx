import { useState } from "react";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

function ContentsContainer({ listName }) {
  if (listName === "one") {
    return <One />;
  } else if (listName === "two") {
    return <Two />;
  } else if (listName === "three") {
    return <Three />;
  }
}

function App() {
  const [listName, setListName] = useState("one");
  const handleCheckId = (e) => {
    setListName(e.target.id); // listName의 값을 e.target.id로 변경
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="one"
            style={listName === "one" ? { color: "red" } : { color: "black" }}
            onClick={handleCheckId}
          >
            One
          </li>
          <li
            id="two"
            style={listName === "two" ? { color: "red" } : { color: "black" }}
            onClick={handleCheckId}
          >
            Two
          </li>
          <li
            id="three"
            style={listName === "three" ? { color: "red" } : { color: "black" }}
            onClick={handleCheckId}
          >
            Three
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName}></ContentsContainer>
    </>
  );
}

export default App;
