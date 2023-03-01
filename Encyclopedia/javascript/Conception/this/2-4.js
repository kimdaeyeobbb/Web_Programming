const b = {
  name: "danny",
  sayName() {
    console.log(this === b);
  },
};
b.sayName();

const bf = b.sayName;
bf(); // false (this가 윈도우가 되어버림)
