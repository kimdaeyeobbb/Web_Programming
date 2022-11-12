interface Fruits {
  name: string;
  price: number;
  purchase(this: Fruits): () => {};
}

let mart: Fruits = {
  name: "banana",
  price: 3000,
  purchase: function (this: Fruits) {
    // this의 타입을 명시적으로 적어서 this의 타입이 가리키는 것을 지정함
    // 매개변수의 자리에 넣어주지만 가짜 매개변수이므로 실제 인자값을 받지는 않는다.
    // 실제 매개변수는 this 다음에 위치하는 매개변수이다.
    return () => {
      return this.name;
    };
  },
};

let getFruit = mart.purchase();
console.log(getFruit());

let fruitName = getFruit();
console.log(fruitName);
