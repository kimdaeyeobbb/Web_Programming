function arrays<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
console.log(arrays<number>(arr1)); // 3

const arr2 = ["a", "b", "c"];
console.log(arrays<string>(arr2)); // 3

const arr3 = [false, true, true];
console.log(arrays<boolean>(arr3)); // 3
