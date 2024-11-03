const user = {
  name: "chulsoo",
};

const admin = {
  name: "younghee",
};

function sayHello() {
  console.log(this.name);
}

// 별개의 객체에서 동일한 함수를 사용함
user.bow = sayHello;
admin.bow = sayHello;

// this는 앞의 객체를 참조하므로 this값이 달라짐
user.bow(); // chulsoo
admin.bow(); // younghee

user["bow"](); // chulsoo
user["bow"].call(admin); // younghee
