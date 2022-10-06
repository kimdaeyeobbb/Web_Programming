interface IUser {
  name: string;
  age: number;
  isValid: boolean;
}
let userArr: IUser[] = [
  {
    name: "Neo",
    age: 85,
    isValid: true,
  },
  {
    name: "Lewis",
    age: 52,
    isValid: false,
  },
  {
    name: "Evan",
    age: 36,
    isValid: true,
  },
];

console.log(userArr);

console.table(userArr);
