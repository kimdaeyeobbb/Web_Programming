# 22.11.17 (목)

# 031 중첩된 라우터부터 진행

## step1

```
https://www.studyin.co.kr/
https://www.studyin.co.kr/login
https://www.studyin.co.kr/study
https://www.studyin.co.kr/notice
```

<br>

## step2

```
https://www.studyin.co.kr/study/6 에 들어갔을 때에 <p> 6번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 6번 게시물을 요청해야 함</p>
```

```

```

<br>

## 최종목표

```
https://www.studyin.co.kr/
https://www.studyin.co.kr/login
https://www.studyin.co.kr/study/6
https://www.studyin.co.kr/study/6/chat
https://www.studyin.co.kr/study/6/memo
https://www.studyin.co.kr/notice
https://www.studyin.co.kr/notice/recruit
https://www.studyin.co.kr/notice/business
```

### url 구조

- url 구조가 rest api 규칙을 따르기가 어려운 것이 해커가 어떻게 짰을 것이라고 유추하지 못하게 하기 때문이다.

- 따라서 url을 꼬는 것이다.
- 공개되어도 되는 페이지는 넘버링을 해준다. 하지만 이렇게 하려면 비밀게시물이 없어야 한다.

```
/product/1
/product/2 -> 비밀게시물이었으면 인증이 들어감. 어차피 못봄. 인증을 우회할 가능성을 보는 것임
/product/3 ->
```

- 날짜와 시간을 해쉬한 값을 보통 슬라이싱해서 넣음 (이러면 해커가 유추하기 힘듦)

```
/products/hash(날짜시간)
```

- 보안을 하지 않은 것의 예시 (공개되어도 되는 게시물)

```
inflearn.com/course/스프링-mvc-1
inflearn.com/course/스프링-mvc-2
```

- 보안을 한 것의 예시
  - 아직 공개되지 않은 강의들 같은 경우는 난수화를 함 & cdn작업을 함
  - 보여주려면 서버에서 인증을 해야 함

```
https://cdn.inflearn.com/public/courses/327260//cover/a51a5154-c375-4210-9fb10b716fd4ac73/327260-eng.png

// 뒤의것을 유추할 수 없게끔 커버 뒤에 난수를 붙임
```

### 추가내용

- 웹셀 공격(이미지로 스크립트 심어서 해킹 작업하는 것)

# useEffect

- 감시하는 것
- 여러개의 변수를 감시하는 것
- 처음에 랜더링 될 때 한번만 랜더링 되도록 만들 수 있음
  (usestate로 fetch 사용해서 무한반복했던것 떠올리기)

## 기본구조

```jsx

useEffect(()=>{
	// state가 변경되어 렌더링 될 때 실행하는 부분!
	// 공부하려고 책 펴는 타이밍!
	return()=>{
	// 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
	// 이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠.
	// 여러분들 시험 공부 하나를 마치고 다음 시험 공부 전에 책상 정리하는 느낌이랄까요..
	}
},[/*state값이 들어갑니다.(들어가지 않으면 최초 1번만 실행됩니다.*/)])
```

<br>

# use

- use 키워드 가진것들이 중요.
- 일반함수가 아니게끔 만들어줌

## useState

## useEffect

- 렌더링에 남아있는 것들을 청소함 (다시 랜더링하기 이전에 컴포넌트를 지우고 다시 실행함)
- 마치 시험공부 하나를 마치고 다음 시험 공부전에 책상정리를 하는 느낌
- return 구문을 사용할 일이 많지 않음

### 이 구문은 볼일이 많으므로 암기할 것

```jsx
// 컴포넌트가 업데이트 될 때마다 매번 실행
useEffect(()=>{
    console.log('hello world');
})

// 처음에만 실행
useEffect(()=>{
    console.log('hello world');
}, [])

// 변수들의 변화가 일어날 때마다 실행
useEffect(()=>{
    console.log('hello world');
}, [변수1, 변수2...])
```

- 무한반복이 일어나고 있는 경우 useEffect를 사용해서 해결할 수 있다

<br>

# useRef

- 컴포넌트의 태그에 직접 접근하고 싶을 때 사용<br>
  (querySelector, getElementById와 유사한 역할)<br>

## useState

- useState로 만든 변수는 랜더링 될 때 값이 변경됨
