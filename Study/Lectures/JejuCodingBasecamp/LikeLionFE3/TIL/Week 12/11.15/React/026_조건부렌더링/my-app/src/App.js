import React from "react";
import styled, { css } from 'styled-components'

const OneButton = styled.button`
    color: red;
`;

const TwoButton = styled(OneButton)`
    font-size: 30px;
`;
//  얘는 red와 30px 둘다를 가지고 있음


// 일반 컴포넌트를 꾸며주기 위해서는 className = {props.className}을 작성해야 한다.
const Hello = (props) => {
  return <button className={props.className}>hello world</button>
}

const ThreeButton = styled(Hello)`
    font-size: 30px;
`;


const App = () => {
  return (
    <div>
      <OneButton>hello world</OneButton>
      <TwoButton>hello world</TwoButton>
      <Hello />
      <ThreeButton />
    </div>
  );
};

export default App;