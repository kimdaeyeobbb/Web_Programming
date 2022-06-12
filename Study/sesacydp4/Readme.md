# Q2
## 다음 그림과 같이 HTML 작성시 적용 가능성이 가장 낮은 태그는 무엇인가?
![image](https://user-images.githubusercontent.com/68424403/173181782-90da27dd-c843-4efb-b259-5b9747072362.png)

1. div
2. table
3. button
4. body

### 정답 : table

### 해설

- table 태그 vs CSS 비교

<br>

|table|css|
|---|---|
|table 태그는 div보다 복잡한 구조|div태그는 table 태그보다 덜 복잡한 구조|
|한 세트의 div 태그와 달리 일부 컨텐츠를 표시하기 위해 여러개의 태그 세트가 필요|한 세트의 div 태그로 일부 컨텐츠 표시가능|
|페이지 디자인에 더 많은 것을 추가함에 따라 테이블 복잡성은 div에 비해 계속 증가|페이지 디자인 추가하더라도 table 태그에 비해 덜 복잡함|
|모든 테이블 셀은 구조를 유지하기 위해 해당 행의 다른 테이블 셀에 종속됨|div는 서로 독립적으로 작동할 수 있음|
|테이블에서 단일 셀을 뽑아 레이아웃의 다른 곳으로 이동할 수 없음|div는 단일 셀을 뽑아 다른 곳으로 이동할 수 있음|
|고정된(rigid) 그리드에서 쉽게 벗어날 수 없음|고정된(rigid) 그리드에서 쉽게 벗어날 수 있음|
|많은 데이터의 양을 행과 열을 이용하여 표현| |
|단순히 아이템을 테이블 형식, 그리드 형식으로 표현하기 위해 테이블 태그를 사용하는 것은 좋지 않음| |
|과거에는 CSS가 발달되어 있지 않아 테이블 태그를 이용하여 스타일링함|요즘에는 테이블을 사용하기보다는 CSS의 flex나 grid를 이용하여 조금 더 유연하고 아름답게 스타일링을 할 수 있음|
|포인트: 문서 내부에서 자체적으로 의미있는 태그가 필요한 것인지,|혹은 CSS로 스타일링을 위해 태그를 사용하는지 점검을 해볼 필요가 있다.|
| - | - |



- [참고자료 1](https://vanseodesign.com/css/css-divs-vs-tables/)
- [참고자료 2](https://ofcourse.kr/html-course/table-%ED%83%9C%EA%B7%B8)
- [참고자료 3](https://blog.naver.com/PostView.nhn?blogId=chsmanager&logNo=140206615278&categoryNo=64&parentCategoryNo=0)
- [참고자료 4](https://www.youtube.com/watch?v=T7h8O7dpJIg&ab_channel=%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9)



<br><br><br>

# Q3



# Q4



# Q5



# Q6



# Q7



# Q8
## 다음 코드에서 printStar() 함수의 실행 결과로 올바른것은?
### for는 반복문, let은 변수선언, console.log는 문자열 출력을 의미합니다. 또한 const printStar = () => (...) 구문은 function printStar() {...} 와 동일합니다.

```javascript
const printStar = () => {
  let str = ""
  
  for (let i=0; i<5; i++){
    for (let j=0; j<5; j++) {
      if (j>i){
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
```


<br><br><br>



# Q9
## 다음 코드를 실행했을 때 출력되는 숫자는?
### 자바스크립트 코드이며, 자바스크립트는 함수형 언어로 함수에 전달된 매개변수는 별도의 메모리 공간을 갖습니다. 지역변수와 전역변수의 의미를 묻는 문제입니다. 또한 a++은 a=a+1과 같으며, 사칙연산 (=, -, *, /) 보다 연산자 우선순위가 낮습니다.

```javascript
let a = 10;
let b = 60;

const foo = (a) => {
  a = 100;
  a+b;
}

foo(a);

console.log(b + a++);
```
