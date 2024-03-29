# 22.10.26 (수)

- 브라우저 환경 내에서 window가 최상위 객체 (window는 브라우저 그 자체를 뜻함)

- 생성자 함수의 최상위 객체는 Object이다

<br>

# Object.create

- 실행시 부모의 prototype을 참조하고 있는(바라보는) 새로운 객체를 만들어서 자식에게 할당함

- 지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만들어줌

<br>

# 생성자 함수

- 생성자 함수로 만들어낸 인스턴스는 기본적으로 Object이다

<br>

# 클래스

- 이전보다 개선된 문법인 슈가 신텍스임

<br>

# 상속

## [call](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

- call()은 이미 할당되어있는 다른 객체의 함수/메소드를 호출하는 해당 객체에 재할당할때 사용됨
- this는 현재 객체(호출하는 객체)를 참조합니다. 메소드를 한번 작성하면 새 객체를 위한 메소드를 재작성할 필요 없이 call()을 이용해 다른 객체에 상속할 수 있습니다.

## prototype

- 예제

```js
/* Child의 prototype을 Parent의 prototype으로 연결시켜주고 있음 
-> 앞으로 생성되는 Child의 인스턴스들은 모두 Parent의 prototype을 참조하게 됨 
-> parent의 메서드들을 상속받아서 이용할 수 있게 됨 */
// Object.create 실행시 Parent.prototype을 가지는 (참조하고 있는) 새로운 객체를 만들어서 새로운 prototype에 할당하는 것
// Object.create -> Parent.prototype을 바라보는 객체를 만들어서 Child.prototype에 할당하는 것
Child.prototype = Object.create(Parent.prototype);
```

## constructor 유무 비교

### [[Prototype]] 내에 constructor 없음

```js
function Parent() {
  this.name = "danny";
}

Parent.prototype.rename = function (name) {
  this.name = name;
};

Parent.prototype.sayName = function () {
  console.log(this.name);
};

const parent = new Parent();
console.log(parent); // Parent {name: 'danny'} , [[Prototype]]: Object

function Child() {
  Parent.call(this);
  // call을 통해서 this가 child와 parent가 연결되어 있으므로 parent내의 this.name을 child의 것처럼 사용할 수 있게 됨
  // 그렇기 때문에 name을 가지게 된 것임
}

/* Child의 prototype을 Parent의 prototype으로 연결시켜주고 있음 
-> 앞으로 생성되는 Child의 인스턴스들은 모두 Parent의 prototype을 참조하게 됨 
-> parent의 메서드들을 상속받아서 이용할 수 있게 됨 */
// Object.create 실행시 Parent.prototype을 가지는 (참조하고 있는) 새로운 객체를 만들어서 새로운 prototype에 할당하는 것
// Object.create -> Parent.prototype을 바라보는 객체를 만들어서 Child.prototype에 할당하는 것
Child.prototype = Object.create(Parent.prototype);

Child.prototype.canWalk = function () {
  console.log("now i can walk");
};

const child = new Child(); // 인스턴스 생성
console.log(child); // Child {name: 'danny'}  , [[Prototype]]: Parent -> name 프로퍼티를 상속받음

console.log(child.__proto__ === Child.prototype); // true
```

<br>

### [[Prototype]] 내에 constructor 있음

- 프로퍼티를 추가해줌으로서 생성자가 누구인지를 분명하게 나타내줌

```js
function Parent() {
  this.name = "danny";
}

Parent.prototype.rename = function (name) {
  this.name = name;
};

Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child() {
  Parent.call(this); //
}

/* Child의 prototype을 Parent의 prototype으로 연결시켜주고 있음 
-> 앞으로 생성되는 Child의 인스턴스들은 모두 Parent의 prototype을 참조하게 됨 
-> parent의 메서드들을 상속받아서 이용할 수 있게 됨 */
Child.prototype = Object.create(Parent.prototype, {
  /* 프로퍼티 서술자 객체 
    -> Parent.prototype외에 추가로 던져주는 인자
    -> 객체를 던지니까 내부의 프로퍼티를 같이 설정할 수 있음
    -> 내장 속성을 설정할 수도 있음 */
  constructor: {
    // constructor를 객체로 표현해서 전달할 수 있음
    /* 자바스크립트가 내부적으로 사용하는 프로퍼티를 설정해보자 */
    configurable: true, // 프로퍼티 변경이 가능한가를 설정하는 속성 (false로 설정시 변경불가)
    enumerable: true, // 전달하는 객체가 열거 가능한가? 를 결정할 수 있음
    writable: true, // 프로퍼티의 값을 수정할 수 있는가? 를 결정할 수 있음
    value: Child, // 전달해주는 인스턴스의 생성자를 Child라고 직접적으로 명시해줌
  },
});

Child.prototype.canWalk = function () {
  console.log("now i can walk");
};

const child2 = new Child();
console.log(child2); // 프로퍼티 서술자객체를 설정함으로써 constructor가 누구인지 분명하게 알 수 있게됨
// 프로퍼티 서술자객체가 없었던 child는 그냥 객체일 뿐이므로 constructor가 안나왔던 것임
```

<br><br>

# 비공개 프로퍼티

- 객체를 만들어서 그 안에 프로퍼티를 선언할 떄, 다른 사람들이 쉽게 접근하지 못하게 만듦

- class를 통해 인스턴스를 만들 때 (객체를 만들 때)

- 클로저 → 외부에서 접근할 수 없는 폐쇄된 공간에 접근하기 위해 사용하는 테크닉

## [IIFE 패턴](https://developer.mozilla.org/ko/docs/Glossary/IIFE)

```JS
/* IIFE 패턴 - 선언과 동시에 실행 */
(function () {
    console.log('IIFE');
})();

```

<br>

## 모듈 + 사용자 정의 혼합패턴

```js
/* 클래스 이전의 문법 사용 */
/* 과거 방식- 클로저를 이용한 비공개 프로퍼티 설정 */
function Person() {
  let age = 30; // 비공개 프로퍼티로 만듦

  function innerPerson() {}

  innerPerson.prototype.getAge = function () {
    return age;
  };

  return innerPerson;
  // 이떄 메모리에서 해제되면서 age에 접근하는 방법이 사라짐
  // 따라서 age가 비공개 프로퍼티를 담을 클로저 공간이 됨
}

const PersonFunc = Person(); // PersonFunc에 반환값인 innerPerson이 저장됨
const person = new PersonFunc(); // 생성자 함수의 실행결과를 담은 person 인스턴스가 만들어짐

console.log(person); // innerPerson {}
console.log(person.getAge()); // 30
console.log(person.age); // 비공개 프로퍼티가 되어 더이상 사용 불가

// /* IIFE 패턴 - 선언과 동시에 실행 */
// (function () {
//     console.log('IIFE');
// })();

/* 클래스 이전의 문법을 사용 */
const NewPerson = {
  /* IIFE 패턴 - 즉시 실행함수 사용 */
  function() {
    let age = 30;

    function innerPerson() {}

    innerPerson.prototype.getAge = function () {
      return age;
    };

    return innerPerson;
    // 얘를 밖으로 빼서 NewPerson이라는 상수에 값을 집어넣음.
    // const PersonFunc = Person();  이 과정이 생략됨
  },
}();

const personWithSecret = new NewPerson();

console.log(personWithSecret.getAge());
console.log(personWithSecret.getAge);
```

<br>

# 질의응답

- 왜 getLeftTodoCount()가 제대로 동작하지 않을까?

```JS
class Todo {
        constructor(todo, finished) {
          this.todo = todo;
          this.finished = finished;
        }
        changeState() {
          this.finished = !this.finished;
          //   if (this.finished === true) {
          //     this.finished = false;
          //   } else {
          //     this.finished = true;
          //   }
        }
      }
      class TodoManager {
        constructor() {
          this.todolist = [];
        }
        addItem(todo, finished = false) {
          const addTodo = new Todo(todo, finished);
          this.todolist.push(addTodo);
        }
        getItems() {
          return this.todolist;
          //   console.log(todolist);
        }
        getLeftTodoCount() {
          return this.todolist.filter((item) => {
            item.finished === false;
          }).length;
        }
      }
```

## 화살표 함수에서 코드블럭을 사용하면 리턴문을 따로 써주어야 함

![image](https://user-images.githubusercontent.com/68424403/197935635-858a5ba7-db7d-45c2-b2bc-8d8a2c0beebb.png)

<br>

# get, set

- [참고자료 1](https://ko.javascript.info/property-accessors)
- [참고자료 2](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/get)

<br>

# 프로퍼티 종류

## 1. 데이터 프로퍼티 (data property)

## 2. 접근자 프로퍼티 (accessor property)

- 본질은 함수이다. (값을 획득(get)하고, 설정(set)하는 역할을 담당함)
- 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보임

- 바깥쪽 코드에서 접근자 프로퍼티를 일반 프로퍼티처럼 사용할 수 있음
- 접근자 프로퍼티를 사용하면 함수처럼 호출하지 않고, 일반 프로퍼티에서 값에 접근하는 것처럼 평범하게 user.fullName을 사용해서 프로퍼티 값을 얻을 수 있다.

### 2-1. getter

- 접근자 프로퍼티의 메서드 중 하나인 getter 메서드
- 객체 리터럴 내에서 getter 메서드는 get으로 나타냄

```js
let obj = {
  get propName() {
    // getter
    // obj.propName 실행시 나타는 코드
  },
};
```

- getter 메서드는 obj.propName을 사용해서 프로퍼티를 읽으려고 할 때 실행됨.

- get: 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함

<br>

### 2-2. setter

- 접근자 프로퍼티의 메서드 중 하나인 setter 메서드
- 객체 리터럴 내에서 setter 메서드는 set으로 나타낼 수 있음

```js
let obj = {
  set propName() {
    // setter
    // obj.propName = value 실행시 실행되는 코드
  }
}
```

- setter 메서드는 obj.propName = value으로 프로퍼티에 값을 할당하려 할 때 실행됨

- set: 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨

<br>

# minifier

- 원본은 보통 프로젝트에 남겨둔다. 배포할 때만 압축된 코드를 배포한다.

<br>

# [pagespeed insights](https://pagespeed.web.dev/)

- 개인포트폴리오 초안 제작 후 -> 성능 측정 -> 이후 리팩토링해서 속도를 개선시켜서 -> 개선된점을 수치화해서 이력서에 기재할 것

# fragment

- 반복이 필요한 객체라면 fragement를 사용하는게 좋다
