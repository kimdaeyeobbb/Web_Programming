type TypeC = ReturnType<() => boolean>;

function func1(args: { a: number; b: boolean; c: string }): void {}
type TypeD = ReturnType<typeof func1>;
