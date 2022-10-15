/* 제네릭 클래스 사용 전 */

class StringDictionary {
  contents!: string;
}

let sc = new StringDictionary();
sc.contents = "food";

class NumberDictionary {
  contents!: number;
}

let nd = new NumberDictionary();
nd.contents = 3141592;

/* 제네릭 클래스로 표현 */

class Dictionary<T> {
  contents: T;
}
