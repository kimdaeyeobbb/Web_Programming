/* 제네릭 클래스 사용 전 */
class AccountStrings {
    names: string,
    tags: string
}

let ass = new AccountStrings();
// as.tag = 1234; // error
ass.tags = "zzzzzzzzzzzz";

class AccountNumbers{
    tags:number;
}

let ann = new AccountNumbers();
ann.tags = 1234;


/* 제네릭 클래스  Plate Of T => Plate<T>
제네릭: 포괄적인 것. 상표를 붙이지 않는 것. 빈 박스에 상표를 뭘 붙이느냐에 따라서 제네릭한 것 (넘겨주는 값에 따라..)


*/

/* 제네릭 클래스로 표현 */
class Account1<T>{  // T에 넘겨주는 타입에 따라서 Account 클래스의 타입이 결정됨 
    tags: T;   // 넘겨준 T의 타입으로 선언해주는 것이 제네릭 클래스 
    // 넘겨주는 값에 따라 tags가 변경된다.
    // 멤버의 타입은 넘겨주는 값에 따라 달라짐 (융통성이 좋은 것)
}

let a11 = new Account1<string>();
a11.tags = "안녕하세요";
var a22 = new Account1<number>();
a22.tags = 123456;
let a33 = new Account<boolean>();
a33.tags = true;

// 제네릭은 AccountStrings, AccountNumbers 등을 따로 만들어서 string을 담고 number를 담는것이 아니라 제네릭 클래스를 사용하게 되면 Cup Of T => Cup<T>
// T는 넘겨주는 타입에 따라서 접시클래스의 성질이 결정된다. (넘겨주는 타입: string, number, 언터페이스 등)

// 융통성이 좋아진다. 제네릭 사용전에는 문자열만, 숫자만 다루는 것들을 따로따로 만들어서 개발
// 제네릭 사용시 타입만 명시해주면 되므로 융통성이 좋다.