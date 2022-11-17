import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from "react-router-dom";

function Index() {
  return <div>index</div>;
}

function Product() {
  return <div>Product 페이지입니다.</div>;
}

function ProductDetail(props) {
  const { num } = useParams();
  console.log(num);
  return <div>Product 디테일 페이지 {num}번 입니다</div>;
}

function ProductDetailNotice() {
  return <div>ProductDetailNotice 페이지입니다</div>;
}

function Cart() {
  return <div>Cart 페이지입니다.</div>;
}

function User() {
  return <div>User 페이지입니다.</div>;
}

function UserCoupon() {
  return <div>User Coupon 페이지입니다.</div>;
}

function UserQuestion() {
  return <div>User Question 페이지입니다.</div>;
}

function UserNotice() {
  return <div>User notice 페이지입니다.</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/:id/notice" element={<ProductDetailNotice />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/users" element={<User />} />
        <Route path="/users/coupon" element={<UserCoupon />} />
        <Route path="/users/question" element={<UserQuestion />} />
        <Route path="/users/notice" element={<UserNotice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
