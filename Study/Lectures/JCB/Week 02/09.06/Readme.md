# 이미지 및 폰트 사용

- 이미지는 상업적 용도로 사용하지 않는게 좋다
- 웬만하면 남의 이미지나 폰트를 사용하지 않는게 좋다
- 폰트는 저작권을 확인하고 사용해야함
- 브로커가 해당 부분에 있어 합의금을 요구할 수 있다

<br>

# 경로

- 절대경로

  - 현재 파일의 위치와 관련없이 열 수 있는 경로

  ```html
  <img src="http://paullab.co.kr/images/ceo.png" alt="이미지" />
  ```

- 상대경로

  - ㅁ

  ```html

  ```

- .. (상위 경로)
  `../`

<br>

# 스크린 리더

- 다음과 같이 alt를 상세하게 적어줘야 스크린 리더가 읽었을 때 효과적임

```html
<img src="./jeju.jpg" alt="뛰놀며 기뻐하는 라이켓" />
```

# x서술자, w서술자, sizes 속성

- x 서술자

```html
<img
  width="200px"
  srcset="img/logo_1.png 2x, img/logo_2.png 3x"
  src="jeju.png"
  alt="test"
/>
```

- w서술자

  - <b>픽셀이 아닌 w로 표시</b>

  ```html

  ```
