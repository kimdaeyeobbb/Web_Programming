# [오픈채팅방](https://school.programmers.co.kr/learn/courses/30/lessons/42888)

- 입력레코드

```js
[
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
```

- 풀이를 위한 기본 문법

```js
let test = ["A 10 !", "B 20 !", "A 22 @", "B 20 @", "A 21 @"];
tesst.forEach((s) => console.log(s));
// A 10 !
// B 20 !
// A 22 @
// B 20 @
// A 21 @

test.forEach((s) => {
  console.log(s);
  console.log(s.split(" "));
  console.log("---------");
});

test.forEach((s) => {
  console.log(s);
  const [a, b, c] = s.split(" ");
  console.log(a, b, c);
  console.log("---------");
});
```

## step별 풀이

### step1

```js
/* 관리용 object */
{
    '아이디': '닉네임',
    '아이디': '닉네임',
    '아이디': '닉네임',
    // ...
}


/* 예시 */
{
    'uid1234': 'Prodo',
    'uid4567': 'Prodo',
    '아이디': '닉네임',
    // ...
}

['uid1234', '님이 들어왔습니다.']
['uid4567', '님이 들어왔습니다.']
['uid1234', '님이 나갔습니다.']
['uid4567', '님이 들어왔습니다.']


/* 실제 작성 코드 */
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution() {
  let answer = [];
  for (const i of record) {
    const [상태, 아이디, 닉네임] = i.split(" ");
  }
}
```
