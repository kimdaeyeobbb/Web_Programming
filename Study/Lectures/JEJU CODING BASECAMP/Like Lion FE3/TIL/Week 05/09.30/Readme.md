# 22.09.30

- 브라우저에서 자바스크립트를 실행 (웹에서 실행 X)
- 자바스크립트를 실행 할 수 있는 환경 <br>
  => 익스플로러, 파이어폭스, 크롬...
- 과거에 `.sort()`는 표준이 없었음 (지금은 알고리즘이 Tim sort로 통합)
- 노드

  - 서버가 아닌 실행 환경임
  - node환경 = v8 + a
  - 폴더 생성등을 수행
  - 노드로 서버를 구성

- 자바스크립트를 이루는 코어는 대부분 C++로 구성
- 생산성은 뷰가 더 높다
- script태그는 대부분 body의 밑에 존재함 (위치에 따른 차이점 파악할 것)
- 함수 vs 메서드

  - 메서드: 클래스 내부에 포함된 것
  - 예시) document뒤에 점을 찍었을 때 점 뒤에 나오는 것

- innerHTML => HTML 코드를 포함할 수 있게됨

- 메서드 체이닝

  - 점으로 연결되어 다음라인으로 옮기는 것

- 노드환경에서는 브라우저가 아닌 쉘창(터미널)이 개발자 도구가 됨

- 자바스크립트 예제

```js
document.getElementById("one").innerHTML = "hello <strong>world</strong>";
console.log("hello world 2");
window.alert("hello world 3"); // 우선순위를 가지는 것인지 파악 후 다시 기재
document.write("hello world 4");
```

- window

  - 브라우저의 크기와 관련되미

- innerHTML

  - 특정 요소의 메서드 (요소를 찍어내야만 요소에 대한 결과가 innerHTML에 들어감. 요소의 메서드이지, document의 메서드가 아니다)
