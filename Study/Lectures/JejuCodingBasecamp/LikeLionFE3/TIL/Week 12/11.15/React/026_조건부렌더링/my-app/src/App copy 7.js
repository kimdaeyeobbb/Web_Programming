import styled from 'styled-components'

// One은 컴포넌트이다 (스타일된)
const One = styled.div`
  color: red;
`

const Two = styled.div`
  color: green;
  font-size: ${(props) => props.size + 'px'}
`

const Three = styled.div`
  color: ${(옵션) => 옵션.option === '하나' ? 'red' : 'pink'}
`

const Four = styled.div`
  color: 'red'
`
const DivRed = styled.div`
  color: red;
  font-size: ${({ size }) => size + "px"};
  border: ${({ border }) => border.join(" ")};
`;

const Five = styled.div`
  color: skyblue;
  ${(border) => border}
`


function App() {
  return (
    <>
      <One>hello</One>
      <Two size={32}>world</Two>
      <DivRed border={["1px", "solid", "blue"]} size={32}>
        안녕
      </DivRed>
      <Five border='border: 1px solid yellow'>korea</Five>
    </>
  )
}

export default App;