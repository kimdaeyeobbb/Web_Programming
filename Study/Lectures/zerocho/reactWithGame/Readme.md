# 1. 구구단

## 웹페이지

- 네이버, 다음 등 포털 (구글은 SPA)
- 각 페이지들이 명확하게 나뉘어 있음

## SPA

- Single Page Application
- 리액트는 SPA를 만들 때 사용
- 웹상에서 웹사이트(네이버, 다음 등)가 아니라 웹앱이나 모바일 앱처럼 앱같은 느낌이 나는 사이트
- 외관상 특징 외에도 기능적으로도 웹 애플리케이션이 많은 기능을 제공함
- 첫 웹애플리케이션은 `Gmail`
  - 웹 사이트가 아닌 하나의 애플리케이션 같은 느낌이 듦
  - 웹 사이트가 아니라 웹에서 다양한 애플리케이션을 돌릴 수 있음 (웹에서 엑셀 작업을 하는 등)

### 웹 애플리케이션

- 전통적인 가존의 웹 사이트에 비해 데이터들이 많음

### 리액트

- 페이스북에서 만듦
- 페이스북도 웹 사이트가 아니라 하나의 애플리케이션처럼 보임
- 페이스북은 전통적인 MVC 패턴으로 만들었던 웹 사이트를 싹 버리고 리액트를 만들어서 데이터와 화면의 불일치 문제를 해결함 (닉네임을 바꾸었는데, 어떤 화면에서는 바뀐 닉네임이 적용되지만 일부 화면에서는 여전히 예전의 닉네임이 나타나는 현상 등)
- 리액트 사이트를 리액트 없이 만들어보고 필요성을 느껴보는 것이 좋다
- 리액트 공식문서는 SPA (하지만 이런 간단한 웹 사이트는 SPA로 만들필요가 없다. 단지 트렌드가 SPA로 만드는 것일 뿐이다)
- 리액트를 도입한다고 하면 장점만 존재하는 것은 아님
  - 화면 깜빡임, 데이터와 화면의 일치화 문제 등은 해결하기 쉽다
  - 하지만 검색 엔진 노출시 어려움이 존재.
  - 구글이나 미국쪽 포탈들은 자바스크립트 엔진이 뛰어나기 때문에 거의 다 자바스크립트로 이루어져있어도 파악을 함.
  - 하지만 네이버나 다음은 리액트로만 이루어진 웹사이트를 분석을 잘 못하는 경우가 발생
    - 이에따라 검색엔진에 잘 노출이 되지 않을 수 있다
- 검색 엔진 노출등이 중요하면 일반 HTML/CSS,JS로 만드는 것도 좋음

## FE 개발자

- FE개발자의 기본 소양은 HTML/CSS,JS이지 리액트가 아니다
- 이 기본기가 잘 되어 있어야 리액트로도 훌륭한 웹 애플리케이션을 만들 수 있으므로 기본기를 꾸준히 해야한다.
- 자바스크립트의 기본문법을 모르면 리액트를 할 때 엄청나게 막힐 것이다.
  - 특히 스코프나 실행컨텍스트 부분은 잘 이해를 해두어야 한다.

<hr>
<br>

## 기본코드

### 코드1
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>웹 게임</title>
</head>
<body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
</html>
```

- `create react app`은 해주는 것이 많다. 그런 도움을 처음부터 받게되면 습관이 나빠진다. 따라서 원시적인 형태부터 시작하는게 좋다.

### 코드2

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>웹 게임</title>
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
</body>
</html>
```

- 실무에서는 코드를 이렇게 짜서 사용한다.
  - 코드1은 개발용 코드이다. 코드2는 배포용이다. 하지만 진짜 실무에서는 이 두개처럼 사용하지않고, webpack&babel등을 사용한다.

## 리액트의 2가지 방식

### 1. 클래스 방식

```js
class LikeButton extends React.Component{
    
}
```

### 2. 함수 방식

```js
const LikeButton = () => {}
function LikeButton(){}
```

- 클래스 방식은 요즘 안씀 (99%는 함수형, 1%는 사용함 - error boundary에서 클래스형 방식 사용)

### 클래스 방식 기본 예시

```js
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked: false}
    }
    render(){
        if (this.state.liked){
            return "You liked this."
        }
        
        return React.createElement("button", {onClick: () => this.state({liked: true})}, "Like")
    }
}
```

- 이 예시는 정말 원시적인 형태이므로 실무에서도 볼 일이 없을 것임

## 리액트

- 리액트는 js로 구성되어있다
- 리액트는 데이터 중심으로 움직인다
- LikeButton은 컴포넌트이다.
- 리액트는 화면과 데이터를 일치시켜 줌
- 데이터가 바뀌면 화면은 자동으로 바뀌게 되어 있다

### 컴포넌트

- 데이터와 화면을 하나로 묶어놓은 덩어리

- state가 `데이터`에 해당됨
  - 화면상에서 바뀔 부분을 state로 만들어 두면 됨
```js
this.state = {liked: false}
```

- render의 return 부분이 `화면`에 해당됨

```js
render() {
    if (this.state.liked){
        return "You liked this."
    }
    
    return React.createElement("button", {onClick: () => this.state({liked: true})}, "Like")
  // 여기가 화면에 해당됨
}
```

- 지금 이 코드를 돌리면 화면에 뜨지 않는다. 왜냐? 
  - 컴포넌트는 만들었으나, 컴포넌트를 화면에 그리는 작업을 하지 않았기 때문이다!

## 컴포넌트를 화면에 그리기 (17버전 코드)

- 예제 코드
```html
<script>
  ReactDom.render(React.createElement(LikeButton), document.querySelector('#root'));
</script>
```
- 예제 코드 해석
  - LikeButton이라는 컴포넌트를 `<div id='root'></div>` 안에다가 다음의 코드를 그리는 것

- `다음의 코드`에 해당되는 코드
```js
'use strict'
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e('button', {onClick: () => this.setState({liked: true})}, 'Like');
  }
}

```

### 결과 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>웹 게임</title>
</head>
<body>
<div id="root"></div>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<!--<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>-->
<!--<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>-->
<script>
    'use strict';

    const e = React.createElement;

    class LikeButton extends React.Component {
        constructor(props) {
            super(props);
            this.state = {liked: false};
        }

        render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return e('button', {onClick: () => this.setState({liked: true})}, 'Like');
        }
    }
</script>
<script>
    ReactDOM.createRoot(document.querySelector('#root')).render(e(LikeButton));
</script>
</body>
</html>

```


## 문제 발생

- 위의 예제코드는 자바스크립트만으로 다루다 보니까 가독성이 좋지 않다
- 이 경우 JSX를 사용하도록 해보자

## JSX

- 자바스크립트이지만 HTML 느낌이 나는 문법을 구사함

## onClick에 화살표함수를 왜 사용할까?

```js
addEventListener('click', () => this.setState({liked: true}))
```