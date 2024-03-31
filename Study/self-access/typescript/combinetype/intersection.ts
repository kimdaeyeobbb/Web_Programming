type Item = {
  id: number;
  name: string;
  price: number;
};

type Amount = {
  amount: number;
};

type ItemInfo = Item & Amount;

const item: ItemInfo = {
  id: 1,
  name: "item1",
  price: 1000,
  amount: 5,
};

console.log(item);
