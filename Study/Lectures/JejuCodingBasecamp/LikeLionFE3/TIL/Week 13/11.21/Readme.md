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
