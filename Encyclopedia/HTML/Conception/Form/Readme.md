# \<form>

## 정의

- 사용자로부터 입력 받을 수 있는 HTML 입력 폼(form)을 정의할 때 사용

## 포함하는 요소

- 다음 요소들 중 하나 이상을 포함할 수 있음

```html
<button>
<fieldset>
<input>
<label>
<option>
<optgroup>
<select>
<textarea>
```

## 사용할 수 있는 속성

|속성명|속성값|설명|
|:--:|:--:|:--:|
|action|URL|폼 데이터가 서버로 제출될 때, 해당 데이터가 도착할 URL을 명시|
|autocomplete|on, off|\<form> 요소에서 자동 완성 기능을 사용할지 여부를 명시|
|method|get, post|폼 데이터가 서버로 제출될 때 사용되는 HTTP 메서드를 명시|
|name|텍스트|\<form> 요소의 이름을 명시|
|target|_blank, _self, _parent, _top|폼 데이터를 서버로 제출한 후 받는 응답이 열릴 위치를 명시|

## form 요소

- 웹 페이지에서는 form 요소를 사용해서 사용자로부터 입력을 받을 수 있다
- 사용자가 입력한 데이터를 서버로 보낼 때 form 요소를 사용함

- form 요소 사용법
```
<form action="처리할 페이지 주소" method="get 또는 post"></form>
```
  - 코드 뜯어보기
    - `action` 속성: 입력받은 데이터를 처리할 서버 상의 스크립트 파일의 주소를 명시
    - `method` 속성: 입력받은 데이터를 서버에 전달할 방식을 명시

