import ProductList from "./componenets/ProductList"
import ShoppingCart from "./componenets/ShoppingCart"

export default function () {
    return (
        <main>
            <h1>쇼핑몰 홈페이지</h1>
            <p>제대로 나오는가?</p>
            <ProductList />
            <ShoppingCart />
        </main>
    )
}


// console.log(productData);

// // const app = (
// //         <main>
// //             <ProductList />
// //             <ShoppingCart />
// //         </main>
// // );

// const app = <h1>hello world</h1>;