# 22.10.25 (화)

# [객체지향 프로그래밍](https://www.notion.so/paullabworkspace/10-334c7e54ff174fdd87c3ee4477512af8#48155fcee27c4ca5a06c9198613435a0)

- 프로그래밍 방법론
  (자바스크립트 내에 명세에 명시되어있지 않음. js 표준도 아님)

- 프로그램을 작성할 때 객체들이 소통하도록 하는 방법

- 객체: 데이터의 묶음, 실제 존재하는 사물을 추상적으로 표현한 것. 행동과 상태를 가짐.

## 객체로 인스턴스 생성하기

- 예제

```js
const me = {
  name: "한재현",
  address: "제주도 제주시 인다 1길",
  phoneNum: "010-8001-6536",
  canWalk: function () {
    console.log("재현이가 걷는다.");
  },
  teaching: function (student) {
    // 티칭 메서드
    student.levelUp();
  },
};

const student = {
  level: 1, // 레벨이라는 프로퍼티를 가짐
  levelUp: function () {
    // 레벨업이라는 상태를 가
    this.level++; // 메서드 안의 this는 자기자신을 가리킴. 자기 자신을 호출
  },
};

me.teaching(student); // 티칭 메서드를 실행시킴  => student의 레벨을 업
console.log(student); // 레벨이 2가 됨
```

- 예제2

```js
const me = {
  nickname: "파이리",
  food: "javascript",
  family: "team6",
  ability: function () {
    console.log("열정열정열정");
  },

  //행동과 상태 부여하기  행동:메소드 상태는 프로퍼티
  studying: function (리자몽) {
    리자몽.levelUp();
  },
};

//새로운 객체 만들기 (상호작용)
const 리자몽 = {
  level: 1,
  levelup: function () {
    this.level++;
  },
};

//능력 발휘
me.studying(리자몽);
```

- 예제3

```js
const nada = {
  name: "수진",
  age: 28,
  study: function (bankAccount) {
    console.log("공부하면 돈 들어오지롱");
    bankAccount.moneyUp();
  },
};

const bankAccount = {
  accountNum: "5050-3424-1-22",
  money: 500,
  moneyUp: function () {
    this.money += 10000;
  },
};

nada.study(bankAccount);
```

- 예제4

```js
const me = {
  name: "jihae",
  address: "경기도",
  phoneNum: "010-2345-9876",
  canBuy: function () {
    console.log("지해가 티켓을 구매한다.");
  },
  clickGrape: function (speed) {
    speed.faster();
  },
};

const speed = {
  skill: 1,
  faster: function () {
    this.skill++;
  },
};

me.clickGrape(speed);
```

- 예제5

```js
const me = {
  name: "jihae",
  address: "경기도",
  phoneNum: "010-2345-9876",
  canBuy: function () {
    console.log("지해가 티켓을 구매한다.");
  },
  clickGrape: function (speed) {
    speed.faster();
  },
};

const speed = {
  skill: 1,
  faster: function () {
    this.skill++;
  },
};

me.clickGrape(speed);
```

- 예제6

```js
const me = {
  이름: "재영",
  회고조: "16조",
  상태: function () {
    console.log("배고프다..잠심에 뭐 먹지");
  },
  요리: function (라면) {
    라면.끓는중();
  },
};

const 라면 = {
  물온도: 32,
  끓는중: function () {
    this.물온도++;
  },
};
```

- 예제7

```js
const me = {
  name: "pung",
  address: "경기도",
  running: function (weight) {
    weight.down();
  },
  eating: function (weight) {
    weight.up();
  },
};

const weight = {
  kg: 76,
  up: function () {
    this.kg++;
  },
  down: function () {
    this.kg--;
  },
};

me.running(weight);
```

- 예제8

```js
let joon = {
  name: "준군",
  eat: function (food) {
    food.reduce();
  },
};
let cookie = {
  quan: 10,
  reduce: function () {
    this.quan++;
  },
};
```

- 예제9

```js
const taesoo = {
  live: true,
  str: 50,
  dex: 35,
  int: 27,
  luk: 99,
  getAwake: false,
  drinkCoffee: function () {
    this.getAwake = true;
    setTimeout(() => {
      this.getAwake = false;
    }, 4000);
  },
};
```

- 예제 10

```js
const me = {
  name: "강세민",
  address: "경상북도 포항시",
  canWalk: function () {
    console.log("강세민이 걷는다.");
  },
  eat: function (food) {
    food.eatSth();
  },
};

const meat = {
  meatNum: 3,
  eatSth: function () {
    if (this.meatNum > 0) {
      this.meatNum--;
      console.log(`남은 고기: ${this.meatNum}`);
    } else {
      console.log("그만 좀 먹어..");
    }
  },
};

me.eat(meat);
```

- 예제11

```js
const hyeji = {
  name: "혜지",
  mbti: "ENTJ",
  likeIt: function () {
    console.log("뜨개질을 좋아해요!");
  },
  likeFood: function (food) {
    food.foodlist();
  },
};

const food = {
  favorite_food: ["알리오올리오", "마라탕"],
  foodlist: function () {
    console.log("제가 좋아하는 음식은 " + [...this.favorite_food] + "입니다.");
  },
};

hyeji.likeFood(food);
```

- 객치 할당시 얕은 복사 문제가 발생
  - 생성자를 사용해서 이 문제를 해결할 수 있음

## 생성자

- 객체를 만들 때 new 연산자와 함께 사용하는 함수

- 배열도 내부에 프로퍼티와 메서드가 있다. 배열의 프로퍼티에는 length 등이 존재한다.

- 생성자의 장점: 생성자를 통해 생성된 객체는 같은 프로퍼티와 메서드를 공유할 수 있다

## instanceof

- 무엇의 객체인지 확인할 때 사용

```js
function Factory() {} // 생성자 함수 선언
const obj = new Factory(); // 객체 생성 & 결과를 특정한 변수에 할당
console.log(obj); // Factory {}   => 생성자의 결과로 만들어진 객체

console.log(obj instanceof Factory); // true
```

## 인스턴스 & 생성자 함수로 인스턴스 생성하기

- 예제

```js
function NewFactory(name) {
  this.name = name; // this는 생성자함수를 통해 만들어진 인스턴스를 가리킴
  this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  };
}

let robot1 = new NewFactory("브랜든");
console.log(robot1); // robot1에는 인스턴스가 들어감 (name 프로퍼티와 sayYourName 프로퍼티를 가짐)
```

- robot1: 생성자 함수의 인스턴스
- 생성자함수를 통해 인스턴스를 만들었으므로 this와의 연계를 통해 생성자함수 내부의 프로퍼티를 사용할 수 있다.

- 에제

```js
function NewFactory(name) {
  this.name = name; // this는 생성자함수를 통해 만들어진 인스턴스를 가리킴
  this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  };
}

let robot1 = new NewFactory("브랜든");
console.log(robot1); // robot1에는 인스턴스가 들어감 (name 프로퍼티와 sayYourName 프로퍼티를 가짐)
console.log(robot1.sayYourName());

let robot2 = new NewFactory("웨이드"); // 새로운 인스턴스 생성
robot1.name = "크크";

console.log(robot1.name); // 크크
console.log(robot2.name); // 웨이드
```

## 프로토타입

- 시험제품의 일종
- 어떤 물건을 대량 생산하기 전에 출시해도 적합한 상품인지를 판단하기 위해 미리 만들어보는 시험용 제품

- 특정 객체에 대한 참조임. 프로토타입도 메모리상의 어떤 공간을 가르키고 있음

- 생성자 함수가 인스턴스를 생성하게 되면 내부에는 숨겨진 프로퍼티인 [[Prototype]]이 존재함. (코드상에는 \_\_proto\_\_로 표현됨)

- [[Prototype]]은 자바스크립트 명세에만 존재하는 용어임

- prototype공간에서 만들어진 메소드는 인스턴스를 어떻게 구별하게 하는거죠? 생성자함수와 prototype이 연결이 되어 있으니깐 객체를 생성해서 prototype의 메소드에 접근이 가능해서 구별할 수 있는건가요?

  - 인스턴스에는 생성자 함수의 프로토타입을 참조하는 \_\_proto\_\_가 있다. 얘를 통해서 프로토타입에 접근이 가능하다.

- 생성자 함수의 this는 인스턴스를 가리킴.

- 프로토타입은 어떠한 공간을 가리키는 참조다.

# 상속

- [hasownproperty](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

  - object 생성자함수의 prototype공간에 hasownproperty가 존재(?????????)
  - object가 자신의 prototype 내에 가지고 있는 메서드

- `arr = [1,2,3]`내에 존재하는 `[[Prototype]]` -> array 생성자 함수를 가리킴

- 자기의 prototype이 없으면 자신의 상위에 존재하는 prototype을 찾아올라감

- 함수는 \_\_proto\_\_와 prototype 둘다를 가지고 있음

- 자바스크립트에서는 prototype을 이용한 상속을 지원함

- Object는 최상위 객체이다

## 오토박싱

- 어떠한 결과를 얻기 위해 내부적으로 원시타입을 임시로 객체화하고 사라지는 것
- 사용의 일관성을 위해 채택한 방식

# 클래스
