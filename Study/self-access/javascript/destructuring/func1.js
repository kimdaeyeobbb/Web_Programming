function func({ name, age, location }) {
  // 객체 프로퍼티를 매개변수로 전달 -> 각 매개변수에 구조분해할당
  console.log(name, age, location);
}

const person = {
  name: "키키",
  age: 20,
  location: "서울",
};

func(person);
// 키키 20 서울
