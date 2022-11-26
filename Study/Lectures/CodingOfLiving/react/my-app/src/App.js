import { useState } from 'react';  // 이 훅은 리액트에서 기본 제공하는 함수


function Header(props) {
  // console.log(`props: ${props}, props.title: ${props.title}`)
  return (
    <header>
      <h1>
        <a href='/' onClick={(event) => {
          event.prevetDefault();
          props.onChangeMode();
        }}>
          {props.title}
        </a>
      </h1>
    </header>
  )
}

function Article(props) {
  return (
    <article>
      <h2>
        {props.title}
      </h2>
      {props.body}
    </article>
  )
}


function Nav(props) {
  const lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}


function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      {/* 이벤트 함수 안에서 form 태그에 소속되어 있는 네임이 */}
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        // event.target => 이벤트가 발생한 태그 (form 태그)
        // event.target.title => form 태그 내 title을 가져오는 것
        // event.target.title.value => form 태그 내 title의 값을 가져옴

        const body = event.target.body.value;

        props.onCreate(title, body);
        // 이렇게 가져온 title과 body를 create 컴포넌트의 사용자에게 공급하면 됨. 사용자는 create 컴포넌트로부터 어떻게 submit 정보를 공급받을까? => onCreate 
        // Create 컴포넌트가 props를 전달받고, props를 통해 onCreate 함수를 호출함
      }}>
        <p><input type="text" name="title" placeholder='title' /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
        {/* submit 버튼을 클릭했을 때 , js코드가 실행되는 아주 좋은 타이밍은 form태그에 onSubmit이라는 prop을 제공하는 것임*/}
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title);   // props로 들어온 title을 state로 갈아탐
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        {/* value ={props.title} => props를 통해 들어온 값을 title의 value값으로 넣음. */}
        <p><input type="text" name="title" placeholder="title" value={title} onChange={(event) => {
          // console.log(event.target.value)
          // 값을 입력 했을 때, 그 값이 무엇이냐를 알고 싶음. 
          // 이벤트 함수 안에서 trigger한 태그를 찾는 것은 tag이고 그것의 값은 value임. 
          setTitle(event.target.value);
        }} /></p>
        {/* body 값으로 props.body를 주면 본문이 나타남  */}
        <p><textarea name="body" placeholder="body" value={body} onChange={event => {
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update"></input></p>
      </form>
    </article>
  )
}


export default function App() {
  // const _mode = useState('WELCOME');  // 상태가 리턴되게 만듦
  // const mode = _mode[0];   // _mode의 0번쨰 원소 => 상태의 값을 읽어옴
  // const setMode = _mode[1];   // 1번쨰 원소인 setMode를 통해서 _mode의 값을 바꿀 수 있다
  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null);   // 현재값이 없으므로 초기값이 없다는 뜻인 null로 설정. state값은 nav를 클릭했을 때 바뀌도록 했음.
  const [nextId, setNextId] = useState(4);  // state의 초기값은 topics의 원소값 중 
  const [topics, setTopics] = useState([   // topics는 읽을 때 사용, setTopics는 topics를 바꿀 때 사용하기 위해 읽기와 쓰기 인터페이스를 추가함
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);

  let content = null;   // 선언 및 초기화
  let contextControl = null;   // 맥락적으로 노출이 되는 UI. READ 모드일 때에만 나오게 만들예정

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB MODE"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      // console.log(topics[i].id, id)
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <><li><a href={"/update/" + id} onClick={(event) => {
      event.preventDefault();  // 클릭을 막음
      setMode('UPDATE');  // setMode로 업데이트로 이동하게 만듦
    }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={() => {
        const newTopics = []
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            // topics[i]와 현재 선택된 id가 같지 않다면
            newTopics.push(topics[i])
          }
        }
        setTopics(newTopics);
        setMode('')  // 토픽을 삭제하고 나서는 상세보기로 갈 수 없음. welcome으로 가게 만듦듦
      }} /></li>
    </>
    // contextControl이 READ 모드일때에만 나오게 만듦
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {  // 컴포넌트를 이용하는 이용자가 생성버튼이 눌렸을 때 후속작업을 할 수 있는 인터페이스를 제공하고 싶음
      // onCreate의 prop에 함수를 전달하면 create 버튼이 눌렸을 때 이 함수가 실행될 것이라고 사용자에게 고지
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics]   // 복제본 생성
      newTopics.push(newTopic)
      setTopics(newTopics)  // 원본 데이터인 topics와 새로 들어온 복제본이 같은지 판단을 해서 다르다면 컴포넌트를 다시 랜더링 해주게 됨
      setMode('READ')   // 글의 상세페이지로 이동 
      setId(nextId);   // 지금 우리가 추가한 set아이디를 nextid로 지정 
      setNextId(nextId + 1);  // 다음에 글을 추가할 때를 대비 
    }}></Create>
  } else if (mode === 'UPDATE') { // 업데이트 모드일 경우
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      // console.log(topics[i].id, id)
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      // 업데이트 컴포넌트로 title과 body의 값이 흘러들어감.
      const newTopics = [...topics]
      const updatedTopic = { id: id, title: title, body: body }
      for (let i = 0; i < newTopics.length; i++) {  // 기존의 topics에서 아이디가 일치하는 것을 찾는 과정
        newTopics[i] = updatedTopic;
        break;
      }
      setTopics(newTopics)
    }}></Update>// 업데이트 컴포넌트를 출력
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME')   //값을 바꿀 때 setMode 사용
      }} />
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode("READ")   // 값을 바꿀 때 setMode 사용
        setId(_id)
      }} />
      {content}   {/* 내부의 값 */}
      <ul>

        <li><a href="/create" onClick={event => {
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a></li> {/* 주소값을 create로 설정 */}
        {/* <li><a href="./update">Update</a></li> 얘 대신 아래에 contextControl 기재 */}

        {/* contextControl이라는 변수가 Read로 들어갔을 때 보여지는 UI가 담겨있음 */}
        {contextControl}
      </ul>
    </div>
  )
}