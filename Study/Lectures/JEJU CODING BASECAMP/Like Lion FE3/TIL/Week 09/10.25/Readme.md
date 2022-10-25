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

- 객치 할당시 얕은 복사 (강의 10:13 경 나오는 내용)
  - 문제 발생 (다시 기재)

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

## ㅁ
