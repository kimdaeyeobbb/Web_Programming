/* 제네릭 클래스 사용 전 */

class StringDictionary {
  contents!: string;
}

let sd = new StringDictionary();
sd.contents = "pi"; // ok
sd.contents = 1234; // error

class NumberDictionary {
  contents!: number;
}

let nd = new NumberDictionary();
nd.contents = 3141592; // ok

class BooleanDictionary {
  contents!: boolean;
}

let bd = new BooleanDictionary();
bd.contents = true; // ok
