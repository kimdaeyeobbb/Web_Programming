const user = {
  name: "John",
  age: 30,
};

// user에 인사능력 부여
// 객체 프로퍼티에 할당된 함수를 메서드라고 부름
user.sayHello = () => {
  console.log("아령하세요!");
};

user.sayHello(); // 아령하세요!

// 메서드 단축구문
const user2 = {
  sayHello: function () {
    console.log("안녕하세요!");
  },
};

user2.sayHello(); // 안녕하세요!

const user3 = {
  sayHello() {
    console.log("안녕");
  },
};

user3.sayHello(); // 안녕
