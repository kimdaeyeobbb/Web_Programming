import { useState, useEffect } from 'react'

export default function App() {
  // 수업여부 - 수업중이라는 값이 들어간 변수
  // set수업여부 - 수업여부를 변화시킬 수 있는 함수
  const [수업여부, set수업여부] = useState('수업중')
  const [잔고, set잔고] = useState(100000)

  const handleZoomOut = (e) => {
    set수업여부('수업종료')
  }

  if (수업여부 === '수업종료' && 잔고 >= 20000) {
    alert('카페로 출발!')
    set잔고(90000)
    // 카페에서 10000원을 쓰고와서 잔고가 90000원이 됨
    // set잔고를 만나서 App의 맨위로 올라가서 다시 실행시키고 다시 90000원 세팅이 되는 과정이 반복됨 (문제 발생)
  }

  return (
    <div>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}