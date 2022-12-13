import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset css 적용 */
  ${reset}
  span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`;

/* 스타일드 컴포넌트를 이용해서 스타일 적용하기 */

const ContentDiv = styled.div`
  // 전체를 감싸는 컨테이너의 스타일
  margin: 40px;
  border: 1px solid black;
`;

const ContentH2 = styled.h2`
  color: ${({ name }) => (name === "zzza" ? "red" : "blue")}
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <ContentDiv>
      <ContentH2 name="zzza">Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        excepturi eius omnis beatae reiciendis a, placeat sed explicabo qui
        similique aspernatur maxime mollitia aliquam libero voluptates?
        Laboriosam rem nobis modi.
      </p>
    </ContentDiv>
  );
}
export default App;
