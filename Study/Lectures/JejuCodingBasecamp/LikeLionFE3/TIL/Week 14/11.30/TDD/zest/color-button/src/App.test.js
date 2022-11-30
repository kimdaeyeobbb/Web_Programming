import { fireEvent, render, screen } from '@testing-library/react';   // 리액트 테스팅 라이브러리에서 render, screen을 불러옴
import App from './App';

// test => 자스민의 describe와 같은 역할 
test('버튼이 제대로 동작하고 있습니까?', () => {

  render(<App />);   // render -> jsx를 인자로 받음. 이를 받아서 렌더함수에 돌리면 가상돔을 생성함. 

  const button = screen.getByRole('button', { name: 'change to blue!' })
  // 버튼의 역할을 하는 요소를 찾을 것인데, 내부에는 change to blue !라고 쓰여있어야 함 (이때는 배경이 붉은색. 클릭하면서 푸른색으로 바뀜)

  expect(button).toHaveStyle({ backgroundColor: 'red' });
  // 버튼의 요소의 backgroundColor가 red이길 기대하고 있음 

  fireEvent.click(button)
  // 클릭해서 내장되어 있는 ~
  // document에 있다고 확인한 버튼을 넣어줌. 실행하고 나서 기대해야하므로 expect 사용

  expect(button).toHaveStyle({ backgroundColor: 'blue' })   // 아까는 빨간색 버튼 클릭했으니까 파란색으로 바뀌기를 기대함   &  텍스트도 change to red ! 로 바뀌기를 기대 
  expect(button.textContent).toBe('change to red!')   // 버튼 안에 있는 텍스트가 change to red ! 여야 한다
});



// // test => 자스민의 describe와 같은 역할 
// test('renders learn react link', () => {

//   /* 기본내용 */
//   render(<App />);   // render -> jsx를 인자로 받음. 이를 받아서 렌더함수에 돌리면 가상돔을 생성함. 
//   const linkElement = screen.getByText(/learn react/i);  // screen => 생성된 가상돔에 (랜더함수로 그려준 것에) 접근하기 위한 객체 
//   expect(linkElement).toBeInTheDocument();   // document안에 있어야함을 기대함. linkElement - 앵커 (App.js 참고)
// });