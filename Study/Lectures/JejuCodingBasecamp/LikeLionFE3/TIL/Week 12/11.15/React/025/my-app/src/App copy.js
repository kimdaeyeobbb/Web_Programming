import './App.css';

function App() {
    return (
        <Hello name="licat" />
    );
}

function Hello(props) {
    const name = props.name;
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    /* i가 들어오면 return 값으로 <p>안녕, {name} {i}호</p> */
    // const numComponentsArray = num.map(i => <p>안녕, {name} {i}호</p>)
    // console.log(numComponentsArray)
    const numComponentsArray = num.map(v => <p key={v.toString()}>안녕,{name} {v}호</p>)

    // key를 인덱스로 잡는 것은 권장하지 않습니다.
    // const numComponentsArray = num.map((v, i) => <p key={i}>안녕,{name} {v}호</p>)

    return (
        <div>
            {/* 콤마를 없애고 요소를 밖으로 꺼내줍니다. 이것을 리스트로 렌더링 한다고 얘기합니다. */}
            {/* {['hello', 'world', 3, 4, 5]} */}

            {/* {numComponentsArray} */}
            {/* 드물지만 이런경우가 생길 수 있으므로 권장하지 않는다는 얘기입니다. */}
            {/* {numComponentsArray.concat(numComponentsArray)} */}


            {/* 에러 발생, 컴포넌트 안에서 리스트를 랜더링할 때 하나의 문자열처럼 함쳐져서 나타남 (콤마를 없애고 요소를 밖으로 꺼내줌)
      따라서 리스트로 랜더링 되었을 때에는 고유한 키값을 넣어줘야 함.
      키값을 넣어주는 이유는 리액트에서 랜더링 작업을 진행했을 때 어떤 요소의 변동사항이 존재한다면 그 요소만 새로 그려주기 위함임.
      key가 없다면 하나의 요소가 변경이 되어도 array에 담긴 요소를 모두 다시 그려줌 */}
            {/* <numComponentsArray /> */}
            {/* //   <h1>안녕, {name} 1호</h1>
    //   <h1>안녕, {name} 2호</h1>
    //   <h1>안녕, {name} 3호</h1>
    //   <h1>안녕, {name} 4호</h1>
    //   <h1>안녕, {name} 5호</h1>
    //   <h1>안녕, {name} 6호</h1>
    //   <h1>안녕, {name} 7호</h1>
    //   <h1>안녕, {name} 8호</h1>
    //   <h1>안녕, {name} 9호</h1>
    //   <h1>안녕, {name} 10호</h1> */}
        </div>
    )
}

export default App;