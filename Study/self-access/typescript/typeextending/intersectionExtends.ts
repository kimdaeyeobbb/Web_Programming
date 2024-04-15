interface Item {
  name: string;
  price: number;
  stock: number;
}

interface CartItem extends Item {
  qty: number;
}

const cartItem: CartItem = {
  name: "Milk",
  price: 10,
  stock: 6,
  qty: 2,
};

type Item2 = {
  name: string;
  price: number;
  stock: number;
};

type CartItem2 = Item2 & {
  qty: number;
};

const cartItem2: CartItem2 = {
  name: "Milk",
  price: 10,
  stock: 6,
  qty: 2,
};

// 유니온 타입과 교차 타입을 사용한 새로운 타입은 오직 type 키워드로만 선언할 수 있다.
