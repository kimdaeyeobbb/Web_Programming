# [1] Do you still use var?

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
