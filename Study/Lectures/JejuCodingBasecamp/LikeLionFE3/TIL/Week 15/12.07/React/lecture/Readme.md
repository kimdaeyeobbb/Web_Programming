# 캘빈온도 & 섭씨온도

- [참고자료](https://ywpop.tistory.com/3236)

# 기본환경 설정

```bash
npx create-react-app my-app --template basic-react
cd my-app
npm i axios
```

<br>

# Weather API

- [참고자료](https://openweathermap.org/api)
- 사용한 API

```
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

# useState

## 초기값 설정

- !![]

  - true

- !!null

  - false
  - 데이터를 객체로 받아오는 경우도 있으므로 초기값을 null로 설정

## url에서의 query

```
weather?q={cityname}&appid={API key}
```

## HTTP 상태코드

- [자료](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)

## env

- [자료](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## useEffect

- [참고자료](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [참고자료2](https://react.vlpt.us/basic/16-useEffect.html)

## useState의 기본값이 null과 []일 때에 대해서

- [참고자료](https://www.inflearn.com/questions/279906/usestate%EC%9D%98-%EA%B8%B0%EB%B3%B8%EA%B0%92%EC%9D%B4-null%EA%B3%BC-%EC%9D%BC-%EB%95%8C%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)
