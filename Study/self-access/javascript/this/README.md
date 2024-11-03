# this

- JS상 this는 런타임에 결정됨.
  (메서드가 어디서 정의되어있는지에 상관없이 `this`는 '점 앞의'객체가 무엇인지에 따라 '자유롭게' 결정됨)

## this는 런타임에 결정된다.

- this가 런타임에 결정되는 것의 장점

1. 메서드를 하나만 만들어서 여러 객체에서 재사용할 수 있음

<br/>

- this가 런타임에 결정되는 것의 단점

1. 메서드를 재활용할 수 있다는 유연함이 실수를 유발헐 수 있음

<br/>

## 화살표함수는 this가 없다

- 화살표 함수는 일반 함수와 달리 '고유한' `this`를 가지지 않음.
- 화살표 함수에서 `this`를 참조하면, 화살표 함수가 아닌 외부함수에서 `this`값을 가져옴

```js
const user = {
  name: "크크",
  sayHello() {
    const inner = () => console.log(this.name);
    inner();
  },
};

user.sayHello(); // 크크
```

- 위 코드상 함수 `inner()`의 `this`는 외부 함수 `user.sayHello()`의 `this`가 됨
