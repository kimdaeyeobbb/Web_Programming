import { useEffect, useState } from "react";

const UseEffect = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  // deps 빈 배열 -> useEffect 나 컴포넌트가 DOM에 마운트 될 때 딱 한 번만 실행됨
  // 따라서 컴포넌트가 렌더링될때마다 새로이 데이터를 가져오는 등의 낭비는 하지 않게 됨
  return (
    <>
      <div>{posts && posts.map((el: object) => <li>{el.title}</li>)}</div>
    </>
  );
};

export default UseEffect;
