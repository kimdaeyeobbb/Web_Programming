const user = {
  name: "gildong",
  age: 17,

  sayHello() {
    console.log(this.name);
    // this: 메서드 호출시 사용된 객체를 가리킴

    console.log(user.name);
  },
};

user.sayHello(); // gildong
