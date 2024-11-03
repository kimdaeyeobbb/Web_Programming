const user = {
  name: "크크",
  sayHello() {
    const inner = () => console.log(this.name);
    inner();
  },
};

user.sayHello(); // 크크
