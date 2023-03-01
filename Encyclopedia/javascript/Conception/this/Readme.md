# this

- 다른언어의 this와 자바스크립트의 this는 동작원리가 조금 다릅니다.

## 간단한 개념

- 객체안의 this는 자기 자신을 뜻함

## 문제가 되는 상황

- this는 화살표함수가 아닌 함수일 때에만 제대로 자기자신을 가리킴
- 화살표함수 일 경우 브라우저에서는 `this`가 `window`가 되어버림
- `window`는 브라우저 전체를 담당하는 객체임
- document 객체가 window 내에 포함되어있음
- console.log 또한 window 내에 포함되어 있음. window는 대부분을 총괄함.
- window는 생략가능함
- 화살표함수를 사용하면 this는 window가 되어버리므로 화살표함수 사용시 this를 사용하면 안됨

```js
attack: function(monster){
    monster.hp -= this.att;
    this.hp -= monster.att;
}

// 위와 동일 (function 메서드는 생략 가능)
// 둘의 특성은 엄밀히 다르지만, 무시해도 되는 정도
attack(monster){
    monster.hp -= this.att;
    this.hp -= monster.att;
}
```

- this는 기본적으로 window 객체이다. this는 기본적으로 window 객체를 가리키지만 객체에서 this를 사용할 경우에는 해당 객체를 가리킴
- 객체가 있을경우에 객체를 실행하면 this는 그 객체를 가리킴

## this의 까다로운 케이스

```js
const b = {
  name: "제로초",
  sayName() {
    console.log(this === b);
  },
};
b.sayName();

const bf = b.sayName;
bf(); // false (this가 윈도우가 되어버림)
```

- 객체안에 메서드가 있다고 하여 this가 반드시 이 객체인것은 아니고, 엄밀히 말하면 `객체.메서드()`라고 해주어야 this가 해당 객체가 됨
- 기본적으로 this는 window이다. `객체.메서드()`를 해주어야 this가 자기자신을 가리킨다 (this가 그 객체가 된다)

##

<hr>

## this의 의미

## js에서 자기자신을 가리키는 것

## this 바인딩

~를 바인딩 된다고 함

## 실행 문맥

디스 바인딩 컴포넌트 값이 결정됨~

## this 바인딩 규칙

### 1. 암시적 바인딩

#### 참조타입

### 2.명시적 바인딩

### call, apply, bind

### 생성자함수로서 함수를 호출

## 화살표함수에서의 this
