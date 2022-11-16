/* Array 제네릭 클래스 사용하기 */
// Array 클래스의 제네릭 버전은 Array<T> 형태로 표현함
// Array of T 형태로 읽음
// T는 특정 형식을 받아들이는 형식 매개 변수임
// 형식 매개 변수에 지정된 값에 따라 해당 객체의 성질이 결정됨

// 1) 제네릭 클래스의 인스턴스를 생성하려면 Array<T> 형태로 Array<string>으로 문자열만 다룰 수 있는 객체(Object)를 생성할 수 있다
let stack: Array<string> = []; // stack객체의 타입은 Array<string> , Array Of String. string만 담을 수 있는 그릇이 생성됨

// 2) Array<string>으로 선언된 stack 객체는 문자열만 입력 받을 수 있음 (Array Of String으로 만들었기 때문임) => 다른 타입 입력시 컴파일러에서 에러 발생시킴
stack.push("First"); // push 메서드는 문자열만 입력 가능하게 됨
stack.push("Second"); // push 메서드는 문자열만 입력 가능하게 됨

// 3) 마찬가지로 pop() 메서드의 결과도 문자열로 바로 출력이 됨
console.log(stack.pop()); // 문자열로 바로 출력 -> "Second"
console.log(stack.pop()); // 문자열로 바로 출력 -> "First"

// 어찌됐건 하나의 객체를 만들고 문자열만 저장하게 해주고 싶다. 할 경우 Array Of String의 형태로 배열을 만들어서 사용을 해줄 수 있음

// 일반 클래스인 Araay와 제네릭 클래스인 Array<T>는 하는 일이 동일하다.
// 다만, Array 클래스는 데이터를 object로 다루고(any타입으로, 모든 데이터 형식이 다 들어옴) Array<T> 클래스는 T로 지정한 데이터만 다룬다.
//  object로 만들어진 데이터를 실제 사용하려는 string과 같은 형식으로 사용하려면 중간에 변환의 과정을 거치기 대문에 이 부분에서 추가적인 작업을 진행하는 비용이 발생한다.
// 그래서 정확한 데이터 형식을 사용할 수 있는 Array<T>와 같은 제네릭 클래스의 사용을 권장한다.
// (이와 같이 제네릭 객체를 사용하게 되면 어떤 형식 변환과정없이 문자열만 지정해놨으면 문자열만 입력받고 문자열만 출력하면 됨)
