
import './App.css';



function Nav(props) {
  const lis = [
    // <li><a href="/read/1">html</a></li>,
    // <li><a href="/read/2">css</a></li>,
    // <li><a href="/read/3">js</a></li>,
  ]

  props.topics.map(el => lis.push(<li key={el.id}>
    <a id={el.id} href="'/read/'+el.id" onClick={(event) => {
      event.preventDefault();   // a태그 클릭시 동작하지 않게 만듦
      props.onChangeMode(event.target.id);    // a태그에 id={el.id} 처럼 아이디값을 부여해주는게 id값을 얻어오는 가장 쉬운 방법임
      // 이벤트 함수안에서 a태그의 id속성을 얻어내기 위해 event객체이용
      // event.target => 이벤트를 유발시킨 태그를 가리킴 => a태그를 지칭 => a태그가 가진 id값을 가져오고 싶으면 event.target.id라고 쓰면 됨 
    }}>{el.title}</a></li>))
  return (
    <nav>
      <ol>
        {/* 이렇게 적어주면 리액트에 의해 배열에 있는 것들이 하나씩 꺼내짐 */}
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Header(props) {
  console.log("props: ", props, " props.title: ", props.title)
  return <header>
    {/* 여기 a태그는 순수한 html이 아니다. 유사 html이다. 여기에 코드를 작성하면 리액트 개발 환경이 최종적으로 브라우저가 이해할 수 있는 HTML로 전환시켜주므로 기존의 문법과 동일하지 않음  */}
    {/* 내부에 함수를 적어주고, a태그를 클릭했을 때 해당 함수가 호출되는 것임 */}
    {/* a태그 클릭시 페이지 reload가 일어나지 않도록 하기 위해서는 함수가 호출될 때 리액트는 event를 함수의 파라미터로 주입해줌 event객체는 이벤트 상황을 제어할 수 있는 여러가지 상황이 들어있음*/}
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();  // a태그가 동작하는 기본동작을 방지함. => 클릭해도 reload가 일어나지 않음 
      props.onChangeMode();   // props.onChagenMode => onChangeMode의 속성값인 함수를 가리킴. ()를 씌워줘서 함수를 실행시키는 것 
    }}>{props.title}</a></h1>
  </header>
}


function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]
  return (
    <div>
      <Header title="REACT" onChangeMode={function () {
        alert("Header")
      }}></Header>
      {/* 중괄호로 감싸면 문자열이 있는 그대로 들어감 */}
      {/* onChagenMode 내부에 prop이 전달됨.  */}
      <Nav topics={topics} onChangeMode={(id) => { alert(id) }}></Nav>

      <Article title="welcome" body="hello, web"></Article>
      <Article title="hi" body="hello, world"></Article>
    </div>
  );
}

export default App;
