# 트리와 그래프

# 트리

- 탐색이나 최적의 해를 구하는 것이면 트리에 관련된 문제일 가능성이 높다.
- 나무를 거꾸로 뒤집어 놓은 모양
- 뿌리(Root Node), 가지(Edge), 잎(Leaf Node)으로 구성
- `'탐색'`을 위한 자료구조
- Node와 Edgee

- 차수: 노드의 자식 노드 개수를 말하는 것

## 이진 트리

- 자식 노드가 최대 2개인 노드들로 구성된 트리
- 이진트리에는 포화 이진트리, 완전 이진 트리가 존재

### 포화 이진 트리

- 모든 노드가 두 개의 자식 노드를 가지며 모든 잎 노드가 동일한 깊이 또는 레벨을 가지는 트리

### 완전 이진 트리

- 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있으며, 마지막 레벨에서는 왼쪽부터 노드가 순서대로 채워져 있는 트리

## 이진 트리의 순회

1. 전위 순회
   - 루트 노드부터 잎 노드까지 아래 방향으로 방문
2. 중위 순회
   - 왼쪽 하위 노드부터 오른쪽 하위 노드방향으로 방문
3. 후외 순회
   - 잎 노드를 모두 탐색하고 루트노드를 방문

<br><br>

# 그래프

- 노드가 연결되어있어서 순환할 수 있음

## DFS (Depth First Search) - 깊이 우선 탐색

- Stack으로 구현

## BFS (Breath First Search) - 너비 우선 탐색

- Queue로 구현

<br><br>

# 트리 구현

- [참고그림](tree%EB%A7%8C%EB%93%A4%EA%B8%B0_%ED%8A%B8%EB%A6%AC%EC%88%9C%ED%9A%8C.png)
- 구현 코드 (Object로 구현)

```js
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
  },
};

tree.root.left.value; //3
```

- 구현 (Array로 구현)

```
[5,[3,[1,[],[]]],[4,[],[]],[8,[6,[],[]], [9,[],[]]]]
```

- object나 array로 트리나 링크드리스트를 구현할 수 있음에도 클래스로 구현하는 이유?
  1. 더 라이트한 모델을 만들기 위해서
  2. 확장성 (메서드 같은 것들을 만들 수 있음) -> 다른 곳에서도 확장하기가 용이해짐
  3. OOP (Object-Oriented-Programming)
  4. 코드의 구조 파악이 용이해짐

## 2. node를 만들어서 삽입/연결하는 방식으로 트리 구현

- [기준 그림](./tree%EB%A7%8C%EB%93%A4%EA%B8%B0_%ED%8A%B8%EB%A6%AC%EC%88%9C%ED%9A%8C2.png)
- 코드

```js
const root = {
  value: 55,
  left: null,
  right: null,
};

node1 = { value: 53, left: null, right: null };
node2 = { value: 99, left: null, right: null };
node3 = { value: 37, left: null, right: null };
node4 = { value: 54, left: null, right: null };

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

root.left.left.value; // 37
```

## 3. 클래스로 트리 구현하기

- [기준 그림](./tree%EB%A7%8C%EB%93%A4%EA%B8%B0_%ED%8A%B8%EB%A6%AC%EC%88%9C%ED%9A%8C2.png)

- 코드

```js
class Node {
  constructor(data) {
    this.data = data;
    // this.child = [];   // 자식이 여러명인 경우 (이진트리가 아닌 트리를 만들 때 사용할 수 있음)
    this.left = null;
    this.right = null;
  }
}

root = new Node(55);
node1 = new Node(53);
node2 = new Node(99);
node3 = new Node(37);
node4 = new Node(54);

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

root.data;
root.right.data;
root.left.data;
root.left.left.data;
```

## 4. 트리 구현 (완벽한 이진트리가 아님)

- 코드

```js
class Node {
  constructor(data) {
    this.data = data;
    // this.child = [];   // 자식이 여러명인 경우 (이진트리가 아닌 트리를 만들 때 사용할 수 있음)
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.length = 0; // this.length = this.데이터수
  }

  /* this.length와 이름이 같으므로 작동하지 않음 */
  //   length() {
  //     return this.length;
  //   }

  insert(data) {
    let 새로운노드 = new Node(data);
    let 순회용현재노드 = this.root;

    while (순회용현재노드) {
      if (data == 순회용현재노드.data) {
        return;
        // 같은값이 들어오면 return  (중복된값 허용하지 않음)
        // 들어온 값이 존재하는 값이면 트리에 값을 추가하지 않음
      } else if (data < 순회용현재노드.data) {
        // 들어온 데이터가 순회용현재노드의 데이터보다 작은 경우 왼쪽에 붙여야 함
        // 해당 데이터의 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 함
        if (!순회용현재노드.left) {
          // 순회용현재노드의 왼쪽값이 비어있다면
          순회용현재노드.left = 새로운노드; // 데이터를 넣어줌 (데이터가 아닌 노드를 가리켜야 함. left와 right에는 값이 아닌 node가 들어감)
          this.length += 1; // this.데이터수 += 1이라는 뜻
          return;
        } else {
          //값이 있는 케이스
          순회용현재노드 = 순회용현재노드.left; // 링크드리스트에서 했던 순회용현재노드 = 순회용현재노드.next임
        }
      } else if (data > 순회용현재노드.data) {
        // 들어온 데이터가 큰 경우 오른쪽에 붙여야 함
        // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 함
        if (!순회용현재노드.right) {
          순회용현재노드.right = 새로운노드;
          this.length += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.right;
      }
    }
  }
}

let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(7);
```

<br><br>

# 찾아서 다시 기재

- cf) toString() {
  let 순회용현재노드 = this.head;

      // 처음 순회용 현재 노드가 ni

  }
