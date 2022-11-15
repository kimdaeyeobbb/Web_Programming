import styled from 'styled-components'

const ContentsDivOne = styled.div`
  color:red;
`
const ContentsDivTwo = styled.div`
  color:green;
  /* props가 들어오면 props.size를 반환 */
  /* styled의 div가 메서드이기 때문에 가능한 것임 */
  /* styled.div라는 메서드를 ContentsDivTwo라는 메서드로 사용할 수 있다
  -> function ContentsDivTwo(props){ ...}으로 선언한 메서드와 같은 것 */
  font-size: ${(props) => props.size + "px"};
`


function App() {
  return (
    <>
      <ContentsDivOne>hello</ContentsDivOne>
      <ContentsDivTwo size={32}>world</ContentsDivTwo>
    </>
  )
}

export default App;