function func1(args: { a: number; b: boolean; c: string }): void {}

type TypeA = Parameters<() => boolean>;
type TypeB = Parameters<typeof func1>;
