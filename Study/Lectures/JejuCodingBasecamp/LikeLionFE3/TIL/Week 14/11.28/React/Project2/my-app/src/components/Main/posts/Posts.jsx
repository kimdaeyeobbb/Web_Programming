import Category from "../category/Category";
import Author from "../author/Author";
import { Link } from "react-router-dom";
import "./posts.css";

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
                <Category category={post.category} />
                <h3>{post.title}</h3>
                <Author
                  userName={post.userName}
                  profileImg={post.profileImg}
                  created={post.created}
                />
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
