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
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            {/* components array로 생성 */}
            <Posts posts={posts} />
          </ul>
          {isLogin ? <About /> : <></>}
        </div>
      )}
    </main>
  );
}
