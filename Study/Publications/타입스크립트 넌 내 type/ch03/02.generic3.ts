class Plate<T> {
  public Contents!: T;
}

let message = new Plate<string>();
message.Contents;
message.Contents = "Beef";

let nth = new Plate<number>();
nth.Contents = 3;

console.log(message.Contents);
console.log(nth.Contents);
