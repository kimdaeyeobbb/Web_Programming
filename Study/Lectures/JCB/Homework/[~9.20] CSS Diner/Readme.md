# Combine the Class Selector

`A.className`<br>
class이름이 className인 A요소를 선택

<br>

`#big.wide`<br>
class명이 wide이면서 id명이 big인 요소 선택

<br><br>

# Combine the Universal Selector

`A * `<br>
=> A 내부에 있는 모든 요소를 선택

<br>

`p *`<br>
=> p태그 내부에 있는 모든 요소를 선택

<br>

`ul.fancy *`<br>
=> `ul class="fancy"`요소 내에 있는 모든 요소를 선택

<br><br>

# Adjacent Sibling Selector

- `p + .intro`<br>
  => `<p>`와 직접적으로 인접해있는 `class="intro"`를 가진 모든 요소를 선택

<br>

- `div+a`<br>
  => `<div>`와 직접적으로 인접한 모든 `<a>`태그를 선택

<br><br>

# General Sibling Selector

- `A ~ B`<br>
  => A뒤에 나오는 모든 B요소를 선택

<br><br>

# First Child Pseudo-selector

- `A:first-child`<br>
  => A중 첫번째 요소를 선택

  <br>

- `p:first-child`<br>
  => `<p>`에 해당되는 것들 중 첫번쨰 요소를 선택

  <br>

- `div p:first-child`<br>
  => `<div>`안에 있는 `<p>`에 해당되는 것들 중 첫번째 요소를 선택

<br><br>

# Only Child Pseudo-selector

- `A:only-child`<br>
  => 부모 요소에 포함되어있는(nesting) 유일한 자식인 모든 A요소를 선택

- `span: only-child` <br>
  => 다른 요소의 유일한 자식인 span을 선택

<br>

- `ul li:only-child`<br>
  => `<ul>` 내에 존재하는 `<li>` 요소를 선택

<br><br>

# Last Child Pseudo-selector

- `:last-child`<br>
  => 모든 last-child 요소를 선택

  <br>

- `span:last-child`<br>
  => 모든 last-child `<span>`요소를 선택

<br>

- `ul li:last-child`<br>
  => 어떤 `<ul>`에 속하는 마지막 `<li>` 요소를 선택

<br><br>

# Nth Child Pseudo-selector

- `:nth-child(A)`<br>
  => n번째 자식 요소를 선택

<br>

- `div p:nth-child(2)`<br>
  => 모든 `<div>`의 하위에 존재하는 `<p>` 중 두번째 `<p>` 를 선택

<br><br>

# Nth Last Child Selector

- `:nth-last-child(A)`<br>
  => A 순번의 카운팅을 아래에서부터 해서 A번째에 해당하는 자식 last child element를 선택<br>
  (순번이 위에서부터가 아니다)<br>

- 형제 그룹 간의 위치를 기반으로 요소를 찾는다는 점에 유의하도록 하자
- 아래의 예시는 1)을 선택하는 예시이다(첫번째 bento 선택)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select the 1st bento</title>
    <style>
      /* 1)을 선택 */
      plate:nth-child(3) {
      }
    </style>
  </head>

  <body>
    <div class="table">
      <plate />
      <bento />
      <!-- 1) -->
      <plate>
        <orange />
        <orange />
        <orange />
      </plate>
      <bento />
    </div>
  </body>
</html>
```

<br><br>

# :first-of-type

- 특정 타입의 첫번쨰 요소를 선택함

- `span:first-of-type`<br>
  => 어떤 요소 내의 첫번째 `<span>`태그를 선택

<br><br>

# :nth-of-type(A)

- 특정한 요소를 선택 (예: 짝수, 홀수 등)할 때 사용

- `div:nth-of-type(2)`<br>
  => `<div>`의 두번쨰 인스턴스를 선택함

- `.example:nth-of-type(odd)`<br>
  => `example` 클래스의 모든 홀수 인스턴스를 선택

<br><br>

# C:nth-of-type(An+B)

- B에서 시작해서 매 A번째에 존재하는 C태그를 선택

- `span:nth-of-type(6n+2)`<br>
  => 2번쨰 인스턴스부터 시작해서 매 6의 배수위치에 존재하는 `<span>`태그를 선택

<br><br>

# :only-of-type

- 동일한 타입의 형제가 없는 요소를 나타냄

- `p span:only-of-type` <br>
  => `<p>`태그 내에 존재하는 <b>유일한</b> `<span>` 태그를 선택함<br>(span 태그내에 p태그가 여러개 있는 영역은 해당 사항이 없음)

<br><br>

# A:last-of-type

- 모든 요소 중 마지막 `A`를 선택함

- `p span: last-of-type`<br>
  => 모든 `<p>`태그 내에 존재하는 `<span>`태그 중 마지막 `<span>` 태그를 선택함

  <br><br>

# A:empty

- A 내부에 아무 요소도 가지지 않은 A 요소를 선택

- `div:empty` <br>
  => 모든 비어있는 `<div>`요소를 선택함

<br><br>

# A:not(x)

- x조건에 맞지 않는 A를 선택

- `:not(#fancy)`<br>
  => `id="fancy"`가 아닌 모든 요소를 선택함<br>

- `div:not(:first-child)`<br>
  => first-child가 아닌 모든 `<div>` 태그를 선택함<br>

- `:not(.big, .medium)`<br>
  => `class="big"` 이나 `class="medium"`이 아닌 모든 요소를 선택함<br>

<br><br>

# Attribute Selector

- 특정한 attribute를 가진 모든 요소를 선택

- `a[href]`<br>
  => `href="anything"` attribute를 가진 모든 `<a>` 요소를 선택<br>

- `[type]`<br>
  => `type="anything"` attribute를 가진 모든 요소를 선택

- 예시
  - `[for]`은 `~for`꼴인 요소를 선택

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select the items for someone</title>
    <style>
      /* 누군가를 위한 아이템 3개의 공통점 - for="~"꼴 */
      [for] {
      }
    </style>
  </head>

  <body>
    <div class="table">
      <bento>
        <apple class="small" />
      </bento>
      <apple for="Ethan" />
      <plate for="Alice">
        <pickle />
      </plate>
      <bento for="Clara">
        <orange />
      </bento>
      <pickle />
    </div>
  </body>
</html>
```

<br><br>

# A[attribute]

- 특정 attribute를 가진 모든 요소를 선택

- `[value]`<br>
  => `value="anything"` attribute를 지닌 모든 요소를 선택함<br>

- `a[href]`<br>
  => `href="anything"` attribute를 지닌 모든 `<a>`요소를 선택함<br>

- `input[disabled]`<br>
  => `disabled` attribute를 지닌 모든 `<input>` 요소를 선택함<br>

<br><br>

# Attribute Value Selector

- `[attribute="value"]`<br>
  => 특정 attribute value를 지니는 모든 요소를 선택<br>

- `input[type="checkbox"]`<br>
  => 모든 `checkbox input` 요소를 선택<br>

<br><br>

# Attributes Starts With Selector

- `[attribute^="value"]`<br>
  => 특정 문자로 시작하는 모든 요소를 선택<br>

- `.toy[category^="Swim"]`<br>
  => `toy` 클래스를 가지면서 `category="Swimmer"` 이거나 `category="Swimming"`와 같이 `Swim`으로 시작하는 요소들을 선택함<br>

<br><br>

# Attribute Ends With Selector

- `[attributes$="value"]`<br>
  => 특정 문자로 끝나는 모든 요소를 선택함<br>

- `img[src$=".jpg"]`<br>
  => `.jpg`이미지를 보여주는 모든 이미지를 선택<br>

  <br><br>

# Attribute Wildcard Selector

- `[attribute*="value"]`<br>
  => 특정 문자를 atrribute value로 가지는 모든 요소를 선택<br>

- `class`, `href`, `src`아 같은 특정 패턴을 확인할 때 유용한 선택자<br>

- `img[src*="/thumbnails/"]`<br>
  => `thumbnails` 폴더로부터 이미지를 보여주는 모든 `img` 요소를 선택<br>

- `class["heading"]`<br>
  => `class="main-heading"`이나 `class="sub-heading"`와 같이 `"heading"`을 지닌 클래스를 선택
