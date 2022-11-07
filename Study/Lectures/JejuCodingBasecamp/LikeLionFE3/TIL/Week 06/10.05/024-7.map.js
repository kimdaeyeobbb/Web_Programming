var studentList = [
    {
        id: 1, name: '원범', score: 'great'
    },
    {
        id: 2, name: '김진', score: 'nice'
    },
    {
        id: 3, name: '혜원', score: 'good'
    },
    {
        id: 4, name: '재현', score: 'too cool for school'
    }
]

/* 이름만 빼내기 */

// 방법1
const newArr = studentList.map(function (i) {
    return i.name;
})

console.log(newArr); // [ '원범', '김진', '혜원', '재현' ]


// 방법2
const nameArr = studentList.map(i => i.name);
console.log(nameArr); // [ '원범', '김진', '혜원', '재현' ]
