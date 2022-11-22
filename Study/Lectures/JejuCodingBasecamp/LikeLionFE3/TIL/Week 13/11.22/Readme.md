# 22.11.22 (화) 수업

# Redux

## 전개구문

- 예시

```jsx
state = { one: "red", two: "blue" };
newState = { ...state, three: "green" }; // state는 전개구문을 사용
newState;
// {one: 'red', two: 'blue', three: 'green'}
// 기존의 state를 전개해서 가지고 있음 (유지하고 있음)

state = newState;
state = { ...state, four: "red" };
state; // {one: 'red', two: 'blue', three: 'green', four: 'red'}
```

## without redux

- [참고자료](../11.21/Redux/001/without-redux.html)

- 예시

```html
<html>
  <body>
    <style>
      .container {
        border: 5px solid black;
        padding: 10px;
      }
    </style>
    <div id="red"></div>
    <div id="green"></div>
    <div id="blue"></div>
    <div id="pink"></div>
    <div id="grey"></div>

    <script>
      function red() {
        document.querySelector("#red").innerHTML = `
                <div class="container" id="component_red">
                    <h1>red</h1>
                    <input type="button" value="fire" onclick="
                    document.querySelector('#component_red').style.backgroundColor = 'red';
                    document.querySelector('#component_green').style.backgroundColor = 'red';
                    document.querySelector('#component_blue').style.backgroundColor = 'red';
                    ">
                </div>
            `;
      }
      red();
      function green() {
        document.querySelector("#green").innerHTML = `
                <div class="container" id="component_green">
                    <h1>green</h1>
                    <input type="button" value="fire" onclick="
                    document.querySelector('#component_red').style.backgroundColor = 'green';
                    document.querySelector('#component_green').style.backgroundColor = 'green';
                    document.querySelector('#component_blue').style.backgroundColor = 'green';
                    ">
                </div>
            `;
      }
      green();
      function blue() {
        document.querySelector("#blue").innerHTML = `
                <div class="container" id="component_blue">
                    <h1>blue</h1>
                    <input type="button" value="fire" onclick="
                    document.querySelector('#component_red').style.backgroundColor = 'blue';
                    document.querySelector('#component_green').style.backgroundColor = 'blue';
                    document.querySelector('#component_blue').style.backgroundColor = 'blue';
                    ">
                </div>
            `;
      }
      blue();
      function pink() {
        document.querySelector("#pink").innerHTML = `
                <div class="container" id="component_pink">
                    <h1>blue</h1>
                    <input type="button" value="fire" onclick="
                    document.querySelector('#component_red').style.backgroundColor = 'pink';
                    document.querySelector('#component_green').style.backgroundColor = 'pink';
                    document.querySelector('#component_blue').style.backgroundColor = 'pink';
                    document.querySelector('#component_pink').style.backgroundColor = 'pink';
                    document.querySelector('#component_grey').style.backgroundColor = 'pink';
                    ">
                </div>
            `;
      }
      pink();
      function grey() {
        document.querySelector("#blue").innerHTML = `
                <div class="container" id="component_grey">
                    <h1>blue</h1>
                    <input type="button" value="fire" onclick="
                    document.querySelector('#component_red').style.backgroundColor = 'grey';
                    document.querySelector('#component_green').style.backgroundColor = 'grey';
                    document.querySelector('#component_blue').style.backgroundColor = 'grey';
                    document.querySelector('#component_pink').style.backgroundColor = 'grey';
                    document.querySelector('#component_grey').style.backgroundColor = 'grey';
                    ">
                </div>
            `;
      }
      grey();
    </script>
  </body>
</html>
```

### 문제점

- 새로운 컴포넌트가 생성될 때 코드가 컴포넌트 개수만큼 기하급수적으로 늘어남

- 새로운 컴포넌트를 만든 경우 이전 컴포넌트도 모두 수정을 해야하는 이슈가 발생함

- 한줄이 하나의 컴포넌트라여기면, 이전의 컴포넌트가 수정되지 않았으므로 원하는 바가 반영되지 않음

## with redux

- [참고자료](../11.21/Redux/001/with-redux.html)

- 새로운 컴포넌트가 생성이 될때 코드가 늘어나지 않음
- 따라서 새로운 컴포넌트 안에서만 코딩하면 됨

<br>

#
