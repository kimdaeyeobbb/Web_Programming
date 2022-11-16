import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom"

// Main - www.hojun.com
// ProductDetails - www.hojun.com/product/1
// Cart - www.hojun.com/cart
// Buy - www.hojun.com/buy

function Index() {
  return <h2>Index 페이지</h2>
}

function ProductDetails() {
  const location = useLocation();
  // const path = location.pathname.split('/')[2]
  const { params } = useParams()

  const value = useParams()
  console.log(value)

  console.log(location)
  console.log(location.pathname.split('/'))

  return <h2>ProductDetails {params} 페이지</h2>
}

function Cart() {
  return <h2>Cart 페이지</h2>
}

function Buy() {
  return <h2>Buy 페이지</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        {/* 콜론은 뒤에 있는값이 변경될 수 있는 값임을 나타냄 */}
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
      </Routes>
    </BrowserRouter>
  )
}