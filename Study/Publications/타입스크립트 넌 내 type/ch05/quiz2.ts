class Dog {
  name;
  age;
  gender;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

let dog10 = new Dog("멍멍이", 10, "남");
console.log(dog10);

let dog17: Dog = new Dog("왈왈이", 17, "여");
console.log(dog17);
