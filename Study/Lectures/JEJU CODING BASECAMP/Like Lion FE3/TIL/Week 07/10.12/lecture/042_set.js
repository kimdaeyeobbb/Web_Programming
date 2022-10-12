let s = new Set('abcdeeeeeeeee')
console.log(s)  // Set(5) { 'a', 'b', 'c', 'd', 'e' }
console.log(s.size)  // 5


/* 문제 */
board = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']

// 문제1) 몇 명이 게시판에 게시물을 썼나요?
let s2 = new Set(board)
console.log(`게시물 작성인원: ${s2.size}명`)  // 3

// 문제2) 각각 몇개의 게시물을 작성하였나요?
// 데이터의 개수를 가져오기 위해 filter 사용
/* 답안1 */
for (const i of s2) {
    console.log(i, board.filter(e => e === i).length)
}

/* 답안2 */
let m2 = new Map();
for (const i of board) {
    m2.set(i, (m2.get(i) || 0) + 1);  // 순회를 돌면서  i가 map에 없으면 0을 넣어줌 & get을 뽑아오고 나서 1을 더해주면서 갱신 (순회를 돌면서 해당 key값을 업데이트)
}

console.log(m2)  // Map(3) { '이호준' => 3, '김은하' => 2, '이준근' => 1 }