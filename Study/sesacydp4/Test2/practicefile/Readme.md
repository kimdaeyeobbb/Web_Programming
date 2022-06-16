# 개념정리

## 메서드 오버라이딩
매개변수가 동일한데, 함수를 새롭게 구현한 것 (함수를 덮어씌운것)

<br><br>

## 메서드 오버로딩
매개변수가 다른 동일한 이름의 함수를 다시 구현한 것

<br><br>


## 생성자 (Constructor)
일종의 Object의 메서드임<br>

ex)
```js
const d = new Dog();   // new를 쓰는순간 Dog의 생성자 함수가 불려짐
```

ex2)
```js
function f() {...}  //함수표현식을 다음과 같이 부를 수 있음
f();   // 호출방법1 (일반함수인 function으로 부름)
ff = new f();   // 호출방법2   (new로 부른 생성자함수)
```

<br><br>

## globalThis
전역 this인 window, self, global을 통일시킨 것

<br><br>



## 접근자

__ ~ __에서 __ 과 __은 접근자이다.

<br><br>



## 객체지향
자바스크립트에서 객체지향을 구현하기 위해 prototype을 사용한다.<br>
그 중 가장 중요한 것은 상속이다.<br>


<br><br>


