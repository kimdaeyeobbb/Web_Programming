interface Menu7 {
  name: string;
  price: number;
  onsale: boolean;
}

function Order7(item: Menu7) {
  if (item.onsale === true) {
    console.log(item.name, "주문합니다.");
    console.log(item.price, "원입니다.");
  }
}

Order7({ name: "레몬에이드", price: 4500, onsale: true });
// 레몬에이드 주문합니다.
// 4500 원입니다.
Order7({ name: "레몬에이드", price: 4500 }); // 에러(onsale 속성 누락)
