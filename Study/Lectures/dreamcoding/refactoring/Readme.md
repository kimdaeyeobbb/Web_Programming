# ch01

## 리팩토링을 배워야하는 이유?

- 나쁜 코드의 냄새를 맡을 수 있음
- 더러운 코드를 꺠끗하게 개선할 수 있음
- 처음부터 깨끗한 코드로 작성해나갈 수 있음

## 리팩토링이란?

- 소프트웨어의 겉보기 동작은 그대로 유지한 채, 코드를 이해하고 수정하기 쉽도록 내부 구조를 변경하는 기법
- 결과나 행동의 변화없이 코드의 구조를 재조정하는 것
- 소프트웨어 기능을 보존하면서 설계하거나 구조 및 구현을 개선하는 것

## 리팩토링의 목표

- 코드 및 전체 소프트웨어 아키텍쳐 의 복잡성 감소
- 가독성 향상
- 유지 보수성을 개선
- 확장성을 높임

## 유의할 점

- 기능 추가를 위해 새로운 코드를 추가하거나 기능을 변경하면 안됨

## 리팩토링은 왜 하는것인가?

- 개발 초기 단계에서부터 완벽하게 시스템을 설계하는 것은 어렵다.
- 프로그램의 요구사항은 꾸준히 변경될 수 있다
- 더럽고 복잡한 코드는 이해하기도 어렵다
- 이해하기 어려운 코드로 인해 예상하지 못한 에러가 발생할 수 있다.
- 복잡한 코드는 유지보수가 어렵다.

<br>

- 소프트웨어 설계가 좋아짐

  - 따라서 모든 코드가 언제나 고유한 일을 수행하는것을 보장하게 됨
  - 그러므로 이해해야할 코드의 양이 줄어듦

- 소프트웨어를 이해하기가 쉬워짐
- 가독성이 좋아지게되면 버그 수정이 쉬워짐

  - 이로인해 코드가 하는 일을 깊이 이해할 수 있게됨

- 그러므로 프로그래밍 속도를 높일 수 있다

## 리팩토링은 언제 하는게 좋을까?

### 단계별 구성

#### 프로젝트 시작 단계

- 좋은 디자인 패턴으로 코드를 처음부터 깔끔하게 작성해나가는게 좋다
- 하지만 이 방법은 쉽지 않으므로 기능 구현을 위한 코드를 우선적으로 작성하고나서 테스트 코드를 작성하는게 좋다

- 향후 이 테스트 코드를 토대로 리팩토링 해보도록 하자

- `코드 리뷰`를 통해 코드를 이해하기 쉽게 만들자
- `기능 추가`를 통해 기능을 쉽게 추가하게 만들어보자 (재사용성, 모듈성 고려)

##### 3의 법칙

- 비슷한 일을 세 번째 하게되면 리팩토링을 하게 된다

#### 프로젝트 유지보수 단계

- `버그수정`: 버그를 검증할 수 있는 테스트 코드 작성
- `기능 추가` & `디펜던시 마이그레이션`: 기존의 기능들에 대한 테스트 코드 확인 -> 코드를 이해하기 쉽게 변경 -> 기능 추가의 단계로 진행

#### 오래된 레거시 프로젝트의 단계

- 이떄 `버그 수정 및 기능을 추가`해야하는 경우: 수정이 필요한 모듈 및 코드에 대해 한정적으로 테스트를 추가하도록 하자. -> 리팩토링 -> 코드 수정 및 기능 추가의 단계로 진행할 것

- 때로는 아예 코드를 갈아엎고 새로짜는게 빠를수도 있다

<br>

## 리팩토링의 중요한 포인트

- 야그니: You Ain't Gonna Need It
- 꺠끗하게, 변경이 쉽게, 유지보수가 용이하게 만들자

<br>
<hr>
<br>

# ch02

# ch03

## 코드에서 나는 나쁜 악취

- 기이한 이름

  - 코드의 이해력과 가독성을 떨어뜨림

- 중복 코드

  - 실수와 에러가 발생할 확률이 높아진다

- 긴 함수

  - 이해하기 어렵고 재사용성이 떨어진다

- 긴 매개변수 목록

  - 사용하기가 어렵다.

- 전역 데이터

  - 다른 곳에서 누군가가 쉽게 변경하고, 프로그램이 예상하지 못한 방향으로 흘러갈 수 있다

- 가변 데이터

  - 변경이 가능한 데이터이다. 내가 전달받은 데이터가 언제 어디서 수정되었는지 예측하기가 어려우므로 프로그램이 어떤 방향으로 흘러갈지 예측하기가 어려워 진다.

- 뒤엉킨 변경 (Divergent Change)

  - 다양한 이유로 수정을 해야함

- 산탄총 수술 (Shotgun Surgery)

  - 모듈이 다른 모듈과 뒤엉키게 되면 내부수정이 다른 외부의 함수 및 클래스와 연관되어서 같이 모든것을 수정해야하는 경우

- 기능 편애 (Feature Envy)

  - 내부적으로 상호작용이 일어나지 않고, 다른 기능 및 모듈과 상호작용이 일어나서 기능편애가 일어나면 산탄총 수술이 일어나게 됨

- 데이터 뭉치 (Data Clumps)

  - 데이터끼리 한꺼번에 여러곳에서 함꼐 쓰이는 경우

- 기본형 집착 (Primitive Obession)

  - 관련된 코드가 여기저기에 퍼져있음

- 반복되는 switch 문

  - 하나라도 놓치게 되면 버그로 이어짐
  - 반복되는 switch문 대신 다형성을 이용하는것이 좋다

- 반복문

  - 절차형 코드이므로 side effect가 발생할 수 있음

- 성의없는 요소 (Lazy element)

- 추측성 일반화 (Speculative Generality)

- 임시 필드 (Temporary Field)

  - 특정한 상황에서만 사용되므로 이해도가 떨어질 수 있음

- 메시지 체인 (Message Chains)

  - 내부 로직이 노출될 수 있음

- 중개자 (Middle Man)

  - 단순 전달만하는 불필요한 코드인지 확인해볼 필요가 있다 (ex) 클래스)

- 내부자 거래 (Insider Trading)

  - 모듈 사이의 데이터 거래 -> 결합도가 높아짐

- 거대한 클래스 (Large Class)

- 서로 다른 인터페이스의 대안 클래스들

  - 서로 대체가 불가능하므로 재사용성이 떨어짐

- 데이터 클래스

  - 데이터 뭉치와 유사함

- 상속 포기

  - 불필요한 부모의 내용이 많은 경우

- 주석

<br>

# ch04

## 테스트 구축하기

- 모든 테스트를 자동화하고 그 결과까지 스스로 검사하게 만들자

<br>

# ch5

<br>

# ch6

## 기본적인 리팩토링

### 프로그래밍에서 가장 중요한 3가지 요소

#### 1️⃣ 변수

#### :two: 함수

#### 3️⃣ 모듈

- 변수나 함수를 바꾸는것이 `low-level refactoring`
- 모듈을 바꿔나가는 것이 `high-level refactoring`

<br>

## 6-2) 함수 포인트 정리

### 변수

- 변수명은 의미있게 작성하자

```js
let a = 0;
// a: 변수이름, 식별자
```

### 함수

- 특정한 일을 수행하는 코드의 집합
- 함수는 프로그램을 이루는 가장 기본적인 단위이다
- 함수를에 의미있는 이름을 부여하면 높은 가독성을 부여할 수 있다
- 이로 인해 내부 구현사항을 파악하지 않더라도 함수명만으로 작동이 어떻게 될 것임을 예측할 수 있다

<br>

## 6-3) 함수 추출하기

### 함수가 한 화면에 다 담기지 않는 경우

- 이 함수가 무슨일을 하는지 한눈에 다 담을 수 없음
- 지역변수는 사용하는 곳과 가까운곳에 기재하는게 좋다.

### 변경전

```js
export function printOwing(invoice) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
```

### 변경후

```js
export function printOwing(invoice) {
  printBanner();

  let outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

function printBanner() {
  // 배너를 출력
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);

  // let result = 0;
  // // 총 가격을 계산
  // // calculate outstanding
  // for (const o of invoice.orders) {
  //     result += o.amount;
  // }
  // return result
}

function recordDueDate(invoice) {
  // 지금 날짜를 계산
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  // 개선한 세부사항 출력
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
```

<br>

## 6-4)

### extract와 inline을 구분하자

#### before

```js
// 예제 1
export function rating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}

// 예제 2
function reportLines(customer) {
  const lines = [];
  gatherCustomerData(lines, customer);
  return lines;
}

function gatherCustomerData(out, customer) {
  out.push(["name", customer.name]);
  out.push(["location", customer.location]);
}
```

#### after

- 함수를 재사용하지 않는다면 inline으로 사용하자
- 긴 코드는 함수로 만들고 함수를 가독성있게 만들어서 유지보수성을 높이자

```js
// 예제 1
export function rating(driver) {
  return dvr.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}
```

<br>

## 6-5)

### 변수

- 값을 저장하는 공간

<br>

## 6-6) 변수 추출하기

- 긴 표현식을 잘게 잘라서 의미있는 이름을 붙여주자 (가독성 향상)

### before

```js
export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}
```

### after

```js
export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - discount + shipping;
}
```

<br>
<hr>
<br>

### before

```js
export class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    );
  }
}
```

### after

```js
export class Order {
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return this.basePrice - this.discount + this.shipping;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}
```

<br>

## 6-7) 변수 인라인하기

### before & after

- 변수를 추출할 필요가 없는 경우 inline으로 사용하면 됨.

```js
export function isDeliveryFree(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}
```

<br>

## 6-8) 이름짓기 포인트 정리

- 변수는 구체적일수록 의미있는 이름을 지어주자
- 관사는 붙이지 않는다
- 함수는 무엇을하는지 잘 나타낼 수 있어야 함
- (무엇인가를 수행하는 역할을 하는것이 대부분이므로 함수명은 보통 동사형으로 지음)
- (함수명은 명령형으로 작성함)

<br>

## 6-9) 변수 이름 바꾸기

### before

- 극단적인 예시
  - `a`가 뭘 나타내는지 알 수 없다

```js
let a = height * width;

const cpyNm = "애플";

let tpHd = "제목없음";
let result = `<h1>${tpHd}</h1>`;
```

<br>

## 6-10) 함수 선언 바꾸기

- 함수를 이해하기 쉽고, 호출하기 쉽도록 변경하는 작업
- 필요로하는 것만 받아와서 재사용성 높임

<br>

## 6-11) 함수의 매개변수 포인트 정리

- 매개변수의 개수는 최대 3개를 넘지 않는게 좋다.

- 따라서 연관있는 데이터 구조 (함수, 클래스 등) 하나로 묶어서 매개변수로 넣어주는게 좋다. => 호출할 때 실수를 줄일 수 있다.

<br>

## 6-12) 매개변수 객체 만들기

- 매개변수를 하나의 객체로 묶는게 좋다

```js
export function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

const result = readingsOutsideRange(
  station,
  operationPlan.temperatureFloor,
  operationPlan.temperatureCeiling
);

console.log(result); // 필터링된것만 출력
```

- 변경 후

```js
export function readingsOutsideRange(station, range) {
  return station.readings.filter(
    (r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling
  );
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operationPlan = {
  temperatureFloor: 51, // 최소
  temperatureCeiling: 53, // 최대
};

const result = readingsOutsideRange(
  station,
  operationPlan.temperatureFloor,
  operationPlan.temperatureCeiling
);

console.log(result); // 필터링된것만 출력
```

- 2차 변경 (클래스 제작)

```js
export function readingsOutsideRange(station, range) {
  return station.readings.filter(
    (r) => r.temp < range.min || r.temp > range.max
  );
}

export class NumberRange {
  #min;
  #max; // private field
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(
  station,
  operationPlan.temperatureFloor,
  operationPlan.temperatureCeiling
);

console.log(result); // 필터링된것만 출력
```

- 3차변경 (데이터를 처리하는 로직이 클래스내에 포함되게 만듦 & 이해하기 어려운 부분을 함수로 빼기)

```js
export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

export class NumberRange {
  #min;
  #max; // private field
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(
  station,
  operationPlan.temperatureFloor,
  operationPlan.temperatureCeiling
);

console.log(result); // 필터링된것만 출력
```

<br>

## 6-13) 캡슐화 포인트 정리

### 캡슐화

- 내부구현사항을 숨기고, 외부에서 필요한 데이터들만 공개

- 예시

```js
let owner = {
  name: 'danny';
} // 수정이 가능하므로 좋지않음
```

- 객체보다 모듈이나 클래스를 사용해서 캡슐화하자

<br>

## 6-14) 변수 캡슐화하기

<br>

## 6-15) 여러 함수를 클래스로 묶기

- 여러 함수를 변환함수로 묶기보다는 클래스로 묶는것이 트렌드임

<br>

## 6-16) 여러 함수를 변환 함수로 묶기

<br>

## 6-17) 함수 쪼개기 포인트 정리

<br>

# 7 캡슐화

## 7-1)

- 내부 구현사항을 숨기고 필요한 사항만 공개함
- 모듈/클래스 형태로 캡슐화를 할 것
- 데이터를 변경하고 사용하는 코드를 감시할 수 있는 유일한 통로임

### 함수 단위로 캡슐화 구현

- 함수의 이름을 통해 역할 파악, 매개변수명을 통해 전달해야 하는 값을 파악

### 캡슐화의 원칙

- 함수 하나당 하나의 역할을 담당해야 함
- 모듈/클래스 => 한 개당 하나의 책밍을 가지도록 만들어야 함
- 모듈 하나당 하나의 도메인(학생, 주문, 전화번호 등)을 가지도록 해야 함

<br>

## 7-2) 불변성 포인트 정리

### 불변성 (Immutability)

- 불변성은 병렬 프로그래밍을 하지 않아도 프로그래밍 전반적으로 중요함
- 변경될 수 없는 성질
- Mutable (변할 수 있음) (=> 키로 인해 값을 변경시킬 수 있는 값) 과 반대되는 말
- 한번 만들어진 객체나 컬렉션을 변경시킬 수 없고 업데이트 시킬 수 없음을 뜻함
- 가능하면 불변성을 가질 수 있도록 프로그래밍하는 것이 중요함

### Mutable

- 버그,오류의 상징
- 가능하면 변할 수 없는 전역변수, 컬렉션, 레코드로 만드는게 중요함

<br>

## 7-3) 레코드 캡슐화하기

### 레코드

- 보통 key & value로 구성
- js에서는 객체 리터럴({})을 이용해서 ~
- key & value로 구성된 map이나 딕셔너리도 레코드로 볼 수 있음
- 레코드로 모듈이나 클래스로 캡슐화해두고 어떤 api가 있는지는 필요에 따라 인터페이스를 통해 외부에 공개

```js
const organization = { name: "Acme Gooseberries", country: "GB" };

organization.name = "Dream Coding";
console.log(organization.name); // 속성에 접근
console.log(organization.country); // 속성에 접근
```

- 프로그래밍 언어에서는 데이터에 바로 접근하기보다 캡슐화를 통해 어떤것들에 접근할 수 있는지를 명시해주는게 좋음

```js
class Organization {
  #name;
  #country; // 외부에서 두 변수를 읽을 수 없도록 만듦

  constructor(data) {
    // 필요한 인자를 생성자에서 받음
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  // getter와 setter를 통해서 읽고 쓰도록 만듦

  get country() {
    return this.#country;
  }

  set country(value) {
    // if (value=== ~) // 주어진 value에 따라 달라지도록 감시할 수 있는 통로를 만들수도 있음
    this.#country = value;
  }

  get rawData() {
    return { name: this.name, country: this.country }; // 요구사항에 따라서 다르게 반환.
    // return { ...this.#data }; // 불변성 유지 (단, 얕은 복사가 이뤄지므로 데이터를 빙글빙글 돌면서 중첩된 객체도 새로운 객체로 만들지를 원한다면 rawData에서 제공하는 cloneDB를 이용하면 불변성을 이용해서 값을 가지고 있으나 완전히 새로운 객체를 반환해주면서 불변성을 유지해줄 수 있음)
  }
}

const organization = new Organization("Acme Gooseberries", "GB");

// 기존의 일반적인 object 사용
const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

organization.name = "Dream Coding";
console.log(organization.name); // 속성에 접근
console.log(organization.country); // 속성에 접근
```

- 백엔드와 통신할 경우 JSON 형태로 통신을 함
- 외부 모듈 라이브러리에서 객체 데이터형태로 반환하는 경우 한 단계 감싸서 캡슐화를 해야하는 경우 생성자에서 인자를 받을 수 도 있음 혹은 data 형태로 받고 따로 값을 name, country처럼 할당해도 됨.
- getter, setter 처럼 값을 외부에 그대로 반환해야하는 경우 rawdata를 생성해서 반환해도 됨

<br>

## 7-4) 컬렉션 캡슐화하기

### 컬렉션

- 복합적인 데이터를 담고 있는 것
- 코드 베이스에서 바로 접근해서 사용하는게 아님. 컬렉션을 캡슐화해서 컬렉션을 담고 있는 클래스 또는 모듈을 만들고 컬렉션을 외부로 공개할 수 있는 인터페이스를 외부에 공개함. 나머지는 비공개.

- before 코드

```js
export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  set courses(courses) {
    this.#courses = courses;
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");
ellie.courses.push(new Course("리팩토링", true));
// 읽어온 컬렉션 자체에 직접 push
// 외부에서 마음대로 배열을 조작하는 것은 좋지않다

console.log(ellie.courses.length);
```

- 코드안에서 컬렉션을 사용한다면 이 자료구조를 사용하도록 노출시키는 것은 위험하므로 캡슐화해서 할 수 있는것만 외부에 노출하는것이 중요하다

- course는 읽을 수는 있으나 업데이트 할 수 없도록 만드는게 좋다
- slice API나 spread용법을 통해 새로운 배열을 만들어서 전달하는게 좋다
- 읽을 떄에는 읽기전용 새로운 컬렉션을 리턴하게끔 만드는게 좋음

```js
addCourse(course){
  this.#courses.push(course);
}

removeCourse(course){
  const index = this.#courses.indexOf(course);
  if (index === -1){
    return;
  }  else {
    this.#courses.
  }
}
```

## 7-5) 기본형을 객체로 바꾸기

- 소스코드 (7-3.js)

```js
export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
```

- 소스코드 변경 (기본형 대신 캡슐화하는 유용성)

```js
class Telephone {
  constructor(number, countryCode) {}
}
const telephone = "010-888-6666";
const gTelephone = "+82" + "010-888-6666";
```

### 서적상의 예시 수정

```js
export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
```

- 문제가 무엇일까?
  - 외부에서 필터링하는 로직
  - 우선순위를 정하는 로직이 외부에 존재

```js
export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return "high" === this.priority || "rush" === this.priority;
  }
}

class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
```

- 생성자 안에서 에러를 던지는 것은 보안에 취약한 단점이 존재
- 타입이 있는 언어라면 다음과 같이 작성하는 것도 좋다

```ts
class Priority {
  static Low = new Priority("low", 0);
  static NORMAL = new Priority();
}
```

<br>

## 7-6) 임시 변수를 질의 함수로 바꾸기

```js
class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get price() {
    const basePrice = this.#quantity * this.#item.price;
    const discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}
```

<br>

## 7-7) 클래스 추출하기

```js
class Person {
  #name;
  #officeAreaCode;
  #officeNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }

  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
```

- 클래스 하나당 하나의 역할/하나의 책임/하나의 도메인을 가지는게 좋다
- 여러가지 행동이 섞여있는 경우 다른 클래스로 추출하는게 어떨까. 하고 생각해보는게 좋다.

<br>

## 7-8) 클래스 인라인하기

```js
export class TrackingInformation {
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

export class Shipment {
  #trackingInformation;
  constructor(trackingInformation) {
    this.#trackingInformation = trackingInformation;
  }

  get trackingInfo() {
    return this.#trackingInformation.display;
  }

  get trackingInformation() {
    return this.#trackingInformation;
  }

  set trackingInformation(trackingInformation) {
    this.#trackingInformation = trackingInformation;
  }
}

const shipment = new Shipment(new TrackingInformation(999, "Maersk"));
console.log(shipment.trackingInfo);

shipment.trackingInformation.shippingCompany = "COSCO";
console.log(shipment.trackingInfo);
```

- 역할이 있는것 같지 않은데 분리해두었으므로, 바로접근하지 않고 전달을 거듭하는 형태이므로 일부분을 합칠필요가 있다. (그래야 깔끔하다)

## 7-9) 위임하기

```js
class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person("Tom", new Department("aManager", "999"));
console.log(person.name);
console.log(person.department.manager);
console.log(person.department.chargeCode);
```

```js
class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#department.manager;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person("Tom", new Department("aManager", "999"));
console.log(person.name);
console.log(person.department.manager);
console.log(person.department.chargeCode);
```

## 7-10) 중개자 제거하기

- `composition` : 클래스 A안에서 내부적으로 B라는 클래스를 composition하라고 함.

```js

```

## 7-11) 알고리즘 ~하기

```js
function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === "Don") {
      return "Don";
    }
    if (people[i] === "John") {
      return "John";
    }
    if (people[i] === "Kent") {
      return "Kent";
    }
  }
  return "";
}

console.log(foundPerson(["John"]));
console.log(foundPerson(["Don", "John"]));
console.log(foundPerson(["Kent", "Don", "John"]));
console.log(foundPerson(["Lisa", "Don", "Tom"]));
```

```js
function foundPerson(people) {
  const candidates = ["Don", "John", "Kent"];
  return people.find((p) => candidates.includes(p)) || ""; // 아무것도 못찾으면 빈 문자열 반환
}

console.log(foundPerson(["John"]));
console.log(foundPerson(["Don", "John"]));
console.log(foundPerson(["Kent", "Don", "John"]));
console.log(foundPerson(["Lisa", "Don", "Tom"]));
```

- 캡슐화된 내용을 세분화해서 나타냄

<br>

## 8-0) 응집도

- Cohesion
- 무엇인가가 연결되어 뭉쳐있는 것
- 서로 밀접하게 연관 있는 속성(data)과 행동(method)이 함께 뭉쳐있는 정도 (뭉쳐있는 것 - 모듈, 클래스, 함수 등)

- 모듈 내 응집도는 낮고, 외부 모듈간 결합도가 높은것은 좋지 않다.

### 좋은 예제

- 외부와의 연결은 최소한으로 하는게 좋다.
- 모듈은 응집도가 높고 외부의 영향을 적게 받는것이 재사용성이 좋다.
- 함수 하나당 하나의 일을 수행하도록 하자
- 모듈/클래스 하나당 하나의 책임 및 도메인을 가지도록 하자

<br>

## 8-1) 함수 옮기기

```js
export function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateDistance() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {
    // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
    const EARTH_RADIUS = 3959; // in miles
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.cos(radians(p2.lat)) *
        Math.cos(radians(p1.lat)) *
        Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }

  function radians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  function calculateTime() {
    return 10000;
  }
}

const newYork = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo = {
  lat: 35.652832,
  lon: 139.839478,
};

const summary = trackSummary([newYork, tokyo]);
console.log(summary);
```

- 캡슗화를 위한 중첩함수라면 행동이 속성을 필요로 해서 계산 및 수정하는 등 밀접하게 사용하고 연관되어 묶여있는 등의 상태여야 ~임

- distance -> 정확히 내부의 내용은 모르겠지만 p1,p2와 같은 점들을 받아서 처리함

<br>

## 8-2) 필드 옮기기

```js
export class Customer {
  #name;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#discountRate = discountRate;
    this.#contract = new CustomerContract(this.dateToday(), discountRate);
  }

  becomePreferred() {
    this.contract.#discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#contract.discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }

  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(value) {
    this.#discountRate = value;
  }
}
```

- 필드를 더 가까운곳으로 옮겨주는게 좋다 (위치한곳에 있을 경우 의미를 잘 나타내도록!)
- 나중에 변경되면 다른곳으로 옮기면 된다.

```js
class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {
    this._interestRate = interestRate;
  }
}
```
