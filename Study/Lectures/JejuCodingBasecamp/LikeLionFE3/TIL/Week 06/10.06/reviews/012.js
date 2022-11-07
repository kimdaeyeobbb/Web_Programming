// let test1 = Array(100).fill(0)
// console.log(test1)

// test1 = test1.map((_, index) => index)
// console.log(test1)


const arr = [{
    'name': 'title1',
    'contents': 'contents1',
    'dataNum': 1,
    'data': [1, 2, 3]
}, {
    'name': 'title2',
    'contents': 'contents2',
    'dataNum': 2,
    'data': [1, 2, 3]
}, {
    'name': 'title3',
    'contents': 'contents3',
    'dataNum': 3,
    'data': [1, 2, 100]
}, {
    'name': 'title4',
    'contents': 'contents4',
    'dataNum': 4,
    'data': [1, 2, 3]
}, {
    'name': 'title5',
    'contents': 'contents5',
    'dataNum': 5,
    'data': [1, 2, 100]
}];


arr1 = arr.map(i => i.name);
console.log(arr1)
//expected output: ['title1', 'title2', 'title3', 'title4', 'title5']

arr2 = arr.map(i => i.name).indexOf('title3');
console.log(arr2)
//expected output: 2


arr3 = arr.map((i => {
    if (i.data.includes(100)) {
        return i.name
    }
}))

arr4 = arr.map((i => {
    if (i.data.includes(100)) {
        return i.name
    }
})).filter(i => i)

console.log(arr3)   // [ undefined, undefined, 'title3', undefined, 'title5' ]
console.log(arr4)   // [ 'title3', 'title5' ]

arr5 = [null, undefined, 0, 1, -1, ' ', '', 'a'].filter(i => i)
console.log(arr5)   // [ 1, -1, ' ', 'a' ]
