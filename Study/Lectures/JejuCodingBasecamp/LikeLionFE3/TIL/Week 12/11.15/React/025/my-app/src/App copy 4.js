const productList = {
  products: [
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ],
};

// function Solution(productList) {
//   let result = [];
//   for (const item of productList) {
//     result.push(
//       <section key={item.id}>
//         <h2>
//           {item.id.toString()[2]}

//           {item.title}
//         </h2>

//         <p>{item.price}원</p>
//       </section>
//     );
//   }
//   return result;
// }

export default function App() {
  return (
    <div>
      {productList.products.map((el, idx) => (
        //전체를 감싸고 있는것에만 key를 주면 됨
        <section key={el.id}>
          <h2>
            {idx + 1} {el.title}!
          </h2>
          <p>{el.price}원</p>
        </section>
      ))}
    </div>
  );
}
