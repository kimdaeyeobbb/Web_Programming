class Greeter<T> {
  // Greeter Of T (T가 문자열이면 문자열 관련 정보를 받음)
  greeting: T;
  constructor(message: T) {
    this.greeting = message;
  }

  greet() {
    return this.greeting;
  }
}

var greeter = new Greeter<string>("Hello, world");
var button = document.createElement("button");

button.textContent = "Say Hello";
button.onclick = function () {
  alert(greeter.greet());
};

document.body.appendChild(button);

// 변환된 결과는 제네릭이라는 키워드가 없으므로 JS는 일반적인 JS의 프로토타입을 사용함 + TS는 넘겨주는 타입이 명확하지만 JS는 ANY 타입임(모든 값을 다 받는 타입으로 변환이 됨)
// 프로그램을 세련되게 작업하고 싶을 경우 제네릭을 사용함
