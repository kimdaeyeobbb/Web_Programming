// import React from 'react'
import { useState } from 'react'


function Header(props) {
  console.log(`props: ${props}, props.title: ${props.title}`)
  return (
    <>
      <header>
        <h1>
          <a
            href="/"
            onClick={function (event) {
              event.preventDefault();   // a태그가 동작하는 기본동작을 방지함 => 클릭해도 reload가 일어나지 않음
              props.onChangeMode();
            }}>
            {props.title}
          </a>
        </h1>
      </header>
    </>
  )
}


function Nav(props) {
  console.log(props.topics)
  const lis = [];

  props.topics.map((el) =>
    lis.push(
      < li key={el.id}>
        <a
          id="{el.id}"
          href="'/read/'el+id"
        // onClick={(event) => {
        //   event.preventDefault();   // a태그 클릭시 동작하지 않게 만듦
        //   props.onChangeMode(event.target.id);
        //   console.log("event.target: ", event.target)
        //   console.log("event.target.id: ", event.target.id)
        //   console.log("props.onChangeMode(event.target.id): ", props.onChangeMode(event.target.id))
        // }} 
        >{el.title}</a>
      </ li >
    ))

  return (
    <nav>
      <ol>
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




export default function App() {
  // const _mode  = useState("initial");   // 상태가 리턴되게 만듦
  // const mode = _mode[0];  // _mode의 0번째 원소 => 상태의 값을 읽어온다.
  // const setMode = _mode[1];   // 1번째 원소인 setMode를 통해서 _mode의 값을 바꿀 수 있다

  const [mode, setMode] = useState("initial")

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]

  let content = null;   // 선언 및 초기화
  let contextControl = null;
  // 맥락적으로 노출이 되는 UI, READ 모드일 때 에만 나오게 만듦

  if (mode === "initial") {
    content = <Article title="initial" body="initial mode"></Article>
  } else if (mode === "read") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(`topics[i].id = ${topics[i].id}`)
      console.log(id)

      content = <Article title="{title}" body="{body}"></Article>
      contextControl = (
        <li>
          <a
            href={"/update" + id}
            onClick={(event) => {
              event.preventDefault();
              setMode("UPDATE")   // setMode를 통해 업데이트로 이동하게 만듦
            }}>Update</a>
        </li>
      )
    }
  } else if (mode === 'create') {
    // 컴포넌트를 이용하는 이용자가 생성버튼이 눌렸을 때 후속작업을 할 수 있는 인터페이스를 제공하려고 함
    // onCreate의 prop에 함수를 전달하면 create 버튼이 눌렸을 때 이 함수가 실행될 것이라고 사용자에게 고지
    const newTopic = { id: nextId, title: _title, body: _body }
    const newTopics = [...topics]  // 복제본 생성
    newTopics.push(newTopic)
    setTopics(newTopics)  // 원본 데이터인 topics와 새로 들어온 복제본이 같은지를 판단해서
    // 다르다면 컴포넌트를 다시 렌더링해줌
    setMode('read')
    setId(nextId);  // 우리가 추가한 set아이디를 nextid로 지정
    setNextid(nextId + 1);  // 다음에 글을 추가할때를 대비함 
    content = <Create onCreate={(_title, _body) => {
      // 컴포넌트를 이용하는 사용자가 
    }}
    }
}

return (
  <>
    <Header
      title="리액트 헤더"
      onChangeMode={function () {
        alert("리액트 헤어 알림!");
      }
      } />
    <Nav
      topics={topics}
      onChangeMode={(id) => {
        setMode("read");   // 값을 바꿀 때에는 setMode를 사용함
      }}
    />

    {content}
  </>
)
}