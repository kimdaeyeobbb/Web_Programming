// key remapping

type Getter<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type lazyPerson = Getter<Person>;

const person: lazyPerson = {
  getName: () => "John",
  getAge: () => 30,
  getLocation: () => "USA",
};

console.log(person.getName());
console.log(person.getAge());
console.log(person.getLocation());
