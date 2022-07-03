# Demo form Build

- reddit, Google, Youtube 검색 폼을 빌드해보자<br>

- 빌드한 폼으로 서버에 데이터를 전송해보고 마지막에는 검색 페이지까지 만들어 보도록 하자<br>

- 폼 속성의 이점을 폼 제출 작업에 잘 이용하면서 정확한 패턴을 따르고 해당 값을 전송하는 입력값의 검색 쿼리에 대해 정확한 이름을 사용하기만 하면 된다<br>

```HTML
  <h2>Hijacking Searches</h2>
    <h3>Search Reddit</h3>

    <!-- 검색 폼 빌드하기 -->
    <!-- 데모에 있어 필수적인 요소: name, action -->
    <!-- 빌드한 폼으로 서버에 데이터를 전송해 보고 검색 페이지 제작 -->
    <!-- input값이 무엇이든 reddit.com/search로 전송된다. -->
    <!-- action의 속성값으로 제출할 URL 입력 (뭔가를 찾을 것이므로 /search 까지만 입력) -->
    <form action="https://www.reddit.com/search">
        <!-- 검색창에 dog를 search할 경우 실제 reddit 서버에서는 q=dog를 받을 거라 생각-->
        <!-- reddit 서버는 이 검색 쿼리로 q가 들어오도록 설정되어 있다-->
        <!-- 따라서 이 패턴에 맞춰 주어야 한다 -->
        <!-- 따라서 name="query"가 아니라 name="q"로 고쳐야 정상적인 검색 결과가 나온다 -->
        <input type="text" name="q">
        <button>Search Reddit</button>
    </form>

    <h3>Search Google</h3>
    <!-- 위의 사례를 활용하여 구글 검색 폼 만들기 -->
    <form action="https://www.google.com/search">
        <input type="text" name="q">
        <button>Search Google</button>
    </form>

    <h3>Search Youtube</h3>
    <!-- (동일 패턴을 따르지 않는) 유튜브 검색 폼 제작 -->
    <!-- 검색 용어의 name을 정하는 것은 전적으로 서버나 회사 및 개발자 측에 달려있다 -->
    <form action="https://www.youtube.com/results">
        <input type="text" name="search_query">
        <!-- 버튼이 없더라도 계속 Enter를 눌러서 폼을 제출할 수 있다-->
        <button>Search youtube</button>
    </form>
```

## \<checkbox>

```html
<input type="checkbox" id="scale" name="scales" checked />
<label for="scales">Scales</label>
```

- \<checkbox>는 name과 id를 입력해서 label 해야한다<br>
  => 그렇지 않으면 복잡해져서 무엇과 관련되어있는지 알아보기 힘들고, 내가 뭘 체크하는지 알 수가 없게 된다<br>

```html
<!-- checkbox -->
<h2>More Inputs!</h2>
<form action="/birds">
  <!-- tos: Terms Of Service -->
  <input type="checkbox" name="agree_tos" id="agree" checked />
  <label for="agree">I agree to everything</label>
  <!-- 이 버튼 클릭시 URL => /birds?agree_tos=on -->
  <button>Submit</button>
</form>
```

<br><br>

## \<radio>

- 기본꼴<br>

```html
<input type="radio" id="danny" name="kim" value="danny" checked />
<label for="danny">Danny</label>
```

- 사용예시<br>

```html
<!-- checkbox -->
<h2>More Inputs!</h2>
<form action="/birds">
  <!-- tos: Terms Of Service -->
  <input type="checkbox" name="agree_tos" id="agree" checked />
  <label for="agree">I agree to everything</label>
  <!-- 이 버튼 클릭시 URL => /birds?agree_tos=on -->
  <button>Submit</button>
</form>

<!-- Radio box -->
<!-- 버튼 3개 => 개별적인 존재-->
<h2>More Inputs!</h2>
<form action="/birds">
  <input type="checkbox" name="agree_tox" id="agree" />
  <label for="agree">I agree to everything</label>
  <p>
    <input type="radio" name="" id="" />
    <input type="radio" name="" id="" />
    <input type="radio" name="" id="" />
  </p>
  <button>Submit</button>
</form>

<!-- 버튼 3개 => 같은 name을 부여해서 서로를 연결 하였음 -->
<form action="/birds">
  <input type="checkbox" name="agree_tox" id="agree" />
  <label for="agree">I agree to everything</label>
  <p>
    <label for="xs">XS</label>
    <input type="radio" name="size" id="" />
    <input type="radio" name="size" id="" />
    <input type="radio" name="size" id="" />
  </p>
  <button>Submit</button>
</form>

<h3>value 없는 케이스</h3>
<!-- 버튼 3개 => 같은 name을 부여해서 서로를 연결 -->
<form action="/birds">
  <input type="checkbox" name="agree_tox" id="agree" />
  <label for="agree">I agree to everything</label>
  <p>
    <!-- name: size로 통일 => 3개 중 한개의 버튼 클릭 후 제출시 URL에 size=on이 등장 -->
    <!-- 무슨 사이즈를 선택했는지 알 수 없으므로 size=on은 도움이 되지 않는다.-->
    <label for="xs">XS</label>
    <input type="radio" name="size" id="xs" />
    <label for="s">S</label>
    <input type="radio" name="size" id="s" />
    <label for="m">M</label>
    <input type="radio" name="size" id="m" />
  </p>
  <button>Submit</button>
</form>

<h3>value 추가한 케이스</h3>
<!-- 무슨 사이즈를 선택했는지 알 수 있도록 value 추가한 케이스-->
<!-- value는 제출했을 때 실제로 서버에 전송되는 값이다 -->
<!-- 그러므로 각각의 value가 있어야 하고, 또 각각은 달라야 한다 -->
<!-- value안에 입력한 것은 사용자에게 표시되지 않는다-->
<!-- 하지만 폼이 제출되면 value에 입력한 것이 전송된다 -->

<form action="/birds">
  <input type="checkbox" name="agree_tox" id="agree" />
  <label for="agree">I agree to everything</label>
  <p>
    <!-- value 추가 => 3개 중 한개의 버튼 클릭 후 제출시 URL에 size=value에 해당하는 값이 등장 -->
    <!-- 여기서 XS클릭후 제출시 URL에 size=xs 라고 나옴-->
    <label for="xs">XS</label>
    <!-- 개별적인 요소들을 하나의 그룹으로 묶으려면 name을 꼭 입력해야 한다 -->
    <!-- 그래야 여러 선택지 중 딱 하나만 선택할 수 있다-->
    <input type="radio" name="size" id="xs" value="xs" />
    <label for="s">S</label>
    <input type="radio" name="size" id="s" value="s" />
    <label for="m">M</label>
    <input type="radio" name="size" id="m" value="m" />
  </p>
  <button>Submit</button>
</form>
```

<br><br>

## \<select>

- 사실상 드롭다운 메뉴이다<br>

- select 내에서 option을 사용하는 것이 핵심이다<br>

- 기본 꼴<br>

```html
<label for="pet-select">Choose a pet!</label>

<select name="pets" id="pet-select">
  <!-- 첫번째 옵션이 dummy이거나 placeholder일 경우 value는 의미 없음(value의 속성값인 ""내에 아무것도 없으므로) -->

  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
</select>
```

<br>

- 사용예시<br>

```html
<!-- select -->
<!-- select와 option 두가지의 요소가 함께 기능하여 나오는 결과물이다 -->
<!-- select는 상위요소이며 여러 option을 한 그룹으로 묶는다 -->
<!-- 정보 제출시 option에 있는 value가 전송된다-->
<!-- label을 하려면 select에 name과 id를 넣어야 한다 -->

<h2>Select Exmaple</h2>
<form action="/birds">
  <p>
    <label for="meal">Please Select a Entree</label>
    <select name="meal" id="meal">
      <!-- 첫번째 옵션이 dummy이거나 placeholder일 경우 value는 의미 없음(value의 속성값인 ""내에 아무것도 없으므로) -->
      <option value="fish">Fish</option>
      <option value="veg">Vegitarian</option>
      <option value="steak">Steak</option>
    </select>
  </p>
  <!-- Steak 클릭 후 제출시 male=steak -->
  <!-- 이 텍스트는 Steak(텍스트)가 아닌 value의 steak이다 -->
  <button>Submit</button>
</form>

<!-- select 미리 선택해놓는 케이스 -->
<h2>Select Exmaple- 미리 선택해놓는 케이스</h2>
<form action="/birds">
  <p>
    <label for="meal">Please Select a Entree</label>
    <select name="meal" id="meal">
      <!-- 첫번째 옵션이 dummy이거나 placeholder일 경우 value는 의미 없음(value의 속성값인 ""내에 아무것도 없으므로) -->
      <option value="fish">Fish</option>
      <option value="veg" selected>Vegitarian</option>
      <option value="steak">Steak</option>
    </select>
  </p>
  <!-- Steak 클릭 후 제출시 male=steak -->
  <!-- 이 텍스트는 Steak(텍스트)가 아닌 value의 steak이다 -->
  <button>Submit</button>
</form>
```

<br><br>
