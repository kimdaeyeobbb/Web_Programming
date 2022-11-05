interface Menu6 {
  name: string;
  price: number;
  onsale: boolean;
}

function Order6(item: Menu6) {
  console.log(item, "주문합니다.");
}

Order6("핫초코"); // 'string' is not assignable to parameter of type 'Menu'.
Order6(5000); // 'number' is not assignable to parameter of type 'Menu'.
Order6(true); // 'boolean' is not assignable to parameter of type 'Menu'.
