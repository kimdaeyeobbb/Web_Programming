// 깃헙에 올릴때 빌드해서 올려야 깃헙 url로 바뀌어서 올라감

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Main - www.hojun.com
// ProductDetails - www.hojun.com/product/1
// Cart - www.hojun.com/cart
// Buy - www.hojun.com/buy

function Index() {  // http://localhost:3000/
  return <h2>Index 페이지</h2>
}

// http://localhost:3000/product/1 로 들어가서 확인

function ProductDetails(props) {
  // console.log(props)
  const location = useLocation();
  // console.log(location)

  // pathname의 split한값중 2번째 것을 가져옴
  const path = location.pathname.split('/')[2]
  return <h2>ProductDetails {path} 페이지</h2>
  // http://localhost:3000/product/100 처럼 입력해서 페이지 확인
}

// http://localhost:3000/cart 로 들어가서 확인
function Cart() {
  return <h2>Cart 페이지</h2>
}

// http://localhost:3000/buy 로 들어가서 확인
function Buy() {
  return <h2>Buy 페이지</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* url 구성 - path에 들어가는 것 확인 */}
        <Route path="/" element={<Index />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
      </Routes>
    </BrowserRouter>
  )
}