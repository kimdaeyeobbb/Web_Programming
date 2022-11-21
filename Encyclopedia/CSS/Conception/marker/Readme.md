# ::marker

- CSS 가상요소 선택자이며, 리스트 아이템의 마커 박스를 선택함.<br>
(마커 박스: 목록을 나타내는 항목이며, 글머리 기호나 숫자를 포함한다.)

- \<il>나 \<summary>와 같은 `display:list-item`로 설정된 모든 요소 또는 가상 요소에서 작동

## 사용 예시
```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <style>
      li::marker {
        content: "★";
      }
    </style>
  </head>
  <body>
    <p>Group known as Mercury Seven:</p>
    <ul>
      <li>Malcolm Scott Carpenter</li>
      <li>Leroy Gordon (Gordo) Cooper Jr.</li>
      <li>John Herschel Glenn Jr.</li>
      <li>Virgil Ivan (Gus) Grissom</li>
      <li>Walter Marty (Wally) Schirra Jr.</li>
      <li>Alan Bartlett Shepard Jr.</li>
      <li>Donald Kent (Deke) Slayton</li>
    </ul>
  </body>
</html>
```

- 결과

![image](https://user-images.githubusercontent.com/68424403/202888192-aa7392a0-de12-4ac0-96d7-dfb676d2f54e.png)


### 추가- ul, li

- \<ul>의 기본값
```css
ul {
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
```



- \<li>의 기본값
```css
li {
  display: list-item;
}
```

- 에릭마이어의 reset css

```css
ul {
  list-style: none;
}
```


### 관련 자료

- https://developer.mozilla.org/en-US/docs/Web/CSS/::marker
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
- https://www.w3schools.com/tags/tag_ul.asp
- https://www.w3schools.com/tags/tag_li.asp




