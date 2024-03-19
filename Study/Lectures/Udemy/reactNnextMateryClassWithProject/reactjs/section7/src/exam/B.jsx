import { useReducer } from 'react';

export default function B() {
  // 매개변수: 현재의 state값 & action 객체
  function reducer(state, action) {
    switch (action.type) {
      case 'INCREASE':
        return state + action.data;
      case 'DECREASE':
        return state - action.data;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  // dispatch -> trigger 역할 함수 (상태 변화 trigger) -> 여기서는 state의 변화를 유발하지만 직접 처리하지는 않음. action 객체로 어떠한 상태의 변화가 일어나는지 전달.
  // reducer -> state를 변경하는 함수 (state를 변경하는 로직을 담고 있는 함수)

  return (
    <div>
      <h4>{count}</h4>
      <button
        onClick={() => {
          dispatch({
            type: 'INCREASE',
            data: 1,
          });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'DECREASE',
            data: 1,
          });
        }}
      >
        감소
      </button>
    </div>
  );
}
