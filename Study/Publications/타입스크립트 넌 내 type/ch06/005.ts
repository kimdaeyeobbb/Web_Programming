interface Menu {
  name: string;
  price: number;
  onsale: boolean;
}

function Order(item2) {
  console.log(item2, "주문합니다.");
}

Order("핫초코"); // 핫초코 주문합니다.
Order(5000); // 5000 주문합니다.
Order(true); // true 주문합니다.
