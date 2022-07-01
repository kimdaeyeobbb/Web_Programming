# Q2
## 다음 그림과 같이 HTML 작성시 적용 가능성이 가장 낮은 태그는 무엇인가?
![image](https://user-images.githubusercontent.com/68424403/173181782-90da27dd-c843-4efb-b259-5b9747072362.png)

1. div
2. table
3. button
4. body

### 정답 

table

<br>

### 해설

- body태그

HTML 문서의 내용을 나타냄. 따라서 위 문제에서는 body태그는 무조건 포함되어야 한다.
<br>
해당 HTML 문서의 텍스트, 하이퍼링크, 이미지, 리스트 등과 같이 모든 콘텐츠를 포함하는 영역을 정의할 때 사용. 
<br>
HTML 문서에는 단 하나의 body만 존재할 수 있음
<br>
head태그와 달리 화면에 보이는 것들이 주로 body태그에 들어감



<br><br>

- div VS span

|div|span|
|---|---|
|block element, inline element를 그룹으로 묶을 때 사용|inline element를 그룹으로 묶을 때 사용|

- div 사용전
```html
<body>
  <p>선수 소개</p>
  <p>선수를 소개하는 페이지입니다.</p>
  <p>훈련 프로그램 소개</p>
  <p>훈련 프로그램을 소개하는 페이지입니다.</p>
</body>
```

- div 사용후
```html
<div class="player">
  <p>선수 소개</p>
  <p>선수를 소개하는 페이지입니다.</p>
</div>
<div class="training">
  <p>훈련 프로그램 소개</p>
  <p>훈련 프로그램을 소개하는 페이지입니다.</p>
</div>
```

<br>

- span 사용전
```html
<body>
  <p>선수 소개</p>
  <p>이번 시즌 이 선수의 하이라이트 장면은 바로 이 부분입니다.</p>
</body>
```

- span 사용후 (하이라이트 텍스트 부분만 디자인을 다르게 적용하고 싶을 경우)
- span태그를 사용하여 태그 내 공간을 분할함
- 텍스트는 inline element이므로 내부 콘텐츠를 span 태그로 grouping 할 수 있음
- grouping하여 element의 공간을 분할하면 분할된 요소에 CSS를 적용시킬 수 있음
```html
<p>선수 소개</p>
<p>이번 시즌 이 선수의 <span>하이라이트</span> 장면은 바로 이 부분입니다.</p>
```



<br><br>

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
## [HTML CSS] 다음과 같이 내용을 가운데 정렬하려 할 때 [가] 부분에 가장 적절한 CSS는?
![image](https://user-images.githubusercontent.com/68424403/173803042-496eebca-229f-4ca5-ad3c-413eab661656.png)




### 정답

justify-content: center; 
<br><br>

### 해설

1. margin-left:auto; margin-right:auto;<br>
CSS margin속성은 정의된 테두리 외부의 요소 주위에 공간을 만드는 데 사용됨<br>
auto: 브라우저가 자동으로 여백 지정<br>
margin-left:auto; margin-right:auto; <br>
-> 둘다 auto이므로 사용된 값이 동일. 컨테이닝 블록의 가장자리를 기준으로 요소를 수평 중앙에 배치시킴<br>
margin은 박스 가장 바깥의 영역이며 element의 외부 여백을 담당함<br>
여기서는 전체를 감싸는 박스의 margin 설정을 해준것이므로 margin이 적용되지 않음<br>
만약 내부의 각 div 태그에 모두 margin 설정시 margin이 적용되는 것을 확인할 수 있음


<br><br>



2. padding-left:auto; padding-right:auto;<br>
padding: 요소 내부의 여백을 담당. 요소 내부에 빈 공간을 추가한다.<br>






<br><br>




3. justify-content: center;<br>
가로축을 기준으로 좌우에 대한 정렬<br>


<br><br>



4. align-items: center;<br>
세로 축을 기준으로 정렬<br>



<br><br><br>


# Q4
## 다음 HTML 문서를 브라우저로 봤을 때 가장 적절한 결과는?

![image](https://user-images.githubusercontent.com/68424403/173803272-50ffdc21-c3f5-4bb6-90b3-3b98c7961427.png)

### 정답
3번

<br><br>

### 해설

- flex 아이템들은 가로 방향으로 배치되고, 자신이 자신 내용물의 width만큼 영역을 차지함  (이걸로 1,2번제거)
- border radius => 영역의 테두리  (이걸로 4번제거)




<br><br><br>  


# Q5
## 위 문제의 4번 구문을 개선하려고 한다. [가] 부분에 가장 적절한 CSS selector는?
![image](https://user-images.githubusercontent.com/68424403/173803631-87af71b5-f479-412c-b1bb-4b26ac361884.png)



### 정답

.box > div
<br><br>


### 해설

- 아래의 부분이 빠진듯함. (문제오류라고 생각함)
```html
<div class="br20px" style="border-radius:20px">4</div>
```

- div* : div내 모든 요소 선택


<br><br><br>



# Q6
## HTML/CSS가 브라우저에 렌더링되는 순서로 가장 올바른 것은?

### 정답
![image](https://user-images.githubusercontent.com/68424403/173332081-52de2d86-64e1-4f65-902c-4ffc0b766e26.png)

### 해설




- [브라우저 렌더링 동작 과정 참고자료1](https://tecoble.techcourse.co.kr/post/2021-10-24-browser-rendering/)
- [브라우저 렌더링 동작 과정 참고자료2](https://d2.naver.com/helloworld/59361)
- [브라우저 렌더링 동작 과정 참고자료3](https://medium.com/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98%ED%92%88%EA%B2%A9/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95-5c01c4158ce)
- [브라우저 렌더링 동작 과정 참고자료4](https://yozm.wishket.com/magazine/detail/646/)
- [브라우저 렌더링 동작 과정 참고자료5](https://intrepidgeeks.com/tutorial/the-order-in-which-the-home-page-is-displayed-to-the-user-browser-rendering-process)


<br><br><br>







# Q7
## 일반적인 REST API를 만들 때, HTTP 메소드와 성격이 올바르게 짝지어지지 않은 것은?

### 정답
![image](https://user-images.githubusercontent.com/68424403/173321812-db2b49b9-f97b-4416-b832-c5e7226237db.png)

### 해설

- <strong>자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.</strong>


|METHOD|역할|
|---|---|
|POST|POST를 통해 해당 URI를 요청하면 리소스를 생성|
|GET|해당 리소스 조회 & 해당 Document에 대한 자세한 정보 가져옴|
|PUT|해당 리소스 전체 수정|
|DELETE|리소스 삭제|
|PATCH|리소스 부분적 수정|
|CONNECT|요청한 리소스에 대해 양방향 연결 시작|
|HEAD|특정 리소스를 GET 메서드로 요청했을 때 돌아올 헤더를 요청|
|OPTIONS|목표 리소스와 통신 옵션 설명하기 위해 사용|


- [REST API 참고자료](https://meetup.toast.com/posts/92)
- [REST API 참고자료 2](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/PATCH)


<br><br><br>



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


### 정답 
![image](https://user-images.githubusercontent.com/68424403/173307939-287159e6-75d5-4cc6-8f50-5fd4bb32506b.png)



### 해설
 
해당문제가 잘못 제작 되었다고 생각함. <br>
화살표 함수를 만들었지만, 함수를 이용하는 command가 존재하지 않기 때문이다. <br>
따라서 본 문제를 다음과 같이 수정하여야 본 의도대로 답이 도출될 것이다. <br>
```javascript
let str = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j > i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);
```


- [화살표 함수 관련 참고자료](https://ko.javascript.info/arrow-functions-basics) <br>






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

### 정답 
![image](https://user-images.githubusercontent.com/68424403/173320801-a7dd5df9-8640-4256-8aaa-9681b91fb6fd.png)



### 해설

- foo(a)  <br>
전역변수인 a=10이 함수에 들어가고 expression block에서 a=100이 아닌 전역변수 a=10이 적용되어 a+b는 70이다. <br><br>

- console.log(b + a++)<br>
a++은 후위 연산자로, 연산을 마친다음에 커지므로 b + a++이 60+20이 아니라 60+10이다. 이후에 전역변수가 a=20으로 커진다.<br>



<br><br><br>





# Q10
## [Linux] 홈(~) 디렉터리에 내용이 없는 test.txt 파일이 필요하다. 이때 사용되는 명령으로 가장 적절한 것은?
![image](https://user-images.githubusercontent.com/68424403/173804020-5a2a9ef1-36e6-42b7-944a-6fb4c159b11f.png)





### 정답

```linux
cp/dev/null ~/test.txt
```
<br><br>

### 해설


<br><br><br>











# Q11
## [Linux] 사용자가 갑자기 몰려 시스템이 느려지고 있다. 이때 상태 확인용 명령으로 가장 부적절한 것은?
### 실행할 필요가 없거나, 또는 가장 후순위로 사용되는 명령을 고르시오 

![image](https://user-images.githubusercontent.com/68424403/173805068-c00bf792-c0f3-4967-b111-29c127decdc1.png)



### 정답

df
<br><br>

### 해설


<br><br><br>














# Q12
## [Linux] 여러 파일을 담고 있는 data라는 디렉토리가 있다. data 디렉토리를 완전히 제거하는 명령으로 가장 적절한 것은?
![image](https://user-images.githubusercontent.com/68424403/173805427-c9ad0426-e323-4a03-a1f9-1173e533bdb6.png)



### 정답
```linux
rm -rf data
```
<br><br>

### 해설


<br><br><br>







# Q13
## [SQL] 다음과 같이 두 개의 테이블이 있다. 출력 결과 이미지와 같이 출력하기 위한 쿼리 작성시 사용되지 않는 것은?
![image](https://user-images.githubusercontent.com/68424403/173805720-b1ff2b1c-30f3-470a-9fd8-e33ed08c85bf.png)


### 정답
union 절
<br><br>

### 해설


<br><br><br>





# Q14
## [SQL] 위 13번 문제에서 제시한 Dept 테이블과 Emp 테이블을 inner join 했을 때 출력되는 행의 수는?
![image](https://user-images.githubusercontent.com/68424403/173806096-1458dc14-a2ac-4d58-9a96-5be5a91d9bbf.png)





### 정답
9행
<br><br>

### 해설


<br><br><br>









# Q15
## RDBMS와 NoSQL (Document DB)의 특징이 올바르지 않은 것은?
![image](https://user-images.githubusercontent.com/68424403/173806303-a27c14e5-7d00-46e9-b3eb-ad2f3e1249f0.png)




### 정답
NoSQL은 데이터를 2차원 구조의 Collection이 담고 있다.  (X)
<br><br>

### 해설


- RDBMS의 특징


<br><br>

- NoSQL의 특징


<br>

|분류|RDBMS|NoSQL|
|---|---|---|
|개념|관계형 데이터베이스 관리 시스템(Relational DataBase Management System)|ㅁ| 
|사용 사례|MySQL<br> Oracle<br> PostgreSQL<br> IBM DB2 등|ㅁ|
|


<br><br>





<br><br><br>











# Q16
## [OS] Thread와 Process에 대한 설명 중 올바르지 않은 것은?
![image](https://user-images.githubusercontent.com/68424403/173806856-519518c0-2582-4477-9926-b73c233643e4.png)


### 정답
하나의 Process에는 하나의 Thread만 존재할 수 있다.


<br><br>

### 해설

- Thread: Process 내에서 실제로 실행되는 단위
- Thread는 CPU의 사용 효율을 높임
- CPU의 개수가 많아 여유가 있을 때 Process 방식이 Thread 방식보다 효율적이다.


<br><br><br>





# Q17
## Network 관련 설명 중 가장 올바른 것은?
![image](https://user-images.githubusercontent.com/68424403/173807147-c8c087cc-dd2a-4812-af43-995fe6b4a644.png)



### 정답
스위치, 허브, 라우터, 랜카드, 리피터 등은 모두 네트워크 장비의 일종이다.

<br><br>

### 해설

- 도메인 주소는 범용(모든) DNS에 뿌려져 저장된다.
- UDP는 전송결과를 알 수 없어 TCP에 비해 신뢰할 수 없다.
- 각 브라우저는 각자의 포트로 통신하므로 2개의 포트가 사용된다.



- 포트란?<br>
네트워크 서비스나 특정 프로세스를 식별하는 논리 단위<br>
컴퓨터끼리 정보를 교환하기 위해 사용하는 가상의 논리적 접속 위치<br>
포트를 사는 계층은 전송 계층 프로토콜이며, TCP(전송 제어 프로토콜)와 UDP(데이터그램 프로토콜)이 이에 해당된다.<br>





- TCP와 UDP의 특징<br>

|특징\명칭|TCP (전송 제어 프로토콜)|UDP (사용자 데이터그램 프로토콜)|
|---|---|---|
|개념|신뢰성 있는 데이터 통신을 가능하게 해주는 프로토콜|TCP보다 신뢰성이 떨어지지만 전송 속도가 일반적으로 빠른 프로토콜<BR> 비교적 데이터의 신뢰성이 중요하지 않을 때 사용 (영상 스트리밍 등)|
|통신 방식|Connection 연결 (3 way-handshake) - 양방향 통신|ㅁ|
|데이터의 순차전송|O|X|
|흐름 제어(Flow Control)|O|X|
|혼잡 제어(Congestion Control)|O|X|
|오류 감지(Error Detection)|O|O|
|데이터 전송을 위해 사용하는 프로토콜|TCP에서 데이터 전송을 위해 사용하는 프로토콜은 HTTP(하이퍼 텍스트 전송 프로토콜), HTTPs(하이퍼 텍스트 전송 프로토콜 보안), FTP(파일 전송 프로토콜), SMTP(단순 메일 전송 프로토콜)|UDP에서 데이터 전송을 위해 사용하는 프로토콜은 BOOTP(Bootstrap 프로토콜), DHCP(동적 호스트 구성 프로토콜), DNS(도메인 이름 서버), TFTP(간이 파일 전송 프로토콜)|
|기본 기능|데이터 패킷의 통신 프로세스를 시작하기 전에 항상 먼저 소스와 대상 호스트 간의 연결을 설정함|원본과 대상 끝 사이에 링크를 설정하지 않고 데이터를 대상 호스트로 직접 전달함|
|연결 유형|데이터 전송을 시작하기 전에 연결을 설정해야하며, 발신자와 수신자 간의 통신이 끝나면 통신 장치가 연결을 종료하거나 종료해야 함을 의미하는 연결 지향 프로토콜|소스와 대상 끝 사이에 연결을 설정, 유지 및 종료 할 의무가 없음을 나타내는 연결없는 프로토콜입니다. 브로드 캐스트 및 멀티 캐스트 목적에 가장 적합|
|속도|UDP보다 느림|TCP보다 빠르며 간단하며 효율적|
|신뢰|안정적 (데이터 전송을 시작하기 전에 연결을 설정해야 하며, 발신자와 수신자간 통신이 끝나면 통신 장치가 연결을 종료하거나 종료해야함을 뜻함)|신뢰할 수 없음 (데이터의 패킷 전달이 보장되지 않으므로 신뢰할 수 없는 프로토콜임)|
|문제점|전송의 신뢰성은 보장하나 매번 connection을 연결해서 시간 손실이 발생 (3 way-handshake), 패킷을 조금만 손실해도 재전송|


<br><br><br>
