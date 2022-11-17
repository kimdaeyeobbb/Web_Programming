import { useState, useEffect } from 'react'

export default function App() {
  // 결혼여부 - 수업중이라는 값이 들어간 변수
  // set결혼여부 - 수업여부를 변화시킬 수 있는 함수
  const [결혼여부, set결혼여부] = useState('미혼')
  const [잔고, set잔고] = useState(100000)
  const [결혼대상, set결혼대상] = useState('대상없음')

  // 요구사항: 소개팅 버튼을 눌렀을 때 / 결혼여부 -> 소개팅중 / 잔고 -> 500000 / 결혼 대상 -> 미정

  const handle소개팅 = (e) => {
    set결혼여부('소개팅중')
    set잔고('500000')
    set결혼대상('미정')
  }

  // 퀴즈2: 잔고가 500000원 미만이고 and 결혼대상이 미정이시면 부모님께서 용돈 200만원을 주심
  useEffect(() => {
    if (결혼대상 == '미정' && 잔고 < 500000) {
      set잔고(잔고 + 200000)
    }
    alert(잔고)
  }, [결혼대상, 잔고])

  return (
    <div>
      <button onClick={handle소개팅}>소개팅 Go</button>
      <p>{결혼여부}</p>
      <p>{잔고}</p>
      <p>{결혼대상}</p>
    </div>
  )
}