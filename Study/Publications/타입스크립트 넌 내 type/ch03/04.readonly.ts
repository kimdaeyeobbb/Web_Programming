let myArr: readonly string[] = ["가", "나", "다", "라"];
console.log(myArr);
myArra[0] = "A"; // error

let stoneArr: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];
console.log(stoneArr); // [ 1, 2, 3, 4, 5, 6 ]
console.table(stoneArr);

stoneArr.push(7); // error
