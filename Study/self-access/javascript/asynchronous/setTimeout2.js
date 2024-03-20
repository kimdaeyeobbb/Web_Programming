const orderingCoffee = (menu, brewingTime) => {
  setTimeout(() => {
    console.log(`${menu}가 준비 완료 되었습니다`);
  }, brewingTime);
};

orderingCoffee("딸기바나나", 10000);
orderingCoffee("카페라떼", 5000);
orderingCoffee("아메리카노", 3000);
