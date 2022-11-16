// 참고사이트: https://mui.com/material-ui/react-card/
function Card(props) {
  return (
    <section>
      <img src="http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg" alt="" />
      <h2>One - TITLE</h2>
      <h3>{props.title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo, quae. Consequatur.</p>
      {props.children}
    </section>
  )

}

function One() {
  return (
    <>
      <a href="#">SHARE </a>

      <a href="#">LEARN MORE</a>
      <hr />
    </>
  )
}

function Two() {
  return (
    <hr />
  )
}

function Three() {
  return (
    <>
      <a href='#'>SHARE</a>
      <hr />
    </>
  )
}


function App() {
  return (
    <>
      {/* 여기를 카드로 감싸는 것이 힌트 */}
      <Card title="One (props이용)"><One /></Card>
      <Card title="Two (props이용)"><Two /></Card>
      <Card title="Three (props이용)"><Three /></Card>
    </>
  );
}

export default App;