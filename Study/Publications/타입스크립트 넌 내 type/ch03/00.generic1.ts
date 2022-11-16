/* 제네릭 클래스 사용 전 */

class StringDictionary2 {
  contents!: string;
}

let sc2 = new StringDictionary2();
sc2.contents = "pi"; // ok

class NumberDictionary2 {
  contents!: number;
}

let nd2 = new NumberDictionary2();
nd2.contents = 3141592; // ok

console.log(sc2.contents);

class BooleanDictionary {
  contents!: boolean;
}

let bd = new BooleanDictionary();
bd.contents = true; // ok

console.log(bd.contents);
