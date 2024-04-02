type Example = {
  a: number;
  b: string;
  c: boolean;
};

type Subset<T> = {
  [K in keyof T]?: T[K];
};

type ExampleSubset = Subset<Example>;

const exampleSubset: ExampleSubset = {
  a: 1,
  b: "2",
};

console.log(exampleSubset);
