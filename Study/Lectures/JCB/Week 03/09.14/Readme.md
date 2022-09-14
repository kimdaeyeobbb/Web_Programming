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

- ㅁ
