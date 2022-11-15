import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset} /* 가져온 reset코드를 여기다가 사용 */
  span{
    color:red;
  }
`

function Two() {
  return (
    <section>
      <h2>hello Two</h2>
      <span>hello</span>
    </section>
  )
}


function One() {
  return (
    <section>
      <h2>hello One</h2>
      <span>hello</span>
    </section>
  )
}

function App() {
  // reset 사용해서 확인해보기
  console.log('reset 시작')
  console.log(reset)
  console.log('reset 끝')
  console.log()
  return (
    <>
      <GlobalStyle />
      <h1>hello world</h1>
      <span>hello world</span>
      <One />
      <Two />
    </>
  );
}

export default App;