const products = [
  { id: 1, product: "Laptop", price: 7200 },
  { id: 2, product: "Headphones", price: 6000 },
  { id: 3, product: "Mouse", price: 2000 },
  { id: 4, product: "keyboard", price: 4200 },
  { id: 5, product: "desktop", price: 10800 },
];

// price가 높은 순으로 정렬된 List를 반환
const ascendingSort = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

console.log(ascendingSort(products));

// price가 6000 이상인 제품들의 인덱스를 찾아, 해당 제품들의 이름을 배열로 반환
const basePrice = 6000;
const findProduct = (products, basePrice) => {
  return products.reduce((acc, cur, idx) => {
    if (cur.price >= basePrice) {
      acc.push(products[idx].product);
    }
    return acc;
  }, []);
};

console.log(findProduct(products, basePrice));
