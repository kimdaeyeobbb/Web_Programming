// 리액트 요소에 대해서 파헤치기

function One(props) {
  console.log('// one 시작')
  console.log(props)
  console.log(props.children[0])
  console.log('// one 끝')
  return (
    <div>
      {/* props의 children은 array이다. 중괄호 안 array를 넣으면 콤마등이 사라지고 요소만 남는다. */}
      {props.children}
    </div>
  )
}

function Two(props) {
  console.log('// two 시작')
  console.log(props)
  console.log('// two 끝')
  return (
    <div>
      {/* children이 한개. array가 아니라는 뜻. 여러개의 array가 아닌 것 */}
      {/* array가 아닌 이유는 Two태그 하위 요소에 p태그 하나 뿐인기 때문이다 */}
      {props.children}
    </div>
  )
}

function Three(props) {
  console.log('// three 시작')
  console.log(props)
  console.log('// three 끝')
  return (
    <div>hello</div>
  )
}


function Four(props) {
  console.log('// Four 시작')
  console.log(props)
  console.log('// Four 끝')
  return (
    <div>hello</div>
  )
}

function Five() {
  return (
    <div>
      <p>Five- hello</p>
      <Six />
    </div>
  )
}

function Six() {
  return <div>Six- hello</div>
}

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        {/* 엔티티 코드 사용 */}
        {/* 로딩이 안됨 - why? */}
        {/* 루트 하나 잡아서 Object 형태로 쏴주는 꼴 */}
        <h2>app &gt; One - h2</h2>
        <p>app &gt; One - p</p>
        <Two>
          <p>app &gt; One &gt; Two - p</p>

          {/* 얘가 있으면 array가 됨 */}
          {/* <p>app &gt; One &gt; Two - p</p> */}
        </Two>

        {/* 이렇게하면 내부의 props가 비어있다 */}
        <Three />
        <Four></Four>
        <Five />
      </One>
    </div>
  );
}
export default App;
