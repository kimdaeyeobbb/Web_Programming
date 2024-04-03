const exFunc1 = <T extends number>(arg: T): T => {
  return arg.length; // Error: Property 'length' does not exist on type 'T'.
};

interface LengthType {
  length: number;
}

function exFunc2<T extends LengthType>(arg: T): number {
  return arg.length;
}

console.log(exFunc2([1, 2, 3])); // 3
