import styled from 'styled-components'

const One = styled.div`
  color: red;
  &::after{
    contents: 'cm'
  }
`
// css 에서는 다음과 같이 작성했어야 함
// a { /* style 1 */ }
// a::after { /* style 2 */ }

function App() {
  return (
    <>
      <One>10</One>
    </>
  )
}

export default App;