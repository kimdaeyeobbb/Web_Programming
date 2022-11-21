# 22.11.21 (월)

# 메모이제이션

- 쭉 내려가다가 이미 저장된 값은 다시 연산하지 않고 확인만하고 값을 가져옴

- 랜더링 될 때 부하가 걸리는 작업이 있다면 메모이제이션을 이용해서 기억해둠

## 예시: 피보나치 순열

- f(6)

  - 1,1,2,3,5,8

- f(5), f(4),f(3)등이 반복 계산됨
  - 비효율적
  - 이를 해결하기 위해 `메모이제이션`, `DP`등을 이용

# 백엔드

- 수료 후 백엔드 (Express등)도 공부해볼 것
- 적성이 백엔드일수도 있음

<br>

# useMemo

- 메모이제이션기법을 사용해서 부하가 걸리는 작업을 처리할 수 있다

## 객체구조분해할당

```jsx
let hello = { value: { four: 40, five: 50 }, one: 10, two: 20, three: 30 };
let { value } = hello;
value; // {four:40, five: 50}
```

```jsx
let {
  value: { four, five },
} = hello; // four, five라는 변수가 생성
four; // 40
five; // 50
```

```js
let hello = {one: 10, two:20, three:30}
undefined
hello
{one: 10, two: 20, three: 30}
const {one, two} = hello // three는 안받는 것
undefined
onemptied
null
one
10
two
20
```

# provide, consumer

- provider로 값을 변경할 수 있고
- consumer로 값을 가져올 ㅅ ㅜ있다

# usecontext

- props drilling 을 피하기 위해서 사용

# usememo

- 부하가 걸리는 작업을 저장해 놓음
- 다시 렌더링 될때 다시 연산되지 않도록 함

# 리액트 네이티브

- 참고자료
- https://cheddar-brisket-dfe.notion.site/006-React-Native-fbc3dda4e21641e3b399cc7a57c1e872

## 웹뷰

```

import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'http://paullab.co.kr/about.html' }} style={{ marginTop: 20 }} />;
  }
}
```

# usecontext

- props drilling만 피하는 용도이다
- ~할 용도라면 상태관리 툴인 리덕스를 쓰는게 맞다

# Hook flow

- useLayoutEffect는 useEffect보다 먼저 실행됨. 따라서 useEffecct보다 먼저 실행하고 싶은 무엇인가가 있으면 useLayoutEffect를 사용해야 한다라는 것을 알 수 있다
- 비동기처럼 보이지만 비동기라고 설명하는 것은 적절치 않다

- 렌더링 되었을 때 useLayoutEffect return의 콜백함수가 실행된다. 그리고 useLayoutEffect가 실행된다. 그리고 나서 useEffect return의 콜백함수가 실행된다. useEffect 가 실행된다.
- 감시하는 것이 빈 배열이면 최초의 한번만 실행된다. 따라서 1번이 실행되지 않은 것이다. 감시하는 것을 넣지 않으면 렌더링시 무조건 다시 실행이 된다. (감시하는 것이 빈배열이 아닌 경우에도 마찬가지 이다)
- 리턴의 콜백함수에 정리해야할 것 (메모리 비워주는 등)을 넣어줌

# useLayoutEffectdhk useEffect의 차이

# 리턴이 실행되면 함수가 종료된다고 기억하고 있는데 어떻게 콘솔창에 또 useEffect가 찍히나요?

- 리액트 내부에서 실행시켜 줌

```js
function one() {
  console.log("one");
  return () => {
    console.log("two");
    return () => {
      console.log("three");
      return 0;
    };
  };
}
```

# useEffect

- 화면이 실행되고 나서 그려지므로 깜빡임이 발생함
- 깜빡이면 useEffect 대신 useLayoutEffect를 발생하면 된다.
- 브라우저 페인팅 스크린이 되기 전에 레이아웃이 실행되기 때문에 깜빡임이 발생하는 것이다
- 변수 감시용
- 페인팅 후에 작업을 해줘야 할 때 사용

# useLayoutEffect

- 깜빡임이 발생할 때 사용
- 페인팅 전에 작업을 해줘야 할 때 사용

# 커스텀 훅

- 면접으로 만들어본적 있냐는 질문을 받은 사람이 있음
- 공통된 기능을 뽑아서 사용해봤다고 함
- 면접 질문이 들어오면 => 버튼의 공통된 부분을 뽑아서 이벤트를 따로 핸들링하는 것을 커스텀 훅으로 만들어 봤다고 하면 됨

<br><br>

# Redux

- 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너
- 서로 다른 환경 (서버, 클라이언트, 네이티브)에서 작동함
- 리덕스는 cdn으로 생김
- 복잡도를 낮춰주기 위해서 사용
- 규모가 커지면 리덕스를 통해 생성된 store는 변수를 저장하거나 꺼내는 용도로 사용.

## 리듀서

- 바리스타에 해당. 실제로 커피를 내리는 사람. 리듀서가 변수를 조작함
- 리듀서는 만들어줘야 함
- 은행원이나 여러가지 기능을 할 수 있는 사람들이 이에 해당
- 리듀서를 통해서만 변수를 컨트롤 할 수 있음
