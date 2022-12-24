# 22.12.23 특강

- 지난 원범님 특강 내용을 리액트로 바꿔서 그대로 가져다가 쓰면 기능구현 할 수 있음

- 리액트에서 state, effect가 무엇인지 다시 파악할 것 (기능구현에 있어 필요한 사항)

- 리액트가 요청 어떻게 보내고 받는지까지 알 필요가 없음

# 환경설정

```bash
npx create-react-app try-react
```

# 중첩되어있는것 어떻게 하나요?

- "테스트" 대신 내가 만든 jsx함수를 가져옴
- 내부에 props라는 것이 있음
- props에는 class가 있는데, 우리가 넣지 않은 children이 생김
- children을 열어보면 SomeComp의 return이 있음. return이 props의 children으로 전달되는 것

# 이것을 JSX 문법으로 컴포넌트를 다시 만들어보자

- 리액트는 자바스크립트 결과값을 어떻게 그려주는 것일까?

  - type: "div"가 보이는가? 이 type: "div"를 보고 "div"를 그려줌.

- JSX에서 세팅해주는 값들이 함수의 파라미터로 들어감

- 컴포넌트이름: 함수이름. 나머지의 값들은 props임

# state

- 상태란 변하는 값이고 변하는 값들을 관리하는 것이 상태관리임

# 상태관리

- 여기있는 값들을 다른곳에서 사용하고 싶어요 => state 끌어올리기
- 컴포넌트는 JSX로 작성하면 객체가 된다.
- 객체는 함수를 실행하면 등장한다.

# 초기화

- useState 내부에는 컴포넌트의 상태를 가지고 있음
- 내부에 초기화가 되었는지, 업데이트가 되었는지를 기억하고 있는 놈이있음

# 값이 바뀔때마다 로그를 찍어주고 싶어요

- 이 경우에 useEffect를 사용함

# hook flow

- 함수형 컴포넌트의 훅 플로우
- 마운트에서 초기화를 함
- 여기의 render => root.render의 render임.
- 여기서 화면을 그려주는 것은 web paint screen임
- react update dom:
- 마운트: 최초에 그려지는것
- 업데이트: 값이 바뀐 경우 최신화된 화면을 그려주는 것
- 이 경우에만 run effect가 일어남

# 값이 바뀌는 지점

- 컴포넌트를 그려주는 함수가 새로 실행이 되었을 경우에 값이 바뀜

# 상태관리

- 값을 state로 바로 넣어놓은 것 (value = {num1}부분)

```jsx
<input
  type="number"
  name="num1"
  value={num1}
  onChange={(e) => (num1 += Number(e.target.value))}
/>
```

# props로 값을 받으면 useState가 필요없는 이유?

- 알아내서 기재하기

# 컴포넌트 state

- state가 어디에 있어야 할지를 찾기

# 연관된 부모가 없을 경우 부모컴포넌트를 생성해서 state를 넘겨주기

- ㅁ

# props를 덜 귀찮게 내려주는 방법?

- ㅁ

# 상태관리 ?

- 리액트야 root.render()해줘!
- 리액트야 값이 바뀌면 새로 그려줘! 하는 것
- 결국 context api, redux, recoil 모두 동일하다

# 페이로드

-

# 불변성

# useSelector

- 상태를 선택해서 가져오겠다
- 내부에 함수가 들어감.

```jsx
const { num1, num2 } = useSelector((상태) => 상태);
// 혹은

const num1 = useSelector((상태) => 상태.num1);
const num2 = useSelector((상태) => 상태.num2);
// 형태로 사용
```

# dispatch

- 보내다

<br><br>

# 리덕스 툴킷

## 설치 명령어

```bash
npm install @reduxjs/toolkit
```

- 리덕스 툴킷은 slice 개념을 도입하였음

## 사용하기

- 리덕스는 아래의 예시와 달리~

```jsx
const initialState = { num1: 0, num2: 0 };
const 계산기은행원 = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    setNum1: (state, action) => {
      state.num1 = action.값;
      // 이렇게 넣어주면 리덕스 툴킷이 이전의 값을 알아서 관리해줌
      // 리덕스 툴킷에서 불변성을 알아서 잘 지켜줌
    },
    setNum2: () => {},
  },
});
```

## api

- [링크](https://test.api.weniv.co.kr/mall/)

## 감귤마켓

- useState, useEffect만으로도 감귤마켓을 다 만들 수 있다 (홋은 여기에 useContext를 추가하거나)

# 참고자료

- [redux-thunk](https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts)

- [원범님 깃헙 링크](https://github.com/weniv/frontend-school-22-12-23)

<br><br>

# useEffect

- 마운트될때 한번(초기화 될때 한번) , 값이 업데이트 될때 1번 => 크게 2번으로 나뉨
- 마운트 되었을 때만 쓸 수 있음.
