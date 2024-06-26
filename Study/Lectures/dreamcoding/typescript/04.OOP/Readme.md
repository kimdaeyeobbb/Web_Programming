# 객체지향 프로그래밍

- 서로 관련있는 데이터와 함수를 객체 단위로 묶어 나가는 것
- 관련있는 객체만 이해하면 되므로 재사용성, 확장성, 생산성이 좋아진다.
- 생산성 향상, 높은 퀄리티의 프로그램을 만들 수 있게 해줌.
- 빠른 유지보수가 가능해짐

## 객체

- object 속성을 가진 데이터와 함수로 구성

- Error, Exception, Event 등도 object로 만들고 관리할 수 있음

- 명사를 사용해서 이름을 지정할 수 있음

- object는 fields와 methods로 구성됨

- 예시
  - 음악플레이어
    - 뮤직 기능, 플레이함수, 스톱함수 등으로 구성

## 클래스

- class는 데이터가 들어있지 않음. 객체 내에 실제 데이터가 들어감. (객체는 클래스의 인스턴스임)

- 예시
  - 학생 클래스
    - 내부에 `name: string, score: number`데이터와 `study()`함수가 존재.
    - Bob 인스턴스 내부에 name:'bob', score: 10, study()가 존재

## 객체지향 프로그래밍의 원칙

- 클래스만 정의하고 객체만 사용하는것이 객체지향인것은 아니다

- 객체지향에는 Encasulation과 Abstraction, Inheritance이라는 특징이 있고, 이 세가지를 이용해서 다형성을 구현해야함

### 캡슐화

- 관련있는 것들을 묶는것

- 내부에 function, data들이 존재

- 예시
  - 감기약 (내부에 다양한 성분의 가루약이 들어있음. 어느성분의 가루가 있는지 상관없이 하나의 알약만 먹으면 됨)

### 추상화

- 내부의 복잡한 기능을 다 이해하지 않고 지정된 외부에서 보이는 인터페이스를 통해서 사용하는 것

- 예시
  - 커피머신의 내부 기능을 다 이해하지 않고도 외부의 버튼을 통해서 기계를 동작시킬 수 있음

### 상속

- 예시

  - 커피머신 클래스 (커피머신에 필요한 데이터와 함수가 같이 들어있음)
  - 상속받은 coffee brewer가 존재
  - 커피머신을 상속받은 에스프레소 머신이 존재

- `IS-A 관계`임 (상속을 받은 자식 클래스는 부모 클래스라고도 말할 수 있음)

- 브라우저의 DOM 요소도 상속관계로 구성됨
  - HTMLElement를 상속받은것이 Document, Element, Text -> 얘네를 상속받은게 Node -> 얘를 상속받은게 EventTarget
  - Document, Element,Text는 모두 EventTarget을 상속하므로 이벤트를 발생시킬 수 있음

### 다형성

- 상속을 통해 발생하는

### 다양한 객체지향의 원칙

- ㅁ
