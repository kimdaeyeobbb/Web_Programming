class Plate1<T> {
  public Contents!: T; // Contents에 넘겨줄 타입
}

let menu1 = new Plate1<string>(); // string 타입의 menu 객체 생성
menu1.Contents = "Beef";

let nth1 = new Plate1<number>(); // [1]
nth1.Contents = 3;
nth1.Contents = "Pork"; // error

console.log(menu1.Contents);
console.log(nth1.Contents);
