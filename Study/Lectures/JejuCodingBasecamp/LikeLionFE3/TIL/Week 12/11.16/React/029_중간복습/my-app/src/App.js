import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import shoppingCart from "./assets/icon-shopping-cart-white.svg";
import styled, { css } from "styled-components";
// import shoppingCart from './assets/icon-shopping-cart-white.png'   // 이미지파일은 이렇게 사용 (그냥 아래에서 불러오는 것이 아님)
// import shoppingCart from './assets/icon-shopping-cart-white.jpg'   // 이미지파일은 이렇게 사용 (그냥 아래에서 불러오는 것이 아님)

// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled components styled-reset

const GlobalStyle = createGlobalStyle`
  /* reset 코드 + 커스텀 reset 코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임 */
  ${reset}

  span {
    color: red;
    font-size: 12px;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  button{
    border: none;
    cursor: pointer;
  }

  *{
    box-sizing: border-box;
  }
`;

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
  width: 1260px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  /* 전체크기 중 너비가 1260 */
  width: 1260px;
  margin-right: 60px;
`;

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

// 이미지 크기 조정해서 figma와 일치시키기
const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`;

const IconShoppingCart = styled.a`
  background: #000 url(${shoppingCart}) no-repeat center / 40px 40px;
  /* 달러와 중괄호 표시를 같이 안써주면 shoppingCart라는 문자가 그대로 들어가서 적용됨 */
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`;

// 데이터 받아오는 것을 함수로 구현
// fetch 사용
// 컴포넌트화 하지 않을 것이므로 소문자 사용
// react는 fetch보다 axios와 궁합이 더 잘맞음
async function requests() {
  // fetch가 promise로 반환이 될 것이므로 async로 만들어줌
  // request가 promise임
  const response = await fetch("http://test.api.weniv.co.kr/mall");
  const data = await response.json();
  return data;
}

function ProductList() {
  // 에러나는 과정
  // const [productListData, setProductListData] = useState([]); // 여기서 렌더링을 다시함
  // // 해당변수: productListData, 해당 변수를 리턴할 수 있는 함수: setProductListData
  // requests.then((productData) => setProductListData(productData));
  // // requests.then 부분: 실행 ,  setProductListData(productData) 부분: 변경
  // // fetch가 완료되어서 setProductListData가 productData를 다시 호출 ~~~~~~~
  // // 해당변수와 해당 변수를 리턴할 수 있는 함수를 가지고 데이터를 변경시킴킴
  // // 여기서 리소스가 낭비되고 있으므로 다시 변경해야함 (useState를 가지고 처리해보기)

  // console.log(productListData); // 코드가 계속 내려감 (무한반복이 일어나기 때문임.)

  /* 정상작동 과정 */
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true); // false로 바뀌면 더이상 여기로 들어가지 않음

  if (dataLoadSwitch) {
    requests().then((productData) => {
      setProductListData(productData);
      setDataLoadSwitch(false);
    });
  }

  // 콘솔창에 찍어서 확인하는 과정
  // const productListData = request(); // 이렇게 적어주면 못씀 (promise이므로). 응답이 늦게오면 다시 랜더링을 해야한다는 이슈가 존재함
  // console.log(productListData);   // 위와 같이 실행하면 promise임
  // return <p>hello world</p>;

  /* 데이터는 productListData에 존재 -> map을 돌면 됨. map을 돌 때에는 */
  return (
    <ContainerProductList>
      {/* 요소가 제대로 들어왔나 확인하는 과정 */}
      {/* {productListData.map((item) => console.log(item))} */}

      {productListData.map((item) => (
        <ProductListItem
          key={item.id}
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      ))}
    </ContainerProductList>
  );
}

// 구조분해할당 사용
function ProductListItem({ productName, price, thumbnailImg }) {
  return (
    <ItemProductList>
      <ImgProduct
        src={"http://test.api.weniv.co.kr/" + thumbnailImg}
        alt={productName}
      />
      <p>{productName}</p>
      <span>하트</span>
      <p>{price}</p>
    </ItemProductList>
  );
}

function ShoppingCart() {
  return <IconShoppingCart href="#">쇼핑카트</IconShoppingCart>;
}

function App() {
  return (
    <ContainerMain>
      <GlobalStyle />
      {/* 일부러 문제가 발생할 수 있는 코드를 일차적으로 작성 */}
      <ProductList />
      <ShoppingCart />
    </ContainerMain>
  );
}
export default App;
