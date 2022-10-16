// 읽기 전용 배열
let strArr: readonly string[] = ["가", "나", "다", "라"];
console.log(strArr); // ["가", "나", "다", "라"];
// strArr[0] = "A"; // error

// 읽기 전용 배열
let numArr: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];
console.log(numArr); // [ 1, 2, 3, 4, 5, 6 ]

numArr.push(7); // error
