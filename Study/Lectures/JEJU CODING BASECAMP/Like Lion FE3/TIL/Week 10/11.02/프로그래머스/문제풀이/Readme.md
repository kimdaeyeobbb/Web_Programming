# :one: [오픈채팅방](https://school.programmers.co.kr/learn/courses/30/lessons/42888)

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
    answer.push([상태, 아이디, 닉네임])
  }
  return answer
}

solution(record)  // Step2에서 유저정보에 넣으면서 업데이트하는 방식으로 진행
```

### Step2

```js
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  let answer = [];
  let 유저정보 = {};
  for (const i of record) {
    const [상태, 아이디, 닉네임] = i.split(" ");
    // answer.push([상태, 아이디, 닉네임])
    if (상태 === "Enter") {
      유저정보[아이디] = 닉네임; // 아이디에 해당하는 부분을 닉네임으로 바꾸기
      answer.push([아이디, "님이 들어왔습니다."]);
    } else if (상태 === "Leave") {
      answer.push([아이디, "님이 나갔습니다."]);
    } else if (상태 === "Change") {
      유저정보[아이디] = 닉네임;
    }
  }
  //console.log(유저정보)
  answer = answer.map((item) => 유저정보[item[0]] + item[1]);
  return answer;
}

solution(record);
```

<br><br>

# :two: [가사 검색](https://programmers.co.kr/learn/courses/30/lessons/60060)

- 효율성 테스트에서 통과하려면 클래스로 구현해야함 (정규표현식으로 안풀림)

<br><br>

# :three: [실패율](https://school.programmers.co.kr/learn/courses/30/lessons/42889)

- 아이디어

```
// 실패율
// 1stage === 1/8
// 2stage === 3/7
// 3stage === /
// 4stage === /
// 5stage === /
// 6stage === /
```

- 문제풀이를 위한 기본 메서드

```js
[2, 1, 2, 6, 2, 4, 3, 3]
  .filter((user) => user === 3) // (2) [3,3]
  [(2, 1, 2, 6, 2, 4, 3, 3)].filter((user) => user === 3).length; // 2
```

- 문제풀이 코드

### step 1 (스테이지에 머물고 있는 사람 리스트)

```js
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i < N; i++) {
    let 도달한사람수 = stages.filter((user) => user === i);
    실패율.push(도달한사람수);
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
```

### step 2 (실패율)

```js
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i < N; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    실패율.push(도달한사람수 / 유저수);
    유저수 -= 도달한사람수;
    console.log(유저수, 도달한사람수);
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
```

### step 3 (정렬)

```js
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i <= N; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    let 확률 = 도달한사람수 / 유저수;
    실패율.push({
      스테이지: i,
      확률, // key와 value가 같으면 이렇게 써주면 됨
    });
    유저수 -= 도달한사람수;
    console.log(유저수, 도달한사람수);
  }

  // 정렬 기준 확인 필요
  실패율.sort((a, b) => {
    if (a.확률 < b.확률) return 1;
    if (a.확률 > b.확률) return -1;
    if (a.확률 === b.확률) return 0;
  });
  return 실패율.map((object) => object.스테이지);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
```
