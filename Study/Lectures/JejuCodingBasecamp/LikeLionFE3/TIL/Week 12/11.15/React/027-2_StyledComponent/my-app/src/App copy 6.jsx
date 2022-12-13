import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

function ContentsContainer({ listName }) {
  switch (listName) {
    case About:
      return <About />;
      break;
    case Contact:
      return <Contact />;
      break;
    case Product:
      return <Product />;
      break;
    default:
      break;
  }
}

export default function App() {
  const [listName, setListName] = useState("Home");
  const handleCheckId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="About"
            style={listName === "About" ? { color: "red" } : { color: "black" }}
            onClick={handleCheckId}
          >
            about
          </li>
          <li
            id="Contact"
            style={
              listName === "Contact" ? { color: "red" } : { color: "black" }
            }
            onClick={handleCheckId}
          >
            contact
          </li>
          <li
            id="Product"
            style={
              listName === "Product" ? { color: "red" } : { color: "black" }
            }
            onClick={handleCheckId}
          >
            > product
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName}></ContentsContainer>
    </>
  );
}
