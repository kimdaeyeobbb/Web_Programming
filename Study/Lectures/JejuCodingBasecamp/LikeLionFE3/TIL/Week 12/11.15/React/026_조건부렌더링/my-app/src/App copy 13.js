import React from "react";
import styled, { css } from 'styled-components'

// css 방식과 비교해볼것 
const OneButton = styled.button`
  color: red;
`;

const TwoButton = styled(OneButton)`
  font-size: 30px;
`;
// 얘는 red와 30px 둘 다를 가지고 있음


const App = () => {
  return (
    <div>
      <OneButton>hello world</OneButton>
      <TwoButton>hello world</TwoButton>
    </div>
  );
};

export default App;