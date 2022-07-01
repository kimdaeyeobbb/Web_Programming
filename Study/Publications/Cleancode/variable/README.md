# Variable handling

## [1] Do you still use var? You should avoid using 'var'<br>
- let & const는 ES2015부터 생겨났다. 이전에는 var라는 예약어를 통해서만 변수 생성이 가능했다.
- Javascript는 꾸준히 발전하였고, let과 const는 그 발전의 산물이다.

- var / let / const 특징<br>

|var|let|const|
|--|--|--|
|함수 범위|블록 범위|블록 범위|
|TDZ 사용X|TDZ (Temporal Dead Zone) 사용|TDZ (Temporal Dead Zone) 사용|
|안전하지 않음|블록 범위&TDZ => 안전한 코드 작성 가능|블록 범위&TDZ => 안전한 코드 작성 가능|

* [TDZ 참고자료](https://ui.toast.com/weekly-pick/ko_20191014)


* 코드로 확인하기<br>
```javascript
var은 똑같은 변수로 여러번 할당을 진행한다면 맨 마지막 값이 출력된다.
```
[var1.js 참고](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/var1.js)<br><BR><br>

  
```javascript
선언&초기화보다 출력을 먼저할 경우 undefined(에러 발생하지 X)
```
[var2.js 참고](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/var2.js)<BR><BR><br>

  
```javascript
let 자료형을 여러번 선언할 경우 에러
```
[let1.js 참고](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/let1.js)<BR><BR>


```javascript
const 자료형을 여러번 선언할 경우 에러
```
[const1.js 참고](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/const1.js)<BR><BR>


```javascript
let은 선언을 먼저한 다음 재할당이 가능하다
```
[let2.js 참고](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/let2.js)<BR><BR>


```javascript
const는 선언을 먼저한 다음 재할당을 할 수 없다.
```
[const2.js 참고](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/const2.js)<BR><BR>

  
  
  
## [2] function scope & block scope<br>
  
  - [function scope example](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/scope1.js)
  ```javascript
  var global = '전역변수';

if (global === '전역변수'){
    var global = '지역변수';

    console.log(global);   // 지역변수
}

console.log(global);  // 지역 변수
  ```
  - var 자료형을 사용하면 사용자의 의도와 다르게 전역변수가 지역변수화 될 수 있다 (변수가 오염될 수 있다)<br><br><br>

  
  
  - [block scope example 1](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/scope1.js)
  ```javascript
  var global = '전역변수';

if (global === '전역변수'){
    let global = '지역변수';

    console.log(global);   // 지역변수
}

console.log(global);  // 전역변수
  ```
  - var 대신 let이나 const를 사용하면 안전하게 코드를 작성할 수 있다.<br>
  - javascript는 변수 내부에 많은 것을 포함할 수 있으므로 let보다 const를 쓰는 것이 더 안전하다.<br>
  - 단, const는 재할당을 하려고할 때 오류가 발생하므로 주의를 하는것이 좋다.<br><br><br>

  
  - [block scope example 2](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/Cleancode/variable/scope2.js)
  ```javascript
  const person = {
    name: 'kim',
    age: '23',
  }
  
  person = {
    name: 'kim2',
    age: '23',
  }      // 이 경우 재할당을 하려고 하기 때문에 에러 발생
  ```

  ```javascript
  const person = {
    name: 'kim',
    age: '23',
  }
  
  person.name = 'park'
  person.age = '24'
  
  console.log(person);   
  // 재할당을 통해 person이라는 값을 바꾸는 것이 아니라 person 내 객체 값만 바꾼것이므로 에러 발생X
  ```
  
  ```javascript
  const person2 = [{
    name: 'lee',
    age: '31',
  }]         // 배열 생성
  
  person2.push({
    name: 'jung',
    age: '32',
  })     // 배열에 객체 추가
  
  console.log(person2);
  // const는 재할당만 금지되고, 객체 & 배열등과 같은 참조 객체를 조작하는 것은 가능하다.
  ```
