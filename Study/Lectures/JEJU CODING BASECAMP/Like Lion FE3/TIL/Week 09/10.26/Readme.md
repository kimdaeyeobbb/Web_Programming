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

# minifier

- 원본은 보통 프로젝트에 남겨둔다. 배포할 때만 압축된 코드를 배포한다.
