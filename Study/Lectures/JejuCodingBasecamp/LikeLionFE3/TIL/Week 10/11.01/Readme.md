# 2.1 코딩테스트 실전 문제 풀이

## 문제1

## 문제2

## 문제3 (카카오 기출- 캐시)

```js
function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();
    let index = cache.indexOf(city);
    if (index !== -1) {
      //hit
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    } else {
      //miss
      cache.push(city);
      time += 5;
      if (cacheSize < cache.length) {
        cache.shift();
      }
    }
  }
  return time;
}
```

## 알고리즘 자료

- [자료 링크](https://paullabworkspace.notion.site/db83d9c4bbe6410ea208e6dc2daff07e)

## 개념정리

### 선택 정렬

- 원리: 남은 자료 중 최솟값을 뽑아서 차례대로 배치
- 시간복잡도: O(n^2)

### 삽입 정렬

- 원리: 자료를 하나씩 적절한 위치에 삽입
- 시간복잡도: O(n^2)

### 병합 정렬

- 원리: 그룹 나누기 -> 그룹별로 각각 정렬(재귀 호출) -> 병합
- 시간복잡도: O(nlog n)

### 퀵 정렬

- 원리: 기준 선택 -> 기준에 맞춰서 그룹 나누기 -> 그룹별로 각각 정렬 (재귀 호출)
- 시간복잡도: O(nlog n)

### 버블 정렬

- 원리: 앞뒤로 이웃한 자료를 비교 -> 크기가 뒤집힌 경우 서로의 위치를 바꿈
- 시간복잡도: O(n^2)

### tilde(~), double tilde(~~)

#### tilde(~)

- NOT의 기능을하는 비트연산자

```js
const a = 5; // 0000000000000101
console.log(~a); // 1111111111111010
// expected output: -6

const b = -3; // 1111111111111101
console.log(~b); // 0000000000000010
// expected output: 2
```

#### double tilde(~~)

- Math.floor() 대신 사용 (숫자에 `~`연산을 하면 소수점을 버리고 `~`을 한번 더 써주면 원래 숫자로 돌아옴)
- undefined 또는 null을 0으로 변환할 때 사용될 수 있음

```js
const arr = [1, 1, 1, 2, 2, 3, 3, 3, 3];
const obj1 = {};

arr.forEach((v) => {
  if (obj1[v]) obj1[v] += 1;
  else obj1[v] = 1;
});
//obj1 {1: 3, 2: 2, 3: 4}

console.log(obj1);

console.log(Object.keys(obj1));

const obj2 = {};
arr.forEach((v) => (obj2[v] = ~~obj2[v] + 1));
//obj2 {1: 3, 2: 2, 3: 4}

console.log(obj2);
```
