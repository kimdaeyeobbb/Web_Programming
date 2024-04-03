type AnyType = any[];
const anyArray: AnyType = [1, "2", true];

type GenericType<T> = T[];
const genericArray: GenericType<number> = [1, 2, 3];
const genericArray2: GenericType<string> = ["가", "나", "다"];
