let data = ["a", "b", "c", "d", "e"];

data.fill("hello"); // 전체 데이터를 이것으로 채움
console.log(data);   // [ 'hello', 'hello', 'hello', 'hello', 'hello' ]

data.fill("world", 2); // 채울 요소, 시작 인덱스:2
console.log(data); // [ 'hello', 'hello', 'world', 'world', 'world' ]


data.fill("ㅋㅋㅋ", 1, 3); // 채울요소, 인덱스 start값:1, 인덱스 end값+1:3 (첫번째 인덱스부터 세번째 인덱스-1까지 채워짐)
console.log(data);  // [ 'hello', 'ㅋㅋㅋ', 'ㅋㅋㅋ', 'world', 'world' ]
