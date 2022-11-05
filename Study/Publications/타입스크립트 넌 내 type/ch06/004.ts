// lemonade가 Menu 형식의 속성(name, price, onsale)을 모두 가지고 있지만 각 속성의 타입이 일치하지 않는 경우
interface Menu2 {
  name: string;
  price: number;
  onsale: boolean;
}

const lemonade2: Menu2 = {
  name: "레몬에이드",
  price: 4500,
  onsale: 1,
};
