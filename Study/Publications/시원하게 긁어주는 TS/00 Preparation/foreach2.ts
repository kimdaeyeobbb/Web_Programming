function printall2(arr: number[]) {
  // number[] 배열받도록 지정
  arr.forEach((item) => {
    console.log(item);
  });
}

printall2([1, 2, 3]);
printall2(1, 2, 3); // error
