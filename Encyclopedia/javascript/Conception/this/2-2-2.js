// 메서드 호출

let food = {
  name: "chicken",
  price: 20000,
  foodName: function () {
    console.log("음식명: ", this.name);
  },
};

food.foodName();

// this를 통해 자신이 속한 객체 참조 가능
// 메서드 내부에서 this 키워드르 사용해서 객체에 접근
