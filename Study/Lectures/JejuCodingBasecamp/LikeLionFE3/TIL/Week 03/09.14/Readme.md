# 9월 14일자 학습내용

## text align

- 초기값은 left

- 인라인 블록 요소를 정렬할 때 사용

- p는 블록 레벨 요소.

- justify: 마지막 라인을 제외하고 텍스트를 양쪽 끝으로 정렬함

- 세로 정렬을 원하면 padding, margin 속성을 추가로 이용하자

- [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/text-align)

- 가운데 정렬하기 위해 추가로 사용하면 좋은 것

```CSS
text-align: center;
display: inline-block;
width: 100px;
```

```css
text-align: center;
마진은 요소의 크기에 포함되지 않음 (투명한 공간)
```

## 수직 정렬

- block level element
- inline element

## line-height

- 글씨의 높이값 설정
- height와 line-height를 맞추면 수직정렬이 됨
- line-height 설정시 font-size를 빼고 나머지를 half-leading 영역에 골고루 배치시킴
- 한 줄 텍스트를 수직 정렬하고 싶을 경우에 사용하면 좋음

## text-overflow

- white-space?

- text-overflow: ellipsis?

- width는 말줄임에 있어서 꼭 필요한 것은 아님

- flex는 컨테이너의 자식 요소의 레이아웃을 만들기 위해 사용하는 속성

- flex는 완전하게 표준화가 진행되지 않았음.

## position: relative

- 상대적인 속성을 가지고 있음
- 자신이 있어야 하는 위치에 있어 상대적임
- 자신이 있던 자리를 기억함

## position: absolute

## float

- 블록레벨요소도 정렬시켜줌

<br><br>

# 내용 추가

## position property

- 요소의 위치를 결정

### static (기본위치)

- position property의 default value
- position property를 지정하지 않은 경우와 동일

- 기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치되며 부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치됨

- 이미 설정된 position을 무력화하기 위해 사용될 수 있음
- 좌표 프로퍼티 (top, bottom, left, right)를 같이 사용할 수 없으며 사용할 경우에는 무시됨.

```html

```

### relative (상대위치)

- [코드](./review/position2.html)

- 기본 위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동시킨다.

- static을 선언한 요소와 relative를 선언한 요소의 차이점은 좌표 프로퍼티의 동작 여부뿐이고 그외는 동일하게 작동한다.

### absolute (절대위치)

- [코드](./review/position3.html)

- 부모 요소 또는 가장 가까이 있는 조상 요소를 기준으로 좌표 프로퍼티 (top, bottom, left, right)만큼 이동한다.

- absolute는 static을 제외한 position 속성값을 가진 가장 가까운 부모의 박스 내를 기준으로 위치하게 됨. (마치 relative가 static의 속성값이었을 때의 자리를 유념하고 있는것처럼 말이다.)

- relative, absolute, fixed 프로퍼티가 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정된다.

- 부모 또는 조상 요소가 static인 경우 document body(`<body>` 요소를 반환함. `<body>`와 동일하다)를 기준으로 해서 property 대로 위치하게 됨

- 따라서 부모 요소의 배치를 기준으로 삼기 위해서는 부모 요소에 relative를 정의해야 함. 이때 다른 요소가 먼저 위치를 점유하고 있더라도 뒤로 밀리지 않고 덮어쓰게 됨.

- absolute를 선언하면 block level element의 width는 inline 요소와 같이 content에 맞게 변화하므로 적절한 width를 지정하여야 함.

#### 블록레벨 vs 인라인 레벨

- 블록레벨: 부모 요소의 전체 공간을 차지하여 블록을 생성
- 인라인 요소: 컨텐츠 흐름을 끊지 않고, 요소를 구성하는 태그에 할당된 공간만 차지함.

#### relative property vs absolute property

- relative property

  - 기본 위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동시킴. 따라서 무조건 부모를 기준으로 위치하게 됨.

- absolute property

  - 부모에 static 이외의 position 프로퍼티가 지정되어있을 경우에만 부모를 기준으로 위치하게 됨. 만약 부모나 조상이 모두 static 프로퍼티인 경우 document body를 기준으로 위치하게 됨

### fixed (고정위치)

- [코드](./review/position4.html)

- 부모 요소와 관계없이 브라우저는 뷰포트를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동시킴

- 스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치함

- fixed 프로퍼티 선언 시, block 요소의 width는 inline 요소와 같이 content에 맞게 변화하므로 적절한 width를 지정하여야 함
