const user = {
  name: "lion",
  age: 10,

  sayHello() {
    console.log(this.name);
  },
};

const admin = user;
admin.sayHello();

user = null;
admin.sayHello();
