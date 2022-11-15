import styled from "styled-components";

const DivBlue = styled.div`
color:blue;
`;

const DivRed = styled.div`
  color: red;
  `;


function App() {
  return (
    <>
      <DivBlue>hello</DivBlue>
      <DivRed>hello</DivRed>
    </>
  )
}

export default App;