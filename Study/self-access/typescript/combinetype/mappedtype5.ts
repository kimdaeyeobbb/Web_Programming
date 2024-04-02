// 키와 값이 있는 객체를 정의하는 타입을 받아서 그 객체의 부분 집합을 만족하는 타입으로 반환
type Subset<T> = {
  [K in keyof T]?: T[K];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

const nameCheck: Subset<Person> = { name: "Jane" };
console.log(nameCheck); // { name: 'Jane' }

const ageCheck: Subset<Person> = { age: 24 };
console.log(ageCheck); // { age: 24 }

const locationCheck: Subset<Person> = { location: "Korea" };
console.log(locationCheck); // { location: 'Korea' }
