/* 인터페이스 */
interface PersonI {
  name: string;
  age?: number;
}

const personi = {} as PersonI; // 빈 객체를 Person 타입으로 지정
personi.name = "Lee";
personi.age = 20;
personi.address = "Seoul"; // error


/* 타입 별칭 */
type PersonT = {
    name: string
    age?:number
}

const persont = {} as PersonT
persont.name = "Lee"
persont.age = 20
persont.address = "Seoul";  // error


/* 타입 별칭 지정- 원시값, 유니온 타입, 튜플 */
type StrT = "Lee"  // 원시값(문자열 리터럴)으로 타입 지정
type UnionT = string|null;  // 유니온 타입으로 타입 지정
type NameT = "Lee"|"Kim"   // 문자열 유니온 타입으로 타입 지정 
type NumT = 1|2|3|4|5;  // 숫자 리터럴 유니온 타입으로 타입 지정
type objT = {a:1} | {b:2|};   // 객체 리터럴 유니온 타입으로 타입 지정
type FuncT = (() => string) | (() => void);   // 함수 유니온 타입으로 타입 지정
type ShapeT = Square| Rectangle | Circle;   // 인터페이스 유니온 타입으로 타입 지정
type TupleT = [string, boolean];   // 튜플로 타입 지정
const t: Tuple = ['', '']   // error

/* Inteface VS type alias
- 인터페이스는 extends 또는 implements 될 수 있다
- 타입별칭은 extends 또는 implements 될 수 없다

- 상속을 통해 확장이 필요한 경우, 타입 별칭보다는 인터페이스가 유리하다.
- BUT) 인터페이스로 표현할 수 없거나, 유니온 또는 튜플을 사용해야하는 경우, 
타입별칭을 사용하는것이 유리하다

*/